"use client";

import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import "./styles/globals.css";

export default function Providers({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return <>{children}</>;
}
