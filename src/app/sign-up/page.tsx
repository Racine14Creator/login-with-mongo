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
import { useRouter } from "next/navigation";
import React from "react";

import { FaGithub, FaGoogle, FaWatchmanMonitoring } from "react-icons/fa";
import { toast } from "sonner";

export default function SignUpPage() {
  const [pending, setPending] = React.useState<boolean>(false);
  const [error, setError] = React.useState<string | null>(null);
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // console.log(form);
    const { name, email, password, confirmPassword } = form;
    setPending(true);

    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required");
      setPending(false);
      return;
    }

    const res = await fetch("/api/auth/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await res.json();

    if (res.ok) {
      console.log("Success");
      setPending(false);

      toast.success(data.message);
      router.push("/sign-in");
    } else if (res.status === 400) {
      setError(data.message);
      setPending(false);
    } else if (data.status === 500) {
      setPending(false);
      toast.error(data.message);
      console.log("Failed");
    }
  };

  return (
    <div className='max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8'>
      <Card className='max-w-sm mx-auto'>
        <CardHeader>
          <CardTitle>
            <h3 className='text-3xl font-bold text-red-500'>Sign Up</h3>
          </CardTitle>
          <CardDescription>
            Use your Email, Full name, and Password to create your account for
            free
          </CardDescription>
        </CardHeader>

        <CardContent>
          {!!error && (
            <div className='px-7 bg-destructive/15 p-3 rounded-md flex items-center gap-3 mb-6'>
              <FaWatchmanMonitoring className='w-6 h-6 text-destructive' />
              <p className='text-destructive'>{error}</p>
            </div>
          )}
          <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='fullname'>Fullname</Label>
              <Input
                id='fullname'
                disabled={pending}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                type='text'
                placeholder='John Doe'
              />
              {/* <p className='text-red-500 text-thin text-sm'>error here...</p> */}
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='email'>Email Address</Label>
              <Input
                id='email'
                disabled={pending}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                type='email'
                placeholder='email@example.next'
              />
              {/* <p className='text-red-500 text-thin text-sm'>error here...</p> */}
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='Pasword'>Password</Label>
              <Input
                id='password'
                disabled={pending}
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                type='password'
                placeholder='Password'
              />
              {/* <p className='text-red-500 text-thin text-sm'>error here...</p> */}
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='confirmPasword'>Confirm Password</Label>
              <Input
                id='confirmpassword'
                type='password'
                disabled={pending}
                onChange={(e) =>
                  setForm({ ...form, confirmPassword: e.target.value })
                }
                value={form.confirmPassword}
                placeholder='ConfirmPassword'
              />
              {/* <p className='text-red-500 text-thin text-sm'>error here...</p> */}
            </div>
            <div className='w-full mt-5'>
              <Button
                type='submit'
                disabled={pending}
                className='w-full bg-red-500 text-white'
              >
                Sign Up
              </Button>
            </div>
            <div className='my-5'>
              <p className='font-light text-md text-left'>
                Already have an{" "}
                <Link href='/sign-in' className='text-blue-500 underline'>
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
