
//Current values for gamma and the mach number
let g_val = 1.4;
let M_val = null;

//How many decimal places the values whould be rounded to
let numDecimals = 5

function calcIsentropic(g, M){
    
    //Calculating the values
    t_val = 1 + (M**2) * (g-1) / 2;
    p_val = t_val ** (g / (g-1));
    d_val = t_val ** (1 / (g-1));

    //Constant for rounding
    const decimals = Math.pow(10, numDecimals);

    //Retunrs the rounded values as a dictionary
    return {
        "T_o/T": Math.round(t_val * decimals) / decimals,
        "P_o/P": Math.round(p_val * decimals) / decimals,
        "d_o/d": Math.round(d_val * decimals) / decimals,
    }

}