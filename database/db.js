const { Sequelize } = require("sequelize");

const sequelize =new Sequelize('Test','postgres','admin123',{
    host:'localhost',
    dialect:'postgres',
    port:5432,
    logging:false,
})
async function testConnection(){
    try{
        await sequelize.authenticate();
        console.log('DB CONNECTION SUCCESSFULL.....')
    }
    catch(error){
        console.error('Unable to connect.....',error)
    }
}
testConnection()

module.exports= sequelize

    
