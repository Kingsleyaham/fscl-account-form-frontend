import { BiLoaderCircle } from "react-icons/bi";

const SubmitBtn = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      className={`bg-[#b41421] text-white hover:bg-[#6d7275] hover:text-[#ecebf3] font-semibold px-6 py-2 rounded-full ${
        isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
      } flex items-center float-right`}
      disabled={isSubmitting}
    >
      {isSubmitting && <BiLoaderCircle className="text-2xl inline-block pr-1" />}
      <span className="inline-block">{isSubmitting ? "Submitting" : "Submit"}</span>
    </button>
  );
};

export default SubmitBtn;
