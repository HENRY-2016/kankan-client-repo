
// var src_url = "http://127.0.0.1:4444/"
// var src_url = "http://192.168.43.140:4444/"
var src_url = "http://192.168.43.23:4444/" // laptop
// Product Gallery
function Add_Product_Gallery_Iframe (endpoint)
{
    document.getElementById("offline-label-div").style.display = "none";
    let ProductsGalleryDiv = document.getElementById("product-pics-div");
    let ProductsIframe = document.createElement("iframe");
    ProductsIframe.className = "products-iframe";
    ProductsIframe.setAttribute("src",  src_url + endpoint);
    ProductsGalleryDiv.appendChild(ProductsIframe);
}

function Add_Products_Gallery_Iframe_With_Args (offline_label,menu_divid,endpoint)
{
    document.getElementById(offline_label).style.display = "none";
    let ProductsGalleryDiv = document.getElementById(menu_divid);
    let ProductsIframe = document.createElement("iframe");
    ProductsIframe.className = "products-iframe";
    ProductsIframe.setAttribute("src",  src_url + endpoint);
    ProductsGalleryDiv.appendChild(ProductsIframe);
}


function Create_Offline_Label ()
{
    let offline_label_div = document.getElementById("offline-label-div");
    let label = document.createElement("label");
    label.innerHTML = "Your Are Offline <br> Please <br>Connect To Network"
    label.className = "Offline-Label"
    offline_label_div.appendChild(label)
}
function Create_Offline_Label_With_Argus (divid)
{
    let offline_label_div = document.getElementById(divid);
    let label = document.createElement("label");
    label.innerHTML = "Your Are Offline <br> Please <br>Connect To Network"
    label.className = "Offline-Label"
    offline_label_div.appendChild(label)
}
            