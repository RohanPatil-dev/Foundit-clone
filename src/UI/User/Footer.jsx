import React from "react"

export default function Footer() {
  return (
    <>
      <div className="user-footer">
        <div className="telephone">
          <div><img src="./Images/Footer/telephone.png" alt="" /></div>
          <div>
            <p>Toll No : +91-40-66116611</p>
            <p>Toll Free No: 1-800-4196666</p>
          </div>
        </div>

        <div className="email">
          <div><img src="./Images/Footer/email.png" alt="" /></div>
          <div>
            <p>info@foundit.in</p>
          </div>
        </div>

        <div className="media">
          <div><button><img src="./Images/Footer/instagram.png" alt="" /></button></div>
          <div><button><img src="./Images/Footer/linkedin.png" alt="" /></button></div>
          <div><button><img src="./Images/Footer/twitter.png" alt="" /></button></div>
          <div><button><img src="./Images/Footer/facebook.png" alt="" /></button></div>
        </div>

      </div>

      <div className="text-center p-2">
        © 2024 foundit | All rights Reserved
      </div>
    </>
  )
}