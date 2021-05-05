import React from 'react';
import '../Home/Home.scss';
import Project from "../assets/img/project.png";
import Location from "../assets/img/location.png";
import Time from "../assets/img/time.png";
import JoinCall from "../JoinCall/index";
function Home() {
    return (
        <div className="continer">
            <div className="title">
Meeting Title
            </div>

            <div className="detiles">
<div className="day">
<img
className="icon"
    src= {Time} />
Monday Feb 16, 11:00AM -2:00 PM (2 hr)
</div>

<div className="projrct">
    <img
    className="icon"
    src= {Project} />
Project
</div>
<div cla="Location">
<img
className="icon"
    src= {Location} />
    Location

</div>
            </div>
            <JoinCall className="call"/>
        </div>
    )
}

export default Home
