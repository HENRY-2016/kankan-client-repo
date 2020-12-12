
// 192.168.43.23

function LoadUsingGitHub ()
{window.location='https://henry-2016.github.io/kankan-client-server-repo/'}

function LoadUsingLapTop ()
{window.location="http://192.168.43.23:80/kankan-client-server-repo/index.html"}

function LoadUsingRaspberry ()
{window.location="http://192.168.43.140:80/kankan-client-server-repo/index.html"}


// Esther
function LoadEstherUsingGitHub ()
{

if(!navigator.onLine)
{
 window.location ="error.html"
}
else if(navigator.onLine)
{
window.location='https://henry-2016.github.io/esther-client-server-repo/'
}




}
function LoadEstherUsingLapTop ()
{window.location="http://192.168.43.23:80/esther-client-server-repo/index.html"}

function LoadEstherUsingRaspberry ()
{window.location="http://192.168.43.140:80/esther-client-server-repo/index.html"}


function Create_Offline_Label ()
{
    let offline_label_div = document.getElementById("offline-label-div");
    let label = document.createElement("label");
    label.innerHTML = "Your Are Offline <br> Please <br>Connect To Network"
    label.className = "Offline-Label"
    offline_label_div.appendChild(label)
}
