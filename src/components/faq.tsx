import { Tabs, CustomFlowbiteTheme } from "flowbite-react";

const customTheme: CustomFlowbiteTheme["tabs"] = {
  tablist: {
    tabitem: {
      variant: {
        pills: {
          base: "rounded-lg py-2 px-12 ",
          active: {
            on: "rounded-lg bg-white text-gray-500  ring-0 shadow-xl focus:ring-0 focus:ring-offset-0 text-blue-600",
            off: "rounded-lg hover:bg-gray-100 hover:text-gray-900 dark:hover:bg-gray-800 dark:hover:text-white outline-1 outline-gray-500 border-2 border-gray-500",
          },
        },
      },
    },
  },
};

const FAQs = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12 mt-20">
        <div className="max-w-[378px]">
          <span className="text-gray-900 text-[27.66px] font-semibold capitalize leading-9">
            Frequently Asked{" "}
          </span>
          <span className="text-blue-600 text-[27.66px] font-semibold capitalize leading-9">
            Questions
          </span>
        </div>

        <Tabs
          aria-label="Pills"
          variant="pills"
          theme={customTheme}
          className="flex justify-center items-center gap-4"
        >
          <Tabs.Item active title="Eligibility">
            <div className="flex flex-col justify-center items-center gap-8 p-4 md:p-16">
              <div className="max-w-[870px] justify-end items-center gap-[14px] inline-flex">
                <div className="max-w-[872px] text-blue-600 text-[16px] font-semibold leading-7">
                  Do I need to have prior Product Management and Project
                  Management experience to enroll in the program?
                </div>
              </div>
              <div className="max-w-[870px] text-black/opacity-90 text-[15px] font-normal leading-normal">
                No, the program is designed to be inclusive of all levels of
                experience. All topics will be covered from the basics, making
                it
                <br />
                suitable for individuals from any field of work.
              </div>
              <div className="max-w-[427px] text-black/opacity-90 text-base font-semibold leading-7">
                What is the minimum system configuration required?
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="How To Use?">
          <div className="flex flex-col justify-center items-center gap-8 p-16">
              <div className="max-w-[870px] justify-end items-center gap-[14px] inline-flex">
                <div className="max-w-[872px] text-blue-600 text-[16px] font-semibold leading-7">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque distinctio aspernatur repudiandae ab similique commodi ut.
                </div>
              </div>
              <div className="max-w-[870px] text-black/opacity-90 text-[15px] font-normal leading-normal text-left">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque, tempore.
                <br />
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, architecto? Quam, doloremque.
              </div>
            </div>
          </Tabs.Item>
          <Tabs.Item title="Terms & Conditions">
          <div className="flex flex-col justify-center items-center gap-8 p-16">
              <div className="max-w-[870px] justify-end items-center gap-[14px] inline-flex">
                <div className="max-w-[872px] text-blue-600 text-[16px] font-semibold leading-7">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus nobis laborum dignissimos ab inventore sed molestiae 
                </div>
              </div>
              <div className="max-w-[870px] text-black/opacity-90 text-[15px] font-normal leading-normal text-left">
                No, the program is designed to be inclusive of all levels of
                experience. All topics will be covered from the basics, making
                it
                <br />
                suitable for individuals from any field of work.
              </div>
            </div>
          </Tabs.Item>
        </Tabs>
      </div>
    </>
  );
};

export default FAQs;
