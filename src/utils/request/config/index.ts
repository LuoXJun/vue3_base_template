let BASE_URL: string
const TIME_OUT = window.TIME_OUT
switch (import.meta.env.MODE) {
  case 'development':
    BASE_URL = window.BASE_URL.devUrl
    break
  case 'production':
    BASE_URL = window.BASE_URL.prodUrl
    break
  default:
    BASE_URL = ''
    break
}
export { BASE_URL, TIME_OUT }
