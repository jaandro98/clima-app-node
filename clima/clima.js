const axios = require('axios');

const getClima = async (lat,lg) => {

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lg}&appid=a4333079802236e050f7fd1830bdf321`)

    const temperatura = resp.data.main.temp;

    return temperatura;

}

module.exports = {
    getClima
}