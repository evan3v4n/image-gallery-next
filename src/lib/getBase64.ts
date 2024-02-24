import { getPlaiceholder } from "plaiceholder";
import type { Photo, ImagesResults } from "@/models/images";

async function getBase64(imageURL: string) {
    try {
        const res = await fetch(imageURL)

        if (!res.ok) {
            throw new Error(`failed to fetch image: ${res.status} ${res.statusText}`)
        }

        const buffer = await res.arrayBuffer()

        const { base64 } = await getPlaiceholder(Buffer.from(buffer))

        // very very long string
        // console.log(base64)
        return base64
    } catch (e) {
        if (e instanceof Error) {console.log(e.stack)}
    }
}

//Make all req at once rather than waiting for each one
export default async function addBlurredDataUrls(images: ImagesResults): Promise<Photo[]> {
    const base64Promises = images.photos.map(photo => getBase64(photo.src.large))

    //resolve in order
    const base64Results = await Promise.all(base64Promises)

    const photosWithBlur: Photo[] = images.photos.map((photos, i) => {
        photos.blurredDataUrl = base64Results[i]
        return photos
    })

    return photosWithBlur

}