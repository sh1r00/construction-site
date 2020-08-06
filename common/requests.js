const baseUrl = 'http://localhost/mysites/cockpit'
const apiUrl = 'api/collections'
const apiToken = '43cb872555477aecd4e35a98339f03'
const collectionName = 'constructionSite'

function getObjects() {
  return new Promise((resolve, reject) => {
    const endpoint =
      baseUrl + '/' + apiUrl + '/get/' + collectionName + '?token=' + apiToken
    fetch(endpoint, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) =>
        response.json().then((data) => {
          resolve(data)
        })
      )
      .catch((error) => {
        // eslint-disable-next-line
        console.log('fetch menu error', error)
        reject(error)
      })
  })
}

function getObjectsBy(objectsFilter) {
  return new Promise((resolve, reject) => {
    const endpoint =
      baseUrl + '/' + apiUrl + '/get/' + collectionName + '?token=' + apiToken
    fetch(endpoint, {
      method: 'get',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) =>
        response.json().then((data) => {
          const filterer = data.entries[0]
          const filteredData = filterer[objectsFilter]
          resolve(filteredData)
          /*
          const dataEntries = data.entries
          for (let x = 0; x < dataEntries.length; x++) {
            if (dataEntries[x].title === filter) {
              const data = dataEntries[x]
              // eslint-disable-next-line
              console.log('data from getObjectBy request', data)
              resolve(data)
            } else {
              const data = {}
              resolve(data)
            }
          }
          */
        })
      )
      .catch((error) => {
        // eslint-disable-next-line
        console.log('fetch menu error', error)
        reject(error)
      })
  })
}

export default {
  getObjects,
  getObjectsBy,
}
