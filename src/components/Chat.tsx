'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from 'ai/react'
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
    const { messages, input, handleInputChange, handleSubmit } = useChat()

    return (
        <Card className="w-[440px]">
            <CardHeader>
                <CardTitle>Chat AI</CardTitle>
                <CardDescription>Using Vercel SDK to create a chat bot.</CardDescription>
            </CardHeader>

            <CardContent>
                <ScrollArea className="h-[640px] w-full pr-4">
                    {messages.map((message) => {
                        return (
                            <div className="flex gap-3 text-slate-600 text-sm mb-4" key={message.id}>
                                {message.role === 'user' && (
                                    <Avatar>
                                        <AvatarFallback>JA</AvatarFallback>
                                        <AvatarImage src="https://github.com/JoseAlmiroNeto.png" />
                                    </Avatar>
                                )}

                                {message.role === 'assistant' && (
                                    <Avatar>
                                        <AvatarFallback>AI</AvatarFallback>
                                        <AvatarImage src="https://seeklogo.com/images/C/chatgpt-logo-02AFA704B5-seeklogo.com.png" />
                                    </Avatar>
                                )}

                                <p className="mt-3 leading-relaxed text-slate-700">
                                    {message.content}
                                </p>
                            </div>
                        )
                    })}
                </ScrollArea>
            </CardContent>

            <CardFooter>
                <form className="w-full flex gap-2" onSubmit={handleSubmit}>
                    <Input placeholder="How can i help you?" value={input} onChange={handleInputChange} />
                    <Button type="submit">Send</Button>
                </form>
            </CardFooter>
        </Card>
    )
}