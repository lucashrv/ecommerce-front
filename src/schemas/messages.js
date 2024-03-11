
const messages = (info = '') => {
    const message = {
        required: 'O campo é obrigatório',
        email: 'Formato de email inválido',
        minSize: `Deve conter pelo menos ${info} caracteres`,
        maxSize: `Deve conter ao máximo ${info} caracteres`,
    }

    return message
}

export default messages
