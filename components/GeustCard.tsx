import React from "react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { BackgroundBeams } from "@/lib/AnimeBack";

const GeustCard = () => {
  return (
    <div className="grid grid-cols-1 mt-16 gap-4">
      {/* <div className="col-span-1 text-primary font-semibold">Geustbook</div> */}
      <div className="col-span-4 flex flex-wrap gap-4">
        {/* <p>
          Welcome to my Guestbook! I’d love to hear your thoughts about my work
          or just say hello. Drop a message below!
        </p>
        <br />
        <br /> */}
        <Card className="relative md:h-72 bg-gradient-to-r from-gray-900/[.1] to-gray-50/[.1] p-4     w-full rounded-xl   dark:border-neutral-600">
          <BackgroundBeams />
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-2xl">Share Your Feedback</h3>
            <div className="flex items-center gap-2">
              <Star fill="yellow" />
              <Star fill="yellow" />
              <Star fill="yellow" />
              <Star fill="yellow" />
              <Star fill="yellow" />
            </div>
          </div>
          <br />
          <p>
            Hi dude 👋 ,I'm glad to have you here. <br /> I'm excited to share
            my work with you. Your feedback is essential as I aim to enhance and
            progress in my career. If you have a moment, please log in and
            provide your thoughts on my projects and presentations. Your
            insights are crucial for my growth and refining my creative
            approach. Thank you for contributing to my journey!
          </p>
        </Card>
        <div className="flex justify-end w-full">
          <Button type="submit">Login</Button>
        </div>
      </div>
    </div>
  );
};

export default GeustCard;
