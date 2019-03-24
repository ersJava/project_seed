import React from 'react'

const LogInLayout = (props) => (
   
        <div className="ui center aligned very padded grid">
            <div className="ten wide white column leftPanel">
                <h1>Start GROWING your skills with Project Seed!</h1>
                <h2>Project Seed is a friendly online community
                    for new developers who want to work on awesome projects, start a team
            or have an exciting idea for a new application!</h2>

                {/* ================= Current Project Grid=================*/}
             {props.children}
            </div>
        </div>
        {/* ================= End Panel Layout================= */}
   
)

export default LogInLayout