import React, { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import logo from "../image/TeamTimLogo.png";
import "./topStyles.css";

// Example of company data for the dropdown
const companies = [
  { id: "tech-innovations", name: "Tech Innovations Ltd." },
  { id: "creative-designs", name: "Creative Designs Co." },
  { id: "global-enterprises", name: "Global Enterprises" },
  { id: "smart-solutions", name: "Smart Solutions" },
  { id: "digital-creations", name: "Digital Creations" },
  { id: "blue-tech", name: "Blue Tech Ltd." },
  { id: "eco-industries", name: "Eco Industries" },
  { id: "next-gen-systems", name: "Next Gen Systems" },
];

function TopNav() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <img height={100} src={logo} alt="Logo" />
          <p className="name">Team Tim</p>
        </div>
        <div className="nav-right">
          <button>
            <Link to="/">Introduction</Link>
          </button>
          <div
            className="dropdown"
            onMouseEnter={() => setShowDropdown(true)}
            onMouseLeave={() => setShowDropdown(false)}
          >
            <button className="hoola">Our Companies</button>
            {showDropdown && (
              <div className="dropdown-content">
                {companies.map((company) => (
                  <Link key={company.id} to={`/company/${company.id}`}>
                    {company.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <button>
            <Link to="/analysis">Analysis</Link>
          </button>
        </div>
      </nav>
      <Outlet />
    </>
  );
}

export default TopNav;