import { Elysia } from "elysia";

const YodaIMDB = new Elysia({ prefix: '/yoda-imdb'})
.get('/', 'Setup Correctly, I am!')
.get('/verticies', () => )
.post('/:verticies', () => {})

export default YodaIMDB