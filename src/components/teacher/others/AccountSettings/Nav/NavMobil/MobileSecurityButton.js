import React from "react";

function MobileSecurityButton() {
  return (
    <li className="nav-item">
      <a href="#security" data-toggle="tab" className="nav-link has-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="feather feather-shield"
        >
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
        </svg>
      </a>
    </li>
  );
}

export default MobileSecurityButton;
