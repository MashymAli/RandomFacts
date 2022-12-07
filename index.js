let fact = document.getElementById("fact")
let btn = document.getElementById("newfact")

function getfact() {
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/facts?',
    headers: { 'X-Api-Key': 'mKTluWUB0ES2cAKQ/uIoxg==guJICSFT5FKfYIHk'},
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