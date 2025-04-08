
//References to the output fields on the page
let theta_out = document.getElementById("theta-out");

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
        theta_val = calcPrandtlMeyer(g, M);

    }
    else{
        
        //One or more inputs isn't define, wipe the output fields
        theta_val = "";
    }

    //Update the input fields with the calculated values
    changeVal(theta_out, theta_val);

}