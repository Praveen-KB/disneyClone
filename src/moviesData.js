import {v4 as uuidV4} from 'uuid'
import fileJson from './disneyPlusMoviesData.json'

console.log(fileJson.movies)

const l = Object.values(fileJson.movies).map(e => ({...e, id: uuidV4()}))
console.log(l)

export default l
