"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { CircleUserRoundIcon, LogIn, Menu, X, Plus, Bookmark, BookOpen } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAppData } from "@/context/AppContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { loading, isAuth } = useAppData();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return (
      <nav className="bg-white border-b-2 border-gray-100 p-4 z-50 shadow-sm">
        <div className="container mx-auto flex justify-between items-center">
          <Link href={"/blogs"} className="flex items-center gap-3">
            <div className="p-2 bg-black/10 rounded-lg backdrop-blur-sm border border-black/20">
              <BookOpen className="h-6 w-6 text-black" />
            </div>
            <h1 className="text-xl font-bold text-gray-900 tracking-tight">The Reading Retreat</h1>
          </Link>

          <div className="md:hidden">
            <Button variant={"ghost"} onClick={() => setIsOpen(!isOpen)} className="hover:bg-gray-100">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
          <ul className="hidden md:flex justify-center items-center space-x-8 text-gray-700">
            <li>
              <Link href={"/blogs"} className="hover:text-black transition-colors duration-200 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/login"} className="hover:text-black transition-colors duration-200">
                <LogIn className="w-5 h-5" />
              </Link>
            </li>
          </ul>
        </div>
        <div
          className={cn(
            "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
            isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <ul className="flex flex-col justify-center items-center space-y-6 p-6 text-gray-700 bg-white border-t border-gray-100">
            <li>
              <Link href={"/blogs"} className="hover:text-black transition-colors duration-200 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link href={"/login"} className="hover:text-black transition-colors duration-200">
                <LogIn className="w-5 h-5" />
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }

  return (
    <nav className="bg-white border-b-2 border-gray-100 p-4 z-50 shadow-sm">
      <div className="container mx-auto flex justify-between items-center">
        <Link href={"/blogs"} className="flex items-center gap-3">
          <div className="p-2 bg-black/10 rounded-lg backdrop-blur-sm border border-black/20">
            <BookOpen className="h-6 w-6 text-black" />
          </div>
          <h1 className="text-xl font-bold text-gray-900 tracking-tight">The Reading Retreat</h1>
        </Link>

        <div className="md:hidden">
          <Button variant={"ghost"} onClick={() => setIsOpen(!isOpen)} className="hover:bg-gray-100">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>
        <ul className="hidden md:flex justify-center items-center space-x-8 text-gray-700">
          <li>
            <Link href={"/blogs"} className="hover:text-black transition-colors duration-200 font-medium">
              Home
            </Link>
          </li>
          {isAuth && (
            <li>
              <Link href={"/blog/saved"}>
                <Button variant="outline" size="sm" className="flex items-center gap-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                  <Bookmark size={16} />
                  Saved Blogs
                </Button>
              </Link>
            </li>
          )}
          {isAuth && (
            <li>
              <Link href={"/blog/new"}>
                <Button size="sm" className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white transition-all duration-200">
                  <Plus size={16} />
                  Add Blog
                </Button>
              </Link>
            </li>
          )}
          {loading ? (
            ""
          ) : (
            <li>
              {isAuth ? (
                <Link href={"/profile"} className="hover:text-black transition-colors duration-200">
                  <CircleUserRoundIcon className="w-6 h-6" />
                </Link>
              ) : (
                <Link href={"/login"} className="hover:text-black transition-colors duration-200">
                  <LogIn className="w-5 h-5" />
                </Link>
              )}
            </li>
          )}
        </ul>
      </div>
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-80 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <ul className="flex flex-col justify-center items-center space-y-6 p-6 text-gray-700 bg-white border-t border-gray-100">
          <li>
            <Link href={"/blogs"} className="hover:text-black transition-colors duration-200 font-medium">
              Home
            </Link>
          </li>
          {isAuth && (
            <li>
              <Link href={"/blog/saved"}>
                <Button variant="outline" size="sm" className="flex items-center gap-2 border-gray-300 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200">
                  <Bookmark size={16} />
                  Saved Blogs
                </Button>
              </Link>
            </li>
          )}
          {isAuth && (
            <li>
              <Link href={"/blog/new"}>
                <Button size="sm" className="flex items-center gap-2 bg-black hover:bg-gray-800 text-white transition-all duration-200">
                  <Plus size={16} />
                  Add Blog
                </Button>
              </Link>
            </li>
          )}
          {loading ? (
            ""
          ) : (
            <li>
              {isAuth ? (
                <Link href={"/profile"} className="hover:text-black transition-colors duration-200">
                  <CircleUserRoundIcon className="w-6 h-6" />
                </Link>
              ) : (
                <Link href={"/login"} className="hover:text-black transition-colors duration-200">
                  <LogIn className="w-5 h-5" />
                </Link>
              )}
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;