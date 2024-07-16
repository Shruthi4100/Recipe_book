import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ContactDetails.css';

const ContactDetails = () => {
  const [contactInfo, setContactInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactInfo = async () => {
      try {
        const response = await axios.get('http://recipe-alb-857639819.us-east-1.elb.amazonaws.com:8000/api/contact/');
        console.log('Response data:', response.data);
        setContactInfo(response.data[0]);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching contact details:', error);
        setLoading(false);
      }
    };

    fetchContactInfo();
  }, []);

  if (loading) {
    return <div>Loading contact details...</div>;
  }

  if (!contactInfo) {
    return <div>Contact details not available</div>;
  }

  return (
    <div className="contact-details">
      
      <p>Name: {contactInfo.name}</p>
      <p>Phone: {contactInfo.phone}</p>
      <p>Address:</p>
      <ul>
  {contactInfo.address && contactInfo.address.map((line, index) => (
    <li key={index}>{line}</li>
  ))}
</ul>

    </div>
  );
};

export default ContactDetails;
