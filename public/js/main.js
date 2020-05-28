var stopNumber = 1043;
// var num_bus = 165;
// const api_url = "https://api.tmb.cat/v1/ibus/stops/"+num_parada+"?app_id=271d8a24&app_key=0e44f355ff60edbc11c46d5d2a425a9a";


function connectApi(){

};

// const api_url = "https://api.tmb.cat/v1/ibus/lines/165/stops/1043?app_id=4c132798&app_key=a828910cef5a0376607986191db19d14";

async function getBusData() {
  //retrieve info from
  var element = document.getElementById("json-choose-bus");
  var busNumber = element.options[element.selectedIndex].value;
  var e = document.getElementById("json-choose-busstop");
  var originStop = e.options[e.selectedIndex].value;
  console.log("Selected busNumber is " + busNumber);
  const api_url = "https://api.tmb.cat/v1/ibus/lines/"+busNumber+"/"+ "stops/" + stopNumber+"/"+"?app_id=4c132798&app_key=a828910cef5a0376607986191db19d14";
  console.log("Consulting external JSON");
  const response = await fetch(api_url);
  const tmb = await response.json();
  const { status, data } = tmb;
  // console.log(tmb.data.ibus[0]["t-in-min"]);
  const main = data.ibus[0];
  const dest = main.destination;
  // const num = main.line;
  const min = main["t-in-min"];
  const seconds = main["t-in-s"];

  const seconds_modul = seconds % 60;
  console.log("quedan " + min + " minutos");

  document.getElementById('numero').textContent = busNumber;
  document.getElementById('min').textContent = min;
  document.getElementById('sec').textContent = seconds_modul;
  // document.getElementById('paradafin').textContent = originStop;
  // document.getElementById('status').textContent = status;
}
    // getBusData();
  // setInterval(getBusData, 10000);

  function showResponseCard(){
    console.log("Response card has been unhidden");
    var cardResp = document.getElementById("response");
    var cardReq = document.getElementById("request");
    cardResp.style.display = "block";
    cardReq.style.float = "left" ;
    cardReq.style.width = "50%";
  }

  function search(){
    console.log("search request has been started");
    showResponseCard();
    connectApi();
    getBusData();
    setInterval(getBusData, 1000);
  }
