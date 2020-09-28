


// var all_names_url = "http://127.0.0.1:4044/";
var all_names_url =  "http://172.105.158.108:4044/"



function check_agency_staffs_status ()
{
    // Load_agency_staffs () ;
    if (navigator.onLine){Load_agency_staffs ();}
    else {ERROR = "Staffs Not Loaded Connect to Network "; alert (ERROR)}
}


function Load_agency_staffs ()
{
    let staff_names_req = new XMLHttpRequest ();
    staff_names_req.open('post' ,all_names_url + 'agency_staff_names',true);
    staff_names_req.onload = function ()
        {
            let names = JSON.parse(this.responseText);
            let html_select_input = document.getElementById("agency-staff-names");
            for (index in names)
                {html_select_input.options[html_select_input.options.length] = new Option(names[index],index);}
        }
    let staff_names = document.getElementById('agency-staff-names');
    staff_names_req.send(staff_names);
}



function fatch_agency_yesterday_float ()
{
    
    var yesterday_float = new XMLHttpRequest();
    yesterday_float.onreadystatechange = function()
    {
        if (this.readyState == 4 && this.status == 200)
            {
                document.getElementById("prev_float_input").innerHTML = this.responseText;
            }
    };
    yesterday_float.open("GET",all_names_url + "agency_prev_float",true);
    yesterday_float.send();
}

function write_zeros ()
{
    // let name = document.getElementById("name");
    // let my_day = document.getElementById("my_day");
    // if (name.value.length == 0){name.value = "None";}
    // if (my_day.value == 0){my_day.value = "None";}


    // Terminals
    // let input1 = document.getElementById("input1")
    // let input2 = document.getElementById("input2")
    // let input3 = document.getElementById("input3")
    // let input4 = document.getElementById("input4")
    // let input5 = document.getElementById("input5")
    // let input6 = document.getElementById("input6")
    // let input7 = document.getElementById("input7")
    // let input8 = document.getElementById("input8")

    // if (input1.value.length == 0){input1.value = "00";}
    // if (input2.value.length == 0){input2.value = "00";}
    // if (input3.value.length == 0){input3.value = "00";}
    // if (input4.value.length == 0){input4.value = "00";}
    // if (input5.value.length == 0){input5.value = "00";}
    // if (input6.value.length == 0){input6.value = "00";}
    // if (input7.value.length == 0){input7.value = "00";}
    // if (input8.value.length == 0){input8.value = "00";}

    // validating numbers
    // let input221 = document.getElementById("input1").value
    // if ( isNaN(input221)) {alert ("Must be a number"); }
    


    // Cash at hand
    let input11 = document.getElementById("input11")
    let input12 = document.getElementById("input12")
    let input13 = document.getElementById("input13")
    let input14 = document.getElementById("input14")
    let input15 = document.getElementById("input15")
    let input16 = document.getElementById("input16")
    let input17 = document.getElementById("input17")
    let input18 = document.getElementById("input18")
    let input19 = document.getElementById("input19")
    let input20 = document.getElementById("input20")
    let input21 = document.getElementById("input21")
    let input22 = document.getElementById("input22")

    if (input11.value.length == 0){input11.value = "00";}
    if (input12.value.length == 0){input12.value = "00";}
    if (input13.value.length == 0){input13.value = "00";}
    if (input14.value.length == 0){input14.value = "00";}
    if (input15.value.length == 0){input15.value = "00";}
    if (input16.value.length == 0){input16.value = "00";}
    if (input17.value.length == 0){input17.value = "00";}
    if (input18.value.length == 0){input18.value = "00";}
    if (input19.value.length == 0){input19.value = "00";}
    if (input20.value.length == 0){input20.value = "00";}
    if (input21.value.length == 0){input21.value = "00";}
    if (input22.value.length == 0){input22.value = "00";}
}



function find_terminal_total ()
{

let arr = document.getElementsByClassName("terminal_inputs");
    let total=0;
    total_input = document.getElementById("terminal-total");
    for(let i=0;i<arr.length;i++)
    {
        if(parseInt(arr[i].value))
            total += parseInt(arr[i].value);
    }
    total_input.value = total.toLocaleString();
}

function findTotal ()
{
    
let arr = document.getElementsByClassName("agency_form_input_cash")
    let total=0;
    total_input = document.getElementById("total_input");
    for(let i=0;i<arr.length;i++)
    {
        if(parseInt(arr[i].value))
            total += parseInt(arr[i].value);
    }
    total_input.value = total.toLocaleString();
}


function find_grand_total ()
{

    let agency_sub_total = document.getElementById("total_input").value.replace(/\,/g,'');
    let terminal_sub_total = document.getElementById("terminal-total").value.replace(/\,/g,'');

    let total_input = document.getElementById("todays_total_input");
    let total,total2;
    // total = agency_sub_total + terminal_sub_total;
    total = parseInt(agency_sub_total) + parseInt(terminal_sub_total);
    total2 = total.toLocaleString()
    total_input.value = total2;
}


