import { Formik } from "formik";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const PhoneVerify = () => {
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
          num1: "",
          num2: "",
          num3: "",
          num4: "",
        }}
        validationSchema={Yup.object({
          num1: Yup.string().required("Hiç bir kutuyu boş bırakma"),
          num2: Yup.string().required("Hiç bir kutuyu boş bırakma"),
          num3: Yup.string().required("Hiç bir kutuyu boş bırakma"),
          num4: Yup.string().required("Hiç bir kutuyu boş bırakma"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          resetForm();
          setSubmitting(false);
          navigate("/auth/register");
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
          <form className="flex flex-col mt-10" onSubmit={handleSubmit}>
            <p className="text-center py-2 px-10 text-gray-400">
              Lütfen telefonunuza gönderdiğimiz tek kullanıplık şifreyi girin.
            </p>
            <div className="px-10 flex gap-2">
              <input
                className="border text-lg py-4 text-center w-1/4 rounded-lg border-gray-300 outline-none "
                type="number"
                id="num1"
                value={values.num1}
                onChange={handleChange}
              />
              <input
                className="border text-lg py-4 text-center   w-1/4 rounded-lg border-gray-300 outline-none "
                type="number"
                id="num2"
                value={values.num2}
                onChange={handleChange}
              />
              <input
                className="border text-lg py-4 text-center  w-1/4 rounded-lg border-gray-300 outline-none "
                type="number"
                id="num3"
                value={values.num3}
                onChange={handleChange}
              />
              <input
                className="border text-lg py-4 text-center  w-1/4 rounded-lg border-gray-300 outline-none "
                type="number"
                id="num4"
                value={values.num4}
                onChange={handleChange}
              />
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

export default PhoneVerify;
