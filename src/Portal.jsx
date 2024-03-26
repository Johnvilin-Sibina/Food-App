import {Outlet} from "react-router-dom";
import Sidebar from "./Sidebar";
function Portal() {
  return (
  <div className="d-flex">
  <Sidebar/>
  <Outlet/>
  </div>
  )
}

export default Portal