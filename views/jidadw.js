function criaObjeto(name,age){
    var user = {}
    user.name = name
    user.age = age  
    return user
}

const eu = criaObjeto("Leonardo", 21)
console.log(eu)

const ele = criaObjeto("Zé Carlos", 24)
console.log(eu.name)