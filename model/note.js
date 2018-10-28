const Sequelize = require('sequelize');
const sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',

    // 仅限 SQLite
    storage: '../database/database.sqlite',
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
    }
});

// force: true 如果表已经存在，将会丢弃表
Note.sync().then(() => {
    Note.create({text: 'hello world!'})
}).then(() => {
    Note.findAll().then(notes => {
        console.log(notes)
    })
});