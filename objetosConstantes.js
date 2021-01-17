// pessoa -> 123 -> {...}
const pessoa = {nome: 'João'}
pessoa.nome = 'Diego'
console.log(pessoa)

// pessoa -> 456 -> {...} 
// pessoa = {nome: 'Ana'}  gera erro!!!

Object.freeze(pessoa) // não permite excluir, adicionar ou alterar o objeto

pessoa.nome = 'Maria'
pessoa.end = 'Rua ABC'
delete pessoa.nome

console.log(pessoa.nome)
console.log(pessoa)

const pessoaConstante = Object.freeze({nome: 'João'})
pessoaConstante.nome ='Maria'
console.log(pessoaConstante)