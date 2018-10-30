const path = require('path')
const Sequelize = require('sequelize');
const sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',

    // 仅限 SQLite
    storage: path.join(__dirname, '../database/database.sqlite')
});

//链接测试
// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.');
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err);
//     });


const Note = sequelize.define('note', {
    text: {
        type: Sequelize.STRING
    },
    uid:{
        type:Sequelize.STRING
    }
});

Note.sync({force: true})

// force: true 如果表已经存在，将会丢弃表
// Note.sync().then(() => {
//     Note.create({text: 'hello world!'})
// }).then(() => {
//     Note.findAll({raw: true}).then(notes => {
//         console.log(notes)
//     })
// });

// Note.findAll({raw: true, where: {id: 2}}).then((notes) => {
//     console.log(notes)
// })

module.exports.Note = Note;