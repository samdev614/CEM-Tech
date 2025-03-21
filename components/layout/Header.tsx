import React from "react";
import { motion } from "framer-motion";
import  {style} from "@/constants/style"
import { textVariant } from "@/utils/motion"

interface IHeader {
  useMotion: boolean;
  p: string;
  h2: string;
}

export const Header: React.FC<IHeader> = ({ useMotion, p, h2 }) => {
  const Content = () => (
    <>
      <p className={style.sectionSubText}>{p}</p>
      <h2 className={style.sectionHeadText}>{h2}</h2>
    </>
  );

  return useMotion === true ? (
    <motion.div variants={textVariant()}>
      <Content />
    </motion.div>
  ) : (
    <Content />
  );
};