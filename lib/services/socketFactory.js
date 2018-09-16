app.factory('socketFactory', function($websocket) {
    // Open a WebSocket connection
    var stream = $websocket('wss://echo.websocket.org');

    stream.onMessage(function(message) {
        console.log(message.data);
    });

    return stream;
});