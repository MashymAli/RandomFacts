let fact = document.getElementById("fact")
let btn = document.getElementById("newfact")
let api_key = process.env.api_key1;
function getfact() {
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?',
    headers: { 'X-Api-Key': api_key},
    contentType: 'application/json',
    success: function(result) {
        console.log(result['0'].fact);
        fact.innerHTML= result['0'].fact;

    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});
}

getfact()