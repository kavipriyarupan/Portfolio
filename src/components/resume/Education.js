import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2016 - 2021</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="BSc in Physics"
            subTitle="Vivekanandha College of ARTS&SCIENCE (2018-2021)"
            result="87%"
            des="This phase gave me an opportunity to explore more about my interests."
          />
          <ResumeCard
            title="HigherSecondary"
            subTitle="Mangalam Matriculation school (2016-2018)"
            result="85.5%"
            des="I developed a strong foundation in my key subjects."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Model Higher Secondary School (2015-2016)"
            result="93%"
            des="These days weren't merely about grades,it was a test of time and propel me towards the horizon of potential "
          />
        </div>
      </div>
      {/* part Two */}
    </motion.div>
  );
};

export default Education;
