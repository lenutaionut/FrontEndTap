export default function authHeader() {
  let usr = JSON.parse(localStorage.getItem('user'))

  if (user && user.accessToken) {
    return { Autorization: 'Bearer' + user.accessToken }
  } else {
    return {}
  }
}
