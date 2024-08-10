"use client";
import "next-cloudinary/dist/cld-video-player.css";
export default function VideoPlayer() {
  return (
    <div className="w-full relative h-full">
      <iframe
        src="https://drive.google.com/file/d/1MUWKDA3srdueKs1PPqqzLf2m60UT7R6b/preview"
        width="100%"
        height="100%"
        allow="autoplay"
        //@ts-ignore
        allowfullScreen="true"
      ></iframe>
      <div className="h-12 w-12 bg-black absolute z-10 top-0 right-0"></div>
    </div>
  );
}
