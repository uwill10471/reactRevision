import React from "react";

function Button(
    {children},
    type = 'button',
    bgColor = 'bg-blue-600',
    textColor = 'text-white',
    className ='',
    ...props //any other value tht can be passed is spread here
){
    return(
        <>
      <button className={`px-4 py-4 rounded-lg ${bgColor} ${textColor} ${className}`} {...props}>{children}</button>
        {/* //Btntext value = children */}
        </>
    )
}

//forwardRef hook is used when for ex this btn export can be used anywhere and to link with tht place through a referance we use forward ref