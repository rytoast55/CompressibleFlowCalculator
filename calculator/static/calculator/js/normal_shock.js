
//References to the output fields on the page
let P2_P1 = document.getElementById("P2/P1");
let T2_T1 = document.getElementById("T2/T1");
let d2_d1 = document.getElementById("d2/d1");
let Po2_Po1 = document.getElementById("Po2/Po1");
let Po2_P1 = document.getElementById("Po2/P1");
let du_a1 = document.getElementById("du/a1");
let M2 = document.getElementById("M2");

//Updates the value for gamma and tries to recalculate results
function update_gamma(val){
    g_val = val;
    solve_state();
}

//Updates the value for the mach number and tries to recalculate the results
function update_mach(val){
    M_val = val;
    solve_state();
}

//Calculates the isentropic properties for the given inputs
function solve_state(){

    //Check if both inputs are defined
    let g_defined = (g_val != null) && (g_val.length != 0);
    let M_defined = (M_val != null) && (M_val.length != 0);

    if (g_defined && M_defined){

        //Gets numbers for each input
        let g = Number(g_val)
        let M = Number(M_val)

        //Calculates the isentropic values
        results = calcNormalShock(g, M);

        console.log(results);

        //Saves the values for displaying
        var P2_P1_val = results["P2/P1"];
        var T2_T1_val = results["T2/T1"];
        var d2_d1_val = results["d2/d1"];
        var Po2_Po1_val = results["Po2/Po1"];
        var Po2_P1_val = results["Po2/P1"];
        var du_a1_val = results["du/a1"];
        var M2_val = results["M2"];
    }
    else{
        
        //One or more inputs isn't defined, wipe the output fields
        var P2_P1_val = "";
        var T2_T1_val = "";
        var d2_d1_val = "";
        var Po2_Po1_val = "";
        var Po2_P1_val = "";
        var du_a1_val = "";
        var M2_val = "";
    }

    console.log(P2_P1_val);

    //Update the input fields with the calculated values
    changeVal(P2_P1, P2_P1_val)
    changeVal(T2_T1, T2_T1_val)
    changeVal(d2_d1, d2_d1_val)
    changeVal(Po2_Po1, Po2_Po1_val)
    changeVal(Po2_P1, Po2_P1_val)
    changeVal(du_a1, du_a1_val)
    changeVal(M2, M2_val)

}