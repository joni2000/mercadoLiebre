let express = require('express');
let app = express();
let path = require('path')
const PORT = 3000;

//middlewares
app.use(express.static('public')) //usando el metodo use y express static para usar archivos estaticos

//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './views/index.html'))
})

//server
app.listen(PORT, ()=> console.log(
    `Servido levantado en el puerto ${PORT} 
    http://localhost:${PORT}`)
)


