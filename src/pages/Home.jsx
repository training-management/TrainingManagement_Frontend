import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Success from "../components/Success";
import CloudFeatures from "../components/CloudFeatures";
import WhatIsTalentGrow from "../components/WhatIsTalentGrow";
import OfflineToOnline from "../components/OfflineToOnline";
import Features from "../components/Features";
import Tools from "../components/Tools";
import Assessments from "../components/Assessments";
import ClassManagement from "../components/ClassManagement";
import OneOnOne from "../components/OneOnOne";
import ExploreCourses from "../components/ExploreCourses";
import PracticeQuestions from "../components/PracticeQuestions";
import AllBooks from "../components/AllBooks";
import Testimonial from "../components/Testimonial";
import LatestNews from "../components/LatestNews";
import Footer from "../components/Footer";


export default function Home() {
  return (
    <>
       <Navbar /> 
      <Hero />
      <Success />
      <CloudFeatures />
      <WhatIsTalentGrow />
      <OfflineToOnline />
      <Features />
     <Tools />
     <Assessments />
     <ClassManagement />
     <OneOnOne />
     <ExploreCourses />
     <PracticeQuestions />
     <AllBooks />
     <Testimonial />
     <LatestNews />
     <Footer />
    </>
  );
}
