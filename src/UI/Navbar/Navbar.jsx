import React from "react"

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-md">
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
                     <button className="btn signup-btn"><img src="./Images/User/user.png" alt="" className="mr-2"/>Register</button>
                </div>
            </nav>
        </>
    )
}