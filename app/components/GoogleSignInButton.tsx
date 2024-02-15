"use client";
import { Button } from "@/components/ui/button";
import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";
import GoogleIcon from "../../public/google.svg";

export const GoogleSignInButton = () => {
  return (
    <Button variant="outline" size="icon" onClick={() => signIn("google")}>
      <Image src={GoogleIcon} alt="google" className="w-6 h-6" />
    </Button>
  );
};
