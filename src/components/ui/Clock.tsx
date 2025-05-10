
import * as React from "react";

export interface ClockProps extends React.SVGProps<SVGSVGElement> {
  size?: number;
  strokeWidth?: number;
}

const Clock = React.forwardRef<SVGSVGElement, ClockProps>(
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
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    );
  }
);

Clock.displayName = "Clock";

export default Clock;
