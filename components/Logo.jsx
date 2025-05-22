import Link from "next/link";
import Image from "next/image";

const logo = ({ classList }) => {
  return (
    <div style={{ cursor: "pointer" }}>
      <div className={classList || "font-bold text-4xl text-gray-900 dark:text-white"}>
        sarwar__
      </div>
    </div>

  );
};

export default logo;
