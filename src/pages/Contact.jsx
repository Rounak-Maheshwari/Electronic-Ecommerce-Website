import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Header from "../components/Header";
import contactUs from "../images/contact-us-image.png";

function Contact() {
  return (
    <>
      <Header />
      <div className="contact-us">
        <div className="company-details">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
