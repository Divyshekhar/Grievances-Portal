'use client'

import { EyeOff, Eye } from 'lucide-react'
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
import { useState } from "react";
import { useRouter } from 'next/navigation';


export default function Login() {
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const router = useRouter();


    const InputName = process.env.NEXT_PUBLIC_NAME;
    const InputPass = process.env.NEXT_PUBLIC_PASS;

    const handleLogin = () => {
        if (name === InputName && password === InputPass) {
            router.push('/home');
        }
    }


    return (
        <div className="bg-gradient-to-r from-rose-100 via-rose-200 to-rose-400">
            <div className="h-screen flex items-center justify-center">
                <div className="w-[500px] mx-auto text-sm mt-10">
                    <Card>
                        <CardHeader>
                            <CardTitle>
                                <h1 className="text-xl font-bold">
                                    Grievances Portal
                                </h1>
                            </CardTitle>
                            <CardDescription>Please login with your credentials</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Label className="pb-2">Enter your Name</Label>
                            <Input id="name" placeholder="Cutie's Name" onChange={(e) => {
                                setName(e.target.value);
                            }} />
                        </CardContent>
                        <CardContent>
                            <Label className="pb-2">Enter your Password</Label>
                            <div className="relative">
                                <Input id="password" type={showPassword ? "text" : "password"} placeholder="Cutie's Password" onChange={(e) => {
                                    setPassword(e.target.value);
                                }} />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword((prev) => !prev)}
                                    className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? <Eye className="h-5 w-5" /> : <EyeOff className="h-5 w-5" />}
                                </button>
                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant={"secondary"} className='hover:shadow-xl active:scale-95 active:bg-gray-200 transition-all duration-200' onClick={handleLogin}>Login</Button>
                        </CardFooter>
                    </Card>
                </div >
            </div>
        </div>
    );
}
