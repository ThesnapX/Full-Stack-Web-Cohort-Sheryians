import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { GoSearch } from "react-icons/go";
import { IoIosAdd } from "react-icons/io";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./config/firebase";
import ContactCards from "./components/ContactCards";
import Modal from "./components/Modal";

const App = () => {
  const [contacts, setContacts] = useState([]);

  const [isOpen, setIsOpen] = useState(false);
  const onOpen = () => {
    setIsOpen(true);
  };
  const onClose = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const getContacts = async () => {
      try {
        const contactRef = collection(db, "contacts");
        const contactSnapShot = await getDocs(contactRef);
        const contactLists = contactSnapShot.docs.map((doc) => {
          return {
            id: doc.id,
            ...doc.data(),
          };
        });
        setContacts(contactLists);
      } catch (error) {
        console.error(error);
      }
    };

    getContacts();
  }, []);

  return (
    <>
      <div className="p-4">
        {/* Navbar */}
        <Navbar />

        {/* Search Function */}
        <div className="mt-2 flex items-center gap-2 justify-center">
          <div className=" border-white border-2 text-white w-[87%] p-4 rounded-md flex items-center gap-3">
            <GoSearch className="text-2xl" />
            <input
              type="text"
              className="text-lg placeholder:text-gray-300 outline-none w-full"
              placeholder="Search Contact"
            />
          </div>
          <IoIosAdd
            onClick={onOpen}
            className="text-grey w-[13%] rounded-md text-6xl bg-white"
          />
        </div>

        {/* All Contacts */}
        <div>
          {contacts.map((contact) => {
            return <ContactCards key={contact.id} contact={contact} />;
          })}
        </div>
      </div>
      <div className="flex justify-center items-center">
        <Modal isOpen={isOpen} onClose={onClose} />
      </div>
    </>
  );
};

export default App;
