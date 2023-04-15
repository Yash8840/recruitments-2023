import "./App.css";
import Footer from "./Footer";
import Home from "./Home";
import Landing from "./Landing";
import React, { useState, useEffect } from "react";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [isLoading, setIsLoading] = useState(true);

  let content;
  if (isLoading) {
    content = 
      <>
        <div className="loader">
          <ClipLoader
            color="yellow"
            loading={isLoading}
            // cssOverride={override}
            size={100}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        </div>
      </>
    
  } else {
    content = 
      <>
        <div className="App">
          <Landing />
          <Home />
          <Footer />
        </div>
      </>
    
  }

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  });

  return <>{ content }</>;
}

export default App;
