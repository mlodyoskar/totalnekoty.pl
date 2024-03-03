"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMutation } from "@tanstack/react-query";
import { useState } from "react";
import { GeneratedImageDialog } from "./generated-image-dialog";

export default function Home() {
 const [input, setInput] = useState("");
 const [isModalOpen, setIsModalOpen] = useState(false);

 const { mutate, isPending, data } = useMutation({
  mutationFn: (prompt: string) =>
   fetch("/image", { method: "POST", body: JSON.stringify({ prompt }) }).then((res) => res.json() as Promise<{ url: string; prompt: string }>),
  mutationKey: ["generateImage"],
 });

 const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  mutate(input, {
   onSuccess: (data) => {
    console.log(data);
    setIsModalOpen(true);
    console.log(isModalOpen);
   },
  });
 };

 return (
  <main className="max-w-4xl m-auto mt-20">
   <h1 className="text-xl font-bold">Totalne koty | Narzędzia</h1>
   <p>Tutaj możesz wygenerować obraz przy pomocy Dalle 3, albo poprawic tekst swojego wpisu</p>
   <div className="my-10">
    <h2 className="text-lg">Wygeneruj obrazek</h2>
    <form onSubmit={onSubmit} className="space-y-2">
     <label>Prompt</label>
     <Input onChange={(e) => setInput(e.currentTarget.value)} />
     <Button disabled={isPending}>Generuj obrazek {isPending && `...generuje`}</Button>
    </form>
    <GeneratedImageDialog onOpenChange={(open) => setIsModalOpen(open)} open={isModalOpen} url={data?.url} />
   </div>
  </main>
 );
}
