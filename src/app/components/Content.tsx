import React, { FC } from 'react'

interface PassContent {
    children : React.ReactNode,
    style: string
}

const Content: FC<PassContent> = ({children, style}) => {

    const childrenWithProps = React.Children.map(children, child => {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { style }); // Pass the data as a prop
        }
        return child; // Return non-element children as-is
    });


  return (
    <div>
      {childrenWithProps}
    </div>
  )
}

export default Content
