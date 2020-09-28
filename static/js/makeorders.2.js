
var url = "http://127.0.0.1:4444/";


var products_names
var products_prices
function GetProductsNames ( urlendpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    products_names = JSON.parse(namesrequest.responseText)
                    // console.log(products_names)
                }
        }
    namesrequest.open("GET", url + urlendpoint );    
    namesrequest.send();
}


function GetProductsPrices ( urlendpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    products_names = JSON.parse(namesrequest.responseText)
                    console.log(products_names)
                }
        }
    namesrequest.open("GET", url + urlendpoint );    
    namesrequest.send();
}

function GetProductsPrices ( urlendpoint)
{
    let pricesrequest = new XMLHttpRequest ();
    pricesrequest.onreadystatechange = function ()
        {
            if ( pricesrequest.readyState == 4 && pricesrequest.status == 200)
                {
                    products_prices = JSON.parse(pricesrequest.responseText)
                    // console.log(products_prices)
                }
        }
    pricesrequest.open("GET", url + urlendpoint );    
    pricesrequest.send();
}


function ShowProductsNamesOptions (html_id)
{
    let html_select_input = document.getElementById(html_id);
        for (index in products_names)
            {html_select_input.options[html_select_input.options.length] = new Option(products_names[index],index);}    
}

function DisplayCostPrice (name_id, amount_id )
{
    name_id = document.getElementById(name_id).value;
    // if (name_id == " ")
    //     console.log("its empty...")
    // else
        let costprice = products_prices[name_id]
        document.getElementById(amount_id).value = costprice;
}

function CalculateSubTotaPrice (qty_id, amount_id, subtotal_id)
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
let myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) 
{
    let span = document.createElement("SPAN");
    let txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
let close = document.getElementsByClassName("close");
for (i = 0; i < close.length; i++) 
{
    close[i].onclick = function() 
    {
        let div = this.parentElement;
        div.style.display = "none";
    }
}

// Create a new list item when clicking on the "Add" button
function CreatCustomerList(nameinputid, qtyinputid,amountinputid,totalinputid,unorderedlistid) 
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
    console.log (liststring)
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

// function CreatCustomerList() 
// {
//     let li = document.createElement("li");
//     li.className= "li-class"
//     // get input values
//     let name = document.getElementById("name-input-id").value;
//     let qty = document.getElementById("qty-input-id").value;
//     let amount = document.getElementById("amount-input-id").value;
//     let total = document.getElementById("total-input-id").value;
//     // creat a string
//     let liststring = name + " " + qty + " " + amount + " " + " "+ total 
//     console.log (liststring)
//     let customerlist = document.createTextNode(liststring);
//     li.appendChild(customerlist);
//     if (name === '' || qty === '') {alert("You must write something!");} 
//     else {document.getElementById("un-ordered-list-id").appendChild(li);}
    
//     // clear the inputs
//     document.getElementById("name-input-id").value = "";
//     document.getElementById("qty-input-id").value = "";
//     document.getElementById("amount-input-id").value = "";
//     document.getElementById("total-input-id").value = "";

//     let span = document.createElement("SPAN");
//     let x_txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     // span.
//     span.appendChild(x_txt);
//     li.appendChild(span);

//     for (i = 0; i < close.length; i++) 
//     {
//         close[i].onclick = function() 
//         {
//             let div = this.parentElement;
//             div.style.display = "none";
//             div.remove()
//         }
// }
// }

// collecting data
function CreateArray ()
{
    let listarrary =[]
$("#un-ordered-list-id li").each((id, elem) => {console.log(elem.innerText); listarrary.push(elem.innerText) });

console.log(listarrary)
console.log(listarrary.join(' ').trim())

var l=  "code 132 10 4000  40000"
var len = l.length
l2 = "dpm-10-195000-1950000"
console.log("=====================")
// console.log(l2.split("-").pop());
// console.log(l2.substring(l2.lastIndexOf("-")+1, l2.length));

// for (let i =0; i< len; i++)
// {
//     l = l.replace(" ", "-")
// }

// console.log(l)
// console.log(l.split("-").pop());

// f = "1,950,000"
// mm = f.replace(/,/g,"")
// console.log(mm)

// Email :: namazzimaria2020@gmail.com
// pas :: maria2020
}

function CalculateFinalTotal ()
{
    // let arr = document.getElementsByClassName("subtotal")

    // $("#un-ordered-list-id li").each((id, elem) => {console.log(elem.innerText); listarrary.push(elem.innerText) });

    let li = document.getElementsByTagName("li");
    li.each( function () {
        // str = $(this).text();
        console.log($(this).text())
        // len = str.length;
        // for (let i = 0; i<len; i++)
    });
}

// function CalculateFinalTotal ()
// {

//     let arr = document.getElementsByClassName("subtotalinputs")
//     let total=0;
//     total_input = document.getElementById("finaltotal");
//     for(let i=0;i<arr.length;i++)
//     {
//         if(parseInt(arr[i].value))
//             total += parseInt(arr[i].value);
//     }
//     total_input.value = total.toLocaleString();
// }

$(document).ready ( function () 
{
    $("#total-btn").click ( function () 
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
                    document.getElementById("finaltotal").value = total.toLocaleString();
                    console.log(total);
                });
        });
});

