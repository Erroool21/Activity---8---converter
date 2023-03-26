function centimeters(){
    let cent_input = document.getElementById("cent").value;
    let inches_input = document.getElementById("inches");
    let feet_input = document.getElementById("feet");
    let meters_input = document.getElementById("meters");
    let kilometers_input = document.getElementById("kilometers");

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
    let cent_input = document.getElementById("cent");
    let inches_input = document.getElementById("inches").value;
    let feet_input = document.getElementById("feet");
    let meters_input = document.getElementById("meters");
    let kilometers_input = document.getElementById("kilometers");

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
    let cent_input = document.getElementById("cent");
    let inches_input = document.getElementById("inches");
    let feet_input = document.getElementById("feet").value;
    let meters_input = document.getElementById("meters");
    let kilometers_input = document.getElementById("kilometers");

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
    let cent_input = document.getElementById("cent");
    let inches_input = document.getElementById("inches");
    let feet_input = document.getElementById("feet");
    let meters_input = document.getElementById("meters").value;
    let kilometers_input = document.getElementById("kilometers");

    let cent = ( meters_input * 100);
    cent_input.value = cent;

    let inch = ( meters_input * 39.37);
    inches_input.value = inch;
    
    let feet = (meters_input * 3.281);
    feet_input.value = feet;

    let km = ( meters_input / 1000);
    kilometers_input.value = km;
}

function meters(){
    let cent_input = document.getElementById("cent");
    let inches_input = document.getElementById("inches");
    let feet_input = document.getElementById("feet");
    let meters_input = document.getElementById("meters");
    let kilometers_input = document.getElementById("kilometers").value;

    let cent = ( kilometers_input * 100000);
    cent_input.value = cent;

    let inch = ( kilometers_input * 39370.1);
    inches_input.value = inch;
    
    let feet = (kilometers_input * 3281);
    feet_input.value = feet;

    let meters = ( kilometers_input * 1000);
    meters_input.value = meters;
}

function reset(){
    document.getElementById("cent").value = "";
    document.getElementById("inches").value = "";
    document.getElementById("feet").value = "";
    document.getElementById("meters").value = "";
    document.getElementById("kilometers").value = "";
 }