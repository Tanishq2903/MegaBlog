import React from "react";

export default function Button({
    children,
    type = "button",
    bgColor = "bg-black",
    textColor = "text-white",
    
    className = "",
    ...props
}) {
    return (
        <button className={`px-4 py-2 rounded-lg bg-pink-600 shadow-lg shadow-pink-600/600 transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300 ${bgColor} ${textColor} ${className}`} {...props}>
            {children}
        </button>
    );
}