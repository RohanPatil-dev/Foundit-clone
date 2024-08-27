import React, { useState } from "react";

import { data } from "../../../Data/data";
import { redirect } from "react-router-dom";

export default function Recommended() {

  const [selectedContainer, setSelectedContainer] = useState("")

  function handleCard(card) {
    setSelectedContainer(card)
  }

  return (
    <>
      <div className="recommended">

        {
          data.map((value, index) => {
            return (
              <>
                <div className={`card recommend-card ${selectedContainer === index ? 'selected-card' : ""}  `} onClick={() => { handleCard(index) }}>
                  {selectedContainer === index ? <span className="arrow"></span> : <></>}
                  <div className="card-title">
                    <p className="job-title">{value.name}</p>
                    <p className="job-company">{value.company_name}</p>
                  </div>

                  <div className="job-details">
                    <p>{value.type}</p>
                    <p>{value.place}</p>
                    <p>{value.experience}</p>
                    <p>
                      {value.jobs.map((data) => {
                        return (
                          <span>{data}</span>
                        )
                      })}
                    </p>
                  </div>
                </div>
              </>
            )
          })
        }
      </div>
    </>
  );
}
