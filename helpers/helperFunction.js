import { Slide, toast } from "react-toastify";

export const handleError = (error) => {
    if(error.response.data?.error){
      showToast("Unauthorized", "error");
    }else if (error.response) {
      const { message } = error.response.data;
      showToast(message, "error");
    } else {
      showToast("Unknown error occurred", "error");
    }
  };



export const showToast = (message, type = "success") => {
    const toastOptions = {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Slide,
    };
  
    if (type === "success") {
      toast.success(`🐴${message}`, toastOptions);
    } else if (type === "error") {
      toast.error(`${message}🙈🙉🙊`, toastOptions);
    } else if (type === "warning") {
      toast.warning(`🐤${message}`, toastOptions);
    }
  };