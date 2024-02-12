
let muscle = ''
let muscleGroup = $.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    headers: { 'X-Api-Key': 'k6AqBd9EJ+ukEjEjs7HUYA==WLlHBu9nm8Ceioe5'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

console.log(muscleGroup)