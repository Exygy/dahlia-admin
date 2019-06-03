import axios from 'axios'

const apiCall = async (method, path, data) => {
  const csrfToken = document.getElementsByName('csrf-token')[0]
  if (csrfToken) {
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken.getAttribute('content')
  }
  axios.defaults.headers.common['Accept'] = 'application/json'

  try {
    const request = await axios[method](`/api/v1${path}`, data)
    return request.data
  } catch (e) {
    console.warn(e)
    return false
  }
}

const createListing = async (listing) => {
  const postData = {
    listing: listing
  }
  return apiCall('post', '/listings', postData)
}

const updateListing = async (listing) => {
  const putData = {
    listing: listing
  }
  return apiCall('put', `/listings/${listing.id}`, putData)
}

export default {
  createListing,
  updateListing
}
