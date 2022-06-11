import "./home.scss";

import Header from "../../components/header/header";
import CarouselApp from "../../components/header/carousel/carousel";

const Home = () => {
  return (
    <div className="homePage">
      <section>
        <Header />
        <h1>Home</h1>
        <CarouselApp/>
      </section>
    </div>
  );
};
export default Home;
