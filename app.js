jQuery(function($) {
$(document).ready(function() {
// write your code here
$('#real_search').submit(function(e) {
        e.preventDefault();
var formData = $('#real_search').serialize();
console.log(formData);
$.ajax({
    type: "GET",
    url: "ts_data.php",
    dataType: json,
    data: formData,
    success: function(data) {
        console.log(data);
        console.log(data.potential_voter_matches);
        var potential_matches = data.potential_voter_matches;
        console.log(potential_matches[0]['cell.tsmart_wireless_phone']);
        console.log(potential_matches[0]['vb.tsmart_first_name']);
        console.log(potential_matches[0]['vb.tsmart_last_name']);
    }
});

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
