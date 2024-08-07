import React, { ComponentPropsWithoutRef, PropsWithoutRef } from "react";

const Framer = (props: ComponentPropsWithoutRef<"svg"> & { size?: number }) => {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.size}
        {...props}
        height={props.size}
        viewBox="0 0 24 24"
      >
        <g
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
        >
          <path d="M12 12L4 4v16L20 4v16l-4-4" />
          <path d="m20 12l-8 8l-4-4" />
        </g>
      </svg>
    </div>
  );
};

export default Framer;
