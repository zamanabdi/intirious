import React, { useEffect } from 'react';
import "./privacyPolicy.css";

const PrivacyPolicy = () => {

useEffect(() => {
window.scrollTo(0,0)
},[]);

  return (
    <div className='privacy-screen'>
      <h1>Privacy Policy</h1>
      <div className='privacy-content'>

       <p className='intro-line'>This privacy policy sets out how intirious.com uses and protects any information that customers give intirious.com while using the website.</p>

       <br/>

       <p className='privacy-info'>intirious.com is committed to ensuring that the privacy of every customer is protected. intirious asks customers to provide certain information for identification while using the website for a better and more personalised online shopping experience; customers should be comfortable, as it will only be used in accordance with this privacy statement.</p>

       <br/>

       <p className='privacy-info'>Online transactions are electronically encrypted to ensure that the financial data of a customer is safe and secure; customers may use credit cards online with confidence. In addition, the address, phone number, and financial data of customers will be used only by intirious and will never be sold or revealed to anyone else.</p>

       <br/>

       <p className='privacy-info'>intirious is committed to maintaining confidence and trust and accordingly maintains the following privacy policy to protect the personal information customers provide online:</p>

       <br/>

       <p className='privacy-info'>
       It's our company's policy that personal information, such as customer's name, address, email address, telephone number, and financial information, is private and confidential.
       </p>

       <br/>

       <p className='privacy-info'>
       The personal information of a customer will only be used by intirious.com and will never be sold or revealed to outside sources.
       </p>

       <br/>

       <p className='sub-heading'>intirious.com may collect the following information.</p>

       <ul style={{listStyleType:"disc",marginLeft:"15px"}}>
        <li>Full Name</li>
        <li>Contact information including, email address and phone number</li>
        <li>Demographic information such as postcode</li>
       </ul>

       <br/>

       <p className='sub-heading'>
       What Intirious does with the information they gather:
       </p>
      </div>
    </div>
  )
}

export default PrivacyPolicy
