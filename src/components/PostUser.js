export function PostUser(res, tokenId) {
  let userData = res
  return new Promise((resolve, reject) => {
    fetch('https://mugat2-rails.herokuapp.com/api/v1/auth', {
      method: "POST",
      headers: {
        "HTTP_AUTHORIZATION": `${tokenId}`,
        'Authorization': tokenId,
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      mode: 'cors',
      body: JSON.stringify(userData)
    })
      .then((response) => response.json())
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        reject(error)
      })
  })
}