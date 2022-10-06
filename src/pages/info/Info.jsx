import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Info.css";
import { Link } from "react-router-dom";
//MUI ICONS
import EastIcon from "@mui/icons-material/East";
const Index = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul className="w-screen first-screen-dots absolute bottom-[5vh]">
          {dots}
        </ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-[10px] h-[10px] bg-gray-400 rounded-full first-screen-dot"></div>
    ),
  };
  return (
    <div className="min-h-screen overflow-x-hidden flex flex-col justify-between pb-2 relative">
      <div>
        <Slider {...settings} className="relative">
          <div>
            <img className="h-[60vh]" src="/images/default-img.jpg" alt="" />
          </div>
          <div>
            <img className="h-[60vh]" src="/images/default-img.jpg" alt="" />
          </div>
          <div>
            <img className="h-[60vh]" src="/images/default-img.jpg" alt="" />
          </div>
        </Slider>
        <p className="p-5 font-semibold text-2xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum,
          eveniet laudantium!
        </p>
      </div>
      <div className="flex w-screen">
        <Link
          to="/auth/phoneLogin"
          className="bg-gray-300 px-5 py-2 w-9/12 flex items-center justify-center gap-3 mx-auto "
        >
          <span> Bilgilendirmeyi Geç </span>
          <span>
            {" "}
            <EastIcon />
          </span>{" "}
        </Link>
      </div>
    </div>
  );
};

export default Index;
