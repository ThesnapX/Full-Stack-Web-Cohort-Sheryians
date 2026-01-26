import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { Field, Formik, Form } from "formik";
import React from "react";
import { db } from "../config/firebase";
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ isOpen, onClose, contact, refresh }) => {
  const isEdit = Boolean(contact);

  const handleSubmit = async (values) => {
    try {
      if (isEdit) {
        const contactRef = doc(db, "contacts", contact.id);
        await updateDoc(contactRef, values);
      } else {
        const contactRef = collection(db, "contacts");
        await addDoc(contactRef, values);
      }
      refresh();
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Formik
      initialValues={{
        name: contact?.name || "",
        email: contact?.email || "",
      }}
      enableReinitialize
      onSubmit={handleSubmit}
    >
      <Form className="bg-white p-6 w-[90%] max-w-md rounded-xl relative flex flex-col gap-6 shadow-xl">
        <h2 className="text-2xl font-semibold text-center">
          {isEdit ? "Edit Contact" : "Add Contact"}
        </h2>

        <div className="relative">
          <label className="absolute -top-3 left-4 bg-white px-1">Name</label>
          <Field name="name" className="border-2 h-14 w-full p-3 rounded-md" />
        </div>

        <div className="relative">
          <label className="absolute -top-3 left-4 bg-white px-1">Email</label>
          <Field
            name="email"
            type="email"
            className="border-2 h-14 w-full p-3 rounded-md"
          />
        </div>

        <button
          type="submit"
          className="bg-light-yellow p-3 rounded-full font-semibold"
        >
          {isEdit ? "Update Contact" : "Add Contact"}
        </button>

        <IoCloseCircleOutline
          onClick={onClose}
          className="text-3xl absolute right-3 top-3 cursor-pointer"
        />
      </Form>
    </Formik>
  );
};

export default Modal;
