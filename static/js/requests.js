
var url = "http://127.0.0.1:4444/";

    
function PaymentsView  (endpointurl, tabletbody, htmldiv)
{
    let req = new XMLHttpRequest();
    req.open('post',url+endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            console.log (results)
            if (! results || !results.length){alert("No results found")}
            else
                {
                    let tbody = document.getElementById(tabletbody);
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","Size","Qty", "Total"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let divtag = document.getElementById(htmldiv);
        req.send(divtag);  
}

function FetchOrdersByInfo  (endpointurl, tabletbody, htmldiv)
{
    let req = new XMLHttpRequest();
    req.open('post',url+endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            console.log (results)
            if (! results || !results.length){alert("No results found")}
            else
                {
                    let tbody = document.getElementById(tabletbody);
                    tbody.innerHTML = ' ';

                    // draw table
                    let td,tr;
                    // add table headings
                    let th_names = new Array ();
                    th_names.push(["Name","Date","Number", "Status"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let divtag = document.getElementById(htmldiv);
        req.send(divtag);  
}

function FetchOrdersByData ( endpointurl, tabletbody, htmlform)
{
    let req = new XMLHttpRequest();
    req.open('post',url+endpointurl,true)
    req.onload = function ()
        {
            let results = JSON.parse(this.responseText);
            if (! results || !results.length)
                {alert("No results found")}
            else
                {
                    let tbody = document.getElementById(tabletbody);
                    tbody.innerHTML = ' ';

                    let td,tr;
                    let th_names = new Array ();
                    th_names.push(["Name", "Size", "Quantity", "Amount", "Total"]);
                    let columns_to_count = th_names[0].length;
                    row = tbody.insertRow(-1); 
                    for (let looper =0; looper<columns_to_count; ++looper)
                        {
                            let headerNames = document.createElement("th");
                            headerNames.className='js_table_headers'
                            headerNames.innerHTML = th_names[0][looper];
                            row.appendChild(headerNames)
                        }

                    for (let table_row = 0; table_row < results.length; ++table_row)
                        {
                            tr = document.createElement('tr');
                            tr.className='js_table_row';
                            for (let table_data = 0; table_data< (results[table_row].length);++table_data)
                                {
                                    td = document.createElement('td');
                                    td.setAttribute("align", "center"); 
                                    td.innerHTML = results[table_row][table_data];
                                    tr.appendChild(td)
                                }
                                tbody.appendChild(tr)
                        }
                }
        }
        let list_data = new FormData(document.getElementById(htmlform));
        req.send(list_data);   
}



/* 
                ORDER PAGE
                =========
*/
var paint_names_options
var paint_types_options
var wgprices
var wg_prices_arrary = []  

function GetPaintNames ()
{
    let paintnamesrequest = new XMLHttpRequest ();
    paintnamesrequest.onreadystatechange = function ()
        {
            if ( paintnamesrequest.readyState == 4 && paintnamesrequest.status == 200)
                {
                    paint_names_options = JSON.parse(paintnamesrequest.responseText)
                }
        }
    paintnamesrequest.open("GET", "http://127.0.0.1:4444/paint_names_endpoint");    
    paintnamesrequest.send();
}

function GetPaintTypes ()
{
    let painttypesrequest = new XMLHttpRequest ();
    painttypesrequest.onreadystatechange = function ()
        {
            if ( painttypesrequest.readyState == 4 && painttypesrequest.status == 200)
                {
                    paint_types_options = JSON.parse(painttypesrequest.responseText)
                }
        }
    painttypesrequest.open("GET", "http://127.0.0.1:4444/paint_types_endpoint");    
    painttypesrequest.send();
}

function GetPaintPrices ()
{
    let paintpricesrequest = new XMLHttpRequest ();
    paintpricesrequest.onreadystatechange = function ()
        {
            if ( paintpricesrequest.readyState == 4 && paintpricesrequest.status == 200)
                {
                    wgprices = JSON.parse(paintpricesrequest.responseText)
                    console.log("from sever response")
                    console.log(wgprices)
                    
                }
        }
    paintpricesrequest.open("GET", "http://127.0.0.1:4444/paint_prices_endpoint");    
    paintpricesrequest.send();
}


function ShowPaintNamesOptions (html_id)
{
    let html_select_input = document.getElementById(html_id);
        for (index in paint_names_options)
            {html_select_input.options[html_select_input.options.length] = new Option(paint_names_options[index],index);}    
}

function ShowPaintTypesOptions (html_id)
{
    let html_select_input = document.getElementById(html_id);
        for (index in paint_types_options)
            {html_select_input.options[html_select_input.options.length] = new Option(paint_types_options[index],index);}    
}

// =======================================================
function InitPricesArrary ()
{

    for (let i in wgprices)
        wg_prices_arrary.push(wgprices[i])
    // wg_prices_arrary.push(wgprices)
    console.log("inside InitPricesArrary ")
    // console.log(wg_prices_arrary[2])
}

function DisplayCostPrice (type_id, amount_id )
{
    type_id = document.getElementById(type_id).value;

    Wg1ltr = "W/g 1 ltr"
    Wg4ltrs = "W/g 4 ltrs"
    Wg20ltrs = "W/g 20 ltrs"

    Vs1ltr = "V/s 1 ltr"
    Vs4ltr = "V/s 4 ltrs"
    Vs20ltrs = "V/s 20 ltrs"

    console.log("Inside Display cost price...")
    console.log(wg_prices_arrary[0])
    console.log(wg_prices_arrary[1])
    console.log(wg_prices_arrary[2])

    if (type_id == Wg1ltr)
        {
            Wg_1_ltr_price = wg_prices_arrary[0]
            console.log(Wg_1_ltr_price)
            document.getElementById(amount_id).value = Wg_1_ltr_price;
        }
    else if (type_id == Wg4ltrs)
        {
            Wg_4_ltrs_price = wg_prices_arrary[1]
            document.getElementById(amount_id).value = Wg_4_ltrs_price;
        }
    else if (type_id == Wg20ltrs)
        {
            Wg_20_ltrs_price = wg_prices_arrary[2]
            document.getElementById(amount_id).value = Wg_20_ltrs_price;
        }
    // else if (type_id == Vs_1_ltr)
    //     {
    //         Wg_1_ltr_price = wg_prices_arrary[0]
    //         document.getElementById(amount_id).value = wg_1_ltr_price;
    //     }

}

function CalculateSubTotaPrice (qty_id, amount_id, subtotal_id)
{
    let qty_input = document.getElementById(qty_id).value;
    let amount_input = document.getElementById(amount_id).value;
	// let loaded_prices = document.getElementById("prices-from-server-label").innerText
	// let convertedjsobject = JSON.parse(loaded_prices)
	
    // let price = parseInt(convertedjsobject[avenuetype]);
	let price = parseFloat(qty_input) * parseFloat(amount_input);    
	let formatedprice = price.toLocaleString();
	document.getElementById(subtotal_id).value = formatedprice;
}
// console.log("++++++++++++++++++++")
// console.log(wg_prices_arrary)
// console.log(wg_prices_arrary[0])
// console.log(wg_prices_arrary[1])
// console.log(wg_prices_arrary[2])
// console.log("++++++++++++++++++++")




document.addEventListener ('click', function ( event) 
    {
        if(!event.target.matches('.row2'))
            {
                return
            }
        event.preventDefault ();

        console.log(event.target);
        
    }, false);
