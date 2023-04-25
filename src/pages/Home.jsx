import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.location.href = "https://www.fcslng.com/account-opening/";
  }, []);
  return (
    <div>
      <p className="text-center">redirecting to account opening page</p>
    </div>
  );
};

export default Home;
