const Sequelize = require('sequelize')
const sequelize = new Sequelize('nodesql', 'root', 'root1234', {
  host: 'localhost',
  dialect: 'mysql',
  operatorsAliases: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
sequelize.authenticate().then(()=>{
  console.log('Connected')
}).catch(err=>{
  console.error('Connect failed')
})