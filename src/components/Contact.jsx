// import { FaUser } from "react-icons/fa";
// import { FaPhone } from "react-icons/fa";
// import { CiMail } from "react-icons/ci";
// import { IoServerSharp } from "react-icons/io5";
// import { useState } from "react";






// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [country, setCountry] = useState("");
//   const [message, setMessage] = useState("");
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check if any field is empty
//     if (!name || !email || !phone || !country || !message) {
//       alert("All fields are required");
//       return;
//     }

//     const data = {
//       name, email, phone, country, message
//     };

//     console.log(data);
//     setShowModal(true); // Optional: Show modal after successful submission
//   };
//   return (
//     <div id='contact' className='bg-heroBg flex items-center justify-center py-28 px-8'>
//       <div className='container mx-auto'>
//         <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:pag-12 gap-8'>
//           {/*left side  */}
//           <div className='space-y-8'>
//             <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make and appointmen</h2>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
//                   <FaUser className="text-primary" />
//                 </div>
//                 <div className="space-y-1">
//                   <h3 className="text-lg font-medium">24 Hours Servicess</h3>
//                   <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>

//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
//                   <FaPhone className="text-primary" />
//                 </div>
//                 <div className="space-y-1">
//                   <h3 className="text-lg font-medium">24 Hours Servicess</h3>
//                   <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>

//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
//                   <CiMail className="text-primary" />
//                 </div>
//                 <div className="space-y-1">
//                   <h3 className="text-lg font-medium">24 Hours Servicess</h3>
//                   <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>

//                 </div>
//               </div>
//               <div className="flex items-center gap-4">
//                 <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
//                   <IoServerSharp className="text-primary" />
//                 </div>
//                 <div className="space-y-1">
//                   <h3 className="text-lg font-medium">24 Hours Servicess</h3>
//                   <p>Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet.</p>

//                 </div>
//               </div>
//             </div>

//           </div>
//           {/* right side  */}
//           <div className="space-y-8 p-8 bg-white shadow-xl rounded-md">
//             <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
//             <form onSubmit={handleSubmit} className="space-y-8">
//               <div className="flex sm:flex-row flex-col gap-4">
//                 <input onChange={e => setName(e.target.value)} type="text" placeholder="Name" className="w-full  p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow." />
//                 <input onChange={e => setEmail(e.target.value)} type="email" placeholder="Email Address" className="w-full  p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow." />
//               </div>
//               <div className="flex sm:flex-row flex-col gap-4">
//                 <input onChange={e => setPhone(e.target.value)} type="tel" placeholder="Contact Number" className="w-full  p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow." />
//                 <input onChange={e => setCountry(e.target.value)} type="text" placeholder="Country" className="w-full  p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow." />
//               </div>
//               <textarea rows={"5"}
//                 onChange={e => setMessage(e.target.value)}
//                 placeholder="write your message..."
//                 className="w-full  p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
//               ></textarea>
//               <button type="submit" className="w-full p-3 bg-primary hover:bg-primary/90 rounded-md text-white">
//                 Send Message
//               </button>
//             </form>

//           </div>
//         </div>
//         {
//           showModal && (
//             <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
//               <div className="bg-white p-8 rounded-md shadow-lg">
//                 <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
//                 <p>Thank you, {name},for submiting your query</p>
//                 <button className="mt-4 px-4 py-2 bg-primary text-white rounded-md">
//                   Close
//                 </button>

//               </div>

//             </div>
//           )
//         }
//       </div>
//     </div>
//   )
// }

// export default Contact

import { FaUser } from "react-icons/fa";
import { FaPhone } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoServerSharp } from "react-icons/io5";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [message, setMessage] = useState("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !email || !phone || !country || !message) {
      alert("All fields are required");
      return;
    }

    const data = {
      name, email, phone, country, message
    };

    console.log(data);
    setShowModal(true); // Show modal after successful submission
  };

  const handleCloseModal = () => {
    // Reset form fields and hide the modal
    setName("");
    setEmail("");
    setPhone("");
    setCountry("");
    setMessage("");
    setShowModal(false);
  };

  return (
    <div id='contact' className='bg-heroBg flex items-center justify-center py-28 px-8'>
      <div className='container mx-auto'>
        <div className='md:w-4/5 mx-auto grid grid-cols-1 md:grid-cols-2 items-center md:pag-12 gap-8'>
          {/* left side */}
          <div className='space-y-8'>
            <h2 className='text-4xl font-bold font-secondary mb-4 text-white'>Make an appointment</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaUser className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <FaPhone className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <CiMail className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center justify-center rounded-full bg-[#ffffff1a] p-3">
                  <IoServerSharp className="text-primary" />
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg font-medium">24 Hours Services</h3>
                  <p>Lorem ipsum dolor sit amet.</p>
                </div>
              </div>
            </div>
          </div>

          {/* right side */}
          <div className="space-y-8 p-8 bg-white shadow-xl rounded-md">
            <h3 className="text-2xl font-bold mb-4">Book Appointment</h3>
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  value={name}
                  onChange={e => setName(e.target.value)}
                  type="text"
                  placeholder="Name"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <div className="flex sm:flex-row flex-col gap-4">
                <input
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                  type="tel"
                  placeholder="Contact Number"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
                <input
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  type="text"
                  placeholder="Country"
                  className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
                />
              </div>
              <textarea
                value={message}
                rows={"5"}
                onChange={e => setMessage(e.target.value)}
                placeholder="Write your message..."
                className="w-full p-4 rounded-md focus:outline-none focus:ring-2 focus:ring-primary shadow"
              ></textarea>
              <button type="submit" className="w-full p-3 bg-primary hover:bg-primary/90 rounded-md text-white">
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-90">
            <div className="bg-white p-8 rounded-md shadow-lg">
              <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
              <p>Thank you, {name}, for submitting your query.</p>
              <button
                className="mt-4 px-4 py-2 bg-primary text-white rounded-md"
                onClick={handleCloseModal}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Contact;
