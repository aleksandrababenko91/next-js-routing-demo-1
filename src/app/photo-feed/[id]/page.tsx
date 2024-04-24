import Image from "next/image";
import wondersImages, { WonderImage } from "../wonders";
import Card from "@/components/card";

export default function PhotoPage({   ///ORIGINAL ROUTE
  params: {id},
} : {
  params: {id: string};
}) {
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
  return(
    <Card > 
      <div>
        <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
          {photo.name}</div>
        <Image
          alt={photo.name}
          src={photo.src}
          style={{width: "100%", height: "100%"}}/>
        <div>
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
      </div>
    </Card>
  )
}