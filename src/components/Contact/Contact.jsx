import React,{useState} from 'react'
import './Contact.css'
// import theme_pattern from '../../assets/theme_pattern.svg'
import mail_icon from '../../assets/gamil.svg'
import call_icon from '../../assets/call_icon.svg'
import location_icon from '../../assets/location_icon.svg'
const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    if(event.target.name.value===''||event.target.email.value===''||event.target.message.value===''){
      alert("Please fill all the fields")
    }
    else{

      formData.append("access_key", "b0fae418-e868-4f7d-9f96-0e4926ef616c");
      
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
      
      const data = await response.json();
      
      if (data.success) {
        // setResult("Form Submitted Successfully");
        alert("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    }
  };
  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1><span>C&nbsp;</span>ontact Me</h1>
        <hr></hr>
        {/* <img src={theme_pattern} alt=''/> */}
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>Feel free to reach out to me at any time, I'm currently available and open to connect!</p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={mail_icon} alt="" />
              <p>teja.rks@gmail.com</p>
            </div><div className="contact-detail">
              <img src={call_icon} alt="" />
              <p>+91 6305904279</p>
            </div><div className="contact-detail">
              <img src={location_icon} alt="" />
              <p>Hyderabad, Telangana</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor="">Your Name</label>
          <input type='text' placeholder='Enter Your Name' name='name' required/>
          <label htmlFor="">Your Email</label>
          <input type="email" placeholder='Enter Your Email' name='email'required />
          <label htmlFor="">Write Your Message Here</label>
          <textarea name="message" placeholder='Enter Your Message' id="" rows="8" required></textarea>
          <button className="contact-submit">Submit Now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact