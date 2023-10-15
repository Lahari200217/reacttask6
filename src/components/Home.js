
import React from "react";

function Home() {
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

  const headingStyle = {
    paddingLeft: "180px", // Adjust as needed
    fontSize: "50px",
    
  };

  return (
    <div style={divStyle}>
      <div>
        <h1 style={headingStyle}>Hello!</h1>
        <h1 style={headingStyle}>I am Takkasila Lahari</h1>
        <h1 style={headingStyle}> I am Fullstact Web developer</h1>
        
      </div>
    </div>
  );
}

export default Home;



// echo "# reacttask-6" >> README.md
// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/Lahari200217/reacttask-6.git
// git push -u origin main
