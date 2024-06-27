import ContactForm from '../components/ContactForm';
import '../src/index.css';

const ContactPage = () => {
  const pageStyle = {
    minHeight: '100vh',
    backgroundColor: '#1a202c',
    color: '#edf2f7', 

    padding: '2rem',
  };

  return (
    <div style={pageStyle}>
      <ContactForm />
    </div>
  );
};

export default ContactPage;
