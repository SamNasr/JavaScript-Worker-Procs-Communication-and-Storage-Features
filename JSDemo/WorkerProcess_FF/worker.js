onmessage = function(event) {
    if(event.data == 'end') {
        close(); // this doesn't prevent a leak
        return;
    }
    postMessage(event.data);
}
