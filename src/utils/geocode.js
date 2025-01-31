const request = require('postman-request');
const geocode = (address, callback) => {
    const url = "https://api.positionstack.com/v1/forward?access_key=9192382f748ea4924aa1b15a4beb973d&query= " + encodeURIComponent(address) + "& limit = 1 "

    request({ url: url, json: true }, (error, response) => {



        if (error) {
            callback("connection error with the api", undefined)
        } else if (response.body.data.length === 0) {


            callback("unable to find location ", undefined);


        } else {
            callback(undefined, {
                latitude: response.body.data[0].latitude,
                longitude: response.body.data[0].longitude,
                label: response.body.data[0].label

            })

        }


    })

}
module.exports = geocode