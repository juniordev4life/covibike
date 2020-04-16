<?php

header("Content-type:application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: *");

function checkGETVariableXXS($getVaraibale) {
  return htmlspecialchars($getVaraibale, ENT_QUOTES, 'UTF-8');
}

function getData() {
  $curl = curl_init();

  curl_setopt_array($curl, array(
    CURLOPT_URL => "https://www.callabike.de/en/rpc",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 30,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS => "{\"method\":\"Map.listBikes\",\"params\":[{\"lat\":\"". checkGETVariableXXS($_GET['lat']) ."\",\"long\":\"". checkGETVariableXXS($_GET['lon']) ."\",\"maxItems\":100,\"radius\":1000}]}",
    CURLOPT_HTTPHEADER => array(
      "Accept: */*",
      "Cache-Control: no-cache",
      "Connection: keep-alive",
      "Content-Type: application/json",
      "Host: www.callabike.de",
      "accept-encoding: gzip, deflate",
      "cache-control: no-cache"
    ),
  ));

  $response = curl_exec($curl);
  $error = curl_error($curl);

  curl_close($curl);

  if ($error) {
    echo "cURL Error #:" . $error;
  } else {
    header("HTTP/1.1 200 Success");
    $returnPart = normalizeResponse($response);
    echo $returnPart;
  }
}

function normalizeZones($zones) {
  $newZones = array();
  if ($zones !== null) {
    foreach ($zones[1] as &$zone) {
      $newZones[0][] = [$zone->lat, $zone->lng];
    }
    if(count($zones) > 2) {
      foreach ($zones[2] as &$zone) {
      $newZones[1][] = [$zone->lat, $zone->lng];
    }
    }
  }
  return $newZones;
}

function normalizeResponse($response) {
  $finalLocations = array();
  $rawResponse = json_decode($response);
  $locations = $rawResponse->result->data->Locations;
  foreach ($locations as &$location) {
    $tempLocation = array();
    $tempLocation['address'] = $location->Description;
    $tempLocation['isStation'] = $location->isStation;
    $tempLocation['totalBikes'] = $location->totalVehicles;
    $tempLocation['position'] = array($location->Position->Latitude,$location->Position->Longitude);
    $freeBikes = array();
    foreach ($location->availableVehicles as &$vehicle) {
      $freeBikes[] = setABike($vehicle);
    }
    $tempLocation['totalFreeBikes'] = count($freeBikes);
    $tempLocation['freeBikes'] = $freeBikes;
    $finalLocations[] = $tempLocation;
  }
  $finalResponse = array();
  $finalResponse['locations'] = $finalLocations;
  $finalResponse['zones'] = null;
  if(checkGETVariableXXS($_GET['zones']) == 1) {
    $finalResponse['zones'] = normalizeZones($rawResponse->result->data->zone);
  }
  return json_encode($finalResponse);
}

function setABike($bikeData) {
  $newBike = array();
  $newBike['brand'] = array('name' => $bikeData->MarkeName, 'id' => $bikeData->MarkeID);
  $newBike['number'] = $bikeData->Number;
  return $newBike;
}

getData();

?>
