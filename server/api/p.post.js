import { postFormatter } from '../utils/useFormatter'
const config = useRuntimeConfig()

export default defineEventHandler(async (event) => {
  const { url } = await readBody(event)
  if (!url) {
    return { msg: 'URL Required' }
  }

  const fetch_response = await fetch(url + `?__a=1&__d=dis`, {
    credentials: 'include',
    headers: {
      cookie: config.COOKIE
    }
  })
  const res =  await fetch_response.json()
  if (res.status === 'fail') {
    return { msg: res.message }
  }
  return await postFormatter(res)
})