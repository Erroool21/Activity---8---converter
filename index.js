var input1 = document.getElementById('unit1_value');
var input2 = document.getElementById('unit2_value');
var input3 = document.getElementById('unit3_value');
var input4 = document.getElementById('unit4_value');
var input5 = document.getElementById('unit5_value');

function change_unit(){
    let change_unit = document.getElementById("change_unit").value;
    if (change_unit == "length"){
        change_unit_length();
        
        input1.addEventListener('keyup', centimeters);
        input2.addEventListener('keyup', inches);
        input3.addEventListener('keyup', feet);
        input4.addEventListener('keyup', meters);
        input5.addEventListener('keyup', kilometers);
        
        
    }else if (change_unit == "mass"){
        change_unit_mass();
        input1.addEventListener('keyup', gram);
        input2.addEventListener('keyup', ounce);
        input3.addEventListener('keyup', pound);
        input4.addEventListener('keyup', kilogram);
        input5.addEventListener('keyup', tonne);

    }else if (change_unit == "time"){
        change_unit_time();
        input1.addEventListener('keyup', seconds);
        input2.addEventListener('keyup', min);
        input3.addEventListener('keyup', hour);
        input4.addEventListener('keyup', days);
        input5.addEventListener('keyup', week);
    }

function change_unit_mass(){
    let unit_title = document.getElementById("unit");
        unit_title.innerHTML = "Mass";
    let unit1 = document.getElementById("unit1");
        unit1.innerHTML = "Gram";
    let unit2 = document.getElementById("unit2");
        unit2.innerHTML = "Ounce";
    let unit3 = document.getElementById("unit3");
        unit3.innerHTML = "Pound";
    let unit4 = document.getElementById("unit4");
        unit4.innerHTML = "Kilogram";
    let unit5 = document.getElementById("unit5");
        unit5.innerHTML = "Tonne";
        document.getElementById("unit1_value").value = "";
        document.getElementById("unit2_value").value = "";
        document.getElementById("unit3_value").value = "";
        document.getElementById("unit4_value").value = "";
        document.getElementById("unit5_value").value = "";
    }
}
// formula mass

function gram(){
    let gram_input = document.getElementById("unit1_value").value;
    let ounce_input = document.getElementById("unit2_value");
    let pound_input = document.getElementById("unit3_value");
    let kilogram_input = document.getElementById("unit4_value");
    let tonne_input = document.getElementById("unit5_value");

    let ounce = ( gram_input / 28.35);
    ounce_input.value = ounce;

    let pound = ( gram_input / 453.6);
    pound_input.value = pound;
    
    let kilogram = ( gram_input / 1000);
    kilogram_input.value = kilogram;

    let tonne = ( gram_input / 1000000);
    tonne_input.value = tonne;
}

function ounce(){
    let gram_input = document.getElementById("unit1_value");
    let ounce_input = document.getElementById("unit2_value").value;
    let pound_input = document.getElementById("unit3_value");
    let kilogram_input = document.getElementById("unit4_value");
    let tonne_input = document.getElementById("unit5_value");

    let gram = ( ounce_input * 28.35);
    gram_input.value = gram;

    let pound = ( ounce_input / 16);
    pound_input.value = pound;
    
    let kilogram = ( ounce_input / 35.274);
    kilogram_input.value = kilogram;

    let tonne = ( ounce_input / 35270);
    tonne_input.value = tonne;
}

function pound(){
    let gram_input = document.getElementById("unit1_value");
    let ounce_input = document.getElementById("unit2_value");
    let pound_input = document.getElementById("unit3_value").value;
    let kilogram_input = document.getElementById("unit4_value");
    let tonne_input = document.getElementById("unit5_value");

    let gram = ( pound_input * 453.6);
    gram_input.value = gram;

    let pound = ( pound_input * 16);
    ounce_input.value = pound;
    
    let kilogram = ( pound_input / 2.205);
    kilogram_input.value = kilogram;

    let tonne = ( pound_input / 2205);
    tonne_input.value = tonne;
}

function kilogram(){
    let gram_input = document.getElementById("unit1_value");
    let ounce_input = document.getElementById("unit2_value");
    let pound_input = document.getElementById("unit3_value");
    let kilogram_input = document.getElementById("unit4_value").value;
    let tonne_input = document.getElementById("unit5_value");

    let gram = ( kilogram_input * 1000);
    gram_input.value = gram;

    let pound = ( kilogram_input / 2.205);
    pound_input.value = pound;
    
    let ounce = ( kilogram_input * 35.274);
    ounce_input.value = ounce;

    let tonne = ( kilogram_input / 1000);
    tonne_input.value = tonne;
}

function tonne(){
    let gram_input = document.getElementById("unit1_value");
    let ounce_input = document.getElementById("unit2_value");
    let pound_input = document.getElementById("unit3_value");
    let kilogram_input = document.getElementById("unit4_value");
    let tonne_input = document.getElementById("unit5_value").value;

    let ounce = ( tonne_input * 35270);
    ounce_input.value = ounce;

    let pound = ( tonne_input * 2205);
    pound_input.value = pound;
    
    let kilogram = ( tonne_input * 1000);
    kilogram_input.value = kilogram;

    let tonne = ( tonne_input * 1000000);
    gram_input.value = tonne;
}

function change_unit_length(){
    let unit_title = document.getElementById("unit");
        unit_title.innerHTML = "Length";
    let unit1 = document.getElementById("unit1");
        unit1.innerHTML = "Centimeters";
    let unit2 = document.getElementById("unit2");
        unit2.innerHTML = "Inches";
    let unit3 = document.getElementById("unit3");
        unit3.innerHTML = "Feet";
    let unit4 = document.getElementById("unit4");
        unit4.innerHTML = "Meters";
    let unit5 = document.getElementById("unit5");
        unit5.innerHTML = "Kilometers";

    document.getElementById("unit1_value").value = "";
    document.getElementById("unit2_value").value = "";
    document.getElementById("unit3_value").value = "";
    document.getElementById("unit4_value").value = "";
    document.getElementById("unit5_value").value = "";
}
// formula length
function centimeters(){
    let cent_input = document.getElementById("unit1_value").value;
    let inches_input = document.getElementById("unit2_value");
    let feet_input = document.getElementById("unit3_value");
    let meters_input = document.getElementById("unit4_value");
    let kilometers_input = document.getElementById("unit5_value");

    let inch = ( cent_input / 2.54);
    inches_input.value = inch;

    let feet = ( cent_input / 30.48);
    feet_input.value = feet;
    
    let meters = ( cent_input / 100);
    meters_input.value = meters;

    let km = ( cent_input / 100000);
    kilometers_input.value = km;
}

function inches(){
    let cent_input = document.getElementById("unit1_value");
    let inches_input = document.getElementById("unit2_value").value;
    let feet_input = document.getElementById("unit3_value");
    let meters_input = document.getElementById("unit4_value");
    let kilometers_input = document.getElementById("unit5_value");

    let cent = ( inches_input * 2.54);
    cent_input.value = cent;

    let feet = ( inches_input/ 12);
    feet_input.value = feet;
    
    let meters = (inches_input / 39.37);
    meters_input.value = meters;

    let km = ( inches_input / 39370);
    kilometers_input.value = km;
}

function feet(){
    let cent_input = document.getElementById("unit1_value");
    let inches_input = document.getElementById("unit2_value");
    let feet_input = document.getElementById("unit3_value").value;
    let meters_input = document.getElementById("unit4_value");
    let kilometers_input = document.getElementById("unit5_value");

    let cent = ( feet_input * 30.48);
    cent_input.value = cent;

    let inch = ( feet_input * 12);
    inches_input.value = inch;
    
    let meters = (feet_input / 3.281);
    meters_input.value = meters;

    let km = ( feet_input / 3281);
    kilometers_input.value = km;
}

function meters(){
    let cent_input = document.getElementById("unit1_value");
    let inches_input = document.getElementById("unit2_value");
    let feet_input = document.getElementById("unit3_value");
    let meters_input = document.getElementById("unit4_value").value;
    let kilometers_input = document.getElementById("unit5_value");

    let cent = ( meters_input * 100);
    cent_input.value = cent;

    let inch = ( meters_input * 39.37);
    inches_input.value = inch;
    
    let feet = (meters_input * 3.281);
    feet_input.value = feet;

    let km = ( meters_input / 1000);
    kilometers_input.value = km;
}

function kilometers(){
    let cent_input = document.getElementById("unit1_value");
    let inches_input = document.getElementById("unit2_value");
    let feet_input = document.getElementById("unit3_value");
    let meters_input = document.getElementById("unit4_value");
    let kilometers_input = document.getElementById("unit5_value").value;

    let cent = ( kilometers_input * 100000);
    cent_input.value = cent;

    let inch = ( kilometers_input * 39370.1);
    inches_input.value = inch;
    
    let feet = (kilometers_input * 3281);
    feet_input.value = feet;

    let meters = ( kilometers_input * 1000);
    meters_input.value = meters;
}


function change_unit_time(){
    let unit_title = document.getElementById("unit");
    unit_title.innerHTML = "Time";
    let unit1 = document.getElementById("unit1");
        unit1.innerHTML = "Seconds";
    let unit2 = document.getElementById("unit2");
        unit2.innerHTML = "Minutes";
    let unit3 = document.getElementById("unit3");
        unit3.innerHTML = "Hours";
    let unit4 = document.getElementById("unit4");
        unit4.innerHTML = "Days";
    let unit5 = document.getElementById("unit5");
        unit5.innerHTML = "Weeks";
    document.getElementById("unit1_value").value = "";
    document.getElementById("unit2_value").value = "";
    document.getElementById("unit3_value").value = "";
    document.getElementById("unit4_value").value = "";
    document.getElementById("unit5_value").value = ""; 
}

// formula time 
function seconds(){
    let sec_input = document.getElementById("unit1_value").value;
    let min_input = document.getElementById("unit2_value");
    let hour_input = document.getElementById("unit3_value");
    let days_input = document.getElementById("unit4_value");
    let week_input = document.getElementById("unit5_value");

    let min = ( sec_input / 60);
    min_input.value = min;

    let hour = ( sec_input / 3600);
    hour_input.value = hour;
    
    let days = ( sec_input / 86400);
    days_input.value = days;

    let week = ( sec_input / 604800);
    week_input.value = week;
}

function min(){
    let sec_input = document.getElementById("unit1_value");
    let min_input = document.getElementById("unit2_value").value;
    let hour_input = document.getElementById("unit3_value");
    let days_input = document.getElementById("unit4_value");
    let week_input = document.getElementById("unit5_value");

    let sec = ( min_input * 60);
    sec_input.value = sec;

    let hour = ( min_input / 60);
    hour_input.value = hour;
    
    let days = (min_input / 1440);
    days_input.value = days;

    let week = ( min_input / 10080);
    week_input.value = week;
}

function hour(){
    let sec_input = document.getElementById("unit1_value");
    let min_input = document.getElementById("unit2_value");
    let hour_input = document.getElementById("unit3_value").value;
    let days_input = document.getElementById("unit4_value");
    let week_input = document.getElementById("unit5_value");

    let sec = ( hour_input * 3600);
    sec_input.value = sec;

    let min = ( hour_input * 60);
    min_input.value = min;
    
    let days = (hour_input / 24);
    days_input.value = days;

    let week = ( hour_input / 168);
    week_input.value = week;
}

function days(){
    let sec_input = document.getElementById("unit1_value");
    let min_input = document.getElementById("unit2_value");
    let hour_input = document.getElementById("unit3_value");
    let days_input = document.getElementById("unit4_value").value;
    let week_input = document.getElementById("unit5_value");

    let sec = ( days_input * 86400);
    sec_input.value = sec;

    let min = ( days_input * 1440);
    min_input.value = min;
    
    let hour = (days_input * 24);
    hour_input.value = hour;

    let week = ( days_input * 7);
    week_input.value = week;
}

function week(){
    let sec_input = document.getElementById("unit1_value");
    let min_input = document.getElementById("unit2_value");
    let hour_input = document.getElementById("unit3_value");
    let days_input = document.getElementById("unit4_value");
    let week_input = document.getElementById("unit5_value").value;

    let sec = ( week_input * 604800);
    sec_input.value = sec;

    let min = ( week_input * 10080);
    min_input.value = min;
    
    let hour = (week_input * 168);
    hour_input.value = hour;

    let meters = ( week_input * 7);
    days_input.value = meters;
}

function reset(){
    document.getElementById("unit1_value").value = "";
    document.getElementById("unit2_value").value = "";
    document.getElementById("unit3_value").value = "";
    document.getElementById("unit4_value").value = "";
    document.getElementById("unit5_value").value = "";
 }










