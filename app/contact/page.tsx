// app/pages/contact.tsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import Map from '../components/Map';

const ContactPage = () => {
  return (
    <div className="container mx-auto px-5 py-10 md:px-20">
      <h1 className="text-4xl font-bold text-center text-primary mb-8">Get in Touch</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <ContactForm />
        <Map />
      </div>
    </div>
  );
};

export default ContactPage;
