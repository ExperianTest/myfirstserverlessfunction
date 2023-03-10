//const fetch = require('node-fetch')
import fetch from "node-fetch";

exports.handler = async function () {
const POKE_API = 'https://pokeapi.co/api/v2/pokemon/ditto'
const response = await fetch(POKE_API)
const data = await response.json()

return {
    statusCode: 200,
    body: JSON.stringify(data)
}
}