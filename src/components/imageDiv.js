import React from "react";



function ImageDiv(props){

        console.log("this is in ImageDiv " + props)
        return(
            <img className = "actualImage" src={props.imageSrc} onClick = {props.onClick}></img>
        )
    }
    




export default ImageDiv;

