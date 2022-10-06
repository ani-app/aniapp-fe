//MUI ICONS
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocalMallIcon from "@mui/icons-material/LocalMall";
import { useLocation } from "react-router-dom";
const Navbar = () => {
  const location = useLocation();

  return (
    <div className="flex items-center bg-gray-300 text-white  h-14 fixed left-0 bottom-0 w-screen justify-around">
      <span
        className={`${
          location.pathname === "/home" && "!border-gray-400"
        } border-t-2 border-transparent h-full flex items-center justify-center w-10 `}
      >
        <HomeIcon />
      </span>
      <span
        className={`${
          location.pathname === "/fill" && "border-gray-400"
        } border-t-2 border-transparent h-full flex items-center justify-center w-10 `}
      >
        <SearchIcon />
      </span>
      <span
        className={`${
          location.pathname === "/fill" && "border-gray-400"
        } border-t-2 border-transparent h-full flex items-center justify-center w-10 `}
      >
        <FavoriteIcon />
      </span>
      <span
        className={`${
          location.pathname === "/fill" && "border-gray-400"
        } border-t-2 border-transparent h-full flex items-center justify-center w-10 `}
      >
        <LocalMallIcon />
      </span>
    </div>
  );
};

export default Navbar;
