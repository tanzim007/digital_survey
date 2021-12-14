import React from "react";
import { IconButton } from '@material-ui/core';
import formimage from "../images/slogo.png"
import Avatar from '@material-ui/core/Avatar';
import avatarImage from "../images/avimg.JPG"
import {FiStar, FiSettings} from "react-icons/fi"
import {AiOutlineEye} from "react-icons/ai"
import {IoMdFolderOpen} from "react-icons/io"
import ColorLensIcon from "@material-ui/icons/ColorLens"
import MoreVertIcon from "@material-ui/icons/MoreVert";
import Button from "@material-ui/core";
import "./Formheader.css"
import { useHistory } from 'react-router-dom';
import { useStateValue } from './StateProvider'
import AlertDialog from './Alert.js';

function Formheader() {
    const history = useHistory();
  const [{doc_name}, dispatch] = useStateValue();


    function navigates(){
        history.push("/response")
    }

    return(
        <div className="form_header">
            <div className="form_header_left">
                <img src = {formimage} style={{height: '50px',width: '40px'}}/>
                <input type="text" placeholder="Untitled Form" className="form_name" value={doc_name}></input>
                <IoMdFolderOpen className="form_header_icon" style={{ marginRight:"10px" }}></IoMdFolderOpen>
                <FiStar className="form_header_icon" style={{marginRight:"10px"}}></FiStar>
                <span style={{fontSize:"12px",fontWeight:"600",color:""}}>All changes saved in Drive</span>
            </div>
            <div className="form_header_right">
                <IconButton>    
                    <ColorLensIcon size="small" className="form_header_icon"/>
                </IconButton>

                <IconButton onClick={navigates} target="blank">
                    <AiOutlineEye className="form_header_icon" />
                </IconButton>


                <IconButton>  
                    <FiSettings className="form_header_icon"  />
                </IconButton>
                 <AlertDialog />
             
              
                {/*<Button variant="contained" color="primary" href="#contained-buttons">Send</Button> */}
                <IconButton>
                    <MoreVertIcon className="form_header_icon" />
                </IconButton>
                <IconButton>
                    <Avatar style={{height:"30px",width:"30px"}}  src={avatarImage}/>
                </IconButton>
            </div>

        </div>
    )
}


export default Formheader