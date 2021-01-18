import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const notifySuccess = (message) =>
  toast(message, {
    position: "top-center",
    type: "success",
  });
