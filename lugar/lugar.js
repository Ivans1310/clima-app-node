const axios = require('axios');

const getLugarLatLng = async(direccion) => {

    let encodedUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodedUrl}&key=AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI`);
    if (resp.data.status === 'ZERO_RESULTS') {
        throw new Error(`No hay resultados para la ciudad : ${direccion}`);
    }

    let location = resp.data.results[0].formatted_address;
    let lat = resp.data.results[0].geometry.location.lat;
    let lng = resp.data.results[0].geometry.location.lng;

    return {
        // lo de abajo es lo mismo que direccion :direccion
        location,
        lat,
        lng
    }

    //console.log(JSON.stringify(resp.data, undefined, 2));

}
module.exports = {
    getLugarLatLng
}