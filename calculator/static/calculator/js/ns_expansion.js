
//References to the output fields on the page
let u_out = document.getElementById("u/a1");
let P_out = document.getElementById("P/P1");
let T_out = document.getElementById("T/T1");
let d_out = document.getElementById("d/d1");

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
        let results = calcExpansion(g, M);

        //Saves the values for displaying
        var u_val = results["u/a1"]
        var t_val = results["T/T1"]
        var p_val = results["P/P1"]
        var d_val = results["d/d1"]
    }
    else{
        
        //One or more inputs isn't define, wipe the output fields
        var u_val = "";
        var t_val = "";
        var p_val = "";
        var d_val = "";
    }

    //Update the input fields with the calculated values
    changeVal(u_out, u_val);
    changeVal(T_out, t_val);
    changeVal(P_out, p_val);
    changeVal(d_out, d_val);

}