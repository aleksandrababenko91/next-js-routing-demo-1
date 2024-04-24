import Image from "next/image";
import wondersImages, { WonderImage } from "../../../wonders";
import Modal from "@/components/modal";

export default function PhotoModal({
  params: {id},
} : {
  params: {id: string};
}) {
  const photo: WonderImage = wondersImages.find((p) => p.id === id)!;
  return(
   <Modal>
        <Image
          alt={photo.name}
          src={photo.src}
          style={{width: "100%", objectFit: "cover", aspectRatio: "1/1"}}/>
        <div>
          <h2>{photo.name}</h2>
          <h3>{photo.photographer}</h3>
          <h3>{photo.location}</h3>
        </div>
    </Modal>
  );
}

