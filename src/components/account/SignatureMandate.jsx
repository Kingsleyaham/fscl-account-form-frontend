import { FcPlus } from "react-icons/fc";
import { useState } from "react";
import MandateWrapper from "../MandateWrapper";

const SignatureMandate = () => {
  const [signatoryCount, setSignatoryCount] = useState(1);
  const children = [<MandateWrapper key={1} index={1} />];

  for (let i = 2; i < children.length; i++) {
    children.push(<MandateWrapper key={i} index={1} />);
  }

  const addSignatory = () => {
    setSignatoryCount((prev) => prev + 1);
  };
  return (
    <div>
      <div className="bg-[#6d7275] text-white font-semibold py-2 px-3 text-xl">
        <h1>Signatory Mandate</h1>
      </div>
      <div className="float-right">
        <FcPlus
          className="block text-3xl cursor-pointer mt-4"
          onClick={addSignatory}
        />
      </div>
      <div className="bg-white p-5 pt-0 shadow-sm text-gray-900">
        <div>{children}</div>
      </div>
    </div>
  );
};

export default SignatureMandate;
