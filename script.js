

$(document).ready(function(){


    $.getJSON('prduits.json', function(data){
        // console.log(data)
    var employee_data='';
    
    $.each(data, function(key, value ){
    
        employee_data +='<tr>';
        employee_data +='<td>'+value.id +'</td>';
        employee_data +='<td>'+value.désignation+'</td>';
        employee_data +='<td>'+value.prix+'</td>';
        employee_data +='<td>'+value.categories+'</td>';
        employee_data +='<td>'+value.disponibilité+'</td>';
        employee_data +='<td>'+'<li>'+value.fournisseur.nom+'</li>'+'<li>'+value.fournisseur.adersse+'</li>'+'</td>';
        employee_data +='</tr>';
    });
    
    $('#tbody-tyble').append(employee_data);
    });
   
        $("#searsh").on("keyup", function() {
          var value = $(this).val().toLowerCase();
          $("#tbody-tyble tr").filter(function() {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
          });
        });
      // function sortbale(e,direction){
      //   if(direction=="desc"){
      //     DataTransfer.sort(function(a,b))
      //   }
      // }
      
    })

array.sort(function(a, b){ 
    var nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
    if (nameA < nameB) //sort string ascending return -1; 
        if (nameA > nameB) 
            return 1; return 0; //default return value (no sorting) 
});

