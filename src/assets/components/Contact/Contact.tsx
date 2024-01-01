import "./Contact.css"
import {useForm,Resolver} from "react-hook-form"
import emailjs from '@emailjs/browser'


type FormValues = {
  your_name: string
  your_email: string
  message: string
}

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values. your_email? values : {},
     errors : {
      your_email: !values.your_email ? {
            type: "required",
            message: "This is required!",
          } : {
            type: "required",
            message: ""
          },
        message: !values.message ? {
            type: "required",
            message: "This is required!",
          } : {
            type: "required",
            message: ""
          } 
        }    
  }
}

function Contact(){
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({ resolver })

  const sendEmail = (formData: Record<string,unknown>) => {
    const emailData = {
      from_name: formData.your_name,
      from_email: formData.your_email,
      to_name: "Tobi",
      message: formData.message,
    };

    emailjs.send('service_bhz6eog', 'template_o4jl7u5', emailData, '-hujtdpN8h5bMz6oo')
      .then(
        (result) => {
          console.log(result.text);
          // e.target.reset();
          alert('Email Sent !')
        },
        (error) => {
          console.log(error.text);
        }
      );
    reset();
  };

  return (
    
      <section className="contact">
      <h1 className="contactPageTitle">Contact Me</h1>
        <span className="contactDesc">
          Please fill out the form below to discuss
          any work or collaboration opportunities.
        </span>

        <form className="contactForm"  onSubmit={handleSubmit(sendEmail)}>
          <input type="text" className="name" placeholder="Your Name" {...register("your_name",{
                          required: true,
                          maxLength: 20,
                          pattern: /^[A-Za-z]+$/i
                      })} />
          
          <input type="email" className="email" placeholder="Your Email"  {...register("your_email", {
                          required: true,
                          pattern: /\S+@\S+\.\S+/
                      })}/>
          {errors.your_email?.message != "" && <p className="error" >{errors.your_email?.message}</p>}
          
          <textarea className="msg" rows={5} placeholder="Your message" {...register("message",{
                          required: true,
                          pattern: /^[A-Za-z]+$/i
                      })} ></textarea>
          {errors.message?.message != "" && <p className="error">{errors.message?.message}</p>}
          
          <button type="submit" value="Send" className="submitBtn">Submit</button>
        </form>

    
      </section>
  )
};

export default Contact;
