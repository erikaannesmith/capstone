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

const getDesigners = () => {
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers')
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

module.exports = {getDesigners}