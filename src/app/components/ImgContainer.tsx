import type { Photo } from "@/models/images";
import Image from "next/image";

type Props = { 
    photo: Photo 
}

export default function ImgContainer({ photo }: Props ) {
  return (
    <div key={photo.id} className="h-64 bg-gray-200 rounded-xl relative overflow-hidden">
        <Image 
        src={photo.src.large} 
        alt={photo.alt} 
        fill={true}
        sizes="(min-width: 1280px) 278px, (min-width: 1040px) calc(12.73vw + 118px), (min-width: 800px) 33.18vw, (min-width: 540px) 50vw, calc(100vw - 16px)"
        className="hover:opacity-75 object-cover"
        />
    </div>
  )
}