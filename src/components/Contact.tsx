import { AnimatePresence, motion } from "framer-motion";
import { useFormik } from "formik";
import * as Yup from "yup";
import useSubmit from "./hooks/useSubmit";
import ReCAPTCHA from "react-google-recaptcha";
import Alert from "./Alert";
import { useState, useEffect } from "react";


import { useRef } from "react";
function Contact() {
  const env = import.meta.env
  const [showAlert, setShowAlert] = useState(false);
  const captchaRef: any = useRef(null);
  const { isLoading, response, submit } = useSubmit();
  const formik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      message: "",
      "g-recaptcha-response": "",
    },
    onSubmit: (values) => {
      let token: string = captchaRef.current.getValue();
      captchaRef.current.reset();
      values = {
        ...values,
        "g-recaptcha-response": token,
      };
      submit(values);
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

  useEffect(() => {
    if (response) {
      setShowAlert(true);
    }
    setTimeout(() => setShowAlert(false), 3000);
  }, [response]);
  
  const disablButton = Object.keys(formik.errors).length != 0 || isLoading;
  return (
    <div className="relative flex flex-col justify-center items-center mt-[140px]">
      <div className="h-20">
      <AnimatePresence>
        {showAlert && <Alert response={response} />}
      </AnimatePresence>
</div>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.8,
        }}
        id="contact-section"
        className="  absolute flex -top-16 left-10 2xl:left-1/4 border-2 py-1 px-3 rounded-3xl"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
        </span>
        <span className="">Contact me</span>
      </motion.div>
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
            ease: "easeIn",
          }}
          className="flex gap-4"
        >
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
            ease: "easeIn",
          }}
          className=" flex flex-col"
        >
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
            htmlFor="message"
          >
            Your Message Here:
          </label>
          {formik.errors.message && formik.touched.message ? (
            <div className="text-xs  text-red-600 -translate-y-5">
              {formik.errors.message}
            </div>
          ) : null}
        </motion.div>
        <div className="">
          <ReCAPTCHA
            sitekey={env.VITE_REACT_APP_SITE_KEY}
            ref={captchaRef}
            theme="dark"
          />
        </div>

        <button
          disabled={disablButton}
          className={
            disablButton
              ? "bg-green-200 rounded-full py-1 text-darkgray flex justify-center items-center"
              : "bg-green-400 rounded-full py-1 text-darkgray hover:text-green-400 hover:bg-darkgray border-2 border-green-400 hover:scale-90 transition duration-300  ease-in flex justify-center items-center"
          }
        >
          {isLoading ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 animate-spin"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99"
              />
            </svg>
          ) : (
            "Send Message"
          )}
        </button>
      </form>
    </div>
  );
}
export default Contact;
