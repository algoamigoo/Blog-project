import Link from "next/link";
import React from "react";
import { Card } from "./ui/card";
import { Calendar, Clock } from "lucide-react";
import moment from "moment";

interface BlogCardProps {
  image: string;
  title: string;
  desc: string;
  id: string;
  time: string;
}

const BlogCard: React.FC<BlogCardProps> = ({
  image,
  title,
  desc,
  id,
  time,
}) => {
  return (
    <Link href={`/blog/${id}`}>
      <Card className="overflow-hidden rounded-xl shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-gray-100 bg-white group">
        <div className="relative w-full h-[200px] overflow-hidden">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
        </div>

        <div className="p-4">
          <div className="flex items-center justify-center gap-2 text-xs text-gray-500 mb-3">
            <Calendar size={14} />
            <span className="font-medium">{moment(time).format("DD MMM YYYY")}</span>
            <span className="text-gray-300">•</span>
            <Clock size={14} />
            <span>3 min read</span>
          </div>
          
          <h2 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2 text-center group-hover:text-black transition-colors duration-200">
            {title}
          </h2>
          
          <p className="text-gray-600 text-sm text-center line-clamp-2 leading-relaxed">
            {desc.length > 80 ? `${desc.slice(0, 80)}...` : desc}
          </p>
          
          <div className="mt-4 flex justify-center">
            <span className="text-xs font-medium text-gray-400 group-hover:text-gray-600 transition-colors duration-200 uppercase tracking-wider">
              Read More
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default BlogCard;