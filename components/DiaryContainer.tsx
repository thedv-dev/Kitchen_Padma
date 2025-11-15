"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function DiaryContainer({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="p-4 bg-white shadow rounded-lg"
    >
      {children}
    </motion.div>
  );
}
