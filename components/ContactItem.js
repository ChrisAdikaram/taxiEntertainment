import React from "react";

function ContactItem({ text, Icon }) {
  return (
    <div className="flex justify-start w-full my-3 group">
      <div className="flex items-center justify-center">
        <Icon className="w-6 h-6 cursor-pointer text-footericoncolor group-hover:text-appyellow" />
      </div>
      <p className="  pl-2 text-base font-medium cursor-pointer text-footericoncolor group-hover:text-appyellow">
        {text}
      </p>
    </div>
  );
}

export default ContactItem;
