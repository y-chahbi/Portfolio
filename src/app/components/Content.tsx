import React, { FC, ReactElement } from 'react';

interface PassContent {
  children: React.ReactNode;
  className?: string; // Change style to className to reflect usage
}

const Content: FC<PassContent> = ({ children, className }) => {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child as ReactElement, {
        className: `${child.props.className || ''} ${className || ''}`, // Merge class names safely
      });
    }
    return child; // Return non-element children as-is
  });

  return <div>{childrenWithProps}</div>;
};

export default Content;
