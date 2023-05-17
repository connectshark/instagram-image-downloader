export const objFormatter = async ( postObj ) => {
  const post = postObj.items[0]

  const handlerObject = {
    1: objSingleHandler,
    8: objCarouselHandler
  }

  const res = await handlerObject[post.media_type](post)

  return res
}

export const postFormatter = async ( postData ) => {
  const post = postData.graphql.shortcode_media

  const handlerObject = {
    GraphSidecar: carouselHandler,
    GraphImage: singleImageHandler
  }

  const res = await handlerObject[post.__typename](post)
  return res
}

const base64Creator = async (url) => {
  const fetch_response = await fetch(url)
  const buffer = await fetch_response.arrayBuffer()
  return Buffer.from(buffer).toString('base64')
}

const singleImageHandler = async (post) => {
  const preview = await base64Creator(post.display_url)

  return {
    id: post.id,
    code: post.shortcode,
    photos: post.display_resources,
    preview: `data:image/png;base64,` + preview,
    caption: post.edge_media_to_caption.edges[0].node.text,
    type: post.__typename
  }
}


const carouselHandler = async ( post ) => {
  const photos = await Promise.all(
    await post.edge_sidecar_to_children.edges.map(async media => {
      const preview = await base64Creator(media.node.display_url)
      return {
        preview: `data:image/png;base64,` + preview,
        resources: media.node.display_resources,
        id: media.node.id,
        shortcode: media.node.shortcode
      }
    })
  )



  return {
    id: post.id,
    code: post.shortcode,
    photos,
    caption: post.edge_media_to_caption.edges[0].node.text,
    type: post.__typename
  }
}

const objSingleHandler = async ( post ) => {
  const length = post.image_versions2.candidates.length
  const preview = await base64Creator(post.image_versions2.candidates[length - 1].url)


  return {
    id: post.id,
    code: post.code,
    preview: `data:image/png;base64,` + preview,
    photos: post.image_versions2.candidates,
    caption: post.caption.text,
    type: post.media_type
  }
}

const objCarouselHandler = async ( post ) => {
  const photos = await Promise.all(
    await post.carousel_media.map(async media => {
      const length = media.image_versions2.candidates.length
      const preview = await base64Creator(media.image_versions2.candidates[length - 1].url)

      return {
        preview: `data:image/png;base64,` + preview,
        resources: media.image_versions2.candidates,
        id: media.id
      }
    })
  )

  return {
    id: post.id,
    code: post.code,
    photos,
    caption: post.caption.text,
    type: post.media_type
  }
}