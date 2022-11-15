function Change(){
if (
    ((document.getElementById("radio_house").checked) || (document.getElementById("radio_work").checked) || (document.getElementById("radio_industry").checked)) 
    && ((document.getElementById("radio_roof").checked) || (document.getElementById("radio_land").checked)) && ((document.getElementById("area_txtbox").value !== ""))
    && ((document.getElementById("cities").value !== "")) && ((document.getElementById("bill").value != 0)))
    { 
        console.log("required") 
    }
}

function Calculate(){
    if (
    ((document.getElementById("radio_house").checked) || (document.getElementById("radio_work").checked) || (document.getElementById("radio_industry").checked)) 
    && ((document.getElementById("radio_roof").checked) || (document.getElementById("radio_land").checked)) && ((document.getElementById("area_txtbox").value !== ""))
    && ((document.getElementById("cities").value !== "")) && ((document.getElementById("bill").value != 0)))
    {
        var panel_power = 550;
        var area = document.getElementById("area_txtbox").value;
        var bill = document.getElementById("bill").value;

        if (document.getElementById("radio_roof").checked){
            var kurulu_guc = Math.floor(area/8);
        }
        else if (document.getElementById("radio_land").checked){
            var kurulu_guc = Math.floor(area/15);
        }

        document.getElementById("power").innerHTML= (kurulu_guc + " kW");
        var panel_count = Math.floor((kurulu_guc*1000)/550);
        document.getElementById("panel_count").innerHTML= (panel_count+" Pieces");
        var city = document.getElementById("cities").value;
        var elektrik_uretim = Math.floor((city*kurulu_guc*0.9));
        document.getElementById("electric_gen").innerHTML=(elektrik_uretim+" kWh");

        if (document.getElementById("radio_house").checked){
            var mesken = Math.floor((bill/1.73)*12);
            document.getElementById("electric_cons").innerHTML = (mesken+ " kWh");
        }
        else if (document.getElementById("radio_industry").checked){
            var sanayi = Math.floor((bill/4.45)*12);
            document.getElementById("electric_cons").innerHTML = (sanayi+ " kWh");
        }
        else if (document.getElementById("radio_work").checked){
            var ticarethane = Math.floor((bill/2.6)*12);
            document.getElementById("electric_cons").innerHTML = (ticarethane+" kWh");
        }

        var co2 = (elektrik_uretim*0.492/1000);
        co2 = co2.toFixed(2);
        document.getElementById("co2").innerHTML = (co2+" CO2 Tonne / Year");
        var tree = Math.floor(elektrik_uretim*0.0012);
        document.getElementById("saves_tree").innerHTML = (tree+" Pieces");
        document.getElementById("result").style.display='block'
    }
    else {
        window.alert("Fill All Fields Please!");
    }
}

function Bill() {
    if (
        ((document.getElementById("radio_house").checked) || (document.getElementById("radio_work").checked) || (document.getElementById("radio_industry").checked)) 
        && ((document.getElementById("radio_roof").checked) || (document.getElementById("radio_land").checked)) && ((document.getElementById("area_txtbox").value !== ""))
        && ((document.getElementById("cities").value !== "")) && ((document.getElementById("bill").value != 0)))
        { 
            document.getElementById("calc_btn").style.pointerEvents = "all";
            document.getElementById("calc_btn_id").style.cursor = "pointer";
            document.getElementById("calc_btn").style.backgroundImage = "url(/img/square.jpg)"; 
            document.getElementById("calc_btn").style.backgroundSize = "cover";
            document.getElementById("calc_btn").style.color = "white";
        }
        else {
            document.getElementById("calc_btn").style.pointerEvents = "none";
            document.getElementById("calc_btn_id").style.cursor = "not-allowed";
            document.getElementById("calc_btn").style.backgroundImage = "none";
            document.getElementById("calc_btn").style.color = "black";
        }

    if (document.getElementById("radio_house").checked) {
        document.getElementById("bill").max = "20000";
    }
    else if (document.getElementById("radio_work").checked) {
        document.getElementById("bill").max = "2000000";
    }
    else if (document.getElementById("radio_industry").checked) {
        document.getElementById("bill").max = "2000000";
    }
}