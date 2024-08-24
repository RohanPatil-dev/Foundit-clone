import React from "react"

import Marquee from "react-fast-marquee";

const images = [
  "./Images/Companies/apple.png",
  "./Images/Companies/capgemini.png",
  "./Images/Companies/tcs.png",
  "./Images/Companies/ultratech-cement.png",
  "./Images/Companies/Wipro.png",
]

export default function Company() {
  return (
    <>
      <div className="company-carousel">
        <div className="feature">
          <span>Featured </span> <br/>
          <span> Companies</span>
        </div>
        <span style={{borderRight : "1px solid gray",color :"gray"}} className="ml-3"></span>
        <div className="ml-3" style={{ width: "70rem" }}>
          <Marquee>
            {
              images.map((value) => {
                return (
                  <>
                    <div className="ml-5">
                      <a href=""><img src={`${value}`} height="50px" /></a>
                    </div>
                  </>
                )
              })
            }
          </Marquee>
        </div>
      </div>
    </>
  )
}