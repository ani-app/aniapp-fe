import Header from "../../components/Header";
import { Link, useNavigate } from "react-router-dom";
//MUI ICONS
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import LocalAtmIcon from "@mui/icons-material/LocalAtm";

const Confirmationcon = () => {
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

        <table className="w-11/12 mx-auto mt-2 ">
          <thead>
            <tr>
              <td className="py-2 font-extrabold text-xl">
                Ödenmesi Gereken Tutar
              </td>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-300 ">
              <td className="py-3">İç Dış Parazit</td>
              <td className="text-right py-3">₺ 800</td>
            </tr>
            <tr className="border-b border-gray-300 ">
              <td className="py-3">İç Dış Parazit</td>
              <td className="text-right py-3">₺ 800</td>
            </tr>
            <tr className="border-b border-gray-300 ">
              <td className="py-3">İç Dış Parazit</td>
              <td className="text-right py-3">₺ 800</td>
            </tr>
            <tr className="border-b border-gray-300 ">
              <td className="py-3">İç Dış Parazit</td>
              <td className="text-right py-3">₺ 800</td>
            </tr>
          </tbody>
        </table>

        <div className="relative w-11/12 mx-auto mt-8">
          <input
            className="outline-none border-dashed border-2 rounded-lg pl-2 py-5 w-full border-gray-300"
            type="text"
            placeholder="İndirim Kodu Gir"
          />
          <button className="bg-gray-300 text-gray-500 py-2 px-4 rounded-xl font-semibold absolute right-5 top-[14px]">
            Kodu Kullan
          </button>
        </div>
        <div className="flex flex-col items-end px-5 mt-5 gap-2">
          <div className="flex items-center justify-between w-[180px]  gap-5">
            {" "}
            <span>Ara Toplam</span> <span>₺ 1.600</span>{" "}
          </div>
          <div className="flex items-center justify-between w-[180px] gap-5">
            {" "}
            <span>KDV %18</span> <span>₺ 288</span>{" "}
          </div>
          <div className="flex items-center justify-between w-[180px] gap-5">
            {" "}
            <span>İndirim Tutarı</span> <span>₺ 146</span>{" "}
          </div>
          <div className="flex items-center justify-between w-[180px] gap-5">
            {" "}
            <span>Toplam Tutar</span> <span>₺ 1.742</span>{" "}
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center mt-5 justify-center gap-5  w-screen">
        <Link className="bg-gray-300 px-5 py-2 w-9/12 flex items-center justify-center gap-3 mx-auto ">
          <span>
            {" "}
            <LocalAtmIcon />
          </span>{" "}
          <span> Nakit Öde </span>
        </Link>
        <Link
          to="/confirmationcon/creditCardChoose"
          className="bg-gray-300 px-5 py-2 w-9/12 flex items-center justify-center gap-3 mx-auto "
        >
          <span>
            {" "}
            <CreditCardIcon />
          </span>{" "}
          <span> Kredi Kartı </span>
        </Link>
      </div>
    </div>
  );
};

export default Confirmationcon;
