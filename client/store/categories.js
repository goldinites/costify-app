export default {
  actions: {
    createCategory ({ commit }, payload) {
      fetch('/api/categories/create', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(res => res.json())
        // eslint-disable-next-line no-console
        .then(data => console.log(data))
    }
  }
}
