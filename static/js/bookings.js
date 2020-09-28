
//var url = "http://127.0.0.1:4444/";
var url = "http://192.168.43.140:4444/";



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


function DisplayCostPrice (type_id,size_id,cost_input_id)
{
    type = document.getElementById(type_id).value;
    size = document.getElementById(size_id).value;

    halfltr = "0.5 ltr"
    oneltr = "1 ltr"
    fourltrs = "4 ltrs"
    twentyltrs = "20 ltrs"

    //products_prices  {"Eggshel": ["200000", "75000", "20000"], "Super": ["330000", "70000", "20000"]}

    // Get the product type name selected.....
    product_name_type = Object.keys(products_prices).filter(key => key == type)
    product_name_type_string = product_name_type.toString() // convert from arrary to string

    // Get the product cost basesing on the size
    if (size == twentyltrs)
        {
            productprice = Object.values(products_prices[product_name_type_string][0]) // fst index
            // convert from arrary to string & rmv commas
            price = productprice.toString().split(",").join("");
            document.getElementById(cost_input_id).value = price;
        }

    else if (size == fourltrs)
        {
            productprice = Object.values(products_prices[product_name_type_string][1]) // sce index
            // convert from arrary to string & rmv commas
            price = productprice.toString().split(",").join("");
            document.getElementById(cost_input_id).value = price;
        }
    else if (size == oneltr)
        {
            productprice = Object.values(products_prices[product_name_type_string][2]) // thrd index
            // convert from arrary to string & rmv commas
            price = productprice.toString().split(",").join("");
            document.getElementById(cost_input_id).value = price;
        }
    else if (size == halfltr)
        {
            productprice = Object.values(products_prices[product_name_type_string][3]) // fth index bg
            // convert from arrary to string & rmv commas
            price = productprice.toString().split(",").join("");
            document.getElementById(cost_input_id).value = price;
        }
    else {alert("... Invalid input ...");}
}

function CalculateSubTotaPrice (qty_id, cost_price_id, subtotal_id)
{
    console.log("func called...")
    let qty_input = document.getElementById(qty_id).value;
    let cost_price = document.getElementById(cost_price_id).value;
	let price = parseFloat(qty_input) * parseFloat(cost_price);    
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
function CreatCustomerList(typeinputid, sizeinputid,colourinputid, qtyinputid,amountinputid,totalinputid,unorderedlistid) 
{
    let li = document.createElement("li");
    li.className= "list-class"
    // get input values
    let type = document.getElementById(typeinputid).value;
    let size = document.getElementById(sizeinputid).value;
    let colour = document.getElementById(colourinputid).value;
    let qty = document.getElementById(qtyinputid).value;
    let amount = document.getElementById(amountinputid).value;
    let total = document.getElementById(totalinputid).value;
    // creat a string
    let liststring = type + " "+size + " " + colour + " "+ qty + " " + amount + " " + " "+ total 
    console.log (liststring)
    let customerlist = document.createTextNode(liststring);
    li.appendChild(customerlist);
    if (type === '' || qty === '') {alert("You must write something!");} 
    else {document.getElementById(unorderedlistid).appendChild(li);}
    
    // clear the inputs
    document.getElementById(typeinputid).value = "";
    document.getElementById(sizeinputid).value = "";
    document.getElementById(colourinputid).value = "";
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
                    document.getElementById("final-total-id").value = total.toLocaleString();
                    console.log(total);
                });
        });
});

