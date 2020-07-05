import React from "react";

function VimeoSVG({ customClass }: { customClass: string }): JSX.Element {
  return (
    <svg
      className={customClass}
      enableBackground="new 0 0 24 24"
      height="512"
      viewBox="0 0 24 24"
      width="512"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="m20.497 1.505c-3.328-.121-5.576 1.787-6.762 5.694.61-.273 1.203-.395 1.777-.395 4.219 0-.971 8.155-2.263 8.155-1.522 0-2.437-7.284-2.747-9.273-.431-2.765-1.58-4.058-3.447-3.877-.789.075-1.975.799-3.554 2.181-1.15 1.055-2.316 2.105-3.501 3.16l1.129 1.472c1.075-.762 1.702-1.144 1.881-1.144 3.092 0 2.888 15.022 7.783 15.022 4.702 0 12.978-11.521 13.184-16.139l.013-.01c.134-3.165-1.021-4.785-3.493-4.846z"
        fill="#19b2e5"
      />
    </svg>
  );
}

export default VimeoSVG;
