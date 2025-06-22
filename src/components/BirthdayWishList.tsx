import React, { useEffect, useState } from "react";
import { db, auth } from "../firebase";
import {
  collection,
  getDocs,
  orderBy,
  query,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { format } from "date-fns";
import { FaTrashAlt } from "react-icons/fa";
import jsPDF from "jspdf";

interface Message {
  id: string;
  name: string;
  title: string;
  message: string;
  createdAt: any;
}

const BirthdayWishList: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [expandedMessages, setExpandedMessages] = useState<
    Record<string, boolean>
  >({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const q = query(
          collection(db, "birthdayMessages"),
          orderBy("createdAt", "desc")
        );
        const snapshot = await getDocs(q);
        const msgs: Message[] = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Message[];
        setMessages(msgs);
      } catch (error) {
        console.error("Error fetching messages:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "birthdayMessages", id));
      setMessages(messages.filter((msg) => msg.id !== id));
    } catch (error) {
      console.error("Error deleting message:", error);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/admin");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  const toggleReadMore = (id: string) => {
    setExpandedMessages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(12);
    doc.text("Birthday Wishes", 14, 15);

    let y = 25;

    messages.forEach((msg, index) => {
      const formattedDate = msg.createdAt?.seconds
        ? format(new Date(msg.createdAt.seconds * 1000), "PPpp")
        : "";

      const lines = doc.splitTextToSize(
        `${index + 1}. ${msg.title}\n${msg.message}\n— ${
          msg.name
        } · ${formattedDate}`,
        180
      );

      if (y + lines.length * 7 > 280) {
        doc.addPage();
        y = 20;
      }

      doc.text(lines, 14, y);
      y += lines.length * 7 + 10;
    });

    doc.save("birthday_wishes.pdf");
  };

  return (
    <div className="min-h-dvh border-4 border-[#411E31] border-double px-4 py-8 aboutMeGrad w3-animate-opacity2">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl tab:text-3xl xl:text-4xl font-bold text-[#411E31] playfairFont">
            Birthday Wishes
          </h2>
          <div className="flex gap-4">
            <button
              onClick={handleLogout}
              className="px-4 py-2 rounded-md bg-[#863373] hover:bg-[#702a5a] text-white text-sm tab:text-base shadow-md transition ease-in-out duration-300"
            >
              Logout
            </button>
            <button
              onClick={downloadPDF}
              className="px-4 py-2 rounded-md bg-green-600 hover:bg-green-700 text-white text-sm tab:text-base shadow-md transition ease-in-out duration-300"
            >
              Download PDF
            </button>
          </div>
        </div>

        {loading ? (
          <p className="text-center text-gray-600">Loading messages...</p>
        ) : messages.length === 0 ? (
          <p className="text-center text-gray-500">
            No birthday wishes have been sent yet.
          </p>
        ) : (
          <div className="space-y-4">
            {messages.map((msg) => {
              const isExpanded = expandedMessages[msg.id];
              const isLong = msg.message.length > 200;
              const displayMessage =
                isExpanded || !isLong
                  ? msg.message
                  : msg.message.slice(0, 200) + "...";

              return (
                <div
                  key={msg.id}
                  className="bg-white border border-pink-200 rounded-md p-4 shadow-md transition-transform duration-300 hover:scale-[1.01]"
                >
                  <h3 className="text-lg xl:text-xl font-semibold text-[#863373] playfairFont">
                    {msg.title}
                  </h3>

                  <p className="text-gray-700 mt-1 leading-relaxed whitespace-pre-wrap">
                    {displayMessage}
                  </p>

                  {isLong && (
                    <button
                      className="text-sm text-[#863373] hover:underline mt-1"
                      onClick={() => toggleReadMore(msg.id)}
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  )}

                  <p className="text-sm text-gray-500 mt-2 italic">
                    — {msg.name} ·{" "}
                    {msg.createdAt?.seconds
                      ? format(new Date(msg.createdAt.seconds * 1000), "PPpp")
                      : ""}
                  </p>

                  {auth.currentUser && (
                    <button
                      onClick={() => handleDelete(msg.id)}
                      className="mt-2 text-sm text-[#863373] hover:underline"
                    >
                      <FaTrashAlt />
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default BirthdayWishList;
