import Header from "../../components/Header";
import Navbar from "../../components/Navbar";

const Home = () => {
  return (
    <div className="min-h-screen  relative overflow-x-hidden">
      <Header>
        <div>
          {" "}
          <img src="/images/dots-menu.png" alt=""></img>{" "}
        </div>
      </Header>
      <Navbar />
    </div>
  );
};

export default Home;
