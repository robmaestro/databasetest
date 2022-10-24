var barangays = require('./barangay.json');

app.get('/region/:region_id/province/:province_id/municipality/:municipality_id/barangay', getBarangays);
app.get('/region/:region_id/province/:province_id/municipality/:municipality_id/barangay/:barangay_id', findBarangay);

function getBarangays(req, res) {
    var region_id = req.params.region_id
    var province_id = req.params.province_id
    var municipality_id = req.params.municipality_id
    var barangays_ = barangays.filter(barangay => region_id == barangay.region_code && province_id == barangay.province_code && municipality_id == barangay.city_code)

    res.send(barangays_)
}
function findBarangay(req, res) {

    var region_id = req.params.region_id
    var province_id = req.params.province_id
    var municipality_id = req.params.municipality_id
    var barangay_id = req.params.barangay_id

    var barangay = barangays.find(barangay => region_id == barangay.region_code && province_id == barangay.province_code && municipality_id == barangay.city_code && barangay_id == barangay.id)
    res.send(barangay)
}