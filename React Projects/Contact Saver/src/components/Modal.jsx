import { collection, addDoc } from "firebase/firestore";
import { Field, Formik, Form } from "formik";
import React from "react";
import { db } from "../config/firebase";
import { IoCloseCircleOutline } from "react-icons/io5";

const Modal = ({ isOpen, onClose }) => {
  const addContact = async (contact) => {
    try {
      const contactRef = collection(db, "contacts");
      await addDoc(contactRef, contact);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {isOpen && (
        <Formik
          initialValues={{
            name: "",
            email: "",
          }}
          onSubmit={(values) => {
            console.log(values);
            addContact(values);
          }}
        >
          <Form className="bg-white p-4 w-[80%]  rounded-md relative flex flex-col gap-6">
            <div className="relative mt-6">
              <label
                className="absolute -top-3 left-4 bg-white px-1 text-lg"
                htmlFor="Name"
              >
                Name
              </label>
              <Field
                name="name"
                className="border-2 h-16 w-full p-3 text-lg rounded-md"
                placeholder="Joe Doe"
                id="Name"
              />
            </div>
            <div className="relative">
              <label
                className="absolute -top-3 left-4 bg-white px-1 text-lg"
                htmlFor="Email"
              >
                Email
              </label>
              <Field
                name="email"
                type="email"
                className="border-2 h-16 w-full p-3 text-lg rounded-md"
                placeholder="joedoe@xyz.com"
                id="Email"
              />
            </div>
            <button
              type="submit"
              className="bg-light-yellow p-4 rounded-full -mt-2"
            >
              Add Contact
            </button>
            <IoCloseCircleOutline
              onClick={onClose}
              className="text-3xl absolute right-0 top-0"
            />
          </Form>
        </Formik>
      )}
    </>
  );
};

export default Modal;
