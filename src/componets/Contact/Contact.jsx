import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from "../../assets/white-arrow.png"

const Contact = () => {


  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "93461ab0-659d-4b08-af8c-9e66e5729f83");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
        <div className="contact-col">
     <h3> Send us a message <img src={msg_icon} alt="" /></h3>
    <p>We’d love to hear from you! Whether you have questions about admissions, programs, 
      or just want to learn more
       about Almond Compassionate Academy, our team is here to help.

</p>

    <ul>
    <li><img src={mail_icon} alt="" />info@almondcompassionateacademy.edu
    </li>
    <li><img src={phone_icon} alt="" />+1 454- 345 4456</li>
    <li><img src={location_icon} alt="" />123 Compassionate Lane, City, State, ZIP</li>
   
    </ul>
        </div>
        <div className="contact-col">
     <form onSubmit={onSubmit}>
     <label> Your Name</label>
     <input type="text" name='name' placeholder='enter your name' required/>
     <label> phone Number</label>
     <input type="tel" name='phone' placeholder='enter your phone number' required/>
     <label> Write Your Message Here</label>
     <textarea name='message' rows="6" placeholder='enter your message' required/>

     <button type='submit' className='btn dark_btn'>Submit Now <img src={white_arrow} alt="" /></button>
     </form>
     <span>{result}</span>
        </div>
    </div>
  )
}

export default Contact