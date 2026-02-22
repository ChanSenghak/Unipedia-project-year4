import Headerabout from "./partabout/Headerabout.jsx";
import Motivation from "./partabout/Motivation.jsx";
import Footer from "./partabout/partmain/Footer.jsx";
function Mainabout() {
  return (
    <>
    <div className="min-h-screen">
      <Headerabout />
      <Motivation />
      <Footer />
    </div>
    </>
  );
}

export default Mainabout;