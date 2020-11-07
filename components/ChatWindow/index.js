import React, { useState } from "react";

const ChatWindow = () => {
  const [isChatOpen, setOpenChatWindow] = useState(true);
  const chatStyle =  () =>{
    return {
      height: "284px",
      width: "400px",
      position: "fixed",
      bottom: "0",
      border: "solid 1px"
    }
  }

  const chatWindowTitle = () =>{
    return {
      height: "50px",
      width: "400px",
      background: "#5e72e4",
      color: "white",
      display: "flex",
      alignItems: "center",
      padding: "10px",
      fontSize: "20px",
      fontWeight: "bold",
      fontStyle: "italic",
      position: "fixed",
      bottom: "28%",
      cursor: "pointer",
      right: "2%"
    }
  }

  const openedChatbox = () => {
    return(
    <div style={{height: "300px",width: "400px",position: "fixed",bottom: "0",right: "2%"}}>
      <div style={chatWindowTitle()} onClick={() => {setOpenChatWindow(false)}}>Eva</div>
      <div  id="webchat"  style={chatStyle()} role="main"></div> 
    </div>
  )}

  const closedChatbox = () => {
      return (
      <div style={{...chatWindowTitle(),bottom :"0"}} onClick={() => {setOpenChatWindow(true)}}>
        Eva
      </div> )
  }

  return (
    <React.Fragment>
            { (isChatOpen) ? openedChatbox() : closedChatbox() }      
    </React.Fragment>
  );
}

export default ChatWindow;
