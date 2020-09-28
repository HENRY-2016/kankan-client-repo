
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
                    document.getElementById("finaltotal").value = total.toLocaleString();
                });
        });
    
    $("#switchs-total-btn").click ( function () 
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
                });
        });
    
    $("#lights-total-btn").click ( function () 
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
                });
        });
});

