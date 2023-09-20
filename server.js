const express = require('express') // Para incluir el Framework
const app = express(); // Instancia del framework Express
const bodyParser = require('body-parser')
const morgan = require('morgan')
const {pg}   = require('pg')

// Validamos que no estemos en ambiente de producción
if(process.env.NODE_ENV != 'production'){
    // Se carga la configuración archivo .env al process.env
    require('dotenv').config()
}

app.set('port', process.env.PORT || 4000) //

// Middlewares
app.use(bodyParser.urlencoded({extended:false}))// Recibir datos formulario sencillos
app.use(bodyParser.json()) // Para recibir json
app.use(morgan('combined'))

app.use('/api/v1/users',require('./api/v1/routes/users.routes'))
app.use('/api/v1/articles',require('./api/v1/routes/articles.routes'))
app.use('/api/v1/categories',require('./api/v1/routes/categories.routes'))

app.get('/api/v1/test',(req, res) => {
    res.send('Hello ADSO !!!')
    //This is a new comment...
})
// const pool =  new pg.pool({
//    // connectionString : "postgres://jusapi:C2wCp4kxMDXRS8gBpqD7d90W21kzXdma@dpg-cjrlhcojbais73e38640-a.oregon-postgres.render.com/db_api_rest_yxp2"
//     connectionString : "postgres://jusapi:postgres@localhost/db_api_rest2"
//     //ssl:true

// })
app.get('/api/v1/testdb',async(req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.listen(app.get('port'),()=>{
    console.log(`Server running on localhost:${app.get('port')}`);
})