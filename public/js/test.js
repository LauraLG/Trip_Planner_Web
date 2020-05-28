var num_parada = 1043;
var num_bus = 165;

// const api_url = "https://api.tmb.cat/v1/ibus/stops/"+num_parada+"?app_id=271d8a24&app_key=0e44f355ff60edbc11c46d5d2a425a9a";
const api_url = "https://api.tmb.cat/v1/ibus/lines/165/stops/1043?app_id=4c132798&app_key=a828910cef5a0376607986191db19d14";

async function getBusData() {
  const response = await fetch(api_url);
  const tmb = await response.json();
  const { status, data } = tmb;
  // console.log(tmb.data.ibus[0]["t-in-min"]);
  const main = data.ibus[0];

  const dest = main.destination;
  const num = main.line;
  const min = main["t-in-min"];
  console.log(min);

  document.getElementById('numero').textContent = num;
  document.getElementById('min').textContent = min;
  document.getElementById('dest').textContent = dest;
  document.getElementById('status').textContent = status;

}

  getBusData();
  setInterval(getBusData, 10000);
