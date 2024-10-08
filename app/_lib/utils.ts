// app/_lib/utils.ts

export interface Photo {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export async function getPhotos(): Promise<Photo[]> {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/albums/1/photos"
  );
  const data: Photo[] = await response.json();
  return data;
}
