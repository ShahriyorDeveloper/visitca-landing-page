"use client";

import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import type { FC } from "react";

import { Button } from "@/components/ui/button";
import {
  DialogClose,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import Logo from "../../../../../public/svgs/logo.svg";
import { useReduxDispatch, useReduxSelector } from "../../../../hooks/useRedux";
import { setSignIn } from "../../../../redux/slices/auth";

const SignIn: FC = () => {
  const dispatch = useReduxDispatch();
  const {
    sign_in: { number },
  } = useReduxSelector(({ auth }) => auth);
  const t = useTranslations();

  // const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   let inputValue = e.target.value;

  //   // Ensure the value starts with "+998" and doesn't remove it
  //   if (!inputValue.startsWith("+998")) {
  //     inputValue = "+998" + inputValue.replace("+998", "");
  //   }
  //   console.log(inputValue);

  //   dispatch(setSignIn({ number: inputValue }));
  // };

  return (
    <div>
      <DialogHeader>
        <DialogTitle>
          <Image src={Logo} alt="logo" />
        </DialogTitle>
        <DialogDescription className="mt-4 mb-5 text-[#101828] text-[24px] font-[700] leading-[28px]">
          {t("login.title")}
        </DialogDescription>
        <DialogClose asChild>
          <Button
            variant="ghost"
            className="absolute top-2 right-2 text-[18px] text-[#667085]"
          >
            X
          </Button>
        </DialogClose>
      </DialogHeader>

      <div className="grid gap-4 py-4 mb-2">
        <div className="flex flex-col gap-2 items-start">
          <Label htmlFor="phone" className="text-right mt-4">
            {t("login.phone")}
          </Label>
          <Input
            value={number}
            onChange={(e) => dispatch(setSignIn({ number: e.target.value }))}
            type="number"
            id="phone"
            placeholder="+9989900025717"
            className="col-span-3 bg-[#F7F8F9] border-none"
          />
        </div>
      </div>

      <p>
        {t("login.agree")}
        <Link
          href="https://www.termsfeed.com/live/30ab43ab-2580-4b3f-ae49-6be20be870b3"
          className="text-blue-500 underline ml-1"
          target="_blank"
        >
          {t("login.offerta")}
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
