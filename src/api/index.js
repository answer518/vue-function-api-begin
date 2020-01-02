const baseUrl = 'https://my-json-server.typicode.com/answer518/mocker'
export function fecthUserInfo() {
  return fetch(
    `${baseUrl}/profile`
  ).then(res => res.json())
}

export function fetchUserPosts(userId) {
  return fetch(
    `${baseUrl}/posts?userId=${userId}`
  ).then(res => res.json())
}
