"use client";

import { CldVideoPlayer } from "next-cloudinary";
import "next-cloudinary/dist/cld-video-player.css";
export default function VideoPlayer() {
  return (
    <div className="w-full h-full">
      <CldVideoPlayer
        id="riyad"
        width="1920"
        height="1080"
        className="object-cover w-full h-full bg-no-repeat"
        src="samples/sea-turtle"
      />
    </div>
  );
}
