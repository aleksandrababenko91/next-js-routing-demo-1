import wonders from "./wonders";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return(
    <main style={{width: 'fit-content', height: "fit-content" }}>
      <h1 style={{display: "flex", alignItems: "center", justifyContent: "center", }}>New Wonders Of The World</h1>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", gap: "10px" }}>
        {wonders.map(({id, src, name}) => (
          <Link key={id} href={`/photo-feed/${id}`}>
              <Image
              alt={name}
              src={src}
              style={{width: "200px", height: "200px"}}>
              </Image>
          </Link>
        ))}
      </div>
    </main>
  )
}