import Image from "next/image";

export default function TestimonialsCard() {
  return (
    <div className="max-w-[20rem] gap-4 flex flex-col items-center">
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium
        enim autem omnis consequatur quisquam ad consectetur nobis quos fugiat
        repellat, nulla in quod aliquam eligendi doloribus quae dolorum
        necessitatibus ex. Lorem ipsum dolor sit amet consectetur, adipisicing
        elit. Architecto quasi sapiente et itaque, perferendis soluta error quo
      </p>
      <div>
        <Image
          src={"/logo.jpg"}
          alt=""
          width={1024}
          height={1024}
          className="w-24 h-24 rounded-full"
        />
        <h2 className="text-xl font-medium">John doe</h2>
        <p className="text-sm">CEO</p>
      </div>
    </div>
  );
}
