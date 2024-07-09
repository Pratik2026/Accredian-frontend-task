import { Link, Element } from "react-scroll";
import Herosection from "./herosection";
import FAQs from "./faq";
import Support from "./support";
import Benefits from "./benefits";
import { useEffect } from "react";
import axios from "axios";
import { getCoursesRoute } from "../utils/api_routes";
import { useCourseStore } from "../Store/courses";

const Main = () => {
  const setCourses = useCourseStore((state) => state.setCourses);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get(getCoursesRoute);

        setCourses(response.data);
      } catch (error) {
        console.error("Error fetching courses:", error);
      }
    };

    fetchCourses();
  });
  return (
    <div className="flex flex-col justify-center items-center gap-8">
      <div className="flex justify-around items-center w-full max-w-[650px] bg-sky-100 rounded-[1.5rem] py-2 px-4 my-12">
        <Link to="section1" smooth={true} duration={500}>
          <div className="hover:text-blue-600 text-center text-[16px] md:text-[20px] font-normal leading-snug cursor-pointer">
            Refer
          </div>
        </Link>
        <Link to="section2" smooth={true} duration={500}>
          <div className="hover:text-blue-600 text-center text-[16px] md:text-[20px] font-normal leading-snug cursor-pointer">
            Benefits
          </div>
        </Link>
        <Link to="section3" smooth={true} duration={500}>
          <div className="hover:text-blue-600 text-center text-[16px] md:text-[20px] font-normal leading-snug cursor-pointer">
            FAQs
          </div>
        </Link>
        <Link to="section4" smooth={true} duration={500}>
          <div className="hover:text-blue-600 text-center text-[16px] md:text-[20px] font-normal leading-snug cursor-pointer">
            Support
          </div>
        </Link>
      </div>

      <Element name="section1" className="flex justify-center w-full">
        <Herosection />
      </Element>
      <Element name="section2" className="w-full">
        <Benefits />
      </Element>
      <Element name="section3">
        <FAQs />
      </Element>
      <Element name="section4">
        <Support />
      </Element>
    </div>
  );
};

export default Main;
