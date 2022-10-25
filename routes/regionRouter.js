const express = require('express')
const db = require('../db/index.js')
const app = express.Router()

let address = require('../public/address')

// app.get('/:region_id/province/:province_id/municipality/:municipality_id/barangay/:barangay_id?', findBarangay)
// app.get('/:region_id/province/:province_id/municipality/:municipality_id?', findMunicipality)
// app.get('/:region_id/province/:province_id?', findProvince)
// app.get('/:region_id', findRegion)
app.put('/', editRegion)
app.post('/', insertRegion)
app.delete('/', delRegion)
app.get('/', getRegion)

async function getRegion(req, res, next) {
    try {
        let results = await db.all();
        res.json({ results: results })
    }
    catch (e) {
        console.log(e);
    }
}

async function insertRegion(req, res, next) {
    try {
        let results = await db.add(req.body.region_name)

        if (results.affectedRows) {
            let newResults = await db.all()
            res.send({ results: newResults });
        }
        else {
            res.sendStatus(404)
        }
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

async function delRegion(req, res, next) {
    try {
        let results = await db.del(req.body.region_id)
        if (results.affectedRows) {
            let newResults = await db.all()
            res.send({ results: newResults });
        }
        else {
            res.sendStatus(404)
        }
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

async function editRegion(req, res, next) {
    try {
        let results = await db.change(req.body.region_name, req.body.region_id)
        if (results.affectedRows) {
            let newResults = await db.all()
            res.send({ results: newResults });
        }
        else {
            res.sendStatus(404)
        }
    }
    catch (e) {
        console.log(e);
        res.sendStatus(500);
    }
}

// async function findRegion(req, res, next) {
//     try {
//         let results = await db.one(req.params.region_id)

//         if(results.length === 0){
//             res.sendStatus(404)
//         }
//         else{
//             res.send(results);
//         }
//     }
//     catch (e) {
//         console.log(e);
//         res.sendStatus(500);
//     }
// }

module.exports = app


// function findRegion(req, res) {
//     res.send(address.region(req.params.region_id))
// }

// function findProvince(req, res) {
//     let region_id = req.params.region_id
//     let province_id = req.params.province_id
//     let region = address.region(region_id)
//     let results = false;

//     if (region) {
//         results = address.province(region.id, province_id)
//     }
//     res.send(results)
// }

// function findMunicipality(req, res) {
//     let region_id = req.params.region_id
//     let province_id = req.params.province_id
//     let municipality_id = req.params.municipality_id
//     let region = address.region(region_id)
//     let province = address.province(region.id, province_id)
//     let results = false;

//     if (province) {
//         results = address.municipality(region.id, province.id, municipality_id)
//     }
//     res.send(results)
// }

// function findBarangay(req, res) {
//     let region_id = req.params.region_id
//     let province_id = req.params.province_id
//     let municipality_id = req.params.municipality_id
//     let barangay_id = req.params.barangay_id
//     let region = address.region(region_id)
//     let province = address.province(region.id, province_id)
//     let municipality = address.municipality(region.id, province.id, municipality_id)
//     let results = false;

//     if (municipality) {
//         results = address.barangay(region.id, province.id, municipality.id, barangay_id)
//     }
//     res.send(results)
// }


