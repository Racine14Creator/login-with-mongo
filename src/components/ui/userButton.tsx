import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Loader } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React from "react";
import { AvatarFallback } from "@radix-ui/react-avatar";
import Link from "next/link";

export default function UserButton() {
  const router = useRouter();

  const { data: session, status } = useSession();
  console.log(session);

  const handleSignOut = async () => {
    await signOut({
      redirect: false,
    });
    router.push("/");
  };

  if (status === "loading") {
    return <Loader className='size-6 mr-4 mt-4 float-right animate-spin' />;
  }

  const avatarFallback = session?.user?.email?.charAt(0).toUpperCase();

  return (
    <nav className='flex justify-end'>
      {session ? (
        <DropdownMenu modal={false}>
          <DropdownMenuTrigger className='outiline-none relative float-right p-4 md:p-8'>
            <div className='flex gap-4 items-center'>
              <span>{session.user?.email || "N/A"}</span>
              <Avatar className='size-10 hover:opacity-75 transition-opacity'>
                <AvatarImage
                  className='size-10 hover:opacity-75 transition'
                  src={session.user?.image || undefined}
                ></AvatarImage>
                <AvatarFallback className='w-10 h-10 flex justify-center items-center text-center bg-sky-900 text-white'>
                  {avatarFallback}
                </AvatarFallback>
              </Avatar>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            align='center'
            className='w-50'
            sideOffset={5}
            side='bottom'
          >
            <DropdownMenuItem className='h-10' onClick={() => handleSignOut()}>
              Log Out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      ) : (
        <>
          <div className='flex justify-end p-4 gap-4'>
            <Button asChild>
              <Link className='sign-in' href='/sign-in'>
                Sign In
              </Link>
            </Button>
            <Button asChild>
              <Link className='sign-in' href='/sign-up'>
                Sign Up
              </Link>
            </Button>
          </div>
        </>
      )}
    </nav>
  );
}
