"use client";

import { useFormState, useFormStatus } from "react-dom";
import { useEffect, useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { PenSquare, Copy, Check, Loader2 } from "lucide-react";
import { handleContentAdjustment, type FormState } from "@/app/actions";
import { useToast } from "@/hooks/use-toast";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-accent text-accent-foreground hover:bg-accent/90"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Adjusting...
        </>
      ) : (
        "Adjust Style"
      )}
    </Button>
  );
}

export default function ContentStyleAdjuster() {
  const [isOpen, setIsOpen] = useState(false);
  const initialState: FormState = { message: "" };
  const [state, formAction] = useFormState(
    handleContentAdjustment,
    initialState
  );
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.message) {
      if (state.message === "Content adjusted successfully.") {
        toast({
          title: "Success",
          description: "Content style adjusted!",
        });
      } else if (state.message.startsWith("Error:")) {
        toast({
          variant: "destructive",
          title: "Error",
          description: state.message,
        });
      }
    }
  }, [state, toast]);

  const handleCopy = () => {
    if (state.adjustedContent) {
      navigator.clipboard.writeText(state.adjustedContent);
      setCopied(true);
      toast({ title: "Copied to clipboard!" });
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const handleOpenChange = (open: boolean) => {
    if (!open) {
      formRef.current?.reset();
      // A bit of a hack to reset the form state on close
      // @ts-ignore
      state.adjustedContent = undefined;
      // @ts-ignore
      state.message = "";
    }
    setIsOpen(open);
  };

  return (
    <>
      <Button
        className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg bg-accent text-accent-foreground hover:bg-accent/90 z-40"
        size="icon"
        onClick={() => setIsOpen(true)}
        aria-label="Open Content Style Adjuster"
      >
        <PenSquare className="h-6 w-6" />
      </Button>

      <Dialog open={isOpen} onOpenChange={handleOpenChange}>
        <DialogContent className="sm:max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-2xl">
              Dynamic Content Adjustment Tool
            </DialogTitle>
            <DialogDescription>
              Paste your portfolio content below. Our AI will adjust it to match
              the professional tone and style of top-tier portfolios.
            </DialogDescription>
          </DialogHeader>
          <form action={formAction} ref={formRef} className="grid gap-4 py-4">
            <Textarea
              name="content"
              placeholder="e.g., I made a website. It was cool. I used React."
              rows={6}
              required
              minLength={10}
            />

            {state.adjustedContent && (
              <div className="space-y-2">
                <h3 className="font-semibold">Adjusted Content:</h3>
                <Card className="bg-muted/50">
                  <CardContent className="p-4 relative">
                    <p className="text-muted-foreground whitespace-pre-wrap">
                      {state.adjustedContent}
                    </p>
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-2 right-2 h-7 w-7"
                      onClick={handleCopy}
                      type="button"
                    >
                      {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                      ) : (
                        <Copy className="h-4 w-4" />
                      )}
                      <span className="sr-only">Copy</span>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            )}

            <DialogFooter>
              <SubmitButton />
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
}
