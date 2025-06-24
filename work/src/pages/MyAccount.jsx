// import React, { useState, useEffect } from "react";
// import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
// import "bootstrap/dist/css/bootstrap.min.css";
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import { styled } from '@mui/material/styles';
// import Box from '@mui/material/Box';
// import Rating from '@mui/material/Rating';
// import "../styles/account.css";
// import { Link } from "react-router-dom";

// const MyAccount = () => {
//   const [activeSection, setActiveSection] = useState("personalInfo");
//   const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
//   // Add window resize listener
//   useEffect(() => {
//     const handleResize = () => {
//       setWindowWidth(window.innerWidth);
//     };
    
//     window.addEventListener('resize', handleResize);
//     return () => {
//       window.removeEventListener('resize', handleResize);
//     };
//   }, []);
  
//   const StyledRating = styled(Rating)({
//     '& .MuiRating-iconHover': {
//       color: '#ff3d47',
//     },
//   });
  
//   // Define state for payment details
//   const [paymentDetails, setPaymentDetails] = useState({
//     upiId1: "",
//     upiId2: "",
//     cardDetails: [
//       { cardNumber: "", expiryDate: "", cvv: "" },
//       { cardNumber: "", expiryDate: "", cvv: "" }
//     ],
//   });

//   // Define state for form errors
//   const [formErrors, setFormErrors] = useState({
//     email: "",
//     phoneNumber: ""
//   });

//   // Handle input changes
//   const handleInputChange = (event) => {
//     const { name, value } = event.target;

//     if (name.startsWith("cardDetails")) {
//       const [_, index, field] = name.split(".");
//       setPaymentDetails((prev) => {
//         const updatedCards = [...prev.cardDetails];
//         updatedCards[index][field] = value;
//         return { ...prev, cardDetails: updatedCards };
//       });
//     } else {
//       setPaymentDetails((prev) => ({
//         ...prev,
//         [name]: value,
//       }));
//     }
//   };

//   // Validate email
//   const validateEmail = (email) => {
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailRegex.test(email)) {
//       setFormErrors((prev) => ({
//         ...prev,
//         email: "Invalid email format"
//       }));
//     } else {
//       setFormErrors((prev) => ({
//         ...prev,
//         email: ""
//       }));
//     }
//   };

//   // Validate phone number
//   const validatePhoneNumber = (phoneNumber) => {
//     const phoneRegex = /^\d{10}$/; // Matches exactly 10 digits
//     if (!phoneRegex.test(phoneNumber)) {
//       setFormErrors((prev) => ({
//         ...prev,
//         phoneNumber: "Invalid phone number format. Please enter exactly 10 digits."
//       }));
//     } else {
//       setFormErrors((prev) => ({
//         ...prev,
//         phoneNumber: ""
//       }));
//     }
//   };

//   // Responsive container style with dynamic width
//   const getContainerStyle = () => {
//     let containerWidth = "95%"; // Default for smallest screens
//     let containerHeight = "650px";
    
//     if (windowWidth >= 576) {
//       containerWidth = "90%";
//     }
//     if (windowWidth >= 768) {
//       containerWidth = "767px";
//     }
    
//     // Adjust height for very small screens
//     if (windowWidth <= 375) {
//       containerHeight = "600px";
//     }
    
//     return {
//       width: containerWidth,
//       height: containerHeight,
//       borderRadius: "30px",
//       backgroundColor: "#FFD6B0",
//       overflowY: "auto",
//       margin: "0 auto",
//       padding: windowWidth < 576 ? "20px" : "30px"
//     };
//   };

//   // Get navigation button style based on active state
//   const getNavButtonStyle = (section) => {
//     const isActive = activeSection === section;
//     return {
//       backgroundColor: isActive ? "#FF9900" : "#FFAD62",
//       borderColor: isActive ? "#FF9900" : "#FFAD62",
//       color: "black",
//       fontWeight: isActive ? "bold" : "normal",
//       boxShadow: isActive ? "0 4px 8px rgba(0,0,0,0.1)" : "none",
//       transition: "all 0.3s ease"
//     };
//   };

//   // Get mobile navigation button style
//   const getMobileNavButtonStyle = (section) => {
//     const isActive = activeSection === section;
//     return {
//       backgroundColor: isActive ? "#FF9900" : "#FFAD62",
//       borderColor: isActive ? "#FF9900" : "#FFAD62",
//       color: "black",
//       fontWeight: isActive ? "bold" : "normal",
//       borderRadius: "15px",
//       padding: "10px 15px",
//       marginBottom: "8px",
//       width: "100%",
//       textAlign: "center"
//     };
//   };

//   return (
//     <div className="container-fluid p-0 m-0 d-flex flex-column min-vh-100" style={{ fontFamily: "Outfit" }}>
//       {/* Header */}
//       <header
//         className="d-flex justify-content-between align-items-center p-3 w-100"
//         style={{ 
//           backgroundColor: "#ffbc57",
//           borderRadius: "0"
//         }}
//       >
//         <Link to="/home">         
//           <img
//             src="/duzo.png"
//             alt="DUZO Logo"
//             className="img-fluid"
//             style={{ height: windowWidth < 375 ? "30px" : "40px" }}
//           />
//         </Link>

//         {/* MY ACCOUNT for medium and up */}
//         <h4 className="text-dark fw-bold d-none d-md-block">MY ACCOUNT</h4>
//       </header>

//       <div className="d-flex flex-column flex-lg-row mt-4 justify-content-center align-items-start gap-3 flex-grow-1 px-2 px-sm-3">
//         {/* Mobile Navigation - Visible only on small and medium screens */}
//         <div className="d-flex d-lg-none flex-column w-100 mb-3 px-2">
//           <button
//             className="btn fw-bold"
//             style={getMobileNavButtonStyle("personalInfo")}
//             onClick={() => setActiveSection("personalInfo")}
//           >
//             Personal Info
//           </button>
//           <button
//             className="btn fw-bold"
//             style={getMobileNavButtonStyle("orders")}
//             onClick={() => setActiveSection("orders")}
//           >
//             Your Orders
//           </button>
//           <button
//             className="btn fw-bold"
//             style={getMobileNavButtonStyle("paymentMethods")}
//             onClick={() => setActiveSection("paymentMethods")}
//           >
//             Payment Methods
//           </button>
//           <button
//             className="btn fw-bold"
//             style={getMobileNavButtonStyle("customerCare")}
//             onClick={() => setActiveSection("customerCare")}
//           >
//             Customer Care
//           </button>
//         </div>

//         {/* Sidebar - Hidden on small and medium screens */}
//         <div
//           className="d-none d-lg-flex flex-column align-items-center justify-content-between p-3 rounded shadow-sm mt-5 me-lg-5 ms-md-0 me-md-0 mx-auto col-lg-3 col-md-6 h-100 align-self-stretch"
//           style={{ backgroundColor: "white", minHeight: "70vh" }}
//         >
//           {/* Button Layout */}
//           <div className="w-100 d-flex flex-column gap-5 justify-content-between h-100 py-4">
//             <div className="col-lg-12 col-md-12 col-12">
//               <button
//                 className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
//                 style={getNavButtonStyle("personalInfo")}
//                 onClick={() => setActiveSection("personalInfo")}
//               >
//                 Personal Info
//               </button>
//             </div>

//             <div className="col-lg-12 col-md-12 col-12">
//               <button
//                 className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
//                 style={getNavButtonStyle("orders")}
//                 onClick={() => setActiveSection("orders")}
//               >
//                 Your Orders
//               </button>
//             </div>

//             <div className="col-lg-12 col-md-12 col-12">
//               <button
//                 className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
//                 style={getNavButtonStyle("paymentMethods")}
//                 onClick={() => setActiveSection("paymentMethods")}
//               >
//                 Payment Methods
//               </button>
//             </div>

//             <div className="col-lg-12 col-md-12 col-12">
//               <button
//                 className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
//                 style={getNavButtonStyle("customerCare")}
//                 onClick={() => setActiveSection("customerCare")}
//               >
//                 Customer Care
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Content Section - Using dynamic dimensions */}
//         <div className="flex-grow-1 d-flex justify-content-center w-100">
//           {activeSection === "personalInfo" && (
//             <div style={getContainerStyle()} className="shadow-sm mt-md-5 mt-1 mb-5">
//               <h3 className="fw-bold text-center mb-4 mb-md-5">Personal Information</h3>

//               <form onSubmit={(e) => {
//                 e.preventDefault();
//                 if (!formErrors.email && !formErrors.phoneNumber) {
//                   alert("Form submitted successfully!");
//                 }
//               }}>
//                 <div className="row mb-3 mb-md-4">
//                   <div className="col-12 col-md-6 mb-3 mb-md-4">
//                     <label className="form-label fw-bold">First Name</label>
//                     <div className="col-12 col-sm-10">
//                       <input 
//                         type="text" 
//                         className="form-control rounded-pill" 
//                         required
//                       />
//                     </div>
//                   </div>
//                   <div className="col-12 col-md-6 mb-3 mb-md-4">
//                     <div className="d-flex align-items-center mb-2">
//                       <label className="form-label fw-bold me-3">Last Name</label>
//                       <a href="#" className="text-primary">Edit</a>
//                     </div>
//                     <div className="col-12 col-sm-10">
//                       <input 
//                         type="text" 
//                         className="form-control rounded-pill" 
//                         required
//                       />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-3 mb-md-4">
//                   <label className="form-label fw-bold mb-2">Gender</label>
//                   <div className="d-flex gap-4 ms-3">
//                     <div className="form-check">
//                       <input
//                         type="radio"
//                         className="form-check-input"
//                         name="gender"
//                         value="male"
//                         id="genderMale"
//                         required
//                       />
//                       <label className="form-check-label ms-1" htmlFor="genderMale">Male</label>
//                     </div>
//                     <div className="form-check">
//                       <input
//                         type="radio"
//                         className="form-check-input"
//                         name="gender"
//                         value="female"
//                         id="genderFemale"
//                         required
//                       />
//                       <label className="form-check-label ms-1" htmlFor="genderFemale">Female</label>
//                     </div>
//                   </div>
//                 </div>

//                 <div className="row">
//                   <div className="col-12 col-md-6 mb-3 mb-md-4">
//                     <div className="d-flex align-items-center mb-2">
//                       <label className="form-label fw-bold me-3">E-mail Address</label>
//                       <a href="#" className="text-primary">Edit</a>
//                     </div>
//                     <div className="col-12 col-sm-10">
//                       <input
//                         type="email"
//                         className="form-control rounded-pill"
//                         onChange={(e) => validateEmail(e.target.value)}
//                         required
//                       />
//                     </div>
//                     {formErrors.email && <p className="text-danger mt-1 small">{formErrors.email}</p>}
//                   </div>
//                   <div className="col-12 col-md-6 mb-3 mb-md-4">
//                     <div className="d-flex align-items-center mb-2">
//                       <label className="form-label fw-bold me-3">Phone Number</label>
//                       <a href="#" className="text-primary">Edit</a>
//                     </div>
//                     <div className="col-12 col-sm-10">
//                       <input
//                         type="tel"
//                         className="form-control rounded-pill"
//                         onChange={(e) => validatePhoneNumber(e.target.value)}
//                         required
//                       />
//                     </div>
//                     {formErrors.phoneNumber && <p className="text-danger mt-1 small">{formErrors.phoneNumber}</p>}
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="d-flex justify-content-center mt-4 mt-md-5">
//                   <button 
//                     type="submit"
//                     className="btn btn-primary rounded-pill px-4 px-md-5 py-2 fw-bold"
//                     style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
//                     disabled={formErrors.email || formErrors.phoneNumber}
//                   >
//                     Save Changes
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}  
          
//           {activeSection === "orders" && (
//             <div style={getContainerStyle()} className="shadow-sm mt-md-5 mt-1 mb-5">
//               <h3 className="fw-bold text-center mb-4 mb-md-5">Your Orders</h3>
//               <div className="container-fluid d-flex align-items-stretch justify-content-center mb-4">
//                 <div className="container-fluid custom-responsive-bg d-flex flex-column flex-md-row align-items-center justify-content-evenly gap-3 gap-md-4 border p-3 rounded w-100">
//                                     <img
//                     src="/placeholder.png"
//                     alt="Order Thumbnail"
//                     className="img-thumbnail mb-3 mb-md-0"
//                     style={{ width: "80px", height: "80px", objectFit: "cover", backgroundColor: "gray" }}
//                   />

//                   <div className="d-flex flex-column text-center text-md-start w-100">
//                     <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
//                       <p className="mb-1 me-md-3 fw-bold">Order Name</p>
//                       <p className="mb-1">Date</p>
//                     </div>

//                     <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
//                       <p className="mb-2 mb-md-1">Amount paid</p>
//                       <button
//                         className="btn btn-primary btn-sm px-3"
//                         onClick={() => setActiveSection("ratings")}
//                       >
//                         Rate and Review
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           )}

//           {activeSection === "ratings" && (
//             <div style={getContainerStyle()} className="shadow-sm mt-md-5 mt-1 mb-5">
//               <h3 className="fw-bold text-center mb-4 mb-md-5">My Orders</h3>
//               <div className="container-fluid d-flex align-items-stretch justify-content-center mb-4">
//                 <div className="container-fluid custom-responsive-bg d-flex flex-column flex-md-row align-items-center justify-content-evenly gap-3 gap-md-4 border p-3 rounded w-100">
//                   <img
//                     src="/placeholder.png"
//                     alt="Order Thumbnail"
//                     className="img-thumbnail mb-3 mb-md-0"
//                     style={{ width: "80px", height: "80px", objectFit: "cover", backgroundColor: "gray" }}
//                   />

//                   <div className="d-flex flex-column text-center text-md-start w-100">
//                     <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
//                       <p className="mb-1 me-md-3 fw-bold">Order Name</p>
//                       <p className="mb-1">Date</p>
//                     </div>

//                     <div className="d-flex flex-column flex-md-row justify-content-between">
//                       <p className="mb-1 me-md-3">Amount paid</p>
//                       <p className="mb-1">Order ID</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
              
//               <div className="mb-4 mt-4 mt-md-5 px-2 px-md-4">
//                 <div className="d-flex justify-content-center align-items-center mb-3">
//                   <h4 className="fw-bold">Ratings and review</h4>
//                 </div>

//                 <textarea 
//                   className="form-control rounded-4 w-100" 
//                   rows="4" 
//                   placeholder="Describe your Experience"
//                 ></textarea>
//               </div>
              
//               <Box sx={{ '& > legend': { mt: 2 } }}>
//                 <div className="text-center"> 
//                   <Rating defaultValue={0} className="mb-4" max={5} size="large" />
//                 </div>
//               </Box>
              
//               <div className="d-flex justify-content-center mt-4">
//                 <button
//                   className="btn btn-primary rounded-pill px-4 px-md-5 py-2 fw-bold"
//                   style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
//                 >
//                   Submit
//                 </button>
//               </div>
//             </div>
//           )}

//           {activeSection === "paymentMethods" && (
//             <div style={getContainerStyle()} className="shadow-sm mt-md-5 mt-1 mb-5">
//               <h3 className="fw-bold mb-4 mb-md-5 text-center">Saved Payment Details</h3>

//               <div className="mb-4 mb-md-5">
//                 <h5 className="fw-bold mb-3">Saved UPI ID's</h5>
//                 <div className="mb-4">
//                   <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
//                     <label className="col-12 col-sm-4 col-md-3 col-form-label fw-bold mb-1 mb-sm-0">UPI ID 1:</label>
//                     <div className="col-12 col-sm-8 col-md-6">
//                       <input 
//                         type="text" 
//                         className="form-control form-control-sm rounded-pill w-100" 
//                         name="upiId1" 
//                         value={paymentDetails.upiId1} 
//                         onChange={handleInputChange} 
//                       />
//                     </div>
//                   </div>
//                   <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
//                     <label className="col-12 col-sm-4 col-md-3 col-form-label fw-bold mb-1 mb-sm-0">UPI ID 2:</label>
//                     <div className="col-12 col-sm-8 col-md-6">
//                       <input 
//                         type="text" 
//                         className="form-control form-control-sm rounded-pill w-100" 
//                         name="upiId2" 
//                         value={paymentDetails.upiId2} 
//                         onChange={handleInputChange} 
//                       />
//                     </div>
//                   </div>
//                 </div>
//               </div>

//               <h5 className="fw-bold mb-3">Saved Debit Card / Credit Card</h5>
//               {paymentDetails.cardDetails.map((card, index) => (
//                 <div key={index} className="mb-4">
//                   <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
//                     <label className="col-12 col-sm-4 col-md-3 col-form-label fw-bold mb-1 mb-sm-0" htmlFor={`cardDetails.${index}.cardNumber`}>
//                       Card Number:
//                     </label>
//                     <div className="col-12 col-sm-8 col-md-6">
//                       <input 
//                         type="text" 
//                         className="form-control form-control-sm rounded-pill w-100" 
//                         id={`cardDetails.${index}.cardNumber`} 
//                         name={`cardDetails.${index}.cardNumber`} 
//                         onChange={handleInputChange} 
//                       />
//                     </div>
//                   </div>
//                   <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
//                     <label className="col-12 col-sm-4 col-md-3 col-form-label fw-bold mb-1 mb-sm-0" htmlFor={`cardDetails.${index}.expiryDate`}>
//                       Expiry Date:
//                     </label>
//                     <div className="col-12 col-sm-8 col-md-6">
//                       <input 
//                         type="text" 
//                         className="form-control form-control-sm rounded-pill w-100" 
//                         id={`cardDetails.${index}.expiryDate`} 
//                         name={`cardDetails.${index}.expiryDate`} 
//                         onChange={handleInputChange} 
//                       />
//                     </div>
//                   </div>
//                   <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
//                     <label className="col-12 col-sm-4 col-md-3 col-form-label fw-bold mb-1 mb-sm-0" htmlFor={`cardDetails.${index}.cvv`}>
//                       CVV:
//                     </label>
//                     <div className="col-12 col-sm-8 col-md-6">
//                       <input
//                         type="text"
//                         className="form-control form-control-sm rounded-pill w-100"
//                         id={`cardDetails.${index}.cvv`}
//                         name={`cardDetails.${index}.cvv`}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
              
//               <div className="d-flex justify-content-center mt-4 mt-md-5">
//                 <button 
//                   className="btn btn-primary rounded-pill px-4 px-md-5 py-2 fw-bold"
//                   style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
//                 >
//                   Save Changes
//                 </button>
//               </div>
//             </div>
//           )}
          
//           {activeSection === "customerCare" && (
//             <div style={getContainerStyle()} className="shadow-sm mt-md-5 mt-1 mb-5">
//               <h3 className="fw-bold text-center mb-4 mb-md-5">Customer Care</h3>
              
//               <form onSubmit={(e) => {
//                 e.preventDefault();
//                 if (!formErrors.email && !formErrors.phoneNumber) {
//                   alert("Form submitted successfully!");
//                 }
//               }}>
//                 <div className="mb-4">
//                   <label className="form-label fw-bold">How can we help you?</label>
//                   <div className="col-12">
//                     <textarea 
//                       className="form-control rounded-4" 
//                       rows="4" 
//                       placeholder="Describe your issue"
//                     ></textarea>
//                   </div>
//                 </div>

//                 <div className="row mb-3 mb-md-4">
//                   <div className="col-12 col-md-6 mb-3">
//                     <label className="form-label fw-bold">Name</label>
//                     <div className="col-12 col-sm-10">
//                       <input 
//                         type="text" 
//                         className="form-control rounded-pill" 
//                         required
//                       />
//                     </div>
//                   </div>
                  
//                   <div className="col-12 col-md-6 mb-3">
//                     <label className="form-label fw-bold">Contact Number</label>
//                     <div className="col-12 col-sm-10">
//                       <input
//                         type="text"
//                         className="form-control rounded-pill"
//                         onChange={(e) => validatePhoneNumber(e.target.value)}
//                         required
//                       />
//                       {formErrors.phoneNumber && <p className="text-danger mt-1 small">{formErrors.phoneNumber}</p>}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="mb-4">
//                   <div className="col-12 col-md-6">
//                     <label className="form-label fw-bold">Email</label>
//                     <div className="col-12 col-sm-10">
//                       <input
//                         type="email"
//                         className="form-control rounded-pill"
//                         onChange={(e) => validateEmail(e.target.value)}
//                         required
//                       />
//                       {formErrors.email && <p className="text-danger mt-1 small">{formErrors.email}</p>}
//                     </div>
//                   </div>
//                 </div>

//                 {/* Submit Button */}
//                 <div className="d-flex justify-content-center mt-4 mt-md-5">
//                   <button 
//                     type="submit"
//                     className="btn btn-primary rounded-pill px-4 px-md-5 py-2 fw-bold"
//                     style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
//                     disabled={formErrors.email || formErrors.phoneNumber}
//                   >
//                     Submit
//                   </button>
//                 </div>
//               </form>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Footer - Now using mt-auto to push it to the bottom */}
//       <footer
//         className="p-3 mt-auto rounded d-flex flex-column flex-sm-row justify-content-between align-items-center w-100 mb-0"
//         style={{ backgroundColor: "#ffbc57" }}
//       >
//         <p className="mb-3 mb-sm-0 text-center text-sm-start">Copyrights &copy; 2024 - DUZO</p>

//         <div className="d-flex gap-3 justify-content-center">
//           <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
//             <FaInstagram size={windowWidth < 375 ? 20 : 24} color="black" />
//           </a>
//           <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
//             <FaFacebook size={windowWidth < 375 ? 20 : 24} color="black" />
//           </a>
//           <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
//             <FaXTwitter size={windowWidth < 375 ? 20 : 24} color="black" />
//           </a>
//         </div>
//       </footer>
//     </div>
//   );
// };

// export default MyAccount;

import React, { useState, useEffect } from "react";
import { FaInstagram, FaFacebook, FaXTwitter } from "react-icons/fa6";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import "../styles/account.css";
import { Link } from "react-router-dom";

const MyAccount = () => {
  const [activeSection, setActiveSection] = useState("personalInfo");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  
  // Add window resize listener
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  
  const StyledRating = styled(Rating)({
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },
  });
  
  // Define state for personal info
  const [personalInfo, setPersonalInfo] = useState({
    firstName: "",
    lastName: "",
    gender: "",
    email: "",
    phoneNumber: ""
  });

  // Define state for payment details
  const [paymentDetails, setPaymentDetails] = useState({
    upiId1: "",
    upiId2: "",
    cardDetails: [
      { cardNumber: "", expiryDate: "", cvv: "" },
      { cardNumber: "", expiryDate: "", cvv: "" }
    ],
  });

  // Define state for customer care form
  const [customerCareForm, setCustomerCareForm] = useState({
    issue: "",
    name: "",
    contactNumber: "",
    email: ""
  });

  // Define state for rating form
  const [ratingForm, setRatingForm] = useState({
    review: "",
    rating: 0
  });

  // Define state for form errors
  const [formErrors, setFormErrors] = useState({
    personalInfo: {},
    paymentDetails: {},
    customerCare: {},
    rating: {}
  });

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const validateName = (name) => {
    const nameRegex = /^[a-zA-Z\s]{2,30}$/;
    return nameRegex.test(name.trim());
  };

  const validateUPI = (upiId) => {
    if (!upiId) return true; // UPI is optional
    const upiRegex = /^[a-zA-Z0-9.\-_]{2,256}@[a-zA-Z]{2,64}$/;
    return upiRegex.test(upiId);
  };

  const validateCardNumber = (cardNumber) => {
    if (!cardNumber) return true; // Card is optional
    const cleanCardNumber = cardNumber.replace(/\s/g, '');
    const cardRegex = /^\d{13,19}$/;
    
    if (!cardRegex.test(cleanCardNumber)) {
      return false;
    }

    // Luhn algorithm for card number validation
    let sum = 0;
    let isEven = false;
    
    for (let i = cleanCardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cleanCardNumber.charAt(i), 10);
      
      if (isEven) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      
      sum += digit;
      isEven = !isEven;
    }
    
    return sum % 10 === 0;
  };

  const validateExpiryDate = (expiryDate) => {
    if (!expiryDate) return true; // Optional
    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;
    if (!expiryRegex.test(expiryDate)) return false;
    
    const [month, year] = expiryDate.split('/');
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear() % 100;
    const currentMonth = currentDate.getMonth() + 1;
    
    const expYear = parseInt(year);
    const expMonth = parseInt(month);
    
    if (expYear < currentYear || (expYear === currentYear && expMonth < currentMonth)) {
      return false;
    }
    return true;
  };

  const validateCVV = (cvv) => {
    if (!cvv) return true; // Optional
    const cvvRegex = /^\d{3,4}$/;
    return cvvRegex.test(cvv);
  };

  // Handle input changes for personal info
  const handlePersonalInfoChange = (event) => {
    const { name, value } = event.target;
    setPersonalInfo(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when user types
    if (formErrors.personalInfo[name]) {
      setFormErrors(prev => ({
        ...prev,
        personalInfo: {
          ...prev.personalInfo,
          [name]: ""
        }
      }));
    }
  };

  // Handle input changes for payment details
  const handlePaymentChange = (event) => {
    const { name, value } = event.target;

    if (name.startsWith("cardDetails")) {
      const [_, index, field] = name.split(".");
      setPaymentDetails((prev) => {
        const updatedCards = [...prev.cardDetails];
        updatedCards[index][field] = value;
        return { ...prev, cardDetails: updatedCards };
      });
    } else {
      setPaymentDetails((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    // Clear specific error when user types
    if (formErrors.paymentDetails[name]) {
      setFormErrors(prev => ({
        ...prev,
        paymentDetails: {
          ...prev.paymentDetails,
          [name]: ""
        }
      }));
    }

    // Clear general error when user starts typing
    if (formErrors.paymentDetails.general) {
      setFormErrors(prev => ({
        ...prev,
        paymentDetails: {
          ...prev.paymentDetails,
          general: ""
        }
      }));
    }
  };

  // Handle input changes for customer care
  const handleCustomerCareChange = (event) => {
    const { name, value } = event.target;
    setCustomerCareForm(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear specific error when user types
    if (formErrors.customerCare[name]) {
      setFormErrors(prev => ({
        ...prev,
        customerCare: {
          ...prev.customerCare,
          [name]: ""
        }
      }));
    }
  };

  // Handle rating change
  const handleRatingChange = (event, newValue) => {
    setRatingForm(prev => ({
      ...prev,
      rating: newValue
    }));

    // Clear rating error
    if (formErrors.rating.rating) {
      setFormErrors(prev => ({
        ...prev,
        rating: {
          ...prev.rating,
          rating: ""
        }
      }));
    }
  };

  // Handle review change
  const handleReviewChange = (event) => {
    const { value } = event.target;
    setRatingForm(prev => ({
      ...prev,
      review: value
    }));

    // Clear review error
    if (formErrors.rating.review) {
      setFormErrors(prev => ({
        ...prev,
        rating: {
          ...prev.rating,
          review: ""
        }
      }));
    }
  };

  // Validate personal info form
  const validatePersonalInfo = () => {
    const errors = {};

    if (!personalInfo.firstName.trim()) {
      errors.firstName = "First name is required";
    } else if (!validateName(personalInfo.firstName)) {
      errors.firstName = "First name should contain only letters and be 2-30 characters long";
    }

    if (!personalInfo.lastName.trim()) {
      errors.lastName = "Last name is required";
    } else if (!validateName(personalInfo.lastName)) {
      errors.lastName = "Last name should contain only letters and be 2-30 characters long";
    }

    if (!personalInfo.gender) {
      errors.gender = "Please select a gender";
    }

    if (!personalInfo.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(personalInfo.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!personalInfo.phoneNumber.trim()) {
      errors.phoneNumber = "Phone number is required";
    } else if (!validatePhoneNumber(personalInfo.phoneNumber)) {
      errors.phoneNumber = "Please enter a valid 10-digit phone number";
    }

    return errors;
  };

  // Validate payment details form with comprehensive validation
  const validatePaymentDetails = () => {
    const errors = {};

    // Check if at least one payment method is provided
    const hasUPI1 = paymentDetails.upiId1.trim() !== "";
    const hasUPI2 = paymentDetails.upiId2.trim() !== "";
    
    const hasCard1 = paymentDetails.cardDetails[0].cardNumber.trim() !== "" || 
                     paymentDetails.cardDetails[0].expiryDate.trim() !== "" || 
                     paymentDetails.cardDetails[0].cvv.trim() !== "";
    
    const hasCard2 = paymentDetails.cardDetails[1].cardNumber.trim() !== "" || 
                     paymentDetails.cardDetails[1].expiryDate.trim() !== "" || 
                     paymentDetails.cardDetails[1].cvv.trim() !== "";

    const hasAnyPaymentMethod = hasUPI1 || hasUPI2 || hasCard1 || hasCard2;

    if (!hasAnyPaymentMethod) {
      errors.general = "Please provide at least one payment method (UPI ID or Card details)";
    }

    // Validate UPI IDs only if provided
    if (hasUPI1) {
      if (!validateUPI(paymentDetails.upiId1)) {
        errors.upiId1 = "Please enter a valid UPI ID format (e.g., user@paytm)";
      }
    }

    if (hasUPI2) {
      if (!validateUPI(paymentDetails.upiId2)) {
        errors.upiId2 = "Please enter a valid UPI ID format (e.g., user@googlepay)";
      }
    }

    // Validate card details
    paymentDetails.cardDetails.forEach((card, index) => {
      const cardFields = [card.cardNumber.trim(), card.expiryDate.trim(), card.cvv.trim()];
      const filledFields = cardFields.filter(field => field !== "");
      
      // If any card field is filled, all fields for that card should be filled and valid
      if (filledFields.length > 0) {
        // Check if all required fields are filled
        if (!card.cardNumber.trim()) {
          errors[`cardDetails.${index}.cardNumber`] = "Card number is required when saving card details";
        } else if (!validateCardNumber(card.cardNumber)) {
          errors[`cardDetails.${index}.cardNumber`] = "Please enter a valid card number";
        }

        if (!card.expiryDate.trim()) {
          errors[`cardDetails.${index}.expiryDate`] = "Expiry date is required when saving card details";
        } else if (!validateExpiryDate(card.expiryDate)) {
          errors[`cardDetails.${index}.expiryDate`] = "Please enter a valid expiry date (MM/YY) that is not expired";
        }

        if (!card.cvv.trim()) {
          errors[`cardDetails.${index}.cvv`] = "CVV is required when saving card details";
        } else if (!validateCVV(card.cvv)) {
          errors[`cardDetails.${index}.cvv`] = "Please enter a valid CVV (3-4 digits)";
        }
      }
    });

    return errors;
  };

  // Validate customer care form
  const validateCustomerCare = () => {
    const errors = {};

    if (!customerCareForm.issue.trim()) {
      errors.issue = "Please describe your issue";
    } else if (customerCareForm.issue.trim().length < 10) {
      errors.issue = "Please provide more details about your issue (minimum 10 characters)";
    }

    if (!customerCareForm.name.trim()) {
      errors.name = "Name is required";
    } else if (!validateName(customerCareForm.name)) {
      errors.name = "Name should contain only letters and be 2-30 characters long";
    }

    if (!customerCareForm.contactNumber.trim()) {
      errors.contactNumber = "Contact number is required";
    } else if (!validatePhoneNumber(customerCareForm.contactNumber)) {
      errors.contactNumber = "Please enter a valid 10-digit phone number";
    }

    if (!customerCareForm.email.trim()) {
      errors.email = "Email is required";
    } else if (!validateEmail(customerCareForm.email)) {
      errors.email = "Please enter a valid email address";
    }

    return errors;
  };

  // Validate rating form
  const validateRating = () => {
    const errors = {};

    if (!ratingForm.review.trim()) {
      errors.review = "Please write a review";
    } else if (ratingForm.review.trim().length < 10) {
      errors.review = "Review should be at least 10 characters long";
    }

    if (ratingForm.rating === 0) {
      errors.rating = "Please provide a rating";
    }

    return errors;
  };

  // Handle form submissions
  const handlePersonalInfoSubmit = (e) => {
    e.preventDefault();
    const errors = validatePersonalInfo();
    
    if (Object.keys(errors).length === 0) {
      alert("Personal information updated successfully!");
      console.log("Personal Info:", personalInfo);
    } else {
      setFormErrors(prev => ({
        ...prev,
        personalInfo: errors
      }));
    }
  };

  const handlePaymentDetailsSubmit = (e) => {
    e.preventDefault();
    const errors = validatePaymentDetails();
    
    if (Object.keys(errors).length === 0) {
      alert("Payment details saved successfully!");
      console.log("Payment Details:", paymentDetails);
    } else {
      setFormErrors(prev => ({
        ...prev,
        paymentDetails: errors
      }));
    }
  };

  const handleCustomerCareSubmit = (e) => {
    e.preventDefault();
    const errors = validateCustomerCare();
    
        if (Object.keys(errors).length === 0) {
      alert("Your message has been sent successfully! We'll get back to you soon.");
      console.log("Customer Care Form:", customerCareForm);
      // Reset form after successful submission
      setCustomerCareForm({
        issue: "",
        name: "",
        contactNumber: "",
        email: ""
      });
    } else {
      setFormErrors(prev => ({
        ...prev,
        customerCare: errors
      }));
    }
  };

  const handleRatingSubmit = (e) => {
    e.preventDefault();
    const errors = validateRating();
    
    if (Object.keys(errors).length === 0) {
      alert("Thank you for your feedback! Your rating and review have been submitted.");
      console.log("Rating Form:", ratingForm);
      // Reset form after successful submission
      setRatingForm({
        review: "",
        rating: 0
      });
    } else {
      setFormErrors(prev => ({
        ...prev,
        rating: errors
      }));
    }
  };

  // Format card number with spaces
  const formatCardNumber = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  // Format expiry date
  const formatExpiryDate = (value) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  // Responsive container style with dynamic width
  const getContainerStyle = () => {
    let containerWidth = "95%"; // Default for smallest screens
    let containerHeight = "650px";
    
    if (windowWidth >= 576) {
      containerWidth = "90%";
    }
    if (windowWidth >= 768) {
      containerWidth = "767px";
    }
    
    // Adjust height for very small screens
    if (windowWidth <= 375) {
      containerHeight = "600px";
    }
    
    return {
      width: containerWidth,
      height: containerHeight,
      borderRadius: "30px",
      backgroundColor: "#FFD6B0",
      overflowY: "auto",
      margin: "0 auto",
      padding: windowWidth < 576 ? "20px" : "30px"
    };
  };

  // Get navigation button style based on active state
  const getNavButtonStyle = (section) => {
    const isActive = activeSection === section;
    return {
      backgroundColor: isActive ? "#FF9900" : "#FFAD62",
      borderColor: isActive ? "#FF9900" : "#FFAD62",
      color: "black",
      fontWeight: isActive ? "bold" : "normal",
      boxShadow: isActive ? "0 4px 8px rgba(0,0,0,0.1)" : "none",
      transition: "all 0.3s ease"
    };
  };

  // Get mobile navigation button style
  const getMobileNavButtonStyle = (section) => {
    const isActive = activeSection === section;
    return {
      backgroundColor: isActive ? "#FF9900" : "#FFAD62",
      borderColor: isActive ? "#FF9900" : "#FFAD62",
      color: "black",
      fontWeight: isActive ? "bold" : "normal",
      borderRadius: "15px",
      padding: "10px 15px",
      marginBottom: "8px",
      width: "100%",
      textAlign: "center"
    };
  };

  return (
    <div className="container-fluid p-0 m-0 d-flex flex-column min-vh-100" style={{ fontFamily: "Outfit" }}>
      {/* Header */}
      <header
        className="d-flex justify-content-between align-items-center p-3 w-100"
        style={{ 
          backgroundColor: "#ffbc57",
          borderRadius: "0"
        }}
      >
        <Link to="/home">         
          <img
            src="/duzo.png"
            alt="DUZO Logo"
            className="img-fluid"
            style={{ height: windowWidth < 375 ? "30px" : "40px" }}
          />
        </Link>

        {/* MY ACCOUNT for medium and up */}
        <h4 className="text-dark fw-bold d-none d-md-block">MY ACCOUNT</h4>
      </header>

      <div className="d-flex flex-column flex-lg-row mt-4 justify-content-center align-items-start gap-3 flex-grow-1 px-2 px-sm-3">
        {/* Mobile Navigation - Visible only on small and medium screens */}
        <div className="d-flex d-lg-none flex-column w-100 mb-3 px-2">
          <button
            className="btn fw-bold"
            style={getMobileNavButtonStyle("personalInfo")}
            onClick={() => setActiveSection("personalInfo")}
          >
            Personal Info
          </button>
          <button
            className="btn fw-bold"
            style={getMobileNavButtonStyle("orders")}
            onClick={() => setActiveSection("orders")}
          >
            Your Orders
          </button>
          <button
            className="btn fw-bold"
            style={getMobileNavButtonStyle("paymentMethods")}
            onClick={() => setActiveSection("paymentMethods")}
          >
            Payment Methods
          </button>
          <button
            className="btn fw-bold"
            style={getMobileNavButtonStyle("customerCare")}
            onClick={() => setActiveSection("customerCare")}
          >
            Customer Care
          </button>
        </div>

        {/* Sidebar - Hidden on small and medium screens */}
        <div
          className="d-none d-lg-flex flex-column align-items-center justify-content-between p-3 rounded shadow-sm mt-5 me-lg-5 ms-md-0 me-md-0 mx-auto col-lg-3 col-md-6 h-100 align-self-stretch"
          style={{ backgroundColor: "white", minHeight: "70vh" }}
        >
          {/* Button Layout */}
          <div className="w-100 d-flex flex-column gap-5 justify-content-between h-100 py-4">
            <div className="col-lg-12 col-md-12 col-12">
              <button
                className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
                style={getNavButtonStyle("personalInfo")}
                onClick={() => setActiveSection("personalInfo")}
              >
                Personal Info
              </button>
            </div>

            <div className="col-lg-12 col-md-12 col-12">
              <button
                className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
                style={getNavButtonStyle("orders")}
                onClick={() => setActiveSection("orders")}
              >
                Your Orders
              </button>
            </div>

            <div className="col-lg-12 col-md-12 col-12">
              <button
                className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
                style={getNavButtonStyle("paymentMethods")}
                onClick={() => setActiveSection("paymentMethods")}
              >
                Payment Methods
              </button>
            </div>

            <div className="col-lg-12 col-md-12 col-12">
              <button
                className="btn btn-lg w-100 py-4 fs-5 fw-bold rounded-3"
                style={getNavButtonStyle("customerCare")}
                onClick={() => setActiveSection("customerCare")}
              >
                Customer Care
              </button>
            </div>
          </div>
        </div>

        {/* Content Section - Using dynamic dimensions */}
        <div className="flex-grow-1 d-flex justify-content-center w-100">
          {activeSection === "personalInfo" && (
            <div style={getContainerStyle()} className="shadow-sm mt-md-5 mt-1 mb-5">
              <h3 className="fw-bold text-center mb-4 mb-md-5">Personal Information</h3>

              <form onSubmit={handlePersonalInfoSubmit}>
                <div className="row mb-3 mb-md-4">
                  <div className="col-12 col-md-6 mb-3 mb-md-4">
                    <label className="form-label fw-bold">First Name</label>
                    <div className="col-12 col-sm-10">
                      <input 
                        type="text" 
                        name="firstName"
                        className={`form-control rounded-pill ${formErrors.personalInfo.firstName ? 'is-invalid' : ''}`}
                        value={personalInfo.firstName}
                        onChange={handlePersonalInfoChange}
                        required
                      />
                      {formErrors.personalInfo.firstName && (
                        <div className="invalid-feedback">{formErrors.personalInfo.firstName}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-3 mb-md-4">
                    <div className="d-flex align-items-center mb-2">
                      <label className="form-label fw-bold me-3">Last Name</label>
                      <a href="#" className="text-primary">Edit</a>
                    </div>
                    <div className="col-12 col-sm-10">
                      <input 
                        type="text" 
                        name="lastName"
                        className={`form-control rounded-pill ${formErrors.personalInfo.lastName ? 'is-invalid' : ''}`}
                        value={personalInfo.lastName}
                        onChange={handlePersonalInfoChange}
                        required
                      />
                      {formErrors.personalInfo.lastName && (
                        <div className="invalid-feedback">{formErrors.personalInfo.lastName}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-3 mb-md-4">
                  <label className="form-label fw-bold mb-2">Gender</label>
                  <div className="d-flex gap-4 ms-3">
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="male"
                        id="genderMale"
                        checked={personalInfo.gender === "male"}
                        onChange={handlePersonalInfoChange}
                        required
                      />
                      <label className="form-check-label ms-1" htmlFor="genderMale">Male</label>
                    </div>
                    <div className="form-check">
                      <input
                        type="radio"
                        className="form-check-input"
                        name="gender"
                        value="female"
                        id="genderFemale"
                        checked={personalInfo.gender === "female"}
                        onChange={handlePersonalInfoChange}
                        required
                      />
                      <label className="form-check-label ms-1" htmlFor="genderFemale">Female</label>
                    </div>
                  </div>
                  {formErrors.personalInfo.gender && (
                    <div className="text-danger mt-1 small ms-3">{formErrors.personalInfo.gender}</div>
                  )}
                </div>

                <div className="row">
                  <div className="col-12 col-md-6 mb-3 mb-md-4">
                    <div className="d-flex align-items-center mb-2">
                      <label className="form-label fw-bold me-3">E-mail Address</label>
                      <a href="#" className="text-primary">Edit</a>
                    </div>
                    <div className="col-12 col-sm-10">
                      <input
                        type="email"
                        name="email"
                        className={`form-control rounded-pill ${formErrors.personalInfo.email ? 'is-invalid' : ''}`}
                        value={personalInfo.email}
                        onChange={handlePersonalInfoChange}
                        required
                      />
                      {formErrors.personalInfo.email && (
                        <div className="invalid-feedback">{formErrors.personalInfo.email}</div>
                      )}
                    </div>
                  </div>
                  <div className="col-12 col-md-6 mb-3 mb-md-4">
                    <div className="d-flex align-items-center mb-2">
                      <label className="form-label fw-bold me-3">Phone Number</label>
                      <a href="#" className="text-primary">Edit</a>
                    </div>
                    <div className="col-12 col-sm-10">
                      <input
                        type="tel"
                        name="phoneNumber"
                        className={`form-control rounded-pill ${formErrors.personalInfo.phoneNumber ? 'is-invalid' : ''}`}
                        value={personalInfo.phoneNumber}
                        onChange={handlePersonalInfoChange}
                        maxLength="10"
                        required
                      />
                      {formErrors.personalInfo.phoneNumber && (
                        <div className="invalid-feedback">{formErrors.personalInfo.phoneNumber}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-center mt-4 mt-md-5">
                  <button 
                    type="submit"
                    className="btn btn-primary rounded-pill px-4 px-md-5 py-2 fw-bold"
                    style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}  
          
          {activeSection === "orders" && (
            <div style={getContainerStyle()} className="shadow-sm mt-md-5 mt-1 mb-5">
              <h3 className="fw-bold text-center mb-4 mb-md-5">Your Orders</h3>
              <div className="container-fluid d-flex align-items-stretch justify-content-center mb-4">
                <div className="container-fluid custom-responsive-bg d-flex flex-column flex-md-row align-items-center justify-content-evenly gap-3 gap-md-4 border p-3 rounded w-100">
                  <img
                    src="/placeholder.png"
                    alt="Order Thumbnail"
                    className="img-thumbnail mb-3 mb-md-0"
                    style={{ width: "80px", height: "80px", objectFit: "cover", backgroundColor: "gray" }}
                  />

                                   <div className="d-flex flex-column text-center text-md-start w-100">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                      <p className="mb-1 me-md-3 fw-bold">Order Name</p>
                      <p className="mb-1">Date</p>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between align-items-center">
                      <p className="mb-2 mb-md-1">Amount paid</p>
                      <button
                        className="btn btn-primary btn-sm px-3"
                        onClick={() => setActiveSection("ratings")}
                      >
                        Rate and Review
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeSection === "ratings" && (
            <div style={getContainerStyle()} className="shadow-sm mt-md-5 mt-1 mb-5">
              <h3 className="fw-bold text-center mb-4 mb-md-5">My Orders</h3>
              <div className="container-fluid d-flex align-items-stretch justify-content-center mb-4">
                <div className="container-fluid custom-responsive-bg d-flex flex-column flex-md-row align-items-center justify-content-evenly gap-3 gap-md-4 border p-3 rounded w-100">
                  <img
                    src="/placeholder.png"
                    alt="Order Thumbnail"
                    className="img-thumbnail mb-3 mb-md-0"
                    style={{ width: "80px", height: "80px", objectFit: "cover", backgroundColor: "gray" }}
                  />

                  <div className="d-flex flex-column text-center text-md-start w-100">
                    <div className="d-flex flex-column flex-md-row justify-content-between mb-2">
                      <p className="mb-1 me-md-3 fw-bold">Order Name</p>
                      <p className="mb-1">Date</p>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between">
                      <p className="mb-1 me-md-3">Amount paid</p>
                      <p className="mb-1">Order ID</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <form onSubmit={handleRatingSubmit}>
                <div className="mb-4 mt-4 mt-md-5 px-2 px-md-4">
                  <div className="d-flex justify-content-center align-items-center mb-3">
                    <h4 className="fw-bold">Ratings and review</h4>
                  </div>

                  <textarea 
                    className={`form-control rounded-4 w-100 ${formErrors.rating.review ? 'is-invalid' : ''}`}
                    rows="4" 
                    placeholder="Describe your Experience"
                    value={ratingForm.review}
                    onChange={handleReviewChange}
                    required
                  ></textarea>
                  {formErrors.rating.review && (
                    <div className="invalid-feedback">{formErrors.rating.review}</div>
                  )}
                </div>
                
                <Box sx={{ '& > legend': { mt: 2 } }}>
                  <div className="text-center"> 
                    <Rating 
                      value={ratingForm.rating} 
                      onChange={handleRatingChange}
                      className="mb-4" 
                      max={5} 
                      size="large" 
                    />
                    {formErrors.rating.rating && (
                      <div className="text-danger mt-1 small">{formErrors.rating.rating}</div>
                    )}
                  </div>
                </Box>
                
                <div className="d-flex justify-content-center mt-4">
                  <button
                    type="submit"
                    className="btn btn-primary rounded-pill px-4 px-md-5 py-2 fw-bold"
                    style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}

          {activeSection === "paymentMethods" && (
            <div style={getContainerStyle()} className="shadow-sm mt-md-5 mt-1 mb-5">
              <h3 className="fw-bold mb-4 mb-md-5 text-center">Saved Payment Details</h3>

              <form onSubmit={handlePaymentDetailsSubmit}>
                {/* General error message */}
                {formErrors.paymentDetails.general && (
                  <div className="alert alert-danger mb-4" role="alert">
                    <strong>Error:</strong> {formErrors.paymentDetails.general}
                  </div>
                )}

                <div className="mb-4 mb-md-5">
                  <h5 className="fw-bold mb-3">Saved UPI ID's</h5>
                  <div className="mb-4">
                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
                      <label className="col-12 col-sm-4 col-md-3 col-form-label fw-bold mb-1 mb-sm-0">UPI ID 1:</label>
                      <div className="col-12 col-sm-8 col-md-6">
                        <input 
                          type="text" 
                          className={`form-control form-control-sm rounded-pill w-100 ${formErrors.paymentDetails.upiId1 ? 'is-invalid' : ''}`}
                          name="upiId1" 
                          value={paymentDetails.upiId1} 
                          onChange={handlePaymentChange}
                          placeholder="user@paytm"
                        />
                        {formErrors.paymentDetails.upiId1 && (
                          <div className="invalid-feedback">{formErrors.paymentDetails.upiId1}</div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
                      <label className="col-12 col-sm-4 col-md-3 col-form-label fw-bold mb-1 mb-sm-0">UPI ID 2:</label>
                      <div className="col-12 col-sm-8 col-md-6">
                        <input 
                          type="text" 
                          className={`form-control form-control-sm rounded-pill w-100 ${formErrors.paymentDetails.upiId2 ? 'is-invalid' : ''}`}
                          name="upiId2" 
                          value={paymentDetails.upiId2} 
                          onChange={handlePaymentChange}
                          placeholder="user@googlepay"
                        />
                        {formErrors.paymentDetails.upiId2 && (
                          <div className="invalid-feedback">{formErrors.paymentDetails.upiId2}</div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                <h5 className="fw-bold mb-3">Saved Debit Card / Credit Card</h5>
                {paymentDetails.cardDetails.map((card, index) => (
                  <div key={index} className="mb-4">
                    <h6 className="fw-bold mb-3 text-primary">Card {index + 1}</h6>
                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
                      <label className="col-12 col-sm-4 col-md-3 col-form-label fw-bold mb-1 mb-sm-0" htmlFor={`cardDetails.${index}.cardNumber`}>
                        Card Number:
                      </label>
                      <div className="col-12 col-sm-8 col-md-6">
                        <input 
                          type="text" 
                          className={`form-control form-control-sm rounded-pill w-100 ${formErrors.paymentDetails[`cardDetails.${index}.cardNumber`] ? 'is-invalid' : ''}`}
                          id={`cardDetails.${index}.cardNumber`} 
                          name={`cardDetails.${index}.cardNumber`} 
                          value={formatCardNumber(card.cardNumber)}
                          onChange={(e) => {
                            const formatted = formatCardNumber(e.target.value);
                            handlePaymentChange({
                              target: {
                                name: `cardDetails.${index}.cardNumber`,
                                value: formatted.replace(/\s/g, '')
                              }
                            });
                          }}
                          placeholder="1234 5678 9012 3456"
                          maxLength="19"
                        />
                        {formErrors.paymentDetails[`cardDetails.${index}.cardNumber`] && (
                          <div className="invalid-feedback">{formErrors.paymentDetails[`cardDetails.${index}.cardNumber`]}</div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
                      <label className="col-12 col-sm-4 col-md-3 col-form-label fw-bold mb-1 mb-sm-0" htmlFor={`cardDetails.${index}.expiryDate`}>
                        Expiry Date:
                      </label>
                      <div className="col-12 col-sm-8 col-md-6">
                        <input 
                          type="text" 
                          className={`form-control form-control-sm rounded-pill w-100 ${formErrors.paymentDetails[`cardDetails.${index}.expiryDate`] ? 'is-invalid' : ''}`}
                          id={`cardDetails.${index}.expiryDate`} 
                          name={`cardDetails.${index}.expiryDate`} 
                          value={card.expiryDate}
                          onChange={(e) => {
                            const formatted = formatExpiryDate(e.target.value);
                            handlePaymentChange({
                              target: {
                                name: `cardDetails.${index}.expiryDate`,
                                value: formatted
                              }
                            });
                          }}
                          placeholder="MM/YY"
                          maxLength="5"
                        />
                        {formErrors.paymentDetails[`cardDetails.${index}.expiryDate`] && (
                          <div className="invalid-feedback">{formErrors.paymentDetails[`cardDetails.${index}.expiryDate`]}</div>
                        )}
                      </div>
                    </div>
                    <div className="d-flex flex-column flex-sm-row align-items-start align-items-sm-center mb-3">
                      <label className="col-12 col-sm-4 col-md-3 col-form-label fw-bold mb-1 mb-sm-0" htmlFor={`cardDetails.${index}.cvv`}>
                        CVV:
                      </label>
                      <div className="col-12 col-sm-8 col-md-6">
                        <input
                          type="text"
                          className={`form-control form-control-sm rounded-pill w-100 ${formErrors.paymentDetails[`cardDetails.${index}.cvv`] ? 'is-invalid' : ''}`}
                          id={`cardDetails.${index}.cvv`}
                          name={`cardDetails.${index}.cvv`}
                          value={card.cvv}
                          onChange={handlePaymentChange}
                          placeholder="123"
                          maxLength="4"
                        />
                        {formErrors.paymentDetails[`cardDetails.${index}.cvv`] && (
                          <div className="invalid-feedback">{formErrors.paymentDetails[`cardDetails.${index}.cvv`]}</div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="d-flex justify-content-center mt-4 mt-md-5">
                  <button 
                    type="submit"
                    className="btn btn-primary rounded-pill px-4 px-md-5 py-2 fw-bold"
                    style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
                  >
                    Save Changes
                  </button>
                </div>
              </form>
            </div>
          )}
          
          {activeSection === "customerCare" && (
            <div style={getContainerStyle()} className="shadow-sm mt-md-5 mt-1 mb-5">
              <h3 className="fw-bold text-center mb-4 mb-md-5">Customer Care</h3>
              
              <form onSubmit={handleCustomerCareSubmit}>
                <div className="mb-4">
                  <label className="form-label fw-bold">How can we help you?</label>
                  <div className="col-12">
                    <textarea 
                      className={`form-control rounded-4 ${formErrors.customerCare.issue ? 'is-invalid' : ''}`}
                      rows="4" 
                      name="issue"
                      placeholder="Describe your issue"
                      value={customerCareForm.issue}
                      onChange={handleCustomerCareChange}
                      required
                    ></textarea>
                    {formErrors.customerCare.issue && (
                      <div className="invalid-feedback">{formErrors.customerCare.issue}</div>
                    )}
                  </div>
                </div>

                <div className="row mb-3 mb-md-4">
                  <div className="col-12 col-md-6 mb-3">
                    <label className="form-label fw-bold">Name</label>
                    <div className="col-12 col-sm-10">
                      <input 
                        type="text" 
                        name="name"
                        className={`form-control rounded-pill ${formErrors.customerCare.name ? 'is-invalid' : ''}`}
                        value={customerCareForm.name}
                        onChange={handleCustomerCareChange}
                        required
                      />
                      {formErrors.customerCare.name && (
                        <div className="invalid-feedback">{formErrors.customerCare.name}</div>
                      )}
                    </div>
                  </div>
                  
                  <div className="col-12 col-md-6 mb-3">
                    <label className="form-label fw-bold">Contact Number</label>
                    <div className="col-12 col-sm-10">
                      <input
                        type="tel"
                        name="contactNumber"
                        className={`form-control rounded-pill ${formErrors.customerCare.contactNumber ? 'is-invalid' : ''}`}
                        value={customerCareForm.contactNumber}
                        onChange={handleCustomerCareChange}
                        maxLength="10"
                        required
                      />
                                           {formErrors.customerCare.contactNumber && (
                        <div className="invalid-feedback">{formErrors.customerCare.contactNumber}</div>
                      )}
                    </div>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="col-12 col-md-6">
                    <label className="form-label fw-bold">Email</label>
                    <div className="col-12 col-sm-10">
                      <input
                        type="email"
                        name="email"
                        className={`form-control rounded-pill ${formErrors.customerCare.email ? 'is-invalid' : ''}`}
                        value={customerCareForm.email}
                        onChange={handleCustomerCareChange}
                        required
                      />
                      {formErrors.customerCare.email && (
                        <div className="invalid-feedback">{formErrors.customerCare.email}</div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="d-flex justify-content-center mt-4 mt-md-5">
                  <button 
                    type="submit"
                    className="btn btn-primary rounded-pill px-4 px-md-5 py-2 fw-bold"
                    style={{ backgroundColor: "#FF9900A8", borderColor: "#FF9900A8" }}
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>

      {/* Footer - Now using mt-auto to push it to the bottom */}
      <footer
        className="p-3 mt-auto rounded d-flex flex-column flex-sm-row justify-content-between align-items-center w-100 mb-0"
        style={{ backgroundColor: "#ffbc57" }}
      >
        <p className="mb-3 mb-sm-0 text-center text-sm-start">Copyrights &copy; 2024 - DUZO</p>

        <div className="d-flex gap-3 justify-content-center">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <FaInstagram size={windowWidth < 375 ? 20 : 24} color="black" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <FaFacebook size={windowWidth < 375 ? 20 : 24} color="black" />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaXTwitter size={windowWidth < 375 ? 20 : 24} color="black" />
          </a>
        </div>
      </footer>
    </div>
  );
};

export default MyAccount;
