
//Current values for gamma and the mach number
let g_val = 1.4;
let M_val = null;

//How many decimal places the values whould be rounded to
let numDecimals = 5

function changeVal(field, val){
    field.removeAttribute('readonly');
    field.value = val;
    field.setAttribute('readonly', true);
}

function calcIsentropic(g, M){
    
    //Calculating the values
    let t_val = 1 + (M**2) * (g-1) / 2;
    let p_val = t_val ** (g / (g-1));
    let d_val = t_val ** (1 / (g-1));

    //Constant for rounding
    const decimals = Math.pow(10, numDecimals);

    //Returns the rounded values as a dictionary
    return {
        "T_o/T": Math.round(t_val * decimals) / decimals,
        "P_o/P": Math.round(p_val * decimals) / decimals,
        "d_o/d": Math.round(d_val * decimals) / decimals,
    }

}

function calcNormalShock(g, M){

    //Calculating the values
    let P2_P1_val = (2 * g * (M ** 2) - (g-1)) / (g+1);
    let T2_T1_val = (2 * g * (M ** 2) - (g-1)) * ((g-1) * (M ** 2) + 2) / ((M ** 2) * (g+1) ** 2);
    let d2_d1_val = ((M ** 2) * (g+1)) / ((M ** 2) * (g-1) + 2);
    let Po2_Po1_val = ( ( ( (g+1) * M**2 ) / ( (g-1) * M**2 + 2 ) ) ** ( g / (g-1) ) ) * ( (g+1) / ( ( 2 * g * M**2) - (g-1)) ) ** (1 / (g-1))
    let Po2_P1_val = ( ( ( (g+1) * M**2 ) / 2 ) ** ( g / (g-1) ) ) * ( (g+1) / ( ( 2 * g * M**2) - (g-1)) ) ** (1 / (g-1))
    let du_a1_val = -2 * (M - (1/M)) / (g+1);
    let M2_val = Math.sqrt(((M**2) + 2 / (g-1)) / ((M**2) * 2 * g / (g-1) - 1));

    //Constant for rounding
    const decimals = Math.pow(10, numDecimals);

    //Returns the rounded values as a dictionary
    return {

        "P2/P1": Math.round(P2_P1_val * decimals) / decimals,
        "T2/T1": Math.round(T2_T1_val * decimals) / decimals,
        "d2/d1": Math.round(d2_d1_val * decimals) / decimals,
        "Po2/Po1": Math.round(Po2_Po1_val * decimals) / decimals,
        "Po2/P1": Math.round(Po2_P1_val * decimals) / decimals,
        "du/a1": Math.round(du_a1_val * decimals) / decimals,
        "M2": Math.round(M2_val * decimals) / decimals,
    }

}

function calcExpansion(g, M){
    
    //Calculating the values
    let u_val = M / (1 + ((g - 1) / 2) * M);
    let t_val = (1 + (M**2) * (g-1) / 2) ** (-1);
    let p_val = t_val ** (g / (g-1));
    let d_val = t_val ** (1 / (g-1));

    //Constant for rounding
    const decimals = Math.pow(10, numDecimals);

    //Returns the rounded values as a dictionary
    return {
        "u/a1":  Math.round(u_val * decimals) / decimals,
        "T/T1": Math.round(t_val * decimals) / decimals,
        "P/P1": Math.round(p_val * decimals) / decimals,
        "d/d1": Math.round(d_val * decimals) / decimals,
    }

}

function calcOblique(g, M, b){

    //Convert beta into radians
    b = b * Math.PI / 180;

    //Calculate the ratios using the normal portion of the shock
    output = calcNormalShock(g, M*Math.sin(b))

    //Calculating the rest of the values
    theta_val = Math.atan( ( 2 / Math.tan(b) ) * ( (M**2) * (Math.sin(b)**2) - 1) / ( (M**2) * (g + Math.cos(2*b) ) + 2 ) );
    M2_val = Math.sqrt( ( (g-1) * (M*Math.sin(b))**2 + 2) / ( (Math.sin(b-theta_val))**2 * ( 2 * g * (M*Math.sin(b))**2 - (g-1) ) ) )

    //Convert theta into degrees
    theta_val = theta_val * 180 / Math.PI;

    //Constant for rounding
    const decimals = Math.pow(10, numDecimals);

    //Adds the additional values to the output dictionary
    output["theta"] = Math.round(theta_val * decimals) / decimals;
    output["M2"] = Math.round(M2_val * decimals) / decimals;

    return output;

}

function calcPrandtlMeyer(g, M){

    angle =  Math.sqrt( (g+1)/(g-1) ) * Math.atan( Math.sqrt( ((g-1)/(g+1)) * (M**2 - 1) ) ) - Math.atan( Math.sqrt( M**2 - 1 ) );
    return angle * 180 / Math.PI;
}