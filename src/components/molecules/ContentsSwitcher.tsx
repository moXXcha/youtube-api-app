import React from "react";
import Image from "next/image";
import video from "@/public/movie.svg";
import user from "@/public/user.svg";
import Link from "next/link";

export const ContentsSwitcher = () => {
  return (
    <div className="space-x-2 flex h-6 items-center">
      <Link href="/home" className="w-14 h-6 hover:bg-slate-300 mt-0 flex items-center justify-center rounded-md cursor-pointer">
          <Image src={video} width={20} height={14} alt="aa" />
      </Link>

      <Link href="/searchUser" className="w-14 h-6 hover:bg-slate-300 mt-0 flex items-center justify-center rounded-md cursor-pointer">
          <Image src={user} width={12} height={18} alt="aa" />
      </Link>
    </div>
  );
};
