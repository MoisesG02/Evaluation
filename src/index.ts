import express from 'express'

 import * as task1 from './task1'

const cors = require('cors')

const app = express();

const port = 3000;

app.use(cors())


app.use(express.json());

app.use(express.urlencoded({ extended: true }));


task1.swapElements(task1.array1)

app.listen(port, () => console.log('Escuchando el puerto:', port));
