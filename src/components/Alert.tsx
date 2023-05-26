import { motion } from "framer-motion";

function Alert({ response }: { response: string }) {
  var alertStyle = "";
  var message = "";
  if (response == "error") {
    alertStyle =
      "h-20 w-1/4 bg-red-700 rounded-full p-4 flex justify-center items-center";
    message = "Something whent wrong please try again!";
  } else {
    alertStyle =
      "h-20 w-1/4 bg-green-700 rounded-full p-4 flex justify-center items-center";
    message = "Your message was sent successfuly";
  }
  return (
    <motion.div
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
      className={alertStyle}
    >
      {message}
    </motion.div>
  );
}
export default Alert;
