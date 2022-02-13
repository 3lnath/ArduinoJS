const express = require('express');
const app = express();

let SerialPort = require('serialport');

let port = 3000;
let arduinoCOMPort = "COM9";

let arduinoSerialPort = new SerialPort(arduinoCOMPort, {
    baudRate: 9600
});

arduinoSerialPort.on('open', () => {
    console.log("Port " + arduinoCOMPort + " is opened");
});

app.get('/:action', (res, res) => {
    return res.send('Working');
});

app.get('/:action', (req, res) => {
    let action = req.params.action || req.params('action');

    if (action == 'y') {
        arduinoSerialPort.write('y');
        return res.send('ON');
    } else if (action == 'n') {
        arduinoSerialPort.write('n');
        return res.send('OFF');
    }

    return res.send('Action : ' + action);
});

app.listen(port, () => {
    console.log('App is listening on port http://0.0.0.0:' + port);
});
