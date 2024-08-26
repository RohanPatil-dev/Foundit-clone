import React from "react"
import JobContainer from "./JobContainer"
import JobDescription from "./JobDescription"



export default function JobPages() {
  return (
    <>
        <div className="gridy-job">
            <JobContainer />
            <JobDescription />
        </div>
    </>
  )
}