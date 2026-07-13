import React, { useEffect } from "react";
import './education.css'; // Import your existing CSS
import AOS from 'aos'; // Import AOS library
import 'aos/dist/aos.css'; // Import AOS styles

export const Education = () => {
  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
    }); // Initialize AOS when the component mounts
  }, []); // Empty dependency array to ensure it runs only once

  return (
    <div className="ag-format-container" id="education">
      <h2 className="education-heading" data-aos="fade-left">
        Education
      </h2>
      <div className="ag-courses_box" data-aos="fade-left">
        {[
          {
            title: "Bachelor in Computer Science",
            place: "Mankar College, Burdwan",
            date: "2021 - 2024",
          },
          {
            title: "Higher Secondary Education",
            place: "Katwa Bharati Bhaban, Katwa",
            date: "2018 - 2020",
          },
          {
            title: "Secondary Education",
            place: "Karui High School",
            date: "2012 - 2018",
          },
          
        ].map((edu, index) => (
          <div className="ag-courses_item" key={index}>
            <div className="ag-courses-item_link">
              <div className="ag-courses-item_bg bg-blue" />
              <div className="ag-courses-item_title">{edu.title}</div>
              <div className="ag-courses-item_date-box">
                {edu.place}
                <br />
                <span className="ag-courses-item_date">{edu.date}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
