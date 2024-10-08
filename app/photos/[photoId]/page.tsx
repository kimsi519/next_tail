// app/photos/[photoId]/page.tsx

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPhotos } from "@/app/_lib/utils";

export default async function PhotoDetail({
  params: { photoId },
}: {
  params: { photoId: string };
}) {
  const photos = await getPhotos();
  const photo = photos.find((photo) => photo.id === Number(photoId));
  if (!photo) return notFound();

  return (
    <div className="container mx-auto">
      <Image
        src={photo.url}
        alt={photo.title}
        width={600}
        height={600}
        priority
      />
      <h1 className="text-3xl">{photo.title}</h1>
      <div className="text-lg">{photo.url}</div>
      <Link href="/photos" className="btn float-right">
        목록으로 돌아가기
      </Link>
    </div>
  );
}
