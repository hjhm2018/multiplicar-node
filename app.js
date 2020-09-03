//requires

// const fs = require('fs')

const argv = require('./config/yargs').argv;
const colors = require('colors');

const {crearArchivo} = require('./multiplicar/multiplicar');
const {listarTabla} = require('./multiplicar/multiplicar');

const { command } = require('yargs');

// console.log(argv)

let comando = argv._[0];

switch(comando){
    case 'listar':
        // console.log('Listar');
        listarTabla(argv.base, argv.limite);
    break;
    case 'crear':
        // console.log('crear');
          crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado : ${archivo.green}`))
            .catch(err => console.log(err))
    break;
    default:
        console.log('Comando no reconocido');

}

// console.log(multiplicar)


// let base = 'abc';
// let data = '';


// for(let i =1; i<=10; i++){
//     data += `${base} * ${i} = ${base * i}\n`;
// }

// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base}.txt ha sido creado`);
//   });

// console.log(process.argv);

// let argv2 = process.argv;

// console.log('Limite', argv.limite);
// console.log(argv2);


// let parametro = argv[2];

// let base = parametro.split('=')[1];

// console.log(base);

//   crearArchivo(base)
//   .then(archivo => console.log(`Archivo creado : ${archivo}`))
//   .catch(err => console.log(err))
