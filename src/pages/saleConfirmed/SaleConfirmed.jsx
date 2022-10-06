import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
//MUI ICONS
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import Check from "@mui/icons-material/Check";
import ShareIcon from "@mui/icons-material/Share";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const SaleConfirmed = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative overflow-x-hidden">
      <Header>
        <span onClick={() => navigate(-1)}>
          <ArrowBackIosIcon />
        </span>
      </Header>
      <div>
        <div className="border-[10px] border-gray-300 w-fit mx-auto rounded-full text-gray-500 ">
          <Check className="!text-9xl" />
        </div>
        <h1 className="text-center font-semibold my-5 text-gray-500">
          Ödeme işleminiz gerçekleşti.
        </h1>
        <img className="mx-auto" src="/images/QR.png" alt="" />
        <button className="flex items-center gap-2 text-lg font-semibold justify-center bg-gray-200 w-[200px] py-2 mx-auto mt-5">
          <ShareIcon /> Paylaş
        </button>
      </div>
      <div className="flex flex-col items-center justify-center gap-5 absolute bottom-5 w-screen">
        <Link className="bg-white border font-semibold border-black px-5 py-2 w-9/12 flex items-center justify-center gap-3 mx-auto ">
          <span>
            {" "}
            <StarBorderIcon />
          </span>{" "}
          <span> Hekimi Değerlendir </span>
        </Link>
      </div>
    </div>
  );
};

export default SaleConfirmed;
