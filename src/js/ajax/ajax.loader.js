export default class loader {

  static load(url) {
    return fetch(url).then(function(response) {
      return response.json();
    })
  }

}
