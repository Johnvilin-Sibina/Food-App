import { Link } from "react-router-dom";
function Register() {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row">
        
        <Link to={"/"}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHpDd-kxPCROp5aMnTNumI8C9QGoZ5ia7Rg&usqp=CAU"} alt="" /></Link>
        <h1 className="text-center">Register</h1>
       
        
        <form>
          <input type="text" placeholder="Name" className="form-control mt-2" />
          <input type="text" placeholder="Email" className="form-control mt-2" />
          <input type="text" placeholder="Phone" className="form-control mt-2" />
          <input
            type="text"
            placeholder="Password"
            className="form-control mt-2"
          />
          <input
            type="text"
            placeholder="Re-Type Password"
            className="form-control mt-2"
          />
          <input type="submit" className="btn btn-primary mt-2" />
        </form>
        <span>Already have an account? <Link to={"/login"}>Login</Link></span>
      </div>
    </div>
  )
}

export default Register