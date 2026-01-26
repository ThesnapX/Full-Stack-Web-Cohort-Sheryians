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
  const [selectedContact, setSelectedContact] = useState(null);

  const onOpen = () => setIsOpen(true);
  const onClose = () => {
    setIsOpen(false);
    setSelectedContact(null);
  };

  const fetchContacts = async () => {
    const contactRef = collection(db, "contacts");
    const snapshot = await getDocs(contactRef);
    const list = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    setContacts(list);
  };

  const handleEdit = (contact) => {
    setSelectedContact(contact);
    onOpen();
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <>
      <div className="p-4">
        <Navbar />

        <div className="mt-2 flex items-center gap-2 justify-center">
          <div className="border-white border-2 text-white w-[87%] p-4 rounded-md flex items-center gap-3">
            <GoSearch className="text-2xl" />
            <input
              type="text"
              className="text-lg placeholder:text-gray-300 outline-none w-full"
              placeholder="Search Contact"
            />
          </div>
          <IoIosAdd
            onClick={onOpen}
            className="w-[13%] rounded-md text-6xl bg-white"
          />
        </div>

        <div>
          {contacts.map((contact) => (
            <ContactCards
              key={contact.id}
              contact={contact}
              onEdit={handleEdit}
              refresh={fetchContacts}
            />
          ))}
        </div>
      </div>

      {/* MODAL OVERLAY */}
      {isOpen && (
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            contact={selectedContact}
            refresh={fetchContacts}
          />
        </div>
      )}
    </>
  );
};

export default App;
