import Card from "./Card";
import Navbar from "./Navbar";

function Home() {
  return (
    <>
    <Navbar/>
      <div className="container my-5">
        <div className="p-5 text-center bg-body-tertiary rounded-3">
          <h1 className="text-body-emphasis">Zen Canteen</h1>
          <h5>
            Savor the Flavor, Anytime, Anywhere: Your Ultimate Foodie Companion!
          </h5>
          <p className="col-lg-8 mx-auto fs-5 text-muted">
            Discover delectable delights with our food app! From recipes to
            restaurant recommendations, satisfy your cravings effortlessly. It's
            a culinary adventure in your pocket!
          </p>
          <div className="d-inline-flex gap-2 mb-5">
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
        <div className="row mt-5">
          <Card
            img={
              "https://www.themealdb.com/images/media/meals/qptpvt1487339892.jpg"
            } id={1}
          />
          <Card
            img={
              "https://www.themealdb.com/images/media/meals/oe8rg51699014028.jpg"
            } id={2}
          />
          <Card
            img={
              "https://www.themealdb.com/images/media/meals/qrqywr1503066605.jpg"
            } id={3}
          />
        </div>
      </div></>
  )
}

export default Home