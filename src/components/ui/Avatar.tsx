import { motion } from "framer-motion";
import React from "react";

interface AvatarProps {
  name: string;
}

const Avatar: React.FC<AvatarProps> = ({ name }) => {
  const [imgError, setImgError] = React.useState(false);

  const initials = name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");

  return (
    <motion.div
      className="w-28 h-28 rounded-full ring-2 ring-neutral-200 dark:ring-neutral-700 overflow-hidden bg-neutral-900 dark:bg-neutral-100 flex items-center justify-center text-3xl font-extrabold tracking-tight text-neutral-100 dark:text-neutral-900"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {imgError ? (
        <span aria-hidden="true">{initials}</span>
      ) : (
        <img
          src="/avatar.jpg"
          alt={`${name} profile`}
          width={112}
          height={112}
          loading="eager"
          fetchPriority="high"
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      )}
    </motion.div>
  );
};

export default Avatar;
