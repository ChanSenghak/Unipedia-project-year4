import Headerabout from "./Headerabout.jsx";
import Motivation from "./Motivation.jsx";
import Footer from "../Footer2.jsx";
function Mainabout() {
  return (
    <>
    <div className="min-h-screen">
      <Headerabout />
      <Motivation />
    </div>
    <Footer />
    </>
  );
}

export default Mainabout;