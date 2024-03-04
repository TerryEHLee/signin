"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const CardWithForm = () => {
  return (
    <>
      <Card className='w-[350px]'>
        <CardHeader>
          <CardTitle>계정 생성</CardTitle>
          <CardDescription>필수정보 입력</CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className='grid w-full items-center gap-4'>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='name'>이름</Label>
                <Input id='name' placeholder='이태리' />
              </div>
              <div className='flex flex-col space-y-1.5'>
                <Label htmlFor='framework'>역할</Label>
                <Select>
                  <SelectTrigger id='framework'>
                    <SelectValue placeholder='Select' />
                  </SelectTrigger>
                  <SelectContent position='popper'>
                    <SelectItem value='next'>유저</SelectItem>
                    <SelectItem value='sveltekit'>관리자</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className='flex justify-between'>
          <Button variant='outline'>다음 단계로 👉🏻 </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default CardWithForm;
