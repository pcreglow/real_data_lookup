jQuery(function($) {
$(document).ready(function() {
// write your code here
$('#real_search').submit(function(e) {
        e.preventDefault();
var formData = $('#real_search').serialize();
console.log(formData);
var data_lookup = [];
$.ajax({
    type: "GET",
    url: "ts_data.php",
    data: formData,
    dataType: "jsonp",
    contentType: "application/json; charset=utf-8",
    success: function(response) {
        console.log(response);
        data_lookup.push(response);
        voterData(data_lookup);
        // $.each(data_lookup.potential_voter_matches, function(key, value) {
        //   alert(potential_voter_matches[0]['vb.tsmart_first_name']);
        // })
        // console.log(potential_voter_matches);
        // console.log(potential_voter_matches[0]['cell.tsmart_wireless_phone']);
        // console.log(data_json.potential_voter_matches);
        // var potential_matches = data_json.potential_voter_matches;
        // console.log(potential_matches[0]['cell.tsmart_wireless_phone']);
        // console.log(potential_matches[0]['vb.tsmart_first_name']);
        // console.log(potential_matches[0]['vb.tsmart_last_name']);
    }
 })
function voterData(data_lookup){
  console.log(data_lookup);
  console.log(data_lookup.potential_matches);
  //var voters = JSON.parse(data_lookup);
  //console.log(voters);
}


// for (i = 0; i <= potential_matches.length; i++) {
//     var first_name = potential_matches[i]['vb.tsmart_first_name'];
//     var last_name = potential_matches[i]['vb.tsmart_last_name'];
//     var row = '<tr><td>' + first_name + '</td><td>' + last_name + '</td></tr>';
//     jQuery('#table-container').append(row);
// }
//
// jQuery('#voter-results').append('<table>' + variable + '</table>')
});
});
});
