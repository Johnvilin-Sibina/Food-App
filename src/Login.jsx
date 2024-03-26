import { Link } from "react-router-dom";
function Login() {
  return (
    <div className="container d-flex align-items-center justify-content-center vh-100">
      <div className="row">
      <Link to={"/"}><img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRAHpDd-kxPCROp5aMnTNumI8C9QGoZ5ia7Rg&usqp=CAU"} alt="" /></Link>
        
        <h1 className="text-center">Login</h1>
        <form>
          <input type="text" placeholder="User Name" className="form-control" />
          <input
            type="text"
            placeholder="Password"
            className="form-control mt-2"
          />
          {/* <input type="submit" className="btn btn-primary mt-2" /> */}
          <Link to={"/portel/list-hotel"} className="mt-2 btn btn-primary">Login</Link>
        </form>
        <span>Don't have account? <Link to={"/register"}>Register Here</Link></span>
      </div>
    </div>
  );
}

export default Login;
