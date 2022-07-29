import express from 'express';
import indexRouter from './routes/index.js';
import clientesRouter from './routes/clientesRoute.js';

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

app.use('/', indexRouter);
app.use('/clientes', clientesRouter);

// let faturamento = document.querySelector('#faturamento');
// let score = document.querySelector('#score');
// let despesas = document.querySelector('#despesas');
// let tempoAtivo = document.querySelector('#tempoAtivo');

// faturamento.innerHTML = '50.000';
// score.innerHTML = '350/1.000';
// despesas.innerHTML = '8.000';
// tempoAtivo.innerHTML = '12';


export default app ;