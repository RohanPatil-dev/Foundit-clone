import React from "react";

export default function JobDescription() {
  return (
    <>
      <div className="card job-description">
        <div>
          <div>
            <h6>Node.js Developer</h6>
            <p>Qodic Technosoft</p>
          </div>

          <div>
            <button>Apply Now</button>
          </div>
        </div>


        <div>
          <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
              <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                  <a class="nav-link" href="#">Highlights</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">Job Description</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">More Info</a>
                </li>
                <li class="nav-item active">
                  <a class="nav-link" href="#">Recruiter Information</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>

        <div className="card">
             <p>Ahemdabaad</p>
             <p>0-2 years</p>
             <p><span>a month ago</span> <span>96</span> <span>38 Applied</span></p>
        </div>

        <div>
            <p>Job description</p>

            <ul>
              <li>Design, develop, and maintain efficient and reliable Node.js applications.</li>
              <li>Collaborate with front-end developers to integrate user-facing elements with server-side logic.</li>
              <li>Implement security and data protection measures.</li>
              <li>Optimize applications for maximum speed and scalability.</li>
              <li>Troubleshoot and debug issues as they arise.</li>
              <li>Stay up-to-date with industry trends and best practices in Node.js development.</li>
              <li>Lead and mentor junior developers, providing guidance and expertise</li>
            </ul>
        </div>

        <div>
            <p>More Info</p>

            <p>job type</p>
            <p>Permanent Job</p>

            <p>Industry</p>
            <p>Other</p>

            <p>Function</p>
            <p>technology</p>

            <p>skills</p>
            <p><span>security</span> <span>node.js</span><span>scalability</span><span>debugging</span></p>
        
            <p>About lawsikho</p>
            <p>job source lawsikho.com</p>
        </div>
      </div>
    </>
  );
}
