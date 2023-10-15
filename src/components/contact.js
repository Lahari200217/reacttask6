import React from "react";

function Contact() {
  const divStyle = {
    backgroundImage: `url("https://images8.alphacoders.com/496/thumb-1920-496002.png")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "600px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const socialMediaStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const iconStyle = {
    width: "50px", // Adjust the size of the social media icons as needed
    height: "auto",
    margin: "10px", // Adjust the margin between icons as needed
  };

  return (
    <div style={divStyle}>
      <div>
        <h1 style={{fontSize: "50px",color:"yellow"}}>Contact Me</h1>
        <div style={socialMediaStyle}>
          <a href="https://www.instagram.com/takkasila_lahari/">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs6GwM3phZ5uPWKijlHVND3v0nkpOkp_vXtw&usqp=CAU"
              alt="Instagram"
              style={iconStyle}
            />
          </a>
         
          <a href="https://www.linkedin.com/in/lahari-takkasila-813718238/">
            <img
              src="https://cdn-icons-png.flaticon.com/512/1384/1384030.png" // Replace with your LinkedIn icon URL
              alt="LinkedIn"
              style={iconStyle}
            />
          </a>
          <a href="https://github.com/Lahari200217">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ56BguU8Yp8A0xTOcNRStrYIfuzUbkF8MFJw&usqp=CAU" // Replace with your GitHub icon URL
              alt="GitHub"
              style={iconStyle}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
