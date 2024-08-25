import React from "react"
import Jobs_Nav from "./Jobs_Nav"
import Job_filter from "./Job_filter" 
import Index_Footer from "../Index/Index_Footer"

export default function Jobs() {
  return (
    <>
       <Jobs_Nav/>
       <Job_filter/>
       <Index_Footer/>
    </>
  )
}