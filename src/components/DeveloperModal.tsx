
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Github, Linkedin, Mail, Globe, Twitter } from "lucide-react";

export interface DeveloperModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function DeveloperModal({ open, onOpenChange }: DeveloperModalProps) {
  const developerLinks = [
    { icon: <Github className="h-4 w-4" />, label: "GitHub", url: "https://github.com" },
    { icon: <Linkedin className="h-4 w-4 text-blue-600" />, label: "LinkedIn", url: "https://www.linkedin.com/in/gthangella/" },
    { icon: <Twitter className="h-4 w-4 text-blue-400" />, label: "Twitter", url: "https://twitter.com/g_thangella" },
    { icon: <Mail className="h-4 w-4 text-red-500" />, label: "Email", url: "mailto:imgtk17@gmail.com" },
    { icon: <Globe className="h-4 w-4 text-green-500" />, label: "Portfolio", url: "https://thangella-creaftech-solutions.vercel.app/" }
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="w-[95vw] max-w-md h-[90vh] max-h-[600px] rounded-lg p-0 overflow-hidden flex flex-col">
        <div className="p-4 flex-shrink-0 border-b">
          <DialogHeader>
            <DialogTitle className="text-lg text-center">Meet the Developer</DialogTitle>
            <DialogDescription className="text-center text-xs">
              Behind the Need2Fix Platform
            </DialogDescription>
          </DialogHeader>
        </div>

        <ScrollArea className="flex-1 h-full">
          <div className="p-4 space-y-4">
            {/* Avatar & Info */}
            <div className="flex flex-col items-center text-center space-y-3">
              <Avatar className="h-20 w-20 border border-primary">
                <AvatarImage src="/Profile Pic.JPG" alt="G. Thangella" />
                <AvatarFallback>GT</AvatarFallback>
              </Avatar>
              
              <div>
                <h3 className="text-base font-semibold">G. Thangella</h3>
                <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                  💼 Entrepreneur • 🧠 Tech Explorer • 🎨 Creative Thinker • 🔭 Visionary
                </p>
              </div>

              <div className="flex gap-2 flex-wrap justify-center">
                {developerLinks.map((link, i) => (
                  <Button key={i} variant="outline" size="icon" asChild className="h-8 w-8 rounded-full">
                    <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.label}>
                      {link.icon}
                    </a>
                  </Button>
                ))}
              </div>
            </div>

            <Separator />

            {/* Description */}
            <div className="space-y-4 text-sm">
              <div>
                <h4 className="font-medium text-base mb-2">About the Platform</h4>
                <p className="text-muted-foreground leading-relaxed">
                  I built Need2Fix to solve the common problem of finding reliable service providers when you need them urgently. 
                  This platform connects you with verified professionals across India, making home and business services accessible with just a few clicks.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-base mb-2">Tech Stack</h4>
                <p className="text-muted-foreground leading-relaxed">
                  React, TypeScript, Tailwind CSS, Framer Motion, Vite, Shadcn/ui
                </p>
              </div>

              <div>
                <h4 className="font-medium text-base mb-2">Mission</h4>
                <p className="text-muted-foreground leading-relaxed">
                  Creating meaningful digital products that solve real-world problems. 
                  My focus is building tools that inspire, innovate, and leave a lasting impact through technology and design.
                </p>
              </div>

              <div>
                <h4 className="font-medium text-base mb-2">Why Need2Fix?</h4>
                <p className="text-muted-foreground leading-relaxed">
                  No more asking friends for contact numbers or worrying about trust. We connect you with verified professionals instantly, 
                  available 24/7 across India for all your service needs.
                </p>
              </div>
            </div>

            <Separator />

            <div className="text-center">
              <p className="text-xs text-muted-foreground">
                © 2024 Need2Fix. Made with ❤️ for connecting communities across India.
              </p>
            </div>
          </div>
        </ScrollArea>

        <div className="p-4 border-t flex-shrink-0 bg-background">
          <DialogFooter className="flex flex-col-reverse sm:flex-row gap-2 w-full">
            <Button 
              variant="outline" 
              onClick={() => onOpenChange(false)} 
              className="w-full sm:w-auto"
            >
              Close
            </Button>
            <Button 
              variant="default" 
              asChild 
              className="w-full sm:w-auto"
            >
              <a href="mailto:imgtk17@gmail.com" target="_blank" rel="noopener noreferrer">
                Get in Touch
              </a>
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
