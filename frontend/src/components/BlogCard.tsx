import { Link } from "react-router-dom";
import { Bookmark, Heart } from "lucide-react";

interface BlogCardProps {
  id: number;
  authorname: string;
  title: string;
  content: string;
  publishedDate: string;
  className?: string;
}

export const BlogCard = ({
  id,
  authorname,
  className,
  title,
  content,
  publishedDate,
}: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <div
        className={`group relative bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border ${className}`}
      >
        {/* Accent */}
        <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-green-500 to-emerald-600 rounded-l-2xl" />

        {/* Author */}
        <div className="flex items-center gap-3 text-sm text-gray-500">
          <Avatar1 name={authorname} />
          <span className="font-medium text-gray-700">{authorname}</span>
          <span>•</span>
          <span>{publishedDate}</span>
        </div>

        {/* Title */}
        <h2 className="mt-4 text-2xl font-semibold leading-tight group-hover:text-green-600 transition">
          {title}
        </h2>

        {/* Excerpt */}
        <p className="mt-3 text-gray-500 leading-relaxed">
          {content.slice(0, 160)}...
        </p>

        {/* Footer */}
        <div className="mt-6 flex items-center justify-between text-sm text-gray-500">
          <span>{Math.ceil(content.length / 120)} min read</span>

          <div className="flex items-center gap-4">
            <Heart className="w-4 h-4 hover:text-red-500 cursor-pointer" />
            <Bookmark className="w-4 h-4 hover:text-black cursor-pointer" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export function Avatar1({ name }: { name: string }) {
  return (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center font-bold text-xs">
      {name[0]}
    </div>
  );
}

export function Avatar2({ name }: { name: string }) {
  return (
    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center font-bold">
      {name[0]}
    </div>
  );
}
