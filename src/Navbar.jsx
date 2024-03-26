import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
        <div className="container justify-content-end">
          <Link to={"/login"} className="btn btn-outline-success" type="submit">
            Login
          </Link>
        </div>
      </nav>
  )
}

export default Navbar