export default function () {
  const loading = ref(false)
  const data = ref(null)

  const getData = async (url) => {
    loading.value = true
    data.value = null
    const fetch_response = await fetch(`/api/p`,
      {
        method: 'POST',
        body: JSON.stringify({
          url
        })
      }
    )
    const res =  await fetch_response.json()
    data.value = res
    loading.value = false
  }

  const getDataFromOBJ = async (obj) => {
    loading.value = true
    data.value = null
    const fetch_response = await fetch(`/api/private`,
      {
        method: 'POST',
        body: JSON.stringify({
          obj
        })
      }
    )
    const res =  await fetch_response.json()
    data.value = res
    loading.value = false
  }

  return {
    loading,
    data,
    getData,
    getDataFromOBJ
  }
}