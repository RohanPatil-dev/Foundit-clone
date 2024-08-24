import React from "react"

export default function Signin() {
    return (
        <>
            <div className="signin">
                <div className="signin-img">
                    <img src="./Images/User/login.png" alt="Image Not Found !" />
                    <p>Create your profile now and be visible to the top recruiters in the world</p>
                </div>

                <div className="signin-form">
                    <p>New to foundit? <a href="" className="link">Register</a></p>

                    <h5 className="form-title">You have logged out successsfully!</h5>

                    <div className="login-links">
                        <div><button> <img src="./Images/Site/google.png" alt="" className="icon" /> Google</button></div>
                        <div><button> <img src="./Images/Site/linkedin.png" alt="" className="icon" /> Linkedin</button></div>
                        <div><button> <img src="./Images/Site/facebook.png" alt="" className="icon" /> Facebook</button></div>
                    </div>

                    <hr />

                    <div class="form-group">
                        <label for="text">Email ID/Phone Number</label>
                        <input type="text" class="form-control" id="text" aria-describedby="emailHelp" placeholder="Enter Email ID/Phone Number" />
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" aria-describedby="emailHelp" placeholder="Enter your password" />
                    </div>

                    <button className="btn signup-submit">Login</button>
                </div>
            </div>
        </>
    )
}