import { postFormatter } from '../utils/useFormatter'

export default defineEventHandler(async (event) => {
  const { obj } = await readBody(event)
  if (!obj) {
    return { msg: 'Source Data Required' }
  }


  return await postFormatter(obj)
})