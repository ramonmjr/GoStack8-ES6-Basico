//import { soma2 as somaFunction, sub2 } from './funcoes';

// Utilizando o export Default no arquivo funcoes.js
//import soma2, {sub2} from './funcoes';

// Importando toda a classe de uma vez
import * as funcoes from './funcoes';
// Importando axios 
import axios from 'axios';

//Aula 4 Classes
class List {
  constructor(){
    this.data = [];
  }
  add(data){
    this.data.push(data);
    console.log(this.data);
  }
}

class TodoList extends List {
  constructor(){
    super();

    this.usuario = 'Diego';
  }

  mostrarUsuario(){
    console.log(this.usuario);
  }
}

const MinhaLista = new TodoList();

document.getElementById('novotodo').onclick = function(){
  MinhaLista.mostrarUsuario();
}

//Aula 6 - Arrays 
const arr = [1,3,4,5,8,9];

console.log(arr);

const newArr = arr.map(function(item, index){
  return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total,next){
  return total + next;
});

console.log(sum);

const filter = arr.filter(function(item){
  return item % 2 === 0;
});

console.log(filter);

const find = arr.find(function(item){
  return item === 4;
})

console.log(find);

// Aula 7 Arrow function 
const irr = arr.map(item => item * 2);

console.log(irr)

const abc = () => ({nome: 'Diego'});

console.log(abc());

// Aula 8 Valores Padrão
const soma = (a=3,b=6) => a + b;

console.log(soma(1));

// Aula 9 Desestruturação
const usuario = {
  nome: 'Diego',
  idade: 23,
  endereco: {
    cidade: 'Rio do Sul',
    estado: 'SC',
  },
};

const { nome, idade, endereco: {cidade} } = usuario;

console.log(nome);
console.log(idade);
console.log(cidade);

const jax = ({nome, idade, endereco:{cidade}}) => console.log(nome, idade,cidade);

jax(usuario);

// Aula 10 Operadores rest/spread

//rest
const pessoa = {
  name: 'Diego',
  idade: 23,
  empresa: 'Rocketseat'
};

const { name, ...resto } = pessoa;

console.log(name);
console.log(resto);

const hrr = [1,2,3,4];

const [a,b,...c] = hrr;

console.log(a);
console.log(b);
console.log(c);

function pegaTudo(...params){
  return params.reduce((total,next) => total + next);
}

function pegaTudo2(a,b,...params){
  return params
}
console.log(pegaTudo2(1,3,5,6))

//spread

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr1,...arr2];
console.log(arr3);

const jegue = {
  nome: 'Diego',
  idade: 23,
  empresa: 'Rocketseat',
};

const jegao = {...jegue, nome: 'Gabriel'};

console.log(jegao);

// Aula 11 Template Literals
const nomej = 'jenifer';
const conheci = 'conheci ela no tinder';

console.log(`o nome dela é ${nomej}, ${conheci} `);

// Aula 12 short syntax

const nnome = 'Diego';
const age = 23;

const user = {
  nnome,
  age,
  empresa: 'Rocketseat',
}

console.log(user);


// Aula 13 Webpack: utilização de webpack, importação e exportação de arquivos.

//console.log(soma2(2,3));

// Aula 14  Webpack: importação de aquivos;

console.log(funcoes);
console.log(funcoes.soma2(4,2));
console.log(funcoes.sub2(2,3));

// Aula 17 Async/await

const minhaPromise = () => new Promise((resolve,reject) =>{
  setTimeout(() => { resolve('OK') }, 2000);
});

// minhaPromise().then(response => {
//   console.log(response);
// })
// .catch(err => {

// });

// async function executaPromise(){
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
//   console.log(await minhaPromise());
// }

// executaPromise();

const executaPromise = async () => {
  console.log(await minhaPromise());
  console.log(await minhaPromise());
  console.log(await minhaPromise());
}

executaPromise();

// Aula 18 configurando axios
class Api {
  static async getUserInfo(username){
    try{
      const response = await axios.get(`http://api.github.com/users/${username}`)
      console.log(response);
    } catch (err) {
      console.warn('Usuário não encontrado');    
    }
  }
}

Api.getUserInfo('diego3g'); 
Api.getUserInfo('diego3gasdas');


