import { motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import { easeIn } from "framer-motion/dom";
function Contact() {
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
    },
    onSubmit: (values) => {
      console.log(values);
    },
    validationSchema: Yup.object({
      fullname: Yup.string().required("this field is Required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("this field is Required"),
      message: Yup.string()
        .min(25, "Must be at least 25 characters")
        .required("this field is Required"),
    }),
  });

 const disablButton =  Object.keys(formik.errors).length != 0
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="green-grad text-4xl md:text-6xl pb-20">
        Let Me Help You
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          formik.handleSubmit(e);
        }}
        className="flex flex-col gap-4"
      >
        <motion.div 
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
            duration: 0.5,
            type: "tween",
            ease: "easeIn"
        }}
        className="flex gap-4">
          <span className="relative flex flex-col">
            <input
              className="  peer focus:outline-none bg-transparent border-b-2 border-slate-400"
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Full Name"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              className="text-slate-400 -translate-y-[50px]  peer-placeholder-shown:opacity-0 peer-placeholder-shown:-translate-y-[10px] transition duration-500 "
              htmlFor="fullname"
            >
              Full Name:
            </label>
            {formik.errors.fullname && formik.touched.fullname ? (
              <div className="text-xs  text-red-600 -translate-y-5">
                {formik.errors.fullname}
              </div>
            ) : null}
          </span>
          <span className="flex flex-col">
            <input
              className="peer focus:outline-none bg-transparent border-b-2 border-slate-400"
              type="text"
              id="email"
              name="email"
              placeholder="Email"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            <label
              className="text-slate-400 -translate-y-[50px]  peer-placeholder-shown:opacity-0 peer-placeholder-shown:-translate-y-[10px] transition duration-500 "
              htmlFor="email"
            >
              Email:
            </label>
            {formik.errors.email && formik.touched.email ? (
              <div className="text-xs  text-red-600 -translate-y-5">
                {formik.errors.email}
              </div>
            ) : null}
          </span>
        </motion.div>
        <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.5,
          type: "tween",
          ease: "easeIn"
        }}
        className=" flex flex-col">
          <textarea
            className=" focus:outline-none peer bg-transparent border-b-2 border-slate-400"
            rows={7}
            cols={40}
            placeholder="Your Message Here"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            id="message"
          ></textarea>
          <label
            className="text-slate-400 -translate-y-[200px]  peer-placeholder-shown:opacity-0 peer-placeholder-shown:-translate-y-[160px] transition duration-500 "
            htmlFor="email"
          >
            Your Message Here:
          </label>
          {formik.errors.message && formik.touched.message ? (
            <div className="text-xs  text-red-600 -translate-y-5">
              {formik.errors.message}
            </div>
          ) : null}
        </motion.div>
        <button disabled={disablButton} className= {disablButton?"bg-green-200 rounded-full py-1 text-darkgray":"bg-green-400 rounded-full py-1 text-darkgray hover:text-green-400 hover:bg-darkgray border-2 border-green-400 hover:scale-90 transition duration-300  ease-in"}>
          Send Message
        </button>
      </form>
    </div>
  );
}
export default Contact;
