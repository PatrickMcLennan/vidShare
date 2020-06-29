import React from "react";
import { toast, ToastContent } from "react-toastify";

toast.configure({
  closeButton: false,
  position: "bottom-right",
  hideProgressBar: true,
  toastClassName: "toast",
});

// - LOADING - //
export function LoadingToast(message: string): ToastContent {
  return toast(
    <div className="toast-loader">
      <svg preserveAspectRatio="xMidYMid meet" viewBox="-1.9 -1.9 36 36">
        <defs>
          <linearGradient
            id="apiSpinnerGradient"
            x1="0%"
            y1="0%"
            x2="90%"
            y2="60%"
          >
            <stop offset="0%" stopColor="#1674c0" />
            <stop offset="50%" stopColor="#1674c0" />
            <stop offset="100%" stopColor="white" />
          </linearGradient>
        </defs>
        <circle
          className="api-alert-loading-circle"
          cx="15.91549430918954"
          cy="15.91549430918954"
          fill="none"
          r="15.91549430918954"
          stroke="url(#apiSpinnerGradient)"
          strokeWidth="3"
        />
      </svg>
      <span>{message}</span>
    </div>
  );
}
