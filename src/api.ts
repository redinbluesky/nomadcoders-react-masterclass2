const BASE_URL = `https://api.coinpaprika.com/v1`;

/*
API 유료화로 인해 JSON 다운로드 후 진행
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

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000); // 현재 시간을 초로 나타냄
  const startDate = endDate - 60 * 60 * 23; // 23시간 전을 초로 나나탬
  return fetch(
    `${BASE_URL}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`
  ).then((response) => response.json());
}
*/

export function fetchCoins() {
  return fetch(`http://localhost:3000/coins.json`).then((response) =>
    response.json()
  );
}

export function fetchConiInfo(coinId: string) {
  return fetch(`http://localhost:3000/btc-bitcoin.json`).then((response) =>
    response.json()
  );
}

export function fetchConiTickers(coinId: string) {
  return fetch(`http://localhost:3000/tickers-btc-bitcoin.json`).then(
    (response) => response.json()
  );
}

export function fetchCoinHistory(coinId: string) {
  return fetch(`http://localhost:3000/ohlcv.json`).then((response) =>
    response.json()
  );
}
