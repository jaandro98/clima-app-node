const axios = require('axios');

const getLugar = async (dir) => {

    const encoded_direccion = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encoded_direccion}`,
        headers: {'x-rapidapi-key': '447b6fa6admsh6e84861d5ef384ep14eb4ajsnb42737b9b15b'}
    });

    const resp = await instance.get();

    if (resp.data.Results.length == 0) {
        throw new Error(`No hay resultados para ${dir}`);
    } else {
        const data = resp.data.Results[0];
        const direccion = data.name;
        const lat = data.lat;
        const lng = data.lon;

        return {
            direccion,
            lat,
            lng
        }
    }
}

module.exports = {
    getLugar
}