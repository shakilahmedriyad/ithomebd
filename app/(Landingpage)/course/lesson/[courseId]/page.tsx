import LessonSideBar from "./components/LessonSidebar";
import VideoPlayer from "./components/VideoSection";

export default function Lesson() {
  return (
    <section className="flex md:flex-row flex-col py-10">
      <div className="md:w-[30%] order-2 md:order-1 px-10">
        <LessonSideBar />
      </div>
      <div className="md:w-[70%] order-1 md:order-2  overflow-x-hidden overflow-y-auto px-10 flex flex-col items-center">
        <VideoPlayer />
        <p className="mt-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
          quibusdam nulla debitis libero possimus dicta laudantium quidem? A et
          cupiditate perferendis! Cum tempore alias facere ipsum, amet vero
          nihil dignissimos! Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Porro quibusdam nulla debitis libero possimus dicta laudantium
          quidem? A et cupiditate perferendis! Cum tempore alias facere ipsum,
          amet vero nihil dignissimos! Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Porro quibusdam nulla debitis libero possimus dicta
          laudantium quidem? A et cupiditate perferendis! Cum tempore alias
          facere ipsum, amet vero nihil dignissimos! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Porro quibusdam nulla debitis libero
          possimus dicta laudantium quidem? A et cupiditate perferendis! Cum
          tempore alias facere ipsum, amet vero nihil dignissimos! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. Porro quibusdam nulla
          debitis libero possimus dicta laudantium quidem? A et cupiditate
          perferendis! Cum tempore alias facere ipsum, amet vero nihil
          dignissimos!
        </p>
      </div>
    </section>
  );
}
