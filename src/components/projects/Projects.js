import React from "react";
import Title from "../layouts/Title";
import foodapp from "../../assets/images/foodapp.png";
import travel from "../../assets/images/travel.png";
import weather from "../../assets/images/weather.png";
import ecommerce from "../../assets/images/ecommerce.png";

import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20  border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 xl:gap-14">
        <ProjectsCard
          title="FOOD RECIPE FINDER"
          des=" We can find the recipes of different nations here.It gives the instructions and ingredients list to make it."
          src={foodapp}
          gitLink={"https://github.com/kavipriyarupan/Foodrecipe_app"}
          getMyLink={"https://golden-panda-671307.netlify.app"}
        />
        <ProjectsCard
          title="Travel Landingpage"
          des="With the  help of html and css I create a landing page for Travel website  "
          src={travel}
          gitLink={"https://github.com/kavipriyarupan/Travelwebsite"}
          getMyLink={"https://wondrous-otter-2638e6.netlify.app"}
        />
        <ProjectsCard
          title="WeatherApp"
          des="It helps us to check the weather in the particular area and region and bonus we can also check the humidity and wind for the consecutive days"
          src={weather}
          gitLink={"https://github.com/kavipriyarupan/Weather_app"}
          getMyLink={"https://zippy-wisp-97e3fa.netlify.app"}
        />
        <ProjectsCard
          title="E-Commerce website"
          des="Its an ecommerce website that have variety of functions like add to cart ,add to wishlist and a detailed view of an single product and so on."
          src={ecommerce}
          gitLink={"https://github.com/kavipriyarupan/Ecommerce_site_task"}
          getMyLink={"https://astounding-mousse-8ccdfb.netlify.app"}
        />
      </div>
    </section>
  );
};

export default Projects;
