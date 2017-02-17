import {createFetch, base, accept, parse} from 'http-client'

const API_KEY = 'AIzaSyCM28gcpzLuuLnENXNX-ka4j1VeAGNPX0g'
const CX = '014574403043751439000:dzlj99ucabw'
const BASE_URL = 'https://www.googleapis.com/customsearch/v1'

export default (query) =>
createFetch(
  base(`${BASE_URL}?key=${API_KEY}&cx=${CX}&q=${query}`),
  accept('application/json'),
  parse('json')
)
