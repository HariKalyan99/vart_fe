import { Slide, toast } from "react-toastify";

export const handleError = (error) => {
    if(error.response.data?.error){
      showToast(JSON.stringify(error.response.data?.message) || "Unauthorized", "error");
    }else if (error.response) {
      const { message } = error.response.data;
      showToast(message, "error");
    } else {
      showToast("Unknown error occurred", "error");
    }
};



export const showToast = (message, type = "success") => {
    const toastOptions = {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
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
