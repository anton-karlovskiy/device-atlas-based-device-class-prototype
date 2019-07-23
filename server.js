
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const cors = require('cors');
const app = express();
const DeviceApiWeb = require('deviceatlas-deviceapi').DeviceApiWeb;

app.disable('x-powered-by');
app.use(cors());
app.use(express.static(path.join(__dirname, 'build')));

// DeviceAtlas server-side API
const deviceApi = (function () {
  const devApi = new DeviceApiWeb();
  
  try {
    devApi.loadDataFromFile('./lib/device-atlas/device-data-file/55268_20190722.json');
  } catch (ex) {
    devApi.error = ex;
    console.log(ex.message);
  }
  
  return devApi;
})();

// ray test touch <
// TODO: hardcoded
app.get('/api/device-properties', function (req, res) {
  if (deviceApi.error) {
    return res.status(500).json({
      message: deviceApi.error
    });
  }
  
  const properties = deviceApi.getPropertiesFromRequest(req);
  
  let props = {};
  
  for (const name in properties.getMap()) {
    const prop = {};
    prop[name] = properties.get(name).getValue();
    props = { ...props, prop };
  }
  return res.status(200).send(props);
});
// ray test touch >

// TODO: hardcoded
app.get('/api/device', function (req, res) {
  console.log('[server] user-agent => ', req.headers['user-agent']);

  if (deviceApi.error) {
    return res.status(500).json({
      message: deviceApi.error
    });
  }
  
  const properties = deviceApi.getPropertiesFromRequest(req);

  const isMobileDevice = properties.get('mobileDevice').getValue();
  if (!isMobileDevice) {
    return res.status(400).json({
      message: 'Currently only support Android/iOS devices.'
    });
  }

  const androidBenchmarks = require('./lib/geekbench/android-benchmarks.json').devices;
  const iosBenchmarks = require('./lib/geekbench/ios-benchmarks.json').devices;
  const allBenchmarks = [...androidBenchmarks, ...iosBenchmarks];
  const deviceName = `${properties.get('vendor').getValue()} ${properties.get('marketingName').getValue()}`;
  const matchedBenchmark = allBenchmarks.find(benchmark => benchmark.name === deviceName);

  if (!matchedBenchmark) {
    return res.status(404).json({
      message: 'Not found matched benchmark!'
    });
  }

  return res.status(200).send(matchedBenchmark);
});

// need to declare a "catch all" route on your express server 
// that captures all page requests and directs them to the client
// the react-router do the route part
app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});
app.listen(
  process.env.PORT || 5000,
  function () {
    console.log(`Frontend start on http://localhost:5000`);
  }
);
