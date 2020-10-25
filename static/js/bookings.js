
// var url = "http://127.0.0.1:4444/";
// var url = "http://192.168.43.140:4444/"; 
var url = "http://192.168.43.23:4444/" // laptop



var products_names
var products_prices
var paint_colours
function GetProductsNames ( urlendpoint)
{
    let namesrequest = new XMLHttpRequest ();
    namesrequest.onreadystatechange = function ()
        {
            if ( namesrequest.readyState == 4 && namesrequest.status == 200)
                {
                    products_names = JSON.parse(namesrequest.responseText)
                }
        }
    namesrequest.open("GET", url + urlendpoint );    
    namesrequest.send();
}

function GetPaintColours ( urlendpoint)
{
    let coloursrequest = new XMLHttpRequest ();
    coloursrequest.onreadystatechange = function ()
        {
            if ( coloursrequest.readyState == 4 && coloursrequest.status == 200)
                {
                    paint_colours = JSON.parse(coloursrequest.responseText)
                }
        }
    coloursrequest.open("GET", url + urlendpoint );    
    coloursrequest.send();
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
    console.log(products_names)
    let html_select_input = document.getElementById(html_id);
        for (index in products_names)
            {html_select_input.options[html_select_input.options.length] = new Option(products_names[index],index);}    
}


function ShowPaintColoursOptions (html_id)
{
    let html_select_input = document.getElementById(html_id);
        for (index in paint_colours)
            {html_select_input.options[html_select_input.options.length] = new Option(paint_colours[index],index);}    
}


function DisplayCostPrice (type_id,size_id,cost_input_id)
{
    type = document.getElementById(type_id).value;
    size = document.getElementById(size_id).value;

    halfltr = "0.5ltr"
    oneltr = "1ltr"
    fourltrs = "4ltrs"
    twentyltrs = "20ltrs"

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

// function CalculateSubTotaPrice (qty_id, cost_price_id, subtotal_id)
// {
//     let type_input_id = document.getElementById("type-input-id").value;
//     let size_input_id = document.getElementById("size-input-id").value;
//     let colour_input_id  = document.getElementById("colour-input-id").value;

//     let qty_input = document.getElementById(qty_id).value;
//     let cost_price = document.getElementById(cost_price_id).value;
    
//     if (type_input_id == "" || size_input_id == "" || colour_input_id =="" )
//         {
//             alert("Please select Type,Size and Colour Fisrt")
//         }
//     else
//         {
//             qty_input.isInteger()    
//             let price = parseFloat(qty_input) * parseFloat(cost_price);    
//             let formatedprice = price.toLocaleString();
//             document.getElementById(subtotal_id).value =  formatedprice;
            
//         }
// }


                // ===================
                // ON CUSTOMER LIST
                // ===================
// Create a "close" button and append it to each list item
let myNodelist = document.getElementsByTagName("LI");
for (i = 0; i < myNodelist.length; i++) 
{
    let span = document.createElement("SPAN");
    // let txt = document.createTextNode("\u00D7");
    let txt = document.createTextNode("X");
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
    let liststring = type + " " + colour + " "+size + " "+ qty + " " + amount + " " + " "+ total 
    let customerlist = document.createTextNode(liststring);
    li.appendChild(customerlist);
    if (type === '' || size == '' ||colour == '' || qty === '') 
        {
            alert("Enter Type,Size, Colour Quantity");
        } 
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
    span.className = "close-x-on-lists";
    // span.
    span.appendChild(x_txt);
    li.appendChild(span);

    for (i = 0; i < close.length; i++) 
        {
            close[i].onclick = function() 
            {
                console.log("Clossing a div body")
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


function CalculateSubtotalAutomatically ()
{
    // this computs the sub - tatol automatically
    // let type_input_id = document.getElementById("type-input-id").value;
    // let size_input_id = document.getElementById("size-input-id").value;
    // let colour_input_id  = document.getElementById("colour-input-id").value;
    let qty_input_id  = document.getElementById("qty-input-id").value;
    let cost_price_id = document.getElementById("cost-price-id").value;

    if (!cost_price_id == '' & !qty_input_id =='')
        {
            // qty_input_id.isInteger()    
            let price = parseFloat(qty_input_id) * parseFloat(cost_price_id);    
            let formatedprice = price.toLocaleString();
            document.getElementById("total-input-id").value =  formatedprice;

        }
    // else{alert("feild cost_price_id or qty_price_id is empty")}
}

function CalculateGrandtotalAutomatically ()
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
    }
// Calculate the Grand total
// $(document).ready ( function () 
// {
//     $("#total-btn").click ( function () 
//         {

//             let total = 0;
//             $("li").each( function () 
//                 {
//                     str = $(this).text().replace(" ", "-")
//                     len = str.length
//                     for (let i =0; i< len; i++)
//                         {
//                             str = str.replace(" ", "-")
//                         }
//                     // alert(str) 
//                     subtotal = str.split("-").pop()                            
//                     subtotal1  = subtotal.slice(0, -1)
//                     comasoutnum =  subtotal1.replace(/,/g,"")
//                     subtotalint = parseInt(comasoutnum)
//                     total += subtotalint
//                     document.getElementById("final-total-id").value = total.toLocaleString();
//                     console.log(total);
//                 });
//         });
// });



function autocomplete(inp, arr) 
{
    /*the autocomplete function takes two arguments,
    the text field element and an array of possible autocompleted values:*/
    var currentFocus;
    /*execute a function when someone writes in the text field:*/
    inp.addEventListener("input", function(e) 
        {
            var a, b, i, val = this.value;
            /*close any already open lists of autocompleted values*/
            closeAllLists();
            if (!val) { return false;}
            currentFocus = -1;
            /*create a DIV element that will contain the items (values):*/
            a = document.createElement("DIV");
            a.setAttribute("id", this.id + "autocomplete-list");
            a.setAttribute("class", "autocomplete-items");
            /*append the DIV element as a child of the autocomplete container:*/
            this.parentNode.appendChild(a);
            /*for each item in the array...*/
            for (i = 0; i < arr.length; i++) 
                {
                /*check if the item starts with the same letters as the text field value:*/
                if (arr[i].substr(0, val.length).toUpperCase() == val.toUpperCase()) 
                    {
                        /*create a DIV element for each matching element:*/
                        b = document.createElement("DIV");
                        /*make the matching letters bold:*/
                        b.innerHTML = "<strong>" + arr[i].substr(0, val.length) + "</strong>";
                        b.innerHTML += arr[i].substr(val.length);
                        /*insert a input field that will hold the current array item's value:*/
                        b.innerHTML += "<input type='hidden' value='" + arr[i] + "'>";
                        /*execute a function when someone clicks on the item value (DIV element):*/
                            b.addEventListener("click", function(e) {
                            /*insert the value for the autocomplete text field:*/
                            inp.value = this.getElementsByTagName("input")[0].value;
                            /*close the list of autocompleted values,
                            (or any other open lists of autocompleted values:*/
                            closeAllLists();
                        });
                        a.appendChild(b);
                    }
                }
        });
        

    /*execute a function presses a key on the keyboard:*/
    inp.addEventListener("keydown", function(e) 
        {
            var x = document.getElementById(this.id + "autocomplete-list");
            if (x) x = x.getElementsByTagName("div");
            if (e.keyCode == 40) 
                {
                    /*If the arrow DOWN key is pressed,
                    increase the currentFocus variable:*/
                    currentFocus++;
                    /*and and make the current item more visible:*/
                    addActive(x);
                } 
            else if (e.keyCode == 38) 
            { //up
                /*If the arrow UP key is pressed,
                decrease the currentFocus variable:*/
                currentFocus--;
                /*and and make the current item more visible:*/
                addActive(x);
            } 
            else if (e.keyCode == 13) 
            {
                /*If the ENTER key is pressed, prevent the form from being submitted,*/
                e.preventDefault();
                if (currentFocus > -1) 
                    {
                        /*and simulate a click on the "active" item:*/
                        if (x) x[currentFocus].click();
                    }
            }
        });

    function addActive(x) 
        {
            /*a function to classify an item as "active":*/
            if (!x) return false;
            /*start by removing the "active" class on all items:*/
            removeActive(x);
            if (currentFocus >= x.length) currentFocus = 0;
            if (currentFocus < 0) currentFocus = (x.length - 1);
            /*add class "autocomplete-active":*/
            x[currentFocus].classList.add("autocomplete-active");
        }
    function removeActive(x) 
        {
            /*a function to remove the "active" class from all autocomplete items:*/
            for (var i = 0; i < x.length; i++) 
                {
                    x[i].classList.remove("autocomplete-active");
                }
        }
    function closeAllLists(elmnt) 
        {
            /*close all autocomplete lists in the document,
            except the one passed as an argument:*/
            var x = document.getElementsByClassName("autocomplete-items");
            for (var i = 0; i < x.length; i++) 
                {
                    if (elmnt != x[i] && elmnt != inp) 
                    {
                        x[i].parentNode.removeChild(x[i]);
                    }
                }
        }
  /*execute a function when someone clicks in the document:*/
  document.addEventListener("click", function (e) {closeAllLists(e.target);});
  } 