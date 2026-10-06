function solicitationValidation(input) {
  if (typeof input.message !== 'string') {
    return { valid: false, error: "A menssagem precisa ser um texto"}
  }

  const message = input.message.trim()

  if (message.length === 0) {
    return { valid: false, error: "A messagem não pode estar vazia"}
  }

  return { valid: true, message }
}


console.log(solicitationValidation({ message: "Olá, tudo bem?" })) // { valid: true }
console.log(solicitationValidation({ message: "" })) // { valid: false, error: "A messagem não pode estar vazia" }
console.log(solicitationValidation({ message: 123 })) // { valid: false, error: "A menssagem precisa ser um texto" }
