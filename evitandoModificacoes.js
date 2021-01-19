// Object.preventExtensions
const produto = Object.preventExtensions({
    nome: 'Qualquer', preço: 1.99, tags: 'Promoção'
})

console.log('Extensível:', Object.isExtensible(produto))

produto. nome = 'Borracha'
produto.descricao = 'Borracha escolar branca'
delete produto.tags
console.log(produto)

// Object.seal
const pessoa = {nome: 'Juliana', idade: 35}
Object.seal(pessoa)
console.log('Selaado', Object.isSealed(pessoa))

pessoa.sobrenome = 'Silva'
delete pessoa.nome
pessoa.idade = 29
console.log (pessoa)

// Object.freeze = selado + valores constantes
