import { Link } from "react-router-dom";
import { Search, Bell, PenLine } from "lucide-react";
import { Avatar2 } from "./BlogCard";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";
import { useTheme } from "../hooks";

export const AppBar = () => {
  const { dark, setDark } = useTheme();

  <motion.button
    whileTap={{ scale: 0.9 }}
    onClick={() => setDark(!dark)}
    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800"
  >
    {dark ? (
      <Sun className="w-4 h-4 text-yellow-400" />
    ) : (
      <Moon className="w-4 h-4 text-gray-600" />
    )}
  </motion.button>;

  return (
    <div className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/blogs" className="text-2xl font-extrabold tracking-tight">
          Medium<span className="text-green-600">.</span>
        </Link>

        {/* Search */}
        <div className="hidden md:flex items-center gap-3 px-5 py-2 rounded-full bg-gray-100 w-[420px]">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            placeholder="Search stories, authors, topics..."
            className="bg-transparent outline-none text-sm w-full"
          />
        </div>

        {/* Actions */}
        <div className="flex items-center gap-5">
          <Link to="/publish">
            <button className="flex items-center gap-2 px-5 py-2 rounded-full text-sm font-medium text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:opacity-90 transition">
              <PenLine size={16} />
              Write
            </button>
          </Link>

          <Bell className="w-5 h-5 text-gray-600 hover:text-black cursor-pointer" />
          <Avatar2 name="Kartikey" />
        </div>
      </div>
    </div>
  );
};
