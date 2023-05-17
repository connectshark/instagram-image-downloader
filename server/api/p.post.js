import { postFormatter } from '../utils/useFormatter'

export default defineEventHandler(async (event) => {
  const { url } = await readBody(event)
  if (!url) {
    return { msg: 'URL Required' }
  }

  const fetch_response = await fetch(url + `?utm_source=ig_web_copy_link?&__a=1&__d=1`, {
    credentials: 'include',
    headers: {
      'sec-fetch-dest': 'document',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-site': 'none',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36 Edg/107.0.1418.52'
    }
  })
  const res =  await fetch_response.json()
  if (res.status === 'fail') {
    return { msg: res.message }
  }
  return await postFormatter(res)
})