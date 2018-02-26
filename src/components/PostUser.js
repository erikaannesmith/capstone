export function PostUser(res, tokenId) {
  let userData = res
  return new Promise((resolve, reject) => {
    fetch('http://localhost:8080/api/v1/auth/google_oauth2/callback', {
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