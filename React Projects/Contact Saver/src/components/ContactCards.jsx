import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { CiUser } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { db } from "../config/firebase";

const ContactCards = ({ contact }) => {
  const deleteCard = async (id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await deleteDoc(contactRef, id);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div
        className="bg-light-yellow items-center flex justify-between rounded-md mt-4 p-3"
        key={contact.id}
      >
        <div className="flex gap-3 items-center">
          <CiUser className="text-6xl text-dark-yellow border-2 p-2 rounded-full" />
          <div className="flex flex-col">
            <h3 className="text-xl text-wrap font-semibold">{contact.name}</h3>
            <p className="text-wrap">{contact.email}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <FiEdit className="text-4xl hover:text-purple" />
          <MdDelete
            onClick={() => deleteCard(contact.id)}
            className="text-[2.45rem] hover:text-red duration-200"
          />
        </div>
      </div>
    </>
  );
};

export default ContactCards;
