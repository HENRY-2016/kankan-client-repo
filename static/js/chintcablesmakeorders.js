
var cablesurl = "http://127.0.0.1:4444/";


var cablesnames
var cablesprices
function GetCablesProductsNames ( urlendpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    cablesnames = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", cablesurl + urlendpoint );    
    namesrequest.send();
}


function GetCablesProductsPrices ( urlendpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    cablesprices = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", cablesurl + urlendpoint );    
    namesrequest.send();
}


function ShowCablesProductsNamesOptions (html_id)
{
    let html_select_input = document.getElementById(html_id);
        for (index in cablesnames)
            {html_select_input.options[html_select_input.options.length] = new Option(cablesnames[index],index);}    
}

function DisplayCablesCostPrice (name_id, amount_id )
{
    name_id = document.getElementById(name_id).value;
    let costprice = cablesprices[name_id]
    document.getElementById(amount_id).value = costprice;
}

function CalculateCablesSubTotaPrice (qty_id, amount_id, subtotal_id)
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
let cablesnodelist = document.getElementsByTagName("LI");
for (i = 0; i < cablesnodelist.length; i++) 
{
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    cablesnodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let cablesclose = document.getElementsByClassName("close");
for (i = 0; i < cablesclose.length; i++) 
{
    cablesclose[i].onclick = function() 
    {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function CreatcablesCustomerList(nameinputid, qtyinputid,amountinputid,totalinputid,unorderedlistid) 
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
function CreateCablesArray ()
{
let listarrary =[]
$("#cables-un-ordered-list-id li").each((id, elem) => {listarrary.push(elem.innerText)});

console.log(listarrary)

// Email :: namazzimaria2020@gmail.com
// pas :: maria2020
}


$(document).ready ( function () 
{
    $("#cables-total-btn").click ( function () 
        { 
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
                    document.getElementById("cables-final-total-id").value = total.toLocaleString();
                });
        });
});

