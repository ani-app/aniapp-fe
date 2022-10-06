import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../components/Header";
//MUI ICONS
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import AddIcon from "@mui/icons-material/Add";
const CreditCardChoose = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen relative flex flex-col justify-between py-2 overflow-x-hidden">
      <div>
        <Header>
          <span onClick={() => navigate(-1)}>
            <ArrowBackIosIcon />
          </span>
        </Header>
        <div className="flex gap-2 items-center px-4 mt-5">
          <img className="rounded-full" src="/images/exampleuser.png" alt="" />
          <div className="flex flex-col">
            <span>Uzm. Veteriner Hekim</span>
            <span className="text-lg font-extrabold">Orçun Keskin</span>
          </div>
        </div>
        <div className="pl-5 mt-5">
          <h1 className="text-xl font-semibold">Ödeme Aracı</h1>
          <div className="flex gap-2 py-3">
            <div className="rounded-lg p-3 border  border-gray-300 text-gray-300 mt-[75px] w-fit h-fit">
              <AddIcon />
            </div>
            <div className="grid grid-cols-2 w-full gap-2">
              <label htmlFor="yapıKredi">
                <div className="mx-auto bg-white rounded-lg p-5  w-11/12 h-[200px] drop-shadow-xl  flex flex-col gap-2 ">
                  <span className="self-end">
                    <input
                      className="accent-gray-500 w-5 h-5 appearance-bg-gray-300 outline-none"
                      id="yapıKredi"
                      type="checkbox"
                    />
                  </span>
                  <span className="text-gray-400 text-lg font-semibold">
                    Yapı Kredi
                  </span>
                  <span className="text-gray-400  font-semibold">
                    **** 2785
                  </span>
                  <span className="text-gray-400 ">10/26</span>
                  <span className="self-end">
                    <img src="/images/yapıkredi.png" alt="" />
                  </span>
                </div>
              </label>

              <label htmlFor="maximum">
                <div className="mx-auto bg-white rounded-lg p-5  w-11/12 h-[200px]  drop-shadow-xl  flex flex-col gap-2 ">
                  <span className="self-end">
                    <input
                      className="accent-gray-500 w-5 h-5 appearance-bg-gray-300 outline-none"
                      id="maximum"
                      type="checkbox"
                    />
                  </span>
                  <span className="text-gray-400 text-lg font-semibold">
                    Maximuum
                  </span>
                  <span className="text-gray-400  font-semibold">
                    **** 2785
                  </span>
                  <span className="text-gray-400 ">10/26</span>
                  <span className="self-end">
                    <img src="/images/visa.png" alt="" />
                  </span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center  justify-center gap-5  w-screen">
        <Link
          to="/saleConfirmed"
          className="bg-gray-300   w-11/12 flex items-center gap-3 mx-auto "
        >
          <span className="w-1/3  bg-gray-500 flex flex-col items-center py-4 text-white">
            <span className="line-through text-xs">₺1.888 </span>
            <span className="text-xl font-semibold">₺1.742</span>
          </span>{" "}
          <span className="mx-auto text-lg  font-semibold">
            {" "}
            Ödemeyi Tamamla{" "}
          </span>
        </Link>
      </div>
    </div>
  );
};

export default CreditCardChoose;
