
//var switchsurl = "http://127.0.0.1:4444/";
var switchsurl = "http://192.168.43.140:4444/";



var switchsnames
var switchsprices
function GetSwitchsProductsNames ( urlendpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    switchsnames = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", switchsurl + urlendpoint );    
    namesrequest.send();
}


function GetSwitchsProductsPrices ( urlendpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    switchsprices = JSON.parse(namesrequest.responseText)
                }
                console.log(switchsprices)
        }
    namesrequest.open("GET", switchsurl + urlendpoint );    
    namesrequest.send();
}


function ShowSwitchsProductsNamesOptions (html_id)
{

    let html_select_input = document.getElementById(html_id);
        for (index in switchsnames)
            {html_select_input.options[html_select_input.options.length] = new Option(switchsnames[index],index);}    
}

function DisplaySwitchsCostPrice (name_id, amount_id )
{
    console.log(switchsprices)
    name_id = document.getElementById(name_id).value;
    let costprice = switchsprices[name_id]
    document.getElementById(amount_id).value = costprice;
}

function CalculateSwitchsSubTotaPrice (qty_id, amount_id, subtotal_id)
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
let switchsnodelist = document.getElementsByTagName("LI");
for (i = 0; i < switchsnodelist.length; i++) 
{
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    switchsnodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let switchsclose = document.getElementsByClassName("close");
for (i = 0; i < switchsclose.length; i++) 
{
    switchsclose[i].onclick = function() 
    {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function CreatSwitchsCustomerList(nameinputid, qtyinputid,amountinputid,totalinputid,unorderedlistid) 
{
    let li = document.createElement("li");
    li.className= "list-class"
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
function CreateSwitchsArray ()
{
let listarrary =[]
$("#switchs-un-ordered-list-id li").each((id, elem) => {listarrary.push(elem.innerText) });

console.log(listarrary)

// Email :: namazzimaria2020@gmail.com
// pas :: maria2020
}


$(document).ready ( function () 
{
    $("#switchs-total-btn").click ( function () 
        { 
            console.log("switch btn called.........")
            let total = 0;
            $("li").each( function () 
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
                    document.getElementById("switchs-final-total-id").value = total.toLocaleString();
                });
        });
});

