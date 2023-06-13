import React from "react";

function FooterSocialIcon({ href, IconType }) {
  return (
    <li className="inline-block">
      <a
        className="block w-12 h-12 text-center transition duration-75 delay-75 bg-transparent hover:border-primary hover:text-appyellow text-footericoncolor"
        aria-label="facebook"
        href={href}
        target="_blank"
        rel="noopener noreferrer nofollow"
      >
        <IconType className="w-6 h-6" />
      </a>
    </li>
  );
}

export default FooterSocialIcon;
