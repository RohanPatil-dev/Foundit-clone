import React from "react"

export default function Index_Nav() {
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
                    <ul class="navbar-nav mr-auto navbar-element">
                        <li class="nav-item active">
                            <a class="nav-link text-dark" href="#">Jobs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Career Advice</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-dark" href="#">Certifications</a>
                        </li>
                    </ul>

                    <div className="index-btn">
                    <button className="btn index-btn_1"><img src="./Images/User/user-log.png" alt="" className="mr-2" />Login</button>
                    <button className="btn index-btn_2"><img src="./Images/User/user.png" alt="" className="mr-2" />Register</button>
               
                    <button className="btn employer-login">Employers Login</button>
                    </div>
          
                </div>
            </nav>

        </>
    )
}