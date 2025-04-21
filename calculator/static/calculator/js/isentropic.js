
//References to the output fields on the page
let P_out = document.getElementById("P_o/P-out");
let T_out = document.getElementById("T_o/T-out");
let rho_out = document.getElementById("rho_o/rho-out");
let A_out = document.getElementById("A/A*-out");

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
        results = calcIsentropic(g, M);

        //Saves the values for displaying
        t_val = results["T_o/T"]
        p_val = results["P_o/P"]
        d_val = results["d_o/d"]
        a_val = results["A_A*"]
    }
    else{
        
        //One or more inputs isn't define, wipe the output fields
        t_val = "";
        p_val = "";
        d_val = "";
        a_val = "";
    }

    //Update the input fields with the calculated values
    changeVal(T_out, t_val);
    changeVal(P_out, p_val);
    changeVal(rho_out, d_val);
    changeVal(A_out, a_val);

}