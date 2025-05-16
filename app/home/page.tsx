'use client'
import { Button } from "@/components/ui/button";
import { toast } from "sonner"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { useState } from "react";
import axios from "axios";
export default function Home() {

    const [problem, setProblem] = useState("");
    const [solution, setSolution] = useState("");
    const [isSending, setIsSending] = useState(false);
    const handleSubmit = async () => {
        setIsSending(true);
        try {
            const res = await axios.post('http://localhost:5000/post', {
                problem: problem,
                solution: solution
            });
            toast.success("Grievance Submitted Successfully", {
                description: "Your Grievance has been sent to your lover ❤️"
            })
            

        }
        catch (error) {
            console.error('Error submitting:', error);
            toast.error("Failed to submit grievance", {
                description: "Something went wrong. Try again later."
            })
        }
        finally {
            setProblem("");
            setSolution("");
            setIsSending(false);
        }
    };
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
                            <CardDescription>Please Describe Everything about your Grievance</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <Label className="pb-2">What is your problem?</Label>
                            <Input placeholder="Enter Problem in detail" value={problem} onChange={(e) => {
                                setProblem(e.target.value);
                            }} />
                        </CardContent>
                        <CardContent>
                            <Label className="pb-2">Tell how your boyfriend can makeup to you?</Label>
                            <div className="relative">
                                <Input placeholder="Enter Your Solution" value={solution} onChange={(e) => {
                                    setSolution(e.target.value);
                                }} />

                            </div>
                        </CardContent>
                        <CardFooter>
                            <Button variant={"secondary"} disabled={(isSending)} className="hover:shadow-xl active:scale-95 active:bg-gray-200 transition-all duration-200 " onClick={handleSubmit}>Submit</Button>
                        </CardFooter>
                    </Card>
                </div >
            </div>
        </div >
    )
}