const weatherForm = document.querySelector("form")
const search = document.querySelector("input")
const forecastData = document.querySelector("#message1")
const isValidJSON = str => {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};
weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const location = search.value;

    fetch(`http://localhost:3000/weather?address=${encodeURIComponent(location)}`).then((response) => {
        ``

        console.log(response.headers.get("content-type"))
        console.log(response)

        if (response.headers.get("content-type") == "application/json; charset=utf-8") {
            response.json().then((data) => {
                    forecastData.textContent = JSON.stringify(data)
                }




            )
        } else {
            response.text().then((data) => {
                    forecastData.textContent = data
                }




            )


        }
    })









})