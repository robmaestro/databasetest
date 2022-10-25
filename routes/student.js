const express = require('express');
const db = require('../db/index.js')
const app = express.Router();

app.get('/', getUsers);

async function getUsers(req, res, next) {
    try {
        let results = await db.all();
        res.json(results);
    }
    catch (e) {
        console.log(e);
    }
}

async function getID(req, res, next) {
    try {
        let results = await db.one(req.params.id)

        if(results.length === 0){
            res.sendStatus(404)
        }
        else{
            res.sendStatus(results);
        }
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

module.exports = app;