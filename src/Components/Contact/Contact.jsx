import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png';
import mail_icon from '../../assets/mail-icon.png';
import phone_icon from '../../assets/phone-icon.png';
import location_icon from '../../assets/location-icon.png';
import white_arrow from '../../assets/white-arrow.png';
export const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "ebdc0c1f-e955-4647-af22-b2e9579c16d0");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={msg_icon} alt="" /></h3>
            <p>Feel free to reach out through contact form or find our contact information below. Your feedback,questions and suggestions are important to us as we strive to provide exceptional service to our unviversity students</p>
            <ul>
                <li><img src={mail_icon} alt="" />mrali8639@gmail.com</li>
                <li><img src={phone_icon} alt="" />+92-3430450691</li>
                <li><img src={location_icon} alt="" />House # 469, Street # 2 Allahbad Westrige III Rawalapindi Pakistan</li>
            </ul>
        </div>
        <div className="contact-col">
            <form onSubmit={onsubmit}>
                <label >Your Name</label>
                <input type="text" name="name" placeholder='Enter Your Name' required id="" />
                <label >Phone Number</label>
                <input type="tel" name="phone" placeholder='Enter Your Mobile Number' required id="" />
                <label>Enter Your Message Here</label>
                <textarea name="message" rows="6" placeholder='Enter Your Message' required></textarea>
                <button type='submit' className='btn dark-btn'>Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
    </div>
  )
}
