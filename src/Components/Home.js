import React from "react";
import "./Home.css";

import { NavLink, Outlet } from "react-router-dom";
import { useState, useEffect } from "react";
var photo = [
  {
    id: 1,
    url: "https://i.natgeofe.com/k/2017a666-2bc2-406e-9a59-b1ce11f023ce/AUG-22-cover-fb.jpg",
    heading: "NAT GEO Kidz Magazine",
    descryption:
      " This Project Is developed by Reactjs and its backend is developed by nodejs and expressjs ,for database purpose MongoDB is used.",
  },
  {
    id: 2,
    url: "https://images.newscientist.com/wp-content/uploads/2022/05/26114929/SEI_106436363.jpg",
    heading: "TEXT TO IMAGE BY AI",
    descryption:
      "This Project Is developed by Reactjs and its backend is developed by nodejs and expressjs ,for database purpose MongoDB is used,and it is a AI based Project where DALL-E-AI is used.",
  },
  {
    id: 3,
    url: "https://www.grabon.in/indulge/wp-content/uploads/2021/03/Booking-ticket-on-BookMyShow.jpg",
    heading: "BOOK MY SHOW",
    descryption:
      "This Project Is developed by Reactjs and its backend is developed by nodejs and expressjs ,for database purpose MongoDB is used.in this project play are availavle , you can filter as your requirement.",
    link: "https://streampage.vercel.app/",
  },
];
var n = photo.length;
console.log(n);
function Home() {
  const [ph, setph] = useState(0);
  function setphoto(event) {
    if (event.target.id === "btn2") {
      setph((ph + 1) % n);
    }
    if (event.target.id === "btn1") {
      setph((ph - 1 + n) % n);
    }
  }
  useEffect(() => {
    const interval = setInterval(() => {
      setph((ph + 1) % n);
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  }, [ph]);
  return (
    <>
      <div className="body">
        <div className="contact-icons">
          <div className="icon1">
            <a href="https://www.linkedin.com/in/alok-kumar-80485822a/">
              <i class="fa-brands fa-linkedin"></i>
            </a>
          </div>
          <div className="icon2">
            <i class="fa-brands fa-square-whatsapp"></i>
          </div>
          <div className="icon3">
            <a href="https://www.facebook.com/">
              {" "}
              <i class="fa-brands fa-square-facebook"></i>
            </a>
          </div>
          <div className="icon4">
            <a href="https://github.com/Alokcseit">
              {" "}
              <i class="fa-brands fa-square-github"></i>
            </a>
          </div>
          <div className="icon5">
            <i class="fa-solid fa-envelope"></i>
          </div>
        </div>
        <div className="image">
          <img
            className="myimg"
            src="https://beautiful-sunflower-76de96.netlify.app/image/happy-man-points-something-character-advertisement-guy-shows-direction-with-hand-cartoon-style_165429-917.webp"
            alt=""
          />
        </div>
        <div className="title-descryption">
          <div className="title">I'am a Web Developer</div>
          <div className="titlea">Alok Ku. Swain </div>
          <br />
          <p className="paragraph-descryption">
            Hi, My Name is ALOK KUMAR SWAIN and I am a web developer ,i have
            developed many types of front end projects from well known Dj
            applications to E-commerce booking platforms.
          </p>
          <p className="paragraph-descryption2">
            I am passionate about cutting edge,pixel perfect, beautiful
            interfaces and implemented UX and UI and also SPA .
          </p>
        </div>
      </div>
      <br />
      <div className="show">
        <div className="container1">
          <NavLink className="link1" to="viewproject">
            View Projects
          </NavLink>
        </div>

        <div className="container2">
          <NavLink className="link2" to="viewresume">
            View Resume
          </NavLink>
        </div>
        <div className="container3">
          <NavLink className="link3" to="viewcertificate">
            View Cirtificates
          </NavLink>
        </div>
        <div className="container4">
          <NavLink className="link4" to="learnmore">
            Learn More
          </NavLink>
        </div>
      </div>
      <Outlet />

      <br />
      <br />
      <div className="photos">
        <div className="leftside">
          <div className="project-myself"> The Project I Developed.</div>
          <div className="p-heading">{photo[ph].heading}</div>
          <div className="project-descryption">{photo[ph].descryption}</div>
        </div>
        <div className="rightside">
          <button id="btn1" onClick={setphoto}>
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <p id="project-heading">{photo[ph].heading}</p>
          <img
            className="project-image"
            key={photo.id}
            src={photo[ph].url}
            alt=""
          ></img>
          <button id="btn2" onClick={setphoto}>
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>
    </>
  );
}

export default Home;
