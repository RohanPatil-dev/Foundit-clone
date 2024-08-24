import React, { useState } from "react";
import Index_Nav from "./Index_Nav";
import { rankItem } from "@tanstack/match-sorter-utils";
import Skills from "./Skills";

export default function Index_Banner() {

  const [isActive, setIsActive] = useState(false);

  const [selectedOption, setSelectedOption] = useState("Experience");


  const toggleMenu = () => {
    setIsActive(!isActive);
  };


  const handleOptionClick = (optionText) => {
    setSelectedOption(optionText);
    setIsActive(false);
  };

  return (
    <>

      <div className="banner">
        <Index_Nav />

        <div className="index-banner">
          <div className="index-description">
            <span className="mt-2">Over 7,00,000+</span> <br />
            <span>jobs to explore</span>
          </div>

          <div className="form-capsule">
            <input type="text" className="input-field" placeholder="Search by job,company or skills" />
            <input type="text" className="input-fields" placeholder="Location" />

            <div className={`select-menu ${isActive ? "active" : ""}`}>
              <div className="select-btn" onClick={toggleMenu}>
                <span className="sBtn-text text-secondary">{selectedOption}</span>
                <i className="bx bx-chevron-down"></i>
              </div>
              <ul className="options">
                {["Fresher (Less than 1 year)", "1 Year", "2 Years", "3 Years", "4 Years", "5 Years", "6 Years", "7 Years", "8 Years", "9 Years", "10 Years", "11 Years", "12 Years", "13 Years", "14 Years", "15 Years", "16 Years", "17 Years", "18 Years", "19 Years", "20 Years", "21 Years", "22 Years", "23 Years", "24 Years", "25 Years"].map(
                  (option) => (
                    <li
                      key={option}
                      className="option"
                      onClick={() => handleOptionClick(option)}
                    >
                      <i className={`bx bxl-${option.toLowerCase()}`}></i>
                      <span className="option-text">{option}</span>
                    </li>
                  )
                )}
              </ul>
            </div>

            <button className="submit-btn">Submit</button>
          </div>
        </div>

        <Skills/>

        
      </div>


    </>
  );
}
