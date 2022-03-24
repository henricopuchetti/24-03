const mongoose = require('mongoose')

const conexao = async() => {
    var atlas = await mongoose.connect('mongodb+srv://henrico:henrico100905@fiaptecnico.jm5sh.mongodb.net/2emia-1tri')
}

module.exports = conexao