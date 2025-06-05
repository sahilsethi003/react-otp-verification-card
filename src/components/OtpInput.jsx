// import React, { useEffect, useRef, useState } from "react";

// function OtpInput({ length = 6, onComplete, error = false }) {
//   const [otp, setotp] = useState(Array(length).fill(""));
//   const inputRefs = useRef([]);

//   const isNumeric = (value) => /^\d+$/.test(value);

//   const FocusInput = (index) => {
//     inputRefs.current[index]?.focus();
//   };

//   const handleChange = (index, value) => {
//     if (!isNumeric(value)) return;

//     const newOtp = [...otp];
//     newOtp[index] = value;
//     setotp(newOtp);

//     if (value && index < length - 1) {
//       FocusInput(index + 1);
//     }
//   };

//   const handleKeyDown = (index, e) => {
//     if (e.key === "Backspace" && !otp[index] && index > 0) {
//       const newOtp = [...otp];
//       newOtp[index - 1] = "";
//       setotp(newOtp);

//       FocusInput(index - 1);
//     }

//     if (e.key === "ArrowLeft" && index > 0) {
//       e.preventDefault();
//       FocusInput(index - 1);
//     }

//     if (e.key === "ArrowRight" && index < length - 1) {
//       e.preventDefault();
//       FocusInput(index + 1);
//     }
//   };

// const handlePaste = (e) => {
//       e.preventDefault();
//       const pasteData = e.clipboardData.getData("text/plain").slice(0, length);
//       if (isNumeric(pasteData)) {
//         const newOtp = [...otp];
//         pasteData.split("").forEach((char, i) => {
//           if (i < length) newOtp[i] = char;
//         });
//         setotp(newOtp)
//         FocusInput(Math.min(pasteData.length, length-1))
//       }
//     };

//   useEffect(()=>{
//         FocusInput(0)
//     }, [])

//     useEffect(()=>{
//         if(otp.every((digit)=>digit !== '') && onComplete){
//             onComplete(otp.join(''))
//         }
//     }, [otp, onComplete])

//   return (
//     <div
//       className="flex gap-2 justify-center"
//       role="group"
//       aria-label="OTP Input"
//     >
//       {otp.map((digit, index) => (
//         <input
//           key={index}
//           ref={(e) => (inputRefs.current[index] = e)}
//           type="text"
//           inputMode="numeric"
//           maxLength={1}
//           value={digit}
//           onChange={(e) => handleChange(index, e.target.value)}
//           onKeyDown={(e) => handleKeyDown(index, e)}
//           onPaste={handlePaste}
//           className={`w-12 h-12 text-center text-xl border-2 rounded-md
//             focus:outline-none focus:border-blue-500 transition-colors
//             ${error ? 'border-red-500' : 'border-gray-300'}`}
//           aria-label={`Digit ${index + 1} of ${length}`}
//         />
//       ))}
//     </div>
//   );
// };

// export default OtpInput;
import React, { useEffect, useRef, useState } from "react";

function OtpInput({ length = 6, onComplete, onChange, error = false }) {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const isNumeric = (value) => /^\d+$/.test(value);

  const focusInput = (index) => {
    inputRefs.current[index]?.focus();
  };

  const handleChange = (index, value) => {
    if (!isNumeric(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      focusInput(index + 1);
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      focusInput(index - 1);
    }

    if (e.key === "ArrowLeft" && index > 0) {
      e.preventDefault();
      focusInput(index - 1);
    }

    if (e.key === "ArrowRight" && index < length - 1) {
      e.preventDefault();
      focusInput(index + 1);
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text/plain").slice(0, length);
    if (isNumeric(pasteData)) {
      const newOtp = [...otp];
      pasteData.split("").forEach((char, i) => {
        if (i < length) newOtp[i] = char;
      });
      setOtp(newOtp);
      focusInput(Math.min(pasteData.length, length - 1));
    }
  };

  useEffect(() => {
    focusInput(0);
  }, []);

  useEffect(() => {
  if (onComplete && otp.every((digit) => digit !== "")) {
    onComplete(otp.join(""));
  }

  if (typeof onChange === "function") {
    onChange(otp.join(""));
  }
}, [otp]);


  return (
    <div className=" flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-10 border border-gray-200 my-2">
        <h2 className="text-2xl font-bold text-center mb-4">
          OTP Verification
        </h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          Enter the 6-digit code
        </p>

        <div
          className="flex gap-2 justify-center mb-4"
          role="group"
          aria-label="OTP Input"
        >
          {otp.map((digit, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={handlePaste}
              className={`w-12 h-12 text-center text-xl border-2 rounded-md 
                focus:outline-none focus:border-blue-500 transition-colors
                ${error ? "border-red-500" : "border-gray-300"}`}
              aria-label={`Digit ${index + 1} of ${length}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default OtpInput;
