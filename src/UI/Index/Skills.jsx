import React from "react"
import Company from "./Company"

export default function Skills() {
  return (
    <>
       <div className="company">
        <h2>Find the perfect job for YOU</h2>

        <div className="mt-4 skills">
            <button><img src="./Images/skills/boost.png" alt="" /></button>
            <button><img src="./Images/skills/prep.png" alt="" /></button>
            <button><img src="./Images/skills/learn.png" alt="" /></button>
            <button><img src="./Images/skills/network.png" alt="" /></button>
        </div>

        <Company />
       </div>
    </>
  )
}