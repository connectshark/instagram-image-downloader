import { postFormatter } from '../utils/useFormatter'

export default defineEventHandler(async (event) => {
  const { url } = await readBody(event)
  console.log(url)
  if (!url) {
    return { msg: 'URL Required' }
  }

  const fetch_response = await fetch(url + `?__a=1&__d=dis`)
  const res =  await fetch_response.json()
  if (res.status === 'fail') {
    return { msg: res.message }
  }
  return await postFormatter(res)
})