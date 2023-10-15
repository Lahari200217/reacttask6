import React from "react";

function Project() {
  const divStyle = {
    backgroundImage: `url("https://i.pinimg.com/originals/fb/0f/f2/fb0ff292093b9949a4f75f67b2b7f25b.jpg")`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "600px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start", // Align content to the left
    justifyContent: "flex-start", // Align content to the left
    color: "white",
    textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
  };

  const contentStyle = {
    display: "flex",
    flexDirection: "row", // Make content elements display in a row
    alignItems: "flex-start", // Align content to the left
  };

  const textContainerStyle = {
    flex: 1, // Allow text content to take up available space
    display: "flex",
    flexDirection: "column",
  };

  const imageStyle = {
    width: "150px", 
    height: "auto",
    margin: "20px",
    marginLeft:"170px" 
  };
  const imageStyle1 = {
    width: "150px", 
    height: "auto",
    margin: "20px",
    marginLeft:"340px" 
  };
  const imageStyle2 = {
    width: "150px", 
    height: "auto",
    margin: "20px",
    marginLeft:"100px" 
  };

  return (
    <div style={divStyle}>
      <h1 style={{color:"blue"}}>Projects</h1>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={{color:"yellow"}}>Heart Health Risk Detection</h1>
          <p>
            Predicts the heart rate of a person and tells whether the person is
          </p>
          <p>
            at risk or safe using Arduino and a Machine Learning algorithm.
          </p>
        </div>
        <img
          src="https://media-bom1-2.cdn.whatsapp.net/v/t61.24694-24/343179144_762763092196194_5000108077216163234_n.jpg?ccb=11-4&oh=01_AdS8cLT412kx0N-Y1VODTjcDs_1i_V9_gIvE7jYv0gLH1w&oe=6537716D&_nc_sid=000000&_nc_cat=103"
          alt="no"
          style={imageStyle}
        />
      </div>
      <div style={contentStyle}>
        <div style={textContainerStyle}>
          <h1 style={{color:"yellow"}}>Stock Prediction</h1>
          <p>
            By taking stock price of a company and predicts
          </p>
          <p>
            its price by using LSTM.
          </p>
        </div>
        <img
          src="https://res.cloudinary.com/practicaldev/image/fetch/s--psVH86Cx--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/ci551zpjvsr4yopg9f16.jpeg"
          alt="no"
          style={imageStyle1}
        />
      </div>
      
    </div>
  );
}

export default Project;

