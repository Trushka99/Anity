const BASE_URL = {
  URL: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
};
function checkResponse(res: Response) {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
}
export function getGames() {
  return fetch(`${BASE_URL.URL}/games`, {
    method: "GET",
  })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}

export function getGameById(id: string | undefined) {
  return fetch(`${BASE_URL.URL}/games/${id}`, {
    method: "GET",
  })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}
export function uploadImage(image: any) {
  return fetch(`${BASE_URL.URL}/upload`, {
    method: "POST",
    body: image,
  })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}
export function getImages() {
  return fetch(`${BASE_URL.URL}/images`, {
    method: "GET",
  })
    .then((res) => checkResponse(res))
    .catch((err) => console.log(err));
}
