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
import React from "react";

export default function SignUpPage() {
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
          <form action='' className='gap-y-3'>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='fullname'>Fullname</Label>
              <Input id='fullname' type='text' placeholder='John Doe' />
              <p className='text-red-500 text-thin text-sm'>error here...</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='email'>Email Address</Label>
              <Input id='email' type='email' placeholder='email@example.next' />
              <p className='text-red-500 text-thin text-sm'>error here...</p>
            </div>
            <div className='flex flex-col gap-2'>
              <Label htmlFor='fullname'>Fullname</Label>
              <Input id='fullname' type='text' placeholder='John Doe' />
              <p className='text-red-500 text-thin text-sm'>error here...</p>
            </div>
            <div className='w-full mt-5'>
              <Button type='submit' className='w-full bg-red-500 text-white'>
                Sign Up
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
