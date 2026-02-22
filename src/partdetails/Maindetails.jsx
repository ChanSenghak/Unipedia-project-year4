import Headerdetails from "./Headerdetails";
import Overview from "./Overview";
import Description from "./Description";
import Letterdetails from "./Letterdetails";
import Requi from "./Requi";

function Maindetails() {
  return (
    <>
    <div className="min-h-screen">
              <div>
                  <Headerdetails />
              </div>
          <br />
              <div className="flex flex-row justify-center gap-3 ">
                    
                    <div className="flex flex-col justify-center gap-3 ">
                      <Overview />
                      <Letterdetails />
                    </div>

                    <div className="flex flex-col justify-center gap-3">
                      <Description />
                      <Requi />
                    </div>

      
              </div>
    </div>
    </>
  );
}

export default Maindetails;