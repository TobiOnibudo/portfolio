import "../../Styles/Contact.css"

function Contact(){
  return (
    <section className="contact">
     <h1 className="contactPageTitle">Contact Me</h1>
      <span className="contactDesc">
        Please fill out the form below to discuss
        any work or collaboration opportunities.
      </span>

      <form action="" className="contactForm">
        <input type="text" className="name" placeholder="Your Name" />
        <input type="text" className="email" placeholder="Your Email"/>
        <textarea className="msg" name="message" rows={5} placeholder="Your message"></textarea>
        <button type="submit" value="Send" className="submitBtn">Submit</button>
      </form>

   
    </section>
  )
};

export default Contact;
