import React, { useState } from "react";

import { FaSearch } from "react-icons/fa";

export default function Jobs_Nav() {

    const [isActive, setIsActive] = useState(false);

    const [selectedOption, setSelectedOption] = useState("Experience");


    const toggleMenu = () => {
        setIsActive(!isActive);
    };


    const handleOptionClick = (optionText) => {
        setSelectedOption(optionText);
        setIsActive(false);
    };

    const [dropdownVisible, setDropdownVisible] = useState(false);

    const toggleDropdown = () => {
        setDropdownVisible(!dropdownVisible);
    };

    return (
        <>
            <nav className="navbar navbar-expand-md index-nav">
                <a className="navbar-brand" href="#">
                    <div class="logo">
                        <span>fo</span>
                        <div class="flip-img">
                            <img src="./Images/User/rainbow.png" alt="Image 1" class="img1" />
                            <img src="./Images/User/shuttle.png" alt="Image 2" class="img2" />
                        </div>
                        <span>ndit</span>
                    </div>
                </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-2 navbar-element">
                        <li class="nav-item active">
                            <a class="nav-link text-dark" href="#">Jobs</a>
                        </li>
                    </ul>

                    <div className="jobs-capsule">
                        <input type="text" className="jobs-input-field" placeholder="Search by job,company or skills" />
                        <input type="text" className="job-input-fields" placeholder="Location" />

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

                        <button className="jobs-submit-btn"><FaSearch /></button>
                    </div>

                    <div className="ml-4 mt-1">
                        <a href=""><img src="./Images/User/bell.png" height="30px" alt="" /></a>
                    </div>



                    <div className="user-dropdown">
                        <div className="user-info" onClick={toggleDropdown}>
                            <img
                                src="./Images/User/user.png"
                                alt="User Profile"
                                className="user-img"
                            />
                            <span className="user-name">Hi,Rohan</span>
                            <div className={`menu-icon ${dropdownVisible ? 'open' : ''}`}>
                                <span className="line" style={{ width: "30px" }}></span>
                                <span className="line" style={{ width: "20px" }}></span>
                                <span className="line" style={{ width: "13px" }}></span>
                            </div>
                        </div>

                        {dropdownVisible && (
                            <div className="dropdown-content">
                                <div className="dropdown-item">
                                    <img
                                        src="./Images/User/user.png"
                                        alt="User Profile"
                                        className="dropdown-img"
                                    />
                                    <span className="dropdown-text">View Profile</span>
                                </div>

                                <div className="dropdown-item">
                                    <img
                                        src="./Images/User/settings.png"
                                        alt="User Profile"
                                        className="dropdown-img"
                                    />
                                    <span className="dropdown-text">My Account</span>
                                </div>

                                <div className="dropdown-item">
                                    <img
                                        src="./Images/User/logout.png"
                                        alt="User Profile"
                                        className="dropdown-img"
                                    />
                                    <span className="dropdown-text">Logout</span>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </nav>

        </>
    )
}