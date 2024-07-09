import herosectionimg from "../assets/photo.svg";
import { IoPersonAddSharp } from "react-icons/io5";
import { FaFilePen } from "react-icons/fa6";
import { GiWallet } from "react-icons/gi";
import { ReferButton } from "./referModal";

const Herosection = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-12 w-full">
        <div className="px-4 shadow-xl bg-blue-100 flex flex-col-reverse md:flex-row items-center max-w-[1260px] rounded-[30px]">
          <div className="flex md:flex-col justify-center max-w-lg gap-4 py-4">
            <div className="text-gray-900 text-[28px] md:text-[48px] lg:text-[60px] xl:text-[88px] font-bold lg:leading-[86px]">
              Let's Learn <br />& Earn
            </div>
            <div>
              <span className="text-gray-900 text-[20px] md:text-[28px] lg:text-[32px] xl:text-[40px] font-normal lg:leading-[60px]">
                Get a chance to win
                <br /> up-to
              </span>
              <span className="text-blue-600 text-[20px] md:text-[32px] lg:text-[40px] xl:text-[54px] font-bold ml-2">
                Rs 15,000
              </span>
            </div>
            {window.innerWidth > 500 && (<div className="max-w-40 md:mt-12"><ReferButton /></div>)}
          </div>
          <img
            className="object-contain h-[200px] md:h-[400px] xl:h-[500px]"
            src={herosectionimg}
            alt=""
          />
        </div>
        <div className="bg-blue-50 flex flex-col items-center justify-center w-full gap-16 p-4">
          <div>
            <span className="text-gray-900 text-[27.66px] font-semibold leading-[43px]">
              How do I{" "}
            </span>
            <span className="text-blue-600 text-[27.66px] font-semibold leading-[43px]">
              Refer
            </span>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-16">
            <div className="flex flex-col justify-center items-center gap-8 text-center rounded-full shadow-xl p-10">
              <IoPersonAddSharp size={64} color="#1A73E8 " />
              <div className="max-w-40">
                Submit referrals easily via our website’s referral section.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 text-center rounded-full shadow-xl p-10">
              <FaFilePen size={64} color="#1A73E8 " />
              <div className="max-w-40">
                Earn rewards once your referral joins an Accredian program.
              </div>
            </div>
            <div className="flex flex-col justify-center items-center gap-8 text-center rounded-full shadow-xl p-10">
              <GiWallet size={64} color="#1A73E8 " />
              <div className="max-w-40">
                Both parties receive a bonus 30 days after program enrollment.
              </div>
            </div>
          </div>
          <div className="max-w-40 mt-6 md:mt-12"><ReferButton /></div>
        </div>
      </div>
    </>
  );
};

export default Herosection;
