import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { CiUser } from "react-icons/ci";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { db } from "../config/firebase";

const ContactCards = ({ contact, onEdit, refresh }) => {
  const deleteCard = async (id) => {
    try {
      const contactRef = doc(db, "contacts", id);
      await deleteDoc(contactRef);
      refresh();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="bg-light-yellow flex justify-between items-center rounded-md mt-4 p-3">
      <div className="flex gap-3 items-center">
        <CiUser className="text-6xl text-dark-yellow border-2 p-2 rounded-full" />
        <div>
          <h3 className="text-xl font-semibold">{contact.name}</h3>
          <p>{contact.email}</p>
        </div>
      </div>

      <div className="flex gap-2">
        <FiEdit
          onClick={() => onEdit(contact)}
          className="text-4xl cursor-pointer hover:text-purple"
        />
        <MdDelete
          onClick={() => deleteCard(contact.id)}
          className="text-[2.45rem] cursor-pointer hover:text-red"
        />
      </div>
    </div>
  );
};

export default ContactCards;
