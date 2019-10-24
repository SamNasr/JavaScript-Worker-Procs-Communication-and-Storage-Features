var i=0;
 
function timedCount()
 {
     i=i+1;
     postMessage('Sending Message ' + i);
     setTimeout("timedCount()", 500);  //recursive call (loop) every 500ms
 }
 
timedCount(); 