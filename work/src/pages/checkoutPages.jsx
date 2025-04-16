import React, { useState } from 'react';
import { FaCaretDown } from "react-icons/fa";
import 'bootstrap/dist/css/bootstrap.min.css';
import Copyright from "../components/Copyright";
import "../styles/checkout.css";

const CustomDropdown = ({ title, options, value, onChange, placeholder }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [inputValues, setInputValues] = useState({});

  const handleToggle = () => {
    if (!isEditing) {
      setIsOpen(!isOpen);
    }
  };

  const handleSelect = (option) => {
    onChange(option.value);
    setIsOpen(false);
  };

  const handleEditClick = (e) => {
    e.stopPropagation();
    setIsEditing(true);
    setIsOpen(true);
    const initialValues = {};
    options.forEach(option => {
      initialValues[option.value] = value[option.value] || '';
    });
    setInputValues(initialValues);
  };

  const handleSave = () => {
    onChange(inputValues);
    setIsEditing(false);
    setIsOpen(false);
  };

  const displayValue = options.find(opt => opt.value === (typeof value === 'object' ? value?.method : value))?.label || placeholder;

  return (
    <div className="mb-3 custom-mobile-bg" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
      <h5 className="mb-2">{title}</h5>
      {isEditing ? (
        <div className="d-flex flex-column ">
          {options.map((option) => (
            <input
              key={option.value}
              type="text"
              className="form-control rounded-4 mb-2"
              placeholder={option.label}
              value={inputValues[option.value] || ''}
              onChange={(e) => setInputValues(prev => ({ ...prev, [option.value]: e.target.value }))}
            />
          ))}
          <button className="btn btn-primary" onClick={handleSave}>
            Save
          </button>
        </div>
      ) : (
        <div className="d-flex justify-content-between align-items-center" onClick={handleToggle}>
          <span className="fs-md-3">{displayValue}</span>
          <div>
            <FaCaretDown className="icon" />
            <button 
              className="btn btn-outline-secondary btn-sm bg-dark text-white rounded-pill ms-2" 
              onClick={handleEditClick}
              style={{ marginLeft: '10px' }}
            >
              Edit
            </button>
          </div>
        </div>
      )}
      {isOpen && !isEditing && (
        <ul className="list-unstyled mt-2" style={{ padding: 0, margin: 0, listStyle: 'none' }}>
          {options.map((option, index) => (
            <li 
              key={index} 
              onClick={() => handleSelect(option)} 
              style={{ 
                cursor: 'pointer', 
                padding: '8px 10px',
                backgroundColor: '#f8f9fa',
                marginBottom: '2px',
                borderRadius: '4px'
              }}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Checkouts = () => {
  const [contactDetails, setContactDetails] = useState({
    method: '',
    contact: '',
    email: ''
  });
  const [address, setAddress] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    netBanking: '',
    upiId: ''
  });
  const [showPaymentSection, setShowPaymentSection] = useState(true);

  const handleUPIPayment = () => {
    alert(`UPI payment initiated for ${paymentDetails.upiId}`);
  };

  const contactOptions = [
    { label: 'Contact Number', value: 'contact' },
    { label: 'Email Address', value: 'email' }
  ];
  
  const addressOptions = [
    { label: 'Address', value: 'address' },
  ];

  return (
    <div className="bg-light" style={{ fontFamily: 'Outfit'}}>
      {/* Header */}
      <div className="d-flex align-items-center justify-content-between px-3 py-2 rounded-3" style={{ backgroundColor: '#ffd5a4' }}>
        <div className="d-flex mt-2 align-items-center">
          <img src="/duzo.png" alt="DUZO Logo" style={{ height: '40px' }} className="img-fluid" />
          <h5 className="mb-0 ms-2">CHECKOUT</h5>
        </div>
        <img src="/user.png" alt="user icon" className="img-fluid" style={{ width: '25px' }} />
      </div>
      
      <div className="container-fluid mt-2 mb-4 p-3 rounded-4" style={{ backgroundColor: '#FFC998', fontFamily: 'fit', fontWeight: 'bold' }}>
        <div className="row gy-4">
          {/* Left Column */}
          <div className="col-12 mt-4 col-md-5 px-0 px-md-4 ">
            <div className="p-md-3 rounded shadow-sm mb-3 ">
              <CustomDropdown
                title=" "
                options={contactOptions}
                value={contactDetails}
                onChange={(value) => {
                  if (typeof value === 'string') {
                    setContactDetails(prev => ({ ...prev, method: value }));
                  } else {
                    setContactDetails(prev => ({ ...prev, ...value }));
                  }
                }}
                placeholder="Send Booking Details To"
              />
              
              <CustomDropdown
                title=" "
                options={addressOptions}
                value={address}
                onChange={setAddress}
                placeholder="Address"
              />

              {/* Payment Method Section */}
              <div className="mb-3 custom-mobile-bg" style={{ backgroundColor: '#fff', borderRadius: '10px', padding: '15px', boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)' }}>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <h5 className="mb-0">Payment Method</h5>
                  <button 
                    className="btn btn-outline-dark d-flex align-items-center gap-2" 
                    onClick={() => setShowPaymentSection(!showPaymentSection)}
                    style={{ padding: '8px 15px' }}
                  >
                    {showPaymentSection ? '' : ''}
                    <FaCaretDown className={showPaymentSection ? 'rotate-180' : ''} 
                      style={{ transition: 'transform 0.3s ease' }}/>
                  </button>
                </div>

                {showPaymentSection && (
                  <div>
                    {/* UPI Section */}
                    <div className="mb-3 p-3 rounded-3" style={{ backgroundColor: '#FFC998' }}>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="paymentMethod" 
                          id="upi" 
                          checked={paymentMethod === 'upi'}
                          onChange={() => setPaymentMethod('upi')}
                        />
                        <label className="form-check-label" htmlFor="upi">
                          UPI
                        </label>
                        {paymentMethod === 'upi' && (
                          <div className="mt-3 row">
                            <label className="form-check-label">Enter your UPI</label>
                            <div className="row">
                              <div className="col-12 col-md-12 col-lg-8">
                                <input
                                  type="text"
                                  className="form-control rounded-4 mb-2"
                                  placeholder="UPI ID"
                                  value={paymentDetails.upiId}
                                  onChange={(e) => setPaymentDetails(prev => ({
                                    ...prev,
                                    upiId: e.target.value
                                  }))}
                                />
                              </div>
                              <div className="col-6 col-md-10 col-lg-4">
                                <button 
                                  className="btn w-100 rounded-4 bg-white rounded-pill text-black fw-bold"
                                  style={{border: 'none'}}
                                  onClick={handleUPIPayment}
                                  disabled={!paymentDetails.upiId}
                                >
                                  Pay
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Card Section */}
                    <div className="mb-3 ps-1 p-3 rounded-3" style={{ backgroundColor: '#FFC998' }}>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="paymentMethod" 
                          id="card"
                          checked={paymentMethod === 'card'}
                          onChange={() => setPaymentMethod('card')}
                        />
                        <label className="form-check-label" htmlFor="card">
                          Debit Card / Credit Card
                        </label>
                        {paymentMethod === 'card' && (
                          <div className="mt-3">
                            <div className="row align-items-center mb-3">
                              <div className="col-lg-5 pe-0">
                                <label className="form-label mb-1">Card Number</label>
                              </div>
                              <div className="col-lg-7">
                                <input
                                  type="text"
                                  className="form-control rounded-4"
                                  placeholder="Card Number"
                                  id="cardNumber"
                                  value={paymentDetails.cardNumber}
                                  onChange={(e) => setPaymentDetails(prev => ({...prev, cardNumber: e.target.value}))}
                                />
                              </div>
                            </div>

                            <div className="row align-items-center mb-3">
                              <div className="col-lg-5">
                                <label className="form-label mb-0">Expiry Date</label>
                              </div>
                              <div className="col-lg-7">
                                <input
                                  type="text"
                                  className="form-control rounded-4"
                                  placeholder="Expiry Date"
                                  id="expiryDate"
                                  value={paymentDetails.expiry}
                                  onChange={(e) => setPaymentDetails(prev => ({...prev, expiry: e.target.value}))}
                                />
                              </div>
                            </div>

                            <div className="row align-items-center mb-3">
                              <div className="col-lg-5">
                                <label className="form-label mb-0">CVV</label>
                              </div>
                              <div className="col-6">
                                <input
                                  type="text"
                                  className="form-control rounded-4"
                                  placeholder="CVV"
                                  id="cvv"
                                  value={paymentDetails.cvv}
                                  onChange={(e) => setPaymentDetails(prev => ({...prev, cvv: e.target.value}))}
                                />
                              </div>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Net Banking Section */}
                    <div className="mb-3 p-3 rounded-3" style={{ backgroundColor: '#FFC998' }}>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="paymentMethod" 
                          id="netbanking"
                          checked={paymentMethod === 'netbanking'}
                          onChange={() => setPaymentMethod('netbanking')}
                        />
                        <label className="form-check-label" htmlFor="netbanking">
                          Net Banking
                        </label>
                        {paymentMethod === 'netbanking' && (
                          <select 
                            className="form-select rounded-4 mt-3"
                            value={paymentDetails.netBanking}
                            onChange={(e) => setPaymentDetails(prev => ({...prev, netBanking: e.target.value}))}
                          >
                            <option>Choose an option</option>
                            <option>Bank 1</option>
                            <option>Bank 2</option>
                          </select>
                        )}
                      </div>
                    </div>

                    {/* COD Section */}
                    <div className="p-3 rounded-3" style={{ backgroundColor: '#FFC998' }}>
                      <div className="form-check">
                        <input 
                          className="form-check-input" 
                          type="radio" 
                          name="paymentMethod" 
                          id="cod"
                          checked={paymentMethod === 'cod'}
                          onChange={() => setPaymentMethod('cod')}
                        />
                        <label className="form-check-label" htmlFor="cod">
                          Cash on Delivery
                        </label>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              <div className="d-flex flex-column align-items-start">
                <button className="mt-4 btn btn btn-dark rounded-pill col-sm-10 col-md-8 col-lg-6 mb-2">Cancellation Policy</button>
                <a href="#" className="text-decoration-none text-black mt-1">Learn More</a>
              </div>
            </div>
          </div>

          {/* Right Side Columns */}
          <div className="col-12 mt-5 col-md-7 px-5 d-flex flex-column align-items-lg-end">
            <div className="p-3 bg-white rounded shadow-sm mb-3 col-12 col-lg-6 npm custom-mobile-bg">
              <center><h4 className="fw-bold">Details</h4></center> 
              <div className="d-flex justify-content-between mb-2">
                <div>Date</div>
                <div>– <span className="ms-2">xxx</span></div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <div>Time</div>
                <div>– <span className="ms-2">xxx</span></div>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <div>Number of People</div>
                <div>– <span className="ms-2">xxx</span></div>
              </div>
              <div className="d-flex justify-content-between">
                <div>Number of Dishes</div>
                <div>– <span className="ms-2">xxx</span></div>
              </div>
            </div>

            <div className="p-3 rounded shadow-sm mb-3 col-12 col-lg-6">
              <center><h4 className="fw-bold">BILL SUMMARY</h4></center>   
              <div className="p-3 bg-white rounded shadow-sm mb-3 col-12 col-lg-12 custom-mobile-bg">
                <div className="border-0 p-2 mb-2">
                  <div>Total Amount</div>
                  <div>Token Amount</div>
                  <div>Remaining Amount</div>
                </div>
              </div>
            </div>  
          </div>
        </div>
      </div>
      
      {/* Footer Components */}
      <div className="mt-0 pt-0">
        <Copyright />
      </div>
    </div>
  );
};

export default Checkouts;