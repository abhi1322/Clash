import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import React from "react";

const Register = () => {
  return (
    <div className="bg-slate-50 h-screen flex justify-center items-center">
      <div className="w-full mx-5 md:mx-0  md:w-[600px] bg-white rounded-md shadow-xl shadow-slate-100 py-5 px-6">
        <h1 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-500 to-blue-600 text-transparent bg-clip-text text-center">
          Clash App
        </h1>
        <h6 className="text-2xl font-semibold mt-3">Sign Up</h6>
        <p className="text-neutral-500">Register your self right now</p>
        <form>
          <div className="mt-4">
            <Label htmlFor="name">Name </Label>
            <Input
              type="name"
              id="name"
              name="name"
              placeholder="Enter your name"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="email">Email </Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your Password"
            />
          </div>
          <div className="mt-4">
            <Label htmlFor="password">Confirm Password</Label>
            <Input
              type="password"
              id="cpassword"
              name="confirm_password"
              placeholder="Confirm your Password"
            />
          </div>
          <div className="mt-6 flex  justify-between items-center">
            <Button className="bg-gradient-to-br px-8 rounded-xl from-cyan-300 hover:shadow-xl hover:scale-95 shadow-cyan-700/50 transition-transform ease-in-out to-blue-500">
              Create Account
            </Button>
          </div>
        </form>
        <p className="text-center mt-4 text-sm">
          Already have a account?
          <Link href="login" className="ml-1 underline text-blue-500">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
