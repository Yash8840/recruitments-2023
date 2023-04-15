import React from "react";
import "./Home.css";
import img1 from "./images/Img1.png";
import img2 from "./images/Img2.png";
import img3 from "./images/cuate.png";
import img4 from "./images/Img4.png";

const Home = () => {
  return (
    <div class="home">
      <div className="up">
        <div className="upl">
          <h1 className="deshead">
            <span className="lalwa">Design</span>Task
          </h1>
          <img src={img1} className="img1" alt="" />
          <div className="content">
            <ul className="content-ul">
              
              <li>You are required to choose <span style={{color: 'blue'}}>any one</span>  task from <a href="https://docs.google.com/document/d/188dap7BANwUKOZbesbJk_gvrh-YrXPiFVN4YPQ17Yj4/edit?usp=sharing" target="#"><span className="lalwa">here</span></a></li>
              <li>
                The task deadline is 1pm IST on 16-04-2023
              </li>
              <li>Task should be submitted below </li>
              
              
              <div className="button-list" style={{listStyle: 'none'}}><a href="https://forms.gle/m6ngS5HN6G9FZmmE9" target="#"><button className="button">Submit Task</button></a></div>
            </ul>
          </div>
          
        </div>
        {/* </div> */}

        <div className="upr">
          <h1 className="webhead">
            <span className="lalwa">Web</span> Task
          </h1>
          <img src={img2} className="img2" alt="" />
          <div className="content web-content">
            <ul className="content-ul">
              <li>
                Using the design provided <a href="https://www.figma.com/file/cvqqauOG5OhZHsLuWGnvap/Figma-Website-Template---Landing-Page-(Free)-(Community)?node-id=0%3A88&t=YO6wJdS4mHuyTxPS-1" target="#">here</a>,
                make a visually appealing and responsive website.
              </li>
              <li>Your site must be responsive to different screen sizes.</li>

              <li>You can find the assets <a href="https://drive.google.com/drive/folders/1xLKQLzGiRzqcM8C3b6Tq2-bGpHHrQsuS?usp=sharing" target="#"><span className="lalwa">here</span></a></li>
              <li>The task deadline is 1pm IST on 16-04-2023.</li>
              <li>
                P.S. You get extra points for hosting your site on dedicated
                platforms like <a href="https://www.netlify.com/" target="#">netlify</a> and{" "}
                <a href="https://github.com/" target="#">github</a> :)
              </li>
              <div className="button-list" style={{listStyle: 'none'}}><a href="https://forms.gle/eyDQbm1sV9Atn56V6" target="#"><button className="button">Submit Task</button></a></div>
            </ul>
          </div>
        </div>
      </div>
      {/* </div> */}
      <div className="down">
        <div className="dwnl">
          <h1 className="Programminghead">
            <span className="lalwa">Programming</span> Contest
          </h1>
          <img src={img3} className="img3" alt="" />
          <div className="content">
            <ul className="content-ul">
              <li>The contest will be held on Hackerank.com .</li>
              <li>It will be of 2.5 hours and will contain 5 questions.</li>
              <li>
                The contest timing will be from 4pm to 6:30pm IST on 15-04-23.
              </li>
              <li>
                Please sign up on Hackerrank.com before attempting the quiz.
              </li>
              <div>
                <a href="http://www.hackerrank.com/mmil-programming-club-rd2
" target="#">Click Here</a> to go the contest page.
              </div>
              
            </ul>
          </div>
        </div>
        {/* </div> */}
        <div className="dwnr">
          <h1 className="Andoidhead">
            <span className="lalwa">Android</span> Task
          </h1>
          <img src={img4} className="img4" alt="" />
          <div className="content android-content">
            <ul className="content-ul">
            <li>You are required to make a unit Converter app</li>
              
                <li>Task details can be found <a href="https://docs.google.com/document/d/18iWFae1967dux6tHVBjs5wmvMB6uzqnPx_mZ_mpUf2c/edit?usp=sharing" target="#"><span className="lalwa">here</span></a></li>
                <li>The task deadline is 1pm IST on 16-04-2023</li>
              
              <li>Task should be submitted below </li>
              
              
              <div className="button-list" style={{listStyle: 'none'}}><a href="https://forms.gle/qFs8dfrDJMtbKE4o9" target="#"><button className="button">Submit Task</button></a></div>
            </ul>
          </div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Home;
