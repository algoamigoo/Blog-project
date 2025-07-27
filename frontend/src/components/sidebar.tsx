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
import { 
  BookOpen, 
  BoxSelect
} from "lucide-react";
import { blogCategories, useAppData } from "@/context/AppContext";

const SideBar = () => {
  const { searchQuery, setSearchQuery, category, setCategory } = useAppData();

  return (
    <Sidebar>
      <SidebarHeader className="bg-gradient-to-r from-blue-600 to-purple-600 text-white p-6 rounded-none">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <BookOpen className="h-6 w-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold">The Reading Retreat</h1>
            <p className="text-blue-100 text-sm">Discover amazing stories</p>
          </div>
        </div>
      </SidebarHeader>
      <SidebarContent className="bg-white">
        <SidebarGroup>
          <SidebarGroupLabel>Search</SidebarGroupLabel>
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Your Desired blog"
          />

          <SidebarGroupLabel>Categories</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton
                onClick={() => setCategory("")}
                className={category === "" ? "bg-blue-100 text-blue-700 font-medium" : ""}
              >
                <BoxSelect /> <span>All</span>
              </SidebarMenuButton>
              {blogCategories?.map((e, i) => {
                return (
                  <SidebarMenuButton
                    key={i}
                    onClick={() => setCategory(e)}
                    className={category === e ? "bg-blue-100 text-blue-700 font-medium" : ""}
                  >
                    <BoxSelect /> <span>{e}</span>
                  </SidebarMenuButton>
                );
              })}
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
};

export default SideBar;