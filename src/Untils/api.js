const onResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class Api {
  constructor({ baseUrl, token, }) {
    this._token = token;
    this._baseUrl = baseUrl;
  }

  getPostList(page, limit) {
    return fetch(`${this._baseUrl}/posts/paginate?page=${page}&limit=${limit}`,
      {
        headers: { authorization: this._token },
      }).then(
        onResponse);
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: { authorization: this._token },
    }).then(onResponse);
  }

  getUser() {
    return fetch(`${this._baseUrl}/users`, {
      headers: { authorization: this._token },
    }).then(onResponse);
  }

  search(searchQuery, page, limit) {
    return fetch(`${this._baseUrl}/posts/paginate?page=${page}&limit=${limit}&query=${searchQuery}`,
      {
        headers: { authorization: this._token },
      }).then(onResponse);
  }

  changeAvatar(avatar) { 
    console.log(avatar, "avatar");  
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
     body: JSON.stringify(avatar),
    }).then(onResponse);
  }

  changeName (body) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
     body: JSON.stringify(body),
    }).then(onResponse);
  }
  
  deletePost(postId) {
    return fetch(`${this._baseUrl}/posts/${postId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token
      },
    }).then(onResponse);
  }

  setUserInfo(dataUser) {

    return fetch(`${this._baseUrl}/users/me`,
      {
        headers: { authorization: this._token },
        method: "PATCH",
        body: JSON.stringify(dataUser)
      }).then(onResponse);
  }

  addPost(values) {
    console.log(JSON.stringify(values));
    return fetch(`${this._baseUrl}/posts`, {
      method: "POST",
      headers: {
        authorization: this._token,
        "Content-type": "application/json"
      },
      body: JSON.stringify(values)
    }).then(onResponse);
  }

  getPostById(postID) {
    return fetch(`${this._baseUrl}/posts/${postID}`, {
      headers: {
        authorization: this._token,
      },
    }).then(onResponse);
  }

  editPostById(postID, values) {   
    return fetch(`${this._baseUrl}/posts/${postID}`, {
      method: "PATCH",
      headers: {
        authorization: this._token,
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    }).then(onResponse);
  }

  changeLikePost(postId, isLike) {
    return fetch(`${this._baseUrl}/posts/likes/${postId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: {
        authorization: this._token
      },
    }).then(onResponse);
  }
}

const config = {
  baseUrl: 'https://api.react-learning.ru/v2/group-9',
  token:
    //   'content-type': 'application/json',
    //       // Authorization: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJmOTk5MmFlNWM0MGMxMGMxMWRmZTQiLCJpYXQiOjE2NDcyODY2ODEsImV4cCI6MTY3ODgyMjY4MX0.WHKXAErKZtY445yXecOFZsx981MuXicJti-okSY-tac',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2Q2MzBkODU5Yjk4YjAzOGY3N2FlMjEiLCJncm91cCI6Imdyb3VwLTkiLCJpYXQiOjE2NzQ5ODE2NTEsImV4cCI6MTcwNjUxNzY1MX0.U78JYjPy1rLNErRGSgX_8fCa1Rc_MxNxtNZq3xenyAc',
};

const api = new Api(config);
export default api;