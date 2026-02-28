import Headerhomepage from "./partabout/partmain/Headerhomepage.jsx";
import Advertise from "./partabout/partmain/Advertise.jsx";
import Blockcategory from "./partabout/partmain/Blockcategory.jsx";
import Recently from "./partabout/partmain/Recently.jsx";
import Footer from "./Footer2.jsx";

function Mainhomepage() {
  return (
    <>
    <div className="min-h-screen">
      <Headerhomepage/>
      <Advertise/>
      <Blockcategory/>
      <Recently/>
      <br/>
      <Footer />
    </div>
    </>
  );
}

export default Mainhomepage;