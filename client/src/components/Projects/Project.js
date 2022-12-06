import * as React from "react";
import './Project.css';
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {useNavigate} from 'react-router-dom';



export default function Project() {
    const navigate=useNavigate();
    const navigateProject = () => {
        navigate('/events/project');
      };
      const navigateHubs= () => {
        navigate('/events/hubs');
      };
      const navigateNotice = () => {
        navigate('/events/notice');
      };
      const navigateQueries = () => {
        navigate('/events/queries');
      };
    
  return (
    <div className="cards_name">
        <div className="card_name">
        <img className="image_project" src="https://upload.wikimedia.org/wikipedia/commons/7/7c/Infinite-corridor-bboard.jpeg"></img>
        <div class="container_name">
            <h4><b>Bulletin Board</b></h4>
            <p>Notices Related to College</p>
            <button onClick={navigateNotice} class="button-3" role="button">Click</button>
        </div>
    </div>
    <div className="card_name">
        <img className="image_project" src="https://149695847.v2.pressablecdn.com/wp-content/uploads/2020/01/top-10-DS-projects.png"></img>
        <div class="container_name">
            <h4><b>Projects</b></h4>
            <p>Check Projects Created by the sudents</p>
            <button onClick={navigateProject} class="button-3" role="button">Click</button>
        </div>
    </div>
    <div className="card_name">
        <img className="image_project" src="https://thesoftwarepro.com/wp-content/uploads/2017/09/access-queries.png"></img>
        <div class="container_name">
            <h4><b>Queries</b></h4>
            <p>Ask your queries</p>
            <button onClick={navigateQueries} class="button-3" role="button">Click</button>
        </div>
    </div>
    <div className="card_name">
        <img className="image_project" src="https://aimhigherwm.ac.uk/wp-content/uploads/2020/10/UniFest-1000x570.jpg"></img>
        <div class="container_name">
            <h4><b>HUBS Events</b></h4>
            <p>Check for College HUBS Events</p>
            <button onClick={navigateHubs} class="button-3" role="button">Click</button>
        </div>
    </div>
    </div>
    
    
  );
}
