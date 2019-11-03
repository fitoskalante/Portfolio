import React from "react";

export default function SocialIcons() {
  return (
    <div className="container d-flex flex-row justify-content-center py-3">
      <a href="https://github.com/fitoskalante" className="social-icons">
        <i className="fab fa-github fa-2x mx-3"></i>
      </a>
      <a href="https://www.behance.net/ricardocuevas" className="social-icons">
        <i className="fab fa-behance-square fa-2x mx-3"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/ricardo-cuevas-163482196"
        className="social-icons"
      >
        <i className="fab fa-linkedin fa-2x mx-3"></i>
      </a>
    </div>
  );
}
