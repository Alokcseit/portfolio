import React from "react";
import "./Viewproject.css";
var project = [
  {
    id: 1,
    url: "https://i.natgeofe.com/k/2017a666-2bc2-406e-9a59-b1ce11f023ce/AUG-22-cover-fb.jpg",
    heading: "NAT GEO Kidz Magazine",
    descryption:
      " This Project Is developed by Reactjs and its backend is developed by nodejs and expressjs ,for database purpose MongoDB is used.",
    link: "https://imaginative-profiterole-ad771c.netlify.app/",
  },
  {
    id: 2,
    url: "https://images.newscientist.com/wp-content/uploads/2022/05/26114929/SEI_106436363.jpg",
    heading: "TEXT TO IMAGE BY AI",
    descryption:
      "This Project Is developed by Reactjs and its backend is developed by nodejs and expressjs ,for database purpose MongoDB is used,and it is a AI based Project where DALL-E-AI is used.",
    link: "https://imagegenerator-openai.netlify.app/",
  },
  {
    id: 3,
    url: "https://cdn.inc42.com/wp-content/uploads/2019/07/bookmyshow-feature.jpg",
    heading: "BOOK MY SHOW",
    descryption:
      "This Project Is developed by Reactjs and its backend is developed by nodejs and expressjs ,for database purpose MongoDB is used.in this project play are availavle , you can filter as your requirement.",
    link: "https://streampage.vercel.app/",
  },
  {
    id: 4,
    url: "https://reduxsh.netlify.app/",
    descryption: "this a small  redux project",
    link: "https://reduxsh.netlify.app/",
  },
];
function Viewproject() {
  return (
    <>
      <br />
      <div className="project-page">
        <div className="project-page-heading">Projects</div>
        <div className="projects-grid">
          {project.map((item) => {
            return (
              <div>
                <img
                  className="projectpage-image"
                  key={item.id}
                  src={item.url}
                  alt=""
                />

                <a
                  key={item.id}
                  href={item.link}
                  className="projectpage-heading"
                >
                  {item.heading}
                </a>
              </div>
            );
          })}
        </div>
        <div className="allprojects"></div>
      </div>
    </>
  );
}

export default Viewproject;
