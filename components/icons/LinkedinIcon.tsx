import React from "react";

interface LinkedinIconProps {
  className: string;
  color: string;
}

const LinkedinIcon: React.FC<LinkedinIconProps> = ({ className, color }) => {
  return (
    <svg
      width="auto"
      height="auto"
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M6.93945 5.83987C6.93919 6.3703 6.72822 6.8789 6.35296 7.25379C5.9777 7.62867 5.46889 7.83913 4.93845 7.83887C4.40802 7.8386 3.89942 7.62763 3.52453 7.25237C3.14965 6.87711 2.93919 6.3683 2.93945 5.83787C2.93972 5.30743 3.15069 4.79883 3.52595 4.42395C3.90121 4.04906 4.41002 3.8386 4.94045 3.83887C5.47089 3.83913 5.97949 4.0501 6.35437 4.42536C6.72926 4.80062 6.93972 5.30943 6.93945 5.83987ZM6.99945 9.31987H2.99945V21.8399H6.99945V9.31987ZM13.3195 9.31987H9.33945V21.8399H13.2795V15.2699C13.2795 11.6099 18.0495 11.2699 18.0495 15.2699V21.8399H21.9995V13.9099C21.9995 7.73987 14.9395 7.96987 13.2795 10.9999L13.3195 9.31987Z"
        fill={color}
      />
    </svg>
  );
};

export default LinkedinIcon;
