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
    success: function(response) {
        data_lookup.push(response);
        voterData(data_lookup);
    }
 })
function voterData(data_lookup){
  var voters = JSON.parse(data_lookup);
  var voter_response = voters.potential_voter_matches;
  console.log(voter_response);
  console.log(voter_response.length);

  for (i = 0; i <= voter_response.length; i++) {
    console.log(voter_response[i]['vb.tsmart_first_name']);
    console.log(voter_response[i]['vb.tsmart_last_name']);
  }
    var first_name = voter_response[i]['vb.tsmart_first_name'];
    var last_name = voter_response[i]['vb.tsmart_last_name'];
    var row = '<h4>' + first_name + ' ' + last_name + '</h4>';
    $('#voter-results').append(row);
 }
});
});
});
