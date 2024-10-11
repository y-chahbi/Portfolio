import React from 'react';

interface ContactProps {
  style?: string; // Define the style prop as an optional string
}

const Contact: React.FC<ContactProps> = ({ style }) => {
  return (
    <div id="Contact" className={`${style}`}>
      test
    </div>
  );
};

export default Contact;
