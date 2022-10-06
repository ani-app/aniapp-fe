import { Formik } from "formik";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";

const Register = () => {
  const [addFile, setAddFile] = useState(null);
  const navigate = useNavigate();
  const addPhoto = () => {
    const addImg = document.getElementById("img");

    setAddFile(addImg.value);
  };

  return (
    <div className="min-h-screen overflow-x-hidden">
      <div className="h-[10vh]">
        <div className="bg-gray-300 text-lg font-extrabold w-fit px-10 mx-auto mt-1 py-2">
          LOGO
        </div>
      </div>
      <Formik
        initialValues={{
          title1: "",
          title2: "",
          title3: "",
          title4: "",
          title5: "",
        }}
        validationSchema={Yup.object({
          title1: Yup.string().required("Title boş bırakılamaz"),
          title2: Yup.string().required("Title boş bırakılamaz"),
          title3: Yup.string().required("Title boş bırakılamaz"),
          title4: Yup.string()
            .required("Hayvan türü boş bırakılamaz")
            .oneOf(["köpek", "kedi"]),
          title5: Yup.string().required("Title boş bırakılamaz"),
        })}
        onSubmit={(values, { resetForm, setSubmitting }) => {
          resetForm();
          setSubmitting(false);
          navigate("/auth/animalRegister");
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
            className="flex flex-col mt-5 gap-2 min-h-[90vh]  rounded-xl p-2  "
            onSubmit={handleSubmit}
          >
            <div>
              <label className="flex flex-col gap-5 items-center" htmlFor="img">
                <input
                  onChange={() => addPhoto()}
                  className="hidden"
                  type="file"
                  id="img"
                  name="img"
                  accept="image/*"
                />
                <img
                  className="w-[150px] h-[150px] mx-auto rounded-full"
                  src="/images/default-pp-add.jpg"
                  alt=""
                />
                <span className="font-semibold">Fotoğraf Ekle</span>
              </label>
              <div className="font-semibold text-center text-green-400">
                {addFile === null ? null : "Başarıyla Eklendi"}
              </div>
            </div>
            <h1 className="font-semibold text-lg">Genel Bilgiler</h1>
            <div>
              <select
                className="pl-2 py-2 border-2 border-gray-300 bg-gray-300 text-white  w-full"
                id="title4"
                value={values.title4}
                onChange={handleChange}
              >
                <option value="">Hayvan Türünü Seçin</option>
                <option value="kedi">Kedi</option>
                <option value="köpek">Köpek</option>
              </select>
              {errors.title4 && touched.title4 && (
                <div className="text-red-300 font-extrabold">
                  {errors.title4}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="title2" className="text-gray-400 font-semibold">
                Title 1
              </label>
              <input
                type="text"
                placeholder="Title"
                id="title2"
                value={values.title2}
                onChange={handleChange}
                className="pl-2 py-2 border-2  "
              />
              {errors.title2 && touched.title2 && (
                <div className="text-red-300 font-extrabold">
                  {errors.title2}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="title3" className="text-gray-400 font-semibold">
                Title 2
              </label>
              <input
                type="text"
                placeholder="Title"
                id="title3"
                value={values.title3}
                onChange={handleChange}
                className="pl-2 py-2 border-2  "
              />
              {errors.title3 && touched.title3 && (
                <div className="text-red-300 font-extrabold">
                  {errors.title3}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="title5" className="text-gray-400 font-semibold">
                Title 3
              </label>
              <input
                type="text"
                placeholder="Title"
                id="title5"
                value={values.title5}
                onChange={handleChange}
                className="pl-2 py-2 border-2  "
              />
              {errors.title5 && touched.title5 && (
                <div className="text-red-300 font-extrabold">
                  {errors.title5}
                </div>
              )}
            </div>
            <div className="flex flex-col">
              <label htmlFor="title1" className="text-gray-400 font-semibold">
                Title 4
              </label>
              <input
                type="text"
                placeholder="Title"
                id="title1"
                value={values.title1}
                onChange={handleChange}
                className="pl-2 py-2 border-2  "
              />
              {errors.title1 && touched.title1 && (
                <div className="text-red-300 font-extrabold">
                  {errors.title1}
                </div>
              )}
            </div>

            <button
              className="bg-gray-300 w-full mt-auto  text-white relative font-extrabold rounded-sm py-2"
              disabled={isSubmitting}
              type="submit"
            >
              <span className="w-1/3 z-0 bg-gray-400 absolute h-full left-0 top-0"></span>
              <span className="z-10 relative">İleri(1/3)</span>
            </button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Register;
