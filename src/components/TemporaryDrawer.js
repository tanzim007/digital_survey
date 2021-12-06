import React from "react";
import MenuIcon from "@material-ui/icons/Menu"
import { IconButton } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer"
import List from "@material-ui/core/List"
import ListItem from "@material-ui/core/ListItem"
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

import {FiSettings} from "react-icons/fi"
import {BsQuestionCircle} from "react-icons/bs"
//import formmimage from "..images/slogo.png"
//import excellsheetimage from "..images/Sheets.png"
//import docimage from "..images/Docs.png"
//import slideimage from "..images/Slides.png"
//import driveimage from "..images/Drive.png"

function TemporaryDrawer(){
    const [state,setState] = React.useState({
        left: false
    })

    const toggleDrawer = (anchor, open) => (event) => {
        setState({...state, [anchor]: open});
    };

    const list = (anchor)=> (
        <div style={{width:"250px"}}role= "presentation">
            <Divider/>
            <List>

                <ListItem>
                    <ListItemText style={{fontSize:"50px",marginLeft:"5px"}}>

                    <span style = {{color:"#281D52",fontWeight:"500",fontSize:"30px",fontFamily:"Roboto"}}>
                        User Interface
                    </span>

                    </ListItemText>
                    
                </ListItem>

            </List>
            <Divider/>
            <List>
                <ListItem>
                    <FiSettings/>
                    <div style={{marginLeft:"5px"}}>Settings</div>
                </ListItem>
                <ListItem>
                    <BsQuestionCircle/>
                    <div style={{marginLeft:"5px"}}>Help & FeedBack</div>
                </ListItem>
            </List>
        </div>
    )
    return (
        <div>

            <React.Fragment>
            <IconButton onClick={toggleDrawer("left",true)}>
                <MenuIcon/>
            </IconButton>

            <Drawer open={state['left']} onClose={toggleDrawer("left",false)} anchor={'left'}>

                {list('left')}

            </Drawer>
            </React.Fragment>

        </div>
    )
}

export default TemporaryDrawer