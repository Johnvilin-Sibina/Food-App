import { Link } from "react-router-dom";
function Sidebar() {
  return (
    <div
      className="d-flex flex-column flex-shrink-0 p-3 text-bg-dark vh-100"
      style={{ width: "280px" }}
    >
      <a
        href="/"
        className="d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none"
      ></a>
      <span>Sidebar</span>
      <hr />
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <Link to={"/portal/list-hotel"} className="nav-link active" aria-current="page">
            Manage Hotel
          </Link>
        </li>
      </ul>
      <Link to={"/"}><strong>Sign Out</strong></Link>
    </div>
  );
}

export default Sidebar;
