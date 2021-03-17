export default function getPictureUrls(data: Array<{url: string}>) {
    return data.map(element => element.url);
}