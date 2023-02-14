
import './App.css';
// import LoadingBar from 'react-top-loading-bar'
import React from 'react'
import Navbar from "./component/navbar";
import News from "./component/news";
// import {useState} from "react";
// import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route

} from "react-router-dom";
const App=()=>  {

  const apikey=process.env.REACT_APP_NEWS_API
// const [progress,setprogress]= useState(10)
// setprogress(100)
  
    return (
      <div>
        <Router>
          <Navbar />
          {/* <LoadingBar
        color='#f11946'
        height={5}
        progress={progress}
        // onLoaderFinished={() => setProgress(0)}
      /> */}
          <Routes>
        <Route exact path="/" element={<News apikey={ apikey} key="general" country="in" category="general"/>} />
        <Route exact path="/general" element={<News apikey={ apikey} key="general" country="in" category="general"/>} />
        <Route exact path="/sports" element={<News apikey={ apikey} key="sports" country="in" category="sports"/>} />
        <Route exact path="/science" element={<News apikey={ apikey} key="science" country="in" category="science"/>} />
        <Route exact path="/entertainment" element={<News apikey={ apikey} key="entertainment" country="in" category="entertainment"/>} />
        <Route exact path="/business" element={<News apikey={ apikey} key="business" country="in" category="business"/>} />
        <Route exact path="/technology" element={<News apikey={ apikey} key="technology" country="in" category="technology"/>} />
        <Route exact path="/health" element={<News apikey={ apikey} key="health" country="in" category="health"/>} />
      </Routes>

        </Router>
 

      </div>
    )
  }
  export default App;

