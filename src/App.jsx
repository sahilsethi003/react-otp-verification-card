import React, { useState } from 'react';
import OtpInput from './components/OtpInput';

function App() {
  const [otp, setOtp] = useState('');
  const [error, setError] = useState(false);
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    if (otp === "123456") {
      setError(false);
      setIsVerified(true);
    } else {
      setError(true);
      setIsVerified(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-6 sm:p-10 border border-gray-200">

        <OtpInput
          length={6}
          value={otp}
          onChange={(val) => {
            setOtp(val);
            setError(false);
            setIsVerified(false);
          }}
          error={error}
        />

        <button
          onClick={handleVerify}
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition"
        >
          Verify OTP
        </button>

        {error && (
          <p className="text-center text-sm text-red-500 mt-4">
            ❌ Invalid OTP. Please try again.
          </p>
        )}

        {isVerified && (
          <p className="text-center text-green-600 mt-4 text-lg font-medium">
            ✅ OTP Verified!
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
