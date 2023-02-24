const get = async ({ url }: { url: string }) => {
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  return await response.json()
}

const apiUtils = {
  get,
}

export default apiUtils
