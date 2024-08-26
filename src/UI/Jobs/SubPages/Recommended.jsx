import React from "react";

import { data } from "../../../Data/data";

export default function Recommended() {
  return (
    <>
      <div className="recommended" onClick={() => { alert("hiii") }}>

        <div className="card recommend-card">
          <div className="card-title">
            <p className="job-title">Mean Stack Developer</p>
            <p className="job-company">LawSikho</p>
          </div>

          <div className="job-details">
            <p>Full time</p>
            <p>Gurugram, Gurgaon / Gurugram, Noida, India</p>
            <p>0-2 Years</p>
            <p><span>security</span> <span>mentaring</span> <span>node.js</span> <span>scalability</span> <span>data protection</span></p>
          </div>
        </div>

        <div className="card recommend-card">
          <p className="job-title">Mean Stack Developer</p>
          <p className="job-company">LawSikho</p>

          <div className="job-details">
            <p>Full time</p>
            <p>Gurugram, Gurgaon / Gurugram, Noida, India</p>
            <p>0-2 Years</p>
            <p><span>security</span> <span>mentaring</span> <span>node.js</span> <span>scalability</span> <span>data protection</span></p>
          </div>
        </div>

      </div>
    </>
  );
}
