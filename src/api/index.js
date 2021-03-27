export const getMonsters = () => {
  // const response = fetch('https://jsonplaceholder.typicode.com/users')
  const response = fetch('http://localhost:3004/users')
  .then( async (response) => {
    const responseData = {
      ok: response.ok,
      status: response.status,
      statusText: response.ok ? "" : "Lista de monstros indisponível.",
      data: {
        monsters: response.ok ? await response.json() : []
      }
    }
    return responseData;
  })
  return response;
}