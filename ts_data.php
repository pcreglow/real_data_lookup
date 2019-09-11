<?php
// Simple Authentication
// x-api-key required in header

$method = 'GET';
$host = 'api.targetsmart.com';

$apikey = 'XkuPmRTkvl1eUWr67zH3o9gd4YNbThHoLsP1Folc';
$apipath = 'voter-suggest';

// request parameters should be url encoded
//$request_parameters = 'state=OR&first_name=Shawn&last_name=Cleave';

$form_array = array();
$form_array['first_name'] = $_GET["first_name"];   //use $_GET instead of $atts when in production
$form_array['last_name'] = $_GET["last_name"];   //use $_GET instead of $atts when in production
$form_array['state'] = $_GET["state"];   //use $_GET instead of $atts when in production
//$form_array['example_server_side_variable'] = "some_static_variable";
$request_parameters = http_build_query($form_array);

//comment these two lines out after testing in snippets console
//echo $request_parameters;
//die();


$endpoint = 'https://' . $host . '/voter/' . $apipath;

$request_url = $endpoint . '?' . $request_parameters;

$ch = curl_init();
$timeout = 5;
curl_setopt($ch, CURLOPT_URL, $request_url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
curl_setopt($ch, CURLOPT_HTTPHEADER, array(
    'x-api-key: ' . $apikey));

// ************* SEND THE REQUEST *************
//echo '\nBEGIN REQUEST....................................';
//echo 'Request URL = ' . $request_url;
$r = curl_exec($ch);
$httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);

//echo '\nRESPONSE....................................';
curl_close($ch);
echo $r;
?>
