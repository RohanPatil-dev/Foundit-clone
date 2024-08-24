import React from "react"

export default function Signup() {
    return (
        <>
            <div className="signup">
                <div className="signup-forms">
                    <h5 style={{ fontWeight: "bold" }}>Create your account</h5>

                    <hr />

                    <div className="signup-links">
                        <div><button> <img src="./Images/Site/google.png" alt="" className="icon" /> Google</button></div>
                        <div><button> <img src="./Images/Site/facebook.png" alt="" className="icon" /> Facebook</button></div>
                    </div>

                    <hr className="mt-5" />

                    <div class="form-row">
                        <div class="form-group col-md-4">
                            <label htmlFor="contact">Mobile Number</label>
                            <select id="inputState" class="form-control" style={{ height: "45px" }}>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                            </select>
                        </div>

                        <div class="form-group col-md-8">
                            <label htmlFor="contact"></label>
                            <input type="tel" class="form-control mt-2" id="contact" placeholder="Enter your mobile number" />
                        </div>
                    </div>

                    <div class="form-group">
                        <label for="email">Email ID</label>
                        <input type="email" class="form-control" id="email" placeholder="Enter Email ID" />
                    </div>

                    <div class="form-group">
                        <label for="password">Password</label>
                        <input type="password" class="form-control" id="password" placeholder="Minimum 6 characters" />
                    </div>

                    <div className="warning">
                        <div className="ml-2"><img src="./Images/User/warning.png" alt="" height="22px" /></div>
                        <div className="warning-text">
                            <p>Ensure recruiters see the most current version of your profile. You can easily disable this feature later in your settings.</p>
                        </div>
                    </div>

                    <p className="terms">By clicking on 'Continue' I agree to Foundit's <a href="">Terms and Conditions</a>, <a href="">Privacy Policy</a> and default mailer and communications settings governing the use of <a href="">foundit.in</a>.</p>
                </div>

                <div className="signup-banner">
                    <img src="./Images/User/findPerfectPath.webp" alt="" />
                </div>

                <button className="btn w-25 signin-submit">Continue <img src="./Images/User/arrow.png" alt=""/></button>
            </div>
        </>
    )
}