function mapImage(image) {
    return {
        url: image.url,
        width: image.width,
        height: image.height,
        mp4: image.mp4,
        webp: image.webp
    };
}

function mapImages(images) {
    return {
        fixedWidth: mapImage(images.fixed_width)
    };
}

function mapGif(gif) {
    return {
        id: gif.id,
        title: gif.title,
        images: mapImages(gif.images)
    };
}

export function mapSearchResponse(response = {data: []}) {
    return response.data.map(mapGif);
}
