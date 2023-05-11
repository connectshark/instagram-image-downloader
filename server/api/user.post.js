export default defineEventHandler(async (event) => {
  const { url } = await readBody(event)
  if (!url) {
    return { msg: 'URL Required' }
  }

  const fetch_response = await fetch(url + `?__a=1&__d=dis`)
  const res = await fetch_response.json()
  return res.graphql.user
})