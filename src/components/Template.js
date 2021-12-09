import React from "react";
import MoreVertIcon from "@material-ui/icons/MoreVert"
import { IconButton } from "@material-ui/core";
import UnfoldMoreIcon from "@material-ui/icons/UnfoldMore"
import "./Template.css"
import blank from "../images/blank.png"
import party from "../images/Event1.png"
import contact from "../images/Contact.png"

function Template() {
    
    return (
        <div className="template_section">
            <div className="template_top">
                <div className="template_left">
                    <span style={{fontSize:"15px", color:"#202124"}}>Start New Form</span>
                </div>
                <div className="template_right">
                    <div className="gallery_button">
                        Template Gallery
                        <UnfoldMoreIcon fontSize="small"/>
                    </div>
                    <IconButton>
                        <MoreVertIcon fontSize="small"/>
                    </IconButton>
                </div>
            </div>
            <div className="template_body">
                <div className="card">
                    <img src={blank} alt="no image" className="card_image"/>
                    <p className="card_title">Blank</p>
                </div>
                <div className="card">
                    <img src={contact} alt="no image" className="card_image"/>
                    <p className="card_title">Contact Informations</p>
                </div>
                <div className="card">
                    <img src={party} alt="no image" className="card_image"/>
                    <p className="card_title">Event Registrations</p>
                </div>
            </div>
        </div>
    )

}

export default Template