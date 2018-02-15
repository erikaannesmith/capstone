const handleResponse = (response) => {
  return response.json()
    .then(json => {
      if (!response.ok) {
        const error = {
          status: response.status,
          statusText: response.statusText,
          json
        }
        return Promise.reject(error)
      }
      return json
    })
}

const getUsers = () => {
  return fetch('http://localhost:8080/api/v1/users')
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const getDesigners = () => {
  return fetch('http://localhost:8080/api/v1/designers')
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

module.exports = {getUsers, getDesigners}