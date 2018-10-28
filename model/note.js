const Sequelize = require('sequelize');
const sequelize = new Sequelize(undefined, undefined, undefined, {
    host: 'localhost',
    dialect: 'sqlite',

    // 仅限 SQLite
    storage: 'path/to/database.sqlite',

    // 请参考 Querying - 查询 操作符 章节
    operatorsAliases: false
});

const User = sequelize.define('user', {
    username: Sequelize.STRING,
    birthday: Sequelize.DATE
});

sequelize.sync()
    .then(() => User.create({
        username: 'janedoe',
        birthday: new Date(1980, 6, 20)
    }))
    .then(jane => {
        console.log(jane.toJSON());
    });