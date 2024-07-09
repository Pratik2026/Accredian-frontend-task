import { Button } from "flowbite-react";
import { BiSupport } from "react-icons/bi";

const Support = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row justify-between p-8 rounded-lg md:items-center bg-blue-600 max-w-full md:w-[700px] lg:w-[860px] my-8 mx-4">
        <div className="flex gap-8 items-center">
          <BiSupport size={32} color="white" />
          <div>
            <div className="max-w-[537px] text-white text-[20px] font-semibold leading-9">
              Want to delve deeper into the program?
            </div>
            <div className="max-w-[549px] text-neutral-100 text-sm font-medium leading-7">
              Share your details to receive expert insights from our program
              team!
            </div>
          </div>
          
        </div>
        <Button className="bg-white text-blue-600">Get in touch</Button>
      </div>
    </>
  );
};

export default Support;
