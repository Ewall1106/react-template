import queryString from 'query-string'

export const getSearchParams = () => {
  const params = queryString.parse(window.location.search)
  return params
}
