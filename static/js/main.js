

// Main Navigetion
function Load_index () { window.location="index.html"}
function Load_Rak_View () {window.location="guirak.html"}
function Load_Chint_View () {window.location="guichint.html"}
function Load_Mapei_View () {window.location="guimapei.html"}
function Load_Donald_View () {window.location="guidonald.html"}
function Load_Panasonic_View () {window.location="guipanasonic.html"}
function LoadMakeOrderGui () { window.location="subdmakepaintorder.html"}
function LoadSubdealerGui () {window.location="subdealer.html"}
function LoadPainterGui () {window.location="painter.html"}
function Load_developer () {window.location="developer.html"}

function Load_Subdealer_Login () {window.location="subdlogin.html"}
function Load_Painter_Login () {window.location="painterlogin.html"}


// Plascon Types Navigetion Subs
function Load_Plascon_MakeOrder_Gui () {window.location="makeorder.html"}
function Load_Plascon_Painter_Log_In () {window.location="painter.html"}

function Load_Plascon_Gloss_View (){window.location="PlasconGloss.html"}
function Load_Plascon_Pack_View (){window.location="PlasconPack.html"}
function Load_Plascon_Sundry_View (){window.location="PlasconSundry.html"}
function Load_Plascon_Thinners_View (){window.location="PlasconThinners.html"}
function Load_Plascon_Varnish_View (){window.location="PlasconVarnish.html"}
function Load_Plascon_Emulsion_View (){window.location="PlasconEmulsion.html"}
function Load_Plascon_Primers_View (){window.location="PlasconPrimers.html"}
function Load_Plascon_Undercoat_View (){window.location="PlasconUndercoat.html"}
function Load_Plascon_Aluminium_View (){window.location="PlasconAluminium.html"}
function Load_Plascon_Industrial_View (){window.location="PlasconIndustrial.html"}
function Load_Plascon_Roadmarking_View (){window.location="PlasconRoadmarking.html"}
function Load_Plascon_Roof_Floor_View (){window.location="PlasconRoofFloor.html"}
function Load_Plascon_waterproofing_View (){window.location="PlasconWaterproofing.html"}
function Load_Plascon_Architectural_finishes_View (){window.location="PlasconArchitectural.html"}


function HideAllRootDivs ()
{
    //  ======================================
    // Root Divs
    document.getElementById("payments-div").style.display = 'none';
    document.getElementById("orders-div").style.display = 'none';
    document.getElementById("summary-div").style.display = 'none';

    //  ======================================
    // child divs
    document.getElementById("details-view-all-div").style.display = 'none';
    document.getElementById("payments-view-from-to-div").style.display = 'none';

    document.getElementById("orders-prices-div").style.display = 'none';
    document.getElementById("orders-received-div").style.display = 'none';
    document.getElementById("orders-pending-div").style.display = 'none';

    document.getElementById("summary-orders-div").style.display = 'none';
    document.getElementById("summary-payments-div").style.display = 'none';
    document.getElementById("summary-statements-div").style.display = 'none';
    
    //===================
    // grand child div
    document.getElementById("details-child-div").style.display = 'none';
    document.getElementById("reference-child-div").style.display = 'none';
    document.getElementById("deposit-child-div").style.display = 'none';

    // summary
    document.getElementById("summary-view-all-div").style.display = 'none';
    document.getElementById("summary-view-from-to-div").style.display = 'none';  
}

// PAINT PAGE
// ==========
function HideAllChintRootDivs ()
{
    document.getElementById("chint-lights-panel-id").style.display = "none";
    document.getElementById("chint-switchs-panel-id").style.display = "none";
    document.getElementById("chint-cables-panel-id").style.display = "none";

}

// DONALD PAGE
// ============
function HideAllDonaldRootDivs ()
{
    document.getElementById("donald-smart-panel-id").style.display = "none";
    document.getElementById("donald-polo-panel-id").style.display = "none";
    document.getElementById("donald-star-panel-id").style.display = "none";
    document.getElementById("donald-gold-panel-id").style.display = "none";
    document.getElementById("donald-euro-panel-id").style.display = "none";
    document.getElementById("donald-medi-panel-id").style.display = "none";
    document.getElementById("donald-round-panel-id").style.display = "none";
    document.getElementById("donald-accessories-panel-id").style.display = "none";

}


$(document).ready ( function (event) 
    {
        
        // =======================
        //          ROOT DIVS
        // =======================

        $("#payments-btn").click (function () 
        {
        
            $("#orders-div").hide(); $("#summary-div").hide (); 
            $("#payments-div").show ();
        });

        $("#orders-btn").click (function () 
        { 
            $("#payments-div").hide(); $("#summary-div").hide (); 
            $("#orders-div").show ();
        });

        $("#summary-btn").click (function () 
            { 
                $("#payments-div").hide(); $("#orders-div").hide (); 
                $("#summary-div").show ();
            });


        // =======================
        //          CHILD DIVS
        // =======================

        $("#details-child-btn").click ( function () 
            {
                $("#deposit-child-div").hide();$("#reference-child-div").hide(); 
                $("#details-child-div").show();
            });
        
        $("#reference-child-btn").click ( function () 
            {
                $("#deposit-child-div").hide();$("#reference-child-div").hide(); 
                $("#reference-child-div").show();
            });
    
        $("#deposit-child-btn").click ( function () 
            {
                $("#details-child-div").hide();$("#reference-child-div").hide(); 
                $("#deposit-child-div").show();
            });
        
            // orders...
        
        $("#orders-prices-btn").click ( function () 
            {
                $("#orders-received-div").hide();$("#orders-pending-div").hide();
                $("#orders-prices-div").show();
            });
            
        $("#orders-received-btn").click ( function () 
            {
                $("#orders-prices-div").hide();$("#orders-pending-div").hide();
                $("#orders-received-div").show();
            });
        $("#orders-pending-btn").click ( function () 
            {
                $("#orders-received-div").hide();$("#orders-prices-div").hide();
                $("#orders-pending-div").show();
            });

            // summary
        $("#summary-orders-btn").click ( function () 
            {
                $("#summary-payments-div").hide();$("#summary-statements-div")
                $("#summary-orders-div").show ();
            });
        
        $("#summary-payments-btn").click ( function () 
            {
                $("#summary-orders-div").hide();$("#summary-statements-div")
                $("#summary-payments-div").show ();
            });
        $("#summary-statements-btn").click ( function () 
            {
                $("#summary-payments-div").hide();$("#summary-orders-div")
                $("#summary-statements-div").show ();
            });
        
    
        // =======================
        //          GRAND CHILD DIVS
        // =======================
        
        // payments .....
        $("#details-view-all-btn").click ( function () 
            {$("#payments-view-from-to-div").hide(); $("#details-view-all-div").show ();});

        // summary .......
        $("#summary-view-all-btn").click ( function ()
            {$("#summary-view-from-to-div").hide(); $("#summary-view-all-div").show();} );

        $("#summary-view-from-to-btn").click ( function ()
            {$("#summary-view-all-div").hide(); $("#summary-view-from-to-div").show();} );
            

        // chint page
        $("#chint-lights-panel-btn").click( function () 
            {
                $("#chint-switchs-panel-id").hide();$("#chint-cables-panel-id").hide();
                $("#chint-lights-panel-id").show();
            } );
        $("#chint-switchs-panel-btn").click( function () 
            {
                $("#chint-lights-panel-id").hide();$("#chint-cables-panel-id").hide();
                $("#chint-switchs-panel-id").show();
            } );
        $("#chint-cables-panel-btn").click( function () 
            {
                $("#chint-switchs-panel-id").hide();$("#chint-lights-panel-id").hide();
                $("#chint-cables-panel-id").show();
            } );

        // donald page
        $("#donald-smart-panel-btn").click( function () 
        {
            $("#donald-polo-panel-id").hide();$("#donald-star-panel-id").hide();
            $("#donald-gold-panel-id").hide();$("#donald-euro-panel-id").hide();
            $("#donald-medi-panel-id").hide();$("#donald-round-panel-id").hide();
            $("#donald-polo-panel-id").hide();$("#donald-star-panel-id").hide();
            $("#donald-accessories-panel-id").hide();
            $("#donald-smart-panel-id").show();
        } );
        $("#donald-polo-panel-btn").click( function () 
        {
            $("#donald-smart-panel-id").hide();$("#donald-star-panel-id").hide();
            $("#donald-gold-panel-id").hide();$("#donald-euro-panel-id").hide();
            $("#donald-medi-panel-id").hide();$("#donald-round-panel-id").hide();
            $("#donald-polo-panel-id").hide();$("#donald-star-panel-id").hide();
            $("#donald-accessories-panel-id").hide();
            $("#donald-polo-panel-id").show();
        } );
        $("#donald-star-panel-btn").click( function () 
        {
            $("#donald-polo-panel-id").hide();$("#donald-smart-panel-id").hide();
            $("#donald-gold-panel-id").hide();$("#donald-euro-panel-id").hide();
            $("#donald-medi-panel-id").hide();$("#donald-round-panel-id").hide();
            $("#donald-polo-panel-id").hide();$("#donald-star-panel-id").hide();
            $("#donald-accessories-panel-id").hide();
            $("#donald-star-panel-id").show();
        } );
        $("#donald-gold-panel-btn").click( function () 
        {
            $("#donald-polo-panel-id").hide();$("#donald-smart-panel-id").hide();
            $("#donald-star-panel-id").hide();$("#donald-euro-panel-id").hide();
            $("#donald-medi-panel-id").hide();$("#donald-round-panel-id").hide();
            $("#donald-polo-panel-id").hide();$("#donald-star-panel-id").hide();
            $("#donald-accessories-panel-id").hide();
            $("#donald-gold-panel-id").show();
        } );
        $("#donald-euro-panel-btn").click( function () 
        {
            $("#donald-polo-panel-id").hide();$("#donald-smart-panel-id").hide();
            $("#donald-star-panel-id").hide();$("#donald-gold-panel-id").hide();
            $("#donald-medi-panel-id").hide();$("#donald-round-panel-id").hide();
            $("#donald-polo-panel-id").hide();$("#donald-star-panel-id").hide();
            $("#donald-accessories-panel-id").hide();
            $("#donald-euro-panel-id").show();
        } );
        $("#donald-medi-panel-btn").click( function () 
        {
            $("#donald-polo-panel-id").hide();$("#donald-smart-panel-id").hide();
            $("#donald-star-panel-id").hide();$("#donald-gold-panel-id").hide();
            $("#donald-euro-panel-id").hide();$("#donald-round-panel-id").hide();
            $("#donald-polo-panel-id").hide();$("#donald-star-panel-id").hide();
            $("#donald-accessories-panel-id").hide();
            $("#donald-medi-panel-id").show();
        } );
        $("#donald-round-panel-btn").click( function () 
        {
            $("#donald-polo-panel-id").hide();$("#donald-smart-panel-id").hide();
            $("#donald-star-panel-id").hide();$("#donald-gold-panel-id").hide();
            $("#donald-euro-panel-id").hide();$("#donald-medi-panel-id").hide();
            $("#donald-polo-panel-id").hide();$("#donald-star-panel-id").hide();
            $("#donald-accessories-panel-id").hide();
            $("#donald-round-panel-id").show();
        } );
        $("#donald-accessories-panel-btn").click( function () 
        {
            $("#donald-polo-panel-id").hide();$("#donald-smart-panel-id").hide();
            $("#donald-star-panel-id").hide();$("#donald-gold-panel-id").hide();
            $("#donald-euro-panel-id").hide();$("#donald-medi-panel-id").hide();
            $("#donald-polo-panel-id").hide();$("#donald-star-panel-id").hide();
            $("#donald-round-panel-id").hide();
            $("#donald-accessories-panel-id").show();
        } );
        




        
    });

