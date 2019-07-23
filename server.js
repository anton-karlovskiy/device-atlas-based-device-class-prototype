
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const DeviceApiWeb = require('deviceatlas-deviceapi').DeviceApiWeb;

app.disable('x-powered-by');
app.use(express.static(path.join(__dirname, 'build')));

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

app.get('/api/device-properties', function (req, res) {
  console.log(req.headers['user-agent']);
  if (!deviceApi.error) {
    const properties = deviceApi.getPropertiesFromRequest(req);
    return res.status(200).send(properties);
  } else {
    return res.status(500).json({
      message: deviceApi.error
    })
  }
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
