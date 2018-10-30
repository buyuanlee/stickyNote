var express = require('express');
var router = express.Router();
var Note = require('../model/note').Note

/* GET users listing. */
// 读取功能
router.get('/notes', function (req, res, next) {
    if (!req.session.user) {
        return res.send({status: 1, errorMsg: '请先登陆'})
    }

    Note.findAll({raw: true}).then((notes) => {
        res.send({status: 0, data: notes})
    }).catch(() => {
        res.send({status: 0, errorMsg: '数据库出错'})
    })
});

// 新增功能
router.post('/notes/add', function (req, res, next) {
    if (!req.session.user) {
        return res.send({status: 1, errorMsg: '请先登陆'})
    }

    var uid = req.session.user.id
    var note = req.body.note;

    Note.create({text: note, uid: uid}).then(() => {
        res.send({status: 0})
    }).catch(() => {
        res.send({status: 0, errorMsg: '数据库出错'})
    })
});

// 编辑功能
router.post('/notes/edit', function (req, res, next) {
    if (!req.session.user) {
        return res.send({status: 1, errorMsg: '请先登陆'})
    }

    var uid = req.session.user.id
    Note.update({text: req.body.note}, {where: {id: req.body.id, uid: uid}}).then(() => {
        res.send({status: 0})
    }).catch(() => {
        res.send({status: 0, errorMsg: '数据库出错'})
    })
});

// 删除功能
router.post('/notes/delete', function (req, res, next) {
    if (!req.session.user) {
        return res.send({status: 1, errorMsg: '请先登陆'})
    }

    var uid = req.session.user.id
    Note.destroy({where: {id: req.body.id, uid: uid}}).then(() => {
        res.send({status: 0})
    }).catch(() => {
        res.send({status: 0, errorMsg: '数据库出错'})
    })
});

module.exports = router;
