import { Link } from "react-router-dom";
//MUI ICONS
import CheckIcon from "@mui/icons-material/Check";
import AddIcon from "@mui/icons-material/Add";

const Profile = () => {
  return (
    <div className="overflow-x-hiddend flex flex-col justify-between py-2 min-h-screen relative">
      <div>
        <div className="bg-gray-300 text-lg font-extrabold w-fit px-10 mx-auto mt-1 py-2">
          LOGO
        </div>
        <div className="relative w-fit mx-auto mt-16 mb-8">
          <img className="rounded-full" src="/images/cat.png" alt="" />
          <span className="absolute top-0 right-0 bg-white rounded-full border-[5px] border-black  w-26 h-26">
            <CheckIcon className="!text-6xl" />
          </span>
        </div>
        <h1 className="font-semibold text-lg text-center">Neriman Tatlı</h1>
        <p className="p-2 text-center text-lg font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
          repellat,iustoiusto
        </p>
        <img className="mx-auto my-5" src="/images/QR.png" alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-5 w-screen">
        <Link className="bg-gray-300 px-5 py-2 w-9/12 flex items-center justify-center gap-3 mx-auto ">
          <span>
            {" "}
            <AddIcon />
          </span>{" "}
          <span> Yeni Profil Ekle </span>
        </Link>
        <Link
          to="/home"
          className="bg-white px-5 border border-black py-2 w-9/12 flex items-center justify-center gap-3 mx-auto "
        >
          <span> Ana Sayfa</span>
        </Link>
      </div>
    </div>
  );
};

export default Profile;
