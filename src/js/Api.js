class Api {
  constructor(options) {
    this._baseUrl = options.baseUrl;
    this._headers = options.headers;
  }

  _makeRequest(url, options = {}) {
    const config = {
      headers: this._headers,
      ...options,
    };

    return fetch(url, config).then((res) => this._checkResponse(res));
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return this._makeRequest(`${this._baseUrl}/cards`);
  }

  getUserInfo() {
    return this._makeRequest(`${this._baseUrl}/users/me`);
  }

  updateProfile(data) {
    return this._makeRequest(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  updateAvatar(data) {
    return this._makeRequest(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      body: JSON.stringify(data),
    });
  }

  addCard(data) {
    return this._makeRequest(`${this._baseUrl}/cards`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardId) {
    return this._makeRequest(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
    });
  }

  likeCard(cardId) {
    return this._makeRequest(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
    });
  }

  unlikeCard(cardId) {
    return this._makeRequest(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
    });
  }
}

export default Api;
