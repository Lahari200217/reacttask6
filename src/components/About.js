
import React from "react";

function About() {
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

  const pStyle = {
    paddingLeft: "580px", // Adjust as needed
    fontSize: "30px",
  };
  const hStyle = {
    paddingLeft: "580px", // Adjust as needed
    fontSize: "50px",
    color:"yellow"
  };
  

  return (
    <div style={divStyle}>
      <div>
        <h1 style={hStyle}> About me</h1>
      <p style={pStyle}>
      Energetic and highly motivated B.Tech Computer Science student with a passion for solving complex problems through innovative technology solutions. Excited to leverage my skills in software development to contribute to cutting-edge projects in the tech industry.

        </p>
        
      </div>
    </div>
  );
}

export default About;







