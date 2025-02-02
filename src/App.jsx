import { MdDashboard } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { FaUser } from "react-icons/fa";
import { MdOutlineSpeaker } from "react-icons/md";
function App() {
  return (
<div className="w-full h-screen flex">
  <div className="w-[300px] h-full bg-green-300">
<button className="w-full h-[50px] text-3xl font-bold flex justify-center items-center">
<MdDashboard />
  Dashbord
</button>
<button className="w-full h-[50px] text-3xl font-bold flex justify-center items-start">
<TbBrandBooking />
Booking
</button>
<button className="w-full h-[50px] text-3xl font-bold flex justify-center items-center">
<FaUser />
  User
</button>
<button className="w-full h-[50px] text-3xl font-bold flex justify-center items-center">
<MdOutlineSpeaker />
Item
</button>


  </div>
<div className="w-full bg-red-600">
  
</div>
</div>


);
}

export default App
                 
