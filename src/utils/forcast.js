const request = require("postman-request")

const forcast = (lat, long, callback) => {

    const url = "http://api.weatherstack.com/current?access_key=ec7e5abc341fcd7ce438b0c327d8e099&query=" + encodeURIComponent(lat) + ", " +
        encodeURIComponent(long) + " & units = m "
    request({
        url: url,
        json: true

    }, (error, response) => {
        if (error) {
            callback("connection error with the api ", undefined)

        } else if (response.body.error) {

            callback("unable to find location ", undefined

            );

        } else {
            callback(undefined, { des: response.body.current.weather_descriptions[0], temp: response.body.current.temperature, time: response.body.current.observation_time })





        }
    })

}
module.exports = forcast