
// var lightsurl = "http://127.0.0.1:4444/";
var lightsurl = "http://192.168.43.140:4444/";


var lightsnames
var lightsprices
function GetLightsProductsNames ( urlendpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    lightsnames = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", lightsurl + urlendpoint );    
    namesrequest.send();
}


function GetLightsProductsPrices ( urlendpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    lightsprices = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", lightsurl + urlendpoint );    
    namesrequest.send();
}


function ShowLightsProductsNamesOptions (html_id)
{
    let html_select_input = document.getElementById(html_id);
        for (index in lightsnames)
            {html_select_input.options[html_select_input.options.length] = new Option(lightsnames[index],index);}    
}

function DisplayLightsCostPrice (name_id, amount_id )
{
    name_id = document.getElementById(name_id).value;
    let costprice = lightsprices[name_id]
    document.getElementById(amount_id).value = costprice;
}

function CalculateLightsSubTotaPrice (qty_id, amount_id, subtotal_id)
{
    let qty_input = document.getElementById(qty_id).value;
    let amount_input = document.getElementById(amount_id).value;
	let price = parseFloat(qty_input) * parseFloat(amount_input);    
	let formatedprice = price.toLocaleString();
	document.getElementById(subtotal_id).value =  formatedprice;
}


                // ===================
                // ON CUSTOMER LIST
                // ===================
// Create a "close" button and append it to each list item
let lightsnodelist = document.getElementsByTagName("LI");
for (i = 0; i < lightsnodelist.length; i++) 
{
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    lightsnodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let lightsclose = document.getElementsByClassName("close");
for (i = 0; i < lightsclose.length; i++) 
{
    lightsclose[i].onclick = function() 
    {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function CreatLightsCustomerList(nameinputid, qtyinputid,amountinputid,totalinputid,unorderedlistid) 
{
    let li = document.createElement("li");
    li.className= "lights-li"
    // get input values
    let name = document.getElementById(nameinputid).value;
    let qty = document.getElementById(qtyinputid).value;
    let amount = document.getElementById(amountinputid).value;
    let total = document.getElementById(totalinputid).value;
    // creat a string
    let liststring = name + " " + qty + " " + amount + " " + " "+ total 
    let customerlist = document.createTextNode(liststring);
    li.appendChild(customerlist);
    if (name === '' || qty === '') {alert("You must write something!");} 
    else {document.getElementById(unorderedlistid).appendChild(li);}
    
    // clear the inputs
    document.getElementById(nameinputid).value = "";
    document.getElementById(qtyinputid).value = "";
    document.getElementById(amountinputid).value = "";
    document.getElementById(totalinputid).value = "";

    let span = document.createElement("SPAN");
    let x_txt = document.createTextNode("\u00D7");
    span.className = "close";
    // span.
    span.appendChild(x_txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) 
    {
        close[i].onclick = function() 
        {
            let div = this.parentElement;
            div.style.display = "none";
            div.remove()
        }
    }
}

// collecting data
function CreateLightsArray ()
{
let listarrary =[]
$("#lights-un-ordered-list-id li").each((id, elem) => {listarrary.push(elem.innerText) });

console.log(listarrary)

// Email :: namazzimaria2020@gmail.com
// pas :: maria2020
}


$(document).ready ( function () 
{
    
    $("#lights-total-btn").click ( function () 
        { 
            let total = 0;
            $("lights-un-ordered-list-id li").each( function () 
                {
                    str = $(this).text().replace(" ", "-")
                    len = str.length
                    for (let i =0; i< len; i++)
                        {
                            str = str.replace(" ", "-")
                        }
                    // alert(str) 
                    subtotal = str.split("-").pop()                            
                    subtotal1  = subtotal.slice(0, -1)
                    comasoutnum =  subtotal1.replace(/,/g,"")
                    subtotalint = parseInt(comasoutnum)
                    total += subtotalint
                    document.getElementById("lights-final-total-id").value = total.toLocaleString();
                });
        });
});

