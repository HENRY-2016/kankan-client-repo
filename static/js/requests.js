
// var requests_url = "http://127.0.0.1:4444/";
var requests_url = "http://192.168.43.23:4444/" // laptop



function HidDivsOnload ()
{
    document.getElementById("orders-view-all-div").style.display = "none";
    document.getElementById("orders-view-from-to-div").style.display = "none";
}

function ShowOrdersReceivedViewAllDiv ()
    {
        document.getElementById("orders-view-from-to-div").style.display = "none";
        document.getElementById("orders-view-all-div").style.display = "block";
    }

function ShowOrdersReceivedViewFromToDiv ()
    {
        console.log("ShowOrdersReceivedViewFromToDiv called.....")
        document.getElementById("orders-view-all-div").style.display = "none";
        document.getElementById("orders-view-from-to-div").style.display = "block";
    }
    
function OrdersView  (endpointurl, tabletbody, htmldiv)
{
    let req = new XMLHttpRequest();
    req.open('post',requests_url+endpointurl,true)
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
    req.open('post',requests_url+endpointurl,true)
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
    req.open('post',requests_url+endpointurl,true)
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
