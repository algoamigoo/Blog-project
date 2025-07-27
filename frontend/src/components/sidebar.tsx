"use client";
import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./ui/sidebar";
import { Input } from "./ui/input";
import { BookOpen } from "lucide-react";
import { blogCategories, useAppData } from "@/context/AppContext";

const SideBar = () => {
  const { searchQuery, setSearchQuery, category, setCategory } = useAppData();
  
  // Sort categories alphabetically
  const sortedCategories = blogCategories ? [...blogCategories].sort() : [];
  
  return (
    <Sidebar>
      <SidebarHeader className="bg-black text-white p-6 rounded-none">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/10 rounded-lg backdrop-blur-sm border border-white/20">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold tracking-tight">The Reading Retreat</h1>
          </div>
        </div>
      </SidebarHeader>
      
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-3">
            Search
          </SidebarGroupLabel>
          <div className="px-3 mb-6">
            <Input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search your desired blog..."
              className="border-gray-200 focus:border-gray-400 focus:ring-0 transition-colors duration-200"
            />
          </div>
          
          <SidebarGroupLabel className="text-gray-900 font-semibold text-sm uppercase tracking-wider mb-3">
            Categories
          </SidebarGroupLabel>
          
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setCategory("")}
                className={`px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                  category === "" 
                    ? "bg-gray-100 text-gray-900 font-medium border-l-4 border-black" 
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                <span>All Categories</span>
              </SidebarMenuButton>
              
              {sortedCategories.map((categoryItem, i) => (
                <SidebarMenuButton
                  key={i}
                  onClick={() => setCategory(categoryItem)}
                  className={`px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50 ${
                    category === categoryItem 
                      ? "bg-gray-100 text-gray-900 font-medium border-l-4 border-black" 
                      : "text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <span>{categoryItem}</span>
                </SidebarMenuButton>
              ))}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;