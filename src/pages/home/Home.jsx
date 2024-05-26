import Accordion from "../../components/home/Accordion";
import Banner from "../../components/home/Banner";
import Products from "../../components/home/Products";

const Home = () => {
  return (
    <div>
      <Banner />
      <div className="mx-14">
        <Products />
        <Accordion />
      </div>
    </div>
  );
};

export default Home;
