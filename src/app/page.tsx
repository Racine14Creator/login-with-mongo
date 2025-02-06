"use client";
import UserButton from "@/components/ui/userButton";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function Home() {
  return (
    <div className='flex flex-col w-full md:max-w-7xl mx-auto'>
      <SessionProvider>
        <UserButton />
      </SessionProvider>
    </div>
  );
}
