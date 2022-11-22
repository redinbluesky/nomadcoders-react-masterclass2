const BASE_URL = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${BASE_URL}/coins`).then((response) => response.json());
}

export function fetchConiInfo(coinId: string) {
  return fetch(`${BASE_URL}/coins/${coinId}`).then((response) =>
    response.json()
  );
}

export function fetchConiTickers(coinId: string) {
  return fetch(`${BASE_URL}/coins/tickers/${coinId}`).then((response) =>
    response.json()
  );
}
