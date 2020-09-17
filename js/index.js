document.getElementById("getPosition").addEventListener("click",getPosition);

function getPosition()
{
    var watchID =
    navigator.geolocation.getCurrentPosition(onSucess,onError);
function onSucess(position)
    {
        alert('Latitude:'    +
        position.coords.latitude     +'\n'+
        'Longitude'       +position.coords.longitude
             +'\n'      
             );
    }
}
function onError(error)
{
    alert('code'      +error.code      +'\n'+     
         'message:'     +error.message    +'\n');
}

