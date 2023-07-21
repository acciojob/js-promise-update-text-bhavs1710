//your JS code here. If required.
function new(){
	return new Promise(function (resolve, reject) {
          
                // Setting 2000 ms time
                setTimeout(resolve, 1000);
            }).then(function () {
                document.getElementById("output").innerHTML = 
                "Wrapped setTimeout after 1000ms";
            });
        }
}
