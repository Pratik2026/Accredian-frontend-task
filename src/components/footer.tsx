import logo from "../assets/logo.svg";
import { Button, HR } from "flowbite-react";
import { Accordian } from "./accordian";

const Footer = () => {
  return (
    <div className="flex justify-center items-center bg-[#282828] w-full">
      <div className="main max-w-[1200px] flex flex-col gap-8 justify-center items-center py-2 md:py-4">
        <div className="w-full md:w-[600px] lg:w-[800px] flex justify-between items-center p-4">
          <img src={logo} alt="" />
          <Button>Schedule call now</Button>
        </div>

        <HR className="bg-[#E2E8F0] w-full" />

        <div className=" max-w-3xl lg:w-[900px] flex flex-col lg:flex-row gap-8 p-4">
          <Accordian />
          <div className="flex gap-16 lg:gap-4">
          <div className="flex flex-col gap-2">
            <div className="text-white text-xl font-normal leading-[30px] tracking-tight">
              Contact Us
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Email us (For Data Science Queries): admissions@accredian.com
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Email us (For Product Management Queries):pm@accredian.com
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Data Science Admission Helpline:+91 9079653292 (9 AM - 7 PM)
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Product Management Admission Helpline:+91 9625811095
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Enrolled Student Helpline: +91 7969322507
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Office Address: 4th Floor, 250, Phase IV, Udyog Vihar, Sector 18,
              Gurugram,
              <br />
              Haryana 122015
            </div>
            <div className="max-w-[528px] text-gray-200 text-lg font-normal leading-[27px] tracking-tight">
              Why Accredian
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="text-white text-xl font-normal leading-[30px] tracking-tight">
              Accredian
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              About
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Career
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Blog
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Admission Policy
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Referral Policy
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Privacy Policy
            </div>
            <div className="max-w-[528px] text-gray-200 text-xs font-normal leading-[21px] tracking-tight">
              Terms of service
            </div>
          </div>
          </div>
        </div>

        <div className="text-center text-white text-xs font-normal leading-[21px] tracking-tight">
          © 2024 Accredian A Brand of FullStack Education Pvt Ltd. All Rights
          Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
