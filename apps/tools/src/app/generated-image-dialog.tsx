import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import Image from "next/image";

interface GeneratedImageDialogProps {
 open: boolean;
 onOpenChange: (open: boolean) => void;
 url?: string;
}

export const GeneratedImageDialog = ({ open, onOpenChange, url }: GeneratedImageDialogProps) => {
 const getImage = () => {};
 return (
  <Dialog onOpenChange={onOpenChange} open={open}>
   <DialogContent>
    <DialogHeader>
     <DialogTitle>Wygenerowana grafika</DialogTitle>
    </DialogHeader>
    {url && <Image alt="generated image" src={url} width={1792} height={1024} />}

    <DialogDescription>
     <Button>Pobierz grafikę</Button>
    </DialogDescription>
   </DialogContent>
  </Dialog>
 );
};
