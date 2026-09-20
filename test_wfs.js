async function testWFS() {
  try {
    const polygon = "-58.0595259999959 -35.0784069999929, -58.04685999999569 -35.0879119999929, -58.0429549999957 -35.0843989999929, -58.0557889999958 -35.0750499999929, -58.0595259999959 -35.0784069999929";
    const url = `https://urbasig.mgob.gba.gob.ar/geoserver/urbasig/wfs?request=GetFeature&service=WFS&version=1.0.0&typeName=urbasig:uso_del_suelo&outputFormat=application/json&maxFeatures=2`;
    
    console.log("Fetching: ", url);
    const res = await fetch(url);
    if (!res.ok) {
        console.log("Failed:", res.status, res.statusText);
        const text = await res.text();
        console.log(text.substring(0, 500));
        return;
    }
    const data = await res.json();
    console.log("Success. Features found: ", data.features?.length);
    if (data.features?.length > 0) {
        console.log("First feature props: ", data.features[0].properties);
    }
  } catch (err) {
    console.error(err);
  }
}
testWFS();
