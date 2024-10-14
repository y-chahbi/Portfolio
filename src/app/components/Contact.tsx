import React from 'react';

interface ContactProps {
  classname?: string; // Define the classname prop as an optional string
}

const Contact: React.FC<ContactProps> = ({ classname }) => {
  return (
    <div id="Contact" className={`${classname}`}>
      test
    </div>
  );
};

export default Contact;
