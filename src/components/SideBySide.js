import React from 'react';
import Work from './work';
import WorkCard from './WorkCard';
import WorkCardCard from './WorkCardCard';
import dataBs from "../assets/project1.jpg"
import cal from "../assets/cal.jpg"
import map from "../assets/map.jpg"
import './SideBySideStle.css';

const SideBySide = () => {
  return (
        <div className='work-container'>
                <h1 className='project-heading'>Projects</h1>
                <div className='project-container'>
                <div className="component">{<Work viewLink="https://github.com/mess-ale/Employee-Managmens-database" 
                        sourceLink="https://github.com/mess-ale/Employee-Managmens-database" 
                        ProTitle="Employee Managmens" 
                        text="pythen Employee managment system" img={dataBs}/>}</div>
                <div className="component">{<WorkCard viewLink="https://github.com/mess-ale/FirstReact" 
                        sourceLink="https://github.com/mess-ale/FirstReact" 
                        ProTitle="React Calculator App" text="best React calculator app" img={cal}/>}</div>
                <div className="component">{<WorkCardCard viewLink="https://github.com/mess-ale/Mapping_technique" 
                        sourceLink="https://github.com/mess-ale/Mapping_technique" 
                        ProTitle="Mapping technique" 
                        text="Java code Mapping project" 
                        img={map}/>}</div>
                </div>
        </div>
  );
};

export default SideBySide;