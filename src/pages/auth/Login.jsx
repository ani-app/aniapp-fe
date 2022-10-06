import { Formik } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
const Login = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-sky-500 to-indigo-500">
      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={Yup.object({
          email: Yup.string()
            .email("Bu gerçek bir e posta adresi değil")
            .required("E posta boş bırakılamaz"),
          password: Yup.string()
            .min(8, "Şifre 8 karakterden kısa olamaz")
            .required("Şifre posta boş bırakılamaz"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          resetForm();
          setSubmitting(false);
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
          <form
            className="flex flex-col gap-2  w-[400px] form-bg rounded-xl text-white p-5"
            onSubmit={handleSubmit}
          >
            <h1 className="font-extrabold text-3xl">Giriş yap</h1>

            <input
              type="email"
              placeholder="Email"
              id="email"
              value={values.email}
              onChange={handleChange}
              className="pl-2 py-2 border-2 text-black "
            />
            {errors.email && touched.email && (
              <div className="text-red-300 font-extrabold">{errors.email}</div>
            )}
            <input
              type="password"
              placeholder="Şifre"
              id="password"
              value={values.password}
              onChange={handleChange}
              className="pl-2 py-2 border-2 text-black "
            />
            {errors.password && touched.password && (
              <div className="text-red-300 font-extrabold">
                {errors.password}
              </div>
            )}
            <Link to="/petOwner/auth/register" className="underline ">
              Bir hesabın yoksa hemen kayıt ol !
            </Link>
            <button
              className="bg-yellow-300 text-white  font-extrabold rounded-sm py-2"
              disabled={isSubmitting}
              type="submit"
            >
              Giriş yap
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;
