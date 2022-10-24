var regions = require('../regions.json')
var provinces = require('../province.json')
var municipalities = require('../municipality.json')
var barangays = require('../barangay.json')
let myAddress = {}

// export function getRegion() {
myAddress.region = (id) => {
    if (id) {
        let region_id = parseInt(id)
        //if not a number region_id
        if (region_id == NaN) return false
        let found_region = regions.find(region => parseInt(region.id) == parseInt(region_id));

        //if id does not exist 
        if (found_region == undefined) return false
        return found_region
    }
    return regions
}
myAddress.province = (reg_id, prov_id) => {
    var results = false
    if (reg_id && prov_id) {
        let province_id = parseInt(prov_id)
        //if not a number province_id
        if (province_id == NaN) return false
        results = provinces.find(province => parseInt(reg_id) == province.region_code && parseInt(province.id) == province_id);

        //if id does not exist 
        if (results == undefined) return false
    } else if (reg_id) {
        results = provinces.filter(province => reg_id == province.region_code)
    }
    return results
}

myAddress.municipality = (reg_id, prov_id, muni_id) => {
    var results = false
    if (reg_id && prov_id && muni_id) {
        let municipality_id = parseInt(muni_id)
        //if not a number municipality_id
        if (municipality_id == NaN) return false
        results = municipalities.find(municipality => parseInt(municipality.region_code) == reg_id && parseInt(municipality.province_code) == prov_id && parseInt(municipality.id) == muni_id)

        //if id does not exist 
        if (results == undefined) return false
    } else if (reg_id && prov_id) {
        results = municipalities.filter(municipality => municipality.region_code == reg_id && municipality.province_code == prov_id)
    }
    return results
}

myAddress.barangay = (reg_id, prov_id, muni_id, bar_id) => {
    var results = false
    if (reg_id && prov_id && muni_id && bar_id) {
        let barangay_id = parseInt(bar_id)
        //if not a number municipality_id
        if (bar_id == NaN) return false
        results = barangays.find(barangay => parseInt(barangay.region_code) == reg_id && parseInt(barangay.province_code) == prov_id && parseInt(barangay.city_code) == muni_id && parseInt(barangay.id) == bar_id)

        //if id does not exist 
        if (results == undefined) return false
    } else if (reg_id && prov_id && muni_id) {
        results = barangays.filter(barangay => barangay.region_code == reg_id && barangay.province_code == prov_id && barangay.city_code == muni_id)
    }
    return results
}
module.exports = myAddress