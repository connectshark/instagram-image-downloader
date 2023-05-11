export const postFormatter = async ( postData ) => {
  const post = postData.graphql.shortcode_media
  const photos = post.display_resources

  const preview = await base64Creator(post.display_url)

  return {
    id: post.id,
    code: post.shortcode,
    photos,
    preview: `data:image/png;base64,` + preview,
    caption: post.edge_media_to_caption.edges[0].node.text,
    product_type: post.product_type
  }
}

const base64Creator = async (url) => {
  const fetch_response = await fetch(url)
  const buffer = await fetch_response.arrayBuffer()
  return Buffer.from(buffer).toString('base64')
}


export const postloginFormatter = async ( postData ) => {
  const post = postData.items[0]

  const photos = await Promise.all(post.carousel_media.map(async media => {
    const preview = media.image_versions2.candidates.find(img => img.width === media.original_width)
    const base64 = await base64Creator(preview.url)

      return {
        id: media.id,
        type: media.media_type,
        sources: media.image_versions2.candidates,
        original_width: media.original_width,
        original_height: media.original_height,
        preview: `data:image/png;base64,` + base64
      }
    })
  )
  return {
    id: post.id,
    code: post.code,
    photos,
    caption: post.caption.text,
    product_type: post.product_type
  }
}
