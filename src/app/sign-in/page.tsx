"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import React from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";

export default function SignInPage() {
  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <Card className='max-w-sm mx-auto'>
        <CardHeader>
          <CardTitle>
            <h3 className='text-3xl font-bold text-red-500'>Sign Up</h3>
          </CardTitle>
          <CardDescription>
            Sign-In with your Email and Password to access your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action='' className='gap-y-3'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='email'>Email Address</Label>
              <Input id='email' type='email' placeholder='email@example.next' />
              <p className='text-red-500 text-thin text-sm'>error here...</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='password'>Password</Label>
              <Input id='password' type='password' placeholder='Password' />
              <p className='text-red-500 text-thin text-sm'>error here...</p>
            </div>
            <div className='w-full mt-5'>
              <Button type='submit' className='w-full bg-red-500 text-white'>
                Sign Up
              </Button>
            </div>
            <div className='mt-5'>
              <p className='font-light text-md text-left'>
                I don&apos;t have an{" "}
                <Link href='/sign-up' className='text-blue-500 underline'>
                  account!
                </Link>
              </p>
            </div>
          </form>
          <Separator />
          <div className='flex flex-row my-2 justify-evenly mx-auto items-center'>
            <Button
              onClick={() => {}}
              className='bg-slate-300 duration-100 ease-in-out hover:bg-slate-400 hover:scale-110'
              variant='outline'
              disabled={false}
              size='lg'
            >
              <FaGithub className='size-8 left-2.5 top-2.5' />
            </Button>
            <Button
              onClick={() => {}}
              className='bg-slate-300 duration-100 ease-in-out hover:bg-slate-400 hover:scale-110'
              variant='outline'
              disabled={false}
              size='lg'
            >
              <FaGoogle className='size-8 left-2.5 top-2.5' />
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
