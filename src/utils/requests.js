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

const getStyles = (id) => {
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers/' + id.toString() + '/styles')
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const addDesignerStyles = (name, description, id) => {
  let data = { name: name, description: description, designer_id: id }
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers/' + id.toString() + '/styles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => handleResponse(response))
    .catch(error => console.log({ error }))
}

const getDesignerComments = (id) => {
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers/' + id.toString() + '/comments')
    .then(response => handleResponse(response))
    .catch(error => console.log({ error }))
}

const addDesignerComments = (date, body, id) => {
  let data = {date: date, body: body, designer_id: id}
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers/' + id.toString() + '/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => handleResponse(response))
    .catch(error => console.log({ error }))
}

const deleteDesignerComment = (commentId, designerId) => {
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers/' + designerId.toString() + '/comments/' + commentId.toString(), {
    method: 'DELETE',
    headers:
      { 'Content-Type': 'application/json' }
  })
    .catch(error => console.log({ error }));
}

const getStyle = (designerId, styleId) => {
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers/' + designerId.toString() + '/styles/' + styleId.toString())
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const getStyleComments = (designerId, styleId) => {
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers/' + designerId.toString() + '/styles/' + styleId.toString() + '/comments')
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const addStyleComments = (date, body, styleId, designerId) => {
  let data = {date: date, body: body, style_id: styleId}
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers/' + designerId.toString() + '/styles/' + styleId.toString() + '/comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const deleteStyleComment = (commentId, designerId, styleId) => {
  return fetch('https://es-capstone.herokuapp.com/api/v1/designers/' + designerId.toString() + '/styles/' + styleId.toString() + '/comments/' + commentId.toString(), {
    method: 'DELETE',
    headers:
      { 'Content-Type': 'application/json' }
  })
    .catch(error => console.log({error}))
}

module.exports = {getDesigners, 
                  addDesigners, 
                  getDesigner, 
                  getStyles, 
                  addDesignerStyles, 
                  getDesignerComments,
                  addDesignerComments,
                  deleteDesignerComment,
                  getStyle,
                  getStyleComments,
                  addStyleComments,
                  deleteStyleComment}