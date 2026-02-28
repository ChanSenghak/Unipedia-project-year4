import Headerdetails from "./Headerdetails";
import Overview from "./Overview";
import Description from "./Description";
import Letterdetails from "./Letterdetails";
import Footer from "../assets/Footer2.jsx";

function Maindetails() {
  return (
    <>
      <div className="min-h-screen">
        <div>
          <Headerdetails />
        </div>
        <br />
        <div className="flex flex-row justify-center gap-10 ">
          <div className="flex flex-col justify-center gap-3 ">
            <Overview />
            <Letterdetails />
          </div>
          <div className="flex flex-col justify-center gap-3">
            <Description />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Maindetails;