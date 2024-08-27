import React from "react"
import JobPages from "./SubPages/JobPages"


export default function Job_filter() {
    return (
        <>
            <div className="" style={{width : "80rem",marginLeft : "80px"}}>
                <div>
                    <nav class="navbar navbar-expand-lg mt-4 job-filter">
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav mr-auto">
                                <li class="nav-item active ">
                                    <a class="job-filter-link" href="#">Recommended</a>
                                </li>
                                <li class="nav-item active">
                                    <a class="job-filter-link" href="#">Applied</a>
                                </li>
                                <li class="nav-item active" style={{color : "purple"}}>
                                    <a class=" job-filter-link" href="#">Saved</a>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>

                <JobPages/>
            </div>

  
        </>
    )
}