import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

function Copyright() {
  return (
    <div>
       <div
          className="mt-1 rounded-4 text-center  d-flex justify-content-center align-items-center"
          style={{ backgroundColor: "#D28E26", height: "2rem" }}
        >
          <div>
            <img
              src="/copyright.png"
              alt="Twitter X Logo"
              width="26"
              height="26"
            />
          </div>
          2024 - DUZO
        </div>
    </div>
  )
}

export default Copyright
