import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const PhoneLogin = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="bg-gray-300 text-xl font-extrabold w-fit px-16 mx-auto mt-5 py-5">
        LOGO
      </div>
      <h1 className="text-center text-xl font-extrabold mt-9">Giriş Yap</h1>
      <p className="p-2 text-center text-lg font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
        repellat,iustoiusto
      </p>
      <Formik
        initialValues={{
          phone: "",
        }}
        validationSchema={Yup.object({
          phone: Yup.string()
            .min(10, "Bu Gerçek bir telefon numarası değil")
            .max(10, "Bu Gerçek bir telefon numarası değil")
            .required("Telefon boş Bırakılamaz"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          resetForm();
          setSubmitting(false);
          navigate("/auth/phoneVerify");
        }}
      >
        {({
          values,
          handleSubmit,
          touched,
          handleChange,
          errors,
          isSubmitting,
        }) => (
          <form className="flex flex-col mt-5" onSubmit={handleSubmit}>
            <div className="px-5 flex flex-col">
              <label htmlFor="phone">Telefon Numaranız</label>
              <input
                className="border text-lg py-2 pl-2 border-gray-300 outline-none "
                type="number"
                placeholder="(xxx) xxx xx xx"
                id="phone"
                value={values.phone}
                onChange={handleChange}
              />
              {errors.phone && touched.phone && (
                <div className="text-red-400">{errors.phone}</div>
              )}
            </div>
            <div className="flex absolute bottom-5 w-screen">
              <button
                className="bg-gray-300 px-5 py-2 w-9/12  mx-auto  font-semibold hover:bg-gray-400 duration-300 text-center "
                disabled={isSubmitting}
                type="submit"
              >
                Gönder
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default PhoneLogin;
