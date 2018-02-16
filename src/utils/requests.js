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

const addDesigners = (designerCompany, designerContact, designerPhone, designerEmail) => {
  let data = { company: designerCompany, contact: designerContact, phone: designerPhone, email: designerEmail, user_id: 2  }  
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers', {
    method: `POST`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const getDesigner = (id) => {
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers/' + id.toString())
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

module.exports = {getDesigners, addDesigners, getDesigner}