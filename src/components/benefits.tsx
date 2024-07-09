import { BenefitsTable } from "./table";
import { ReferButton } from "./referModal";

const Benefits = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12 mt-20">
        <div className="max-w-[600px]">
          <span className="text-gray-900 text-[27px] font-semibold capitalize leading-9">
            What are the{" "}
          </span>
          <span className="text-blue-600 text-[27px] font-semibold capitalize leading-9">
            Referral benefits?
          </span>
        </div>

        <BenefitsTable />
        <ReferButton />
      </div>
    </>
  );
};

export default Benefits;
