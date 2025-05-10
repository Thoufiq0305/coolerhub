
import * as React from "react";

export interface ShieldProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const Shield = React.forwardRef<SVGSVGElement, ShieldProps>(
  ({ color = "currentColor", size = 24, strokeWidth = 2, ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    );
  }
);

Shield.displayName = "Shield";

export default Shield;
