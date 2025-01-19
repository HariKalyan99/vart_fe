// import React, { useState } from "react";

// const ForgotPwdPage = () => {
//   const [mailSent, setMailSent] = useState(true);


  

//   return (
//     <div
//       className={`w-full h-[100vh] flex justify-center items-center ${
//         !mailSent ? "bg-nostalgicblue" : "bg_wallpaper5"
//       }`}
//     >
//       <div
//         className={`${
//           mailSent ? "h-[400px]" : "h-[200px]"
//         } w-[500px] border-2 rounded-xl bg-primary2 border-white shadow-2xl`}
//       >
//         {mailSent ? (
//           <form className="w-full h-full flex justify-evenly items-center flex-col">
//             <span className="text-2xl font-bold">Reset password</span>
//             <input
//               type="text"
//               className="w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2"
//               placeholder="Enter the password sent to your mail"
//             />
//             <input
//               type="text"
//               className="w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2"
//               placeholder="New password"
//             />
//             <input
//               type="password"
//               className="w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2"
//               placeholder="Confirm New password"
//             />
//             <button
//               type="submit"
//               className="w-[100px] h-auto bg-raddishpinklight p-2 rounded-lg text-black hover:bg-chestnut hover:text-white"
//             >
//               Reset
//             </button>
//             <p>
//               Don't reset password? skip to{" "}
//               <span className="text-base font-bold underline hover:cursor-pointer hover:text-chestnut">
//                 Login
//               </span>
//             </p>
//           </form>
//         ) : (
//           <form className="w-full h-full flex justify-evenly items-center flex-col">
//             <span className="text-2xl font-bold">Enter your mail</span>
//             <input
//               type="email"
//               className="w-[80%] h-[40px] bg-transparent outline-none border-b placeholder-[black] fs-2"
//               placeholder="Enter your mail to receive the OTP"
//             />
//             <button
//               type="submit"
//               className="w-[100px] h-auto bg-chestnut p-2 rounded-lg text-white hover:bg-black"
//             >
//               Send email
//             </button>
//           </form>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ForgotPwdPage;




import React, { useState } from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const ForgotPwdPage = () => {
  const [mailSent, setMailSent] = useState(true);

  return (
    <Box
      className={`w-full h-[100vh] flex justify-center items-center ${
        !mailSent ? "bg-nostalgicblue" : "bg_wallpaper5"
      }`}
    >
      <Box
        className={`${
          mailSent ? "h-[400px]" : "h-[200px]"
        } w-[500px] border-2 rounded-xl bg-primary2 border-white shadow-2xl flex justify-center items-center`}
      >
        {mailSent ? (
          <form className="w-full h-full flex justify-evenly items-center flex-col">
            <span className="text-2xl font-bold">Reset password</span>
            <TextField
              type="text"
              className="w-[80%] mb-4"
              placeholder="Enter the password sent to your mail"
              variant="standard"
              color="black"
            />
            <TextField
              type="text"
              className="w-[80%] mb-4"
              placeholder="New password"
              variant="standard"
              color="black"
            />
            <TextField
              type="password"
              className="w-[80%] mb-4"
              placeholder="Confirm New password"
              variant="standard"
              color="black"
            />
           
            <Button variant="contained" type='submit' sx={{backgroundColor: "#70645C"}} className='hover:bg-black'>
            Reset
          </Button>
            <p>
              Don't reset password? skip to{" "}
              <span className="text-base font-bold underline hover:cursor-pointer hover:text-chestnut">
                Login
              </span>
            </p>
          </form>
        ) : (
          <form className="w-full h-full flex justify-evenly items-center flex-col">
            <span className="text-2xl font-bold">Enter your mail</span>
            <TextField
              type="email"
              className="w-[80%] mb-4"
              placeholder="Enter your mail to receive the OTP"
              variant="standard"
              color="black"
            />
            
            <Button variant="contained" type='submit' sx={{backgroundColor: "#70645C"}} className='hover:bg-black'>
            Send email
          </Button>
          </form>
        )}
      </Box>
    </Box>
  );
};

export default ForgotPwdPage;

