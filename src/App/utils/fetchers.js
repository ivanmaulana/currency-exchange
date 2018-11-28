export const fetchGet = (urlPath) => {
  return fetch(urlPath)
    .then(response => {
        return response.json()
    })
    .catch(error => {
        return Promise.reject(new Error(error));
    });
};