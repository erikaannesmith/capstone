const API = 'https://mugat2-rails.herokuapp.com/'

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
  return fetch(API + '/api/v1/designers')
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const addDesigners = (designerCompany, designerContact, designerPhone, designerEmail) => {
  let data = { company: designerCompany, contact: designerContact, phone: designerPhone, email: designerEmail, user_id: 2  }  
  return fetch(API + '/api/v1/designers', {
    method: `POST`,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const getDesigner = (id) => {
  return fetch(API + '/api/v1/designers/' + id.toString())
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const getStyles = (id) => {
  return fetch(API + '/api/v1/designers/' + id.toString() + '/styles')
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const addDesignerStyles = (name, description, id) => {
  let data = { name: name, description: description, designer_id: id }
  return fetch(API + '/api/v1/designers/' + id.toString() + '/styles', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => handleResponse(response))
    .catch(error => console.log({ error }))
}

const getDesignerComments = (id) => {
  return fetch(API + '/api/v1/designers/' + id.toString() + '/designer_comments')
    .then(response => handleResponse(response))
    .catch(error => console.log({ error }))
}

const addDesignerComments = (date, body, id) => {
  let data = {date: date, body: body, designer_id: id}
  return fetch(API + '/api/v1/designers/' + id.toString() + '/designer_comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => handleResponse(response))
    .catch(error => console.log({ error }))
}

const deleteDesignerComment = (commentId, designerId) => {
  return fetch(API + '/api/v1/designers/' + designerId.toString() + '/designer_comments/' + commentId.toString(), {
    method: 'DELETE',
    headers:
      { 'Content-Type': 'application/json' }
  })
    .catch(error => console.log({ error }));
}

const getStyle = (designerId, styleId) => {
  return fetch(API + '/api/v1/designers/' + designerId.toString() + '/styles/' + styleId.toString())
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const getStyleComments = (designerId, styleId) => {
  return fetch(API + '/api/v1/designers/' + designerId.toString() + '/styles/' + styleId.toString() + '/style_comments')
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const addStyleComments = (date, body, styleId, designerId) => {
  let data = {date: date, body: body, style_id: styleId}
  return fetch(API + '/api/v1/designers/' + designerId.toString() + '/styles/' + styleId.toString() + '/style_comments', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  })
    .then(response => handleResponse(response))
    .catch(error => console.log({error}))
}

const deleteStyleComment = (commentId, designerId, styleId) => {
  return fetch(API + '/api/v1/designers/' + designerId.toString() + '/styles/' + styleId.toString() + '/style_comments/' + commentId.toString(), {
    method: 'DELETE',
    headers:
      { 'Content-Type': 'application/json' }
  })
    .catch(error => console.log({error}))
}

const updateDesignerContact = (updatedCompany, updatedContact, updatedPhone, updatedEmail, designerId) => {
  let updatedData = {company: updatedCompany,
                    contact: updatedContact,
                    phone: updatedPhone,
                    email: updatedEmail,
                    designerId: designerId}
  return fetch(API + '/api/v1/designers/' + designerId.toString(), {
    method: 'PATCH',
    headers:
      { 'Content-Type': 'application/json' },
    body: JSON.stringify(updatedData)
  })
    .catch(error => console.log({ error }));
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
                  deleteStyleComment,
                  updateDesignerContact}