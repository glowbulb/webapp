var response = [{
      "name":"Adam",
      "age":"3",
      "number":"2486317054"
     },
     {
       "name":"Norma",
       "age":"12",
       "number":"1234567890"
     },
     {
       "name":"Chee",
       "age":"37",
       "number":"0987654321"
     },
     {
       "name":"Hit",
       "age":"19",
       "number":"6224562457"
     },
     {
       "name":"Ster",
       "age":"53",
       "number":"7564523452"
     }]

//response = $.parseJSON(response);

$.each(response, function(i, item) {
    $('<tr>').html("<td>" + response[i].name + "</td><td>" + response[i].age + "</td><td>" + response[i].number + "</td>").appendTo('#table')
})
