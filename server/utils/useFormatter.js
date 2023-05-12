export const postFormatter = async ( postData ) => {
  const post = postData.items[0]
  const mediaType = post.media_type

  const handler = {
    1 : singleImageHandler,
    8 : carouselHandler,
  }

  const res = await handler[mediaType](post)
  return res
}

const base64Creator = async (url) => {
  const fetch_response = await fetch(url)
  const buffer = await fetch_response.arrayBuffer()
  return Buffer.from(buffer).toString('base64')
}

const singleImageHandler = async (post) => {
  const photos = post.image_versions2.candidates

  const preview = await base64Creator(photos[photos.length - 1].url)

  return {
    id: post.id,
    code: post.code,
    photos,
    preview: `data:image/png;base64,` + preview,
    caption: post.caption.text,
    mediaType: post.media_type
  }
}


export const carouselHandler = async ( post ) => {
  const photos = await Promise.all(
    await post.carousel_media.map(async media => {
      const preview = await base64Creator(media.image_versions2.candidates[0].url)
      return {
        id: media.id,
        sources: media.image_versions2.candidates,
        preview: `data:image/png;base64,` + preview,
      }
    })
  )
  return {
    id: post.id,
    code: post.code,
    photos,
    caption: post.caption.text,
    mediaType: post.media_type
  }
}
