import math



def calc_isentropic(g, M):
    '''Given γ and M as inputs, calculate:

    - P_o/P
    - T_o/T
    - ρ_o/ρ
    '''

    return {
        "To/T": 1 + (M^2) * (g-1) / 2,
        "Po/P": (1 + (M^2) * (g-1) / 2) ^ (g / (g-1)),
        "ρo/ρ": (1 + (M^2) * (g-1) / 2) ^ (1 / (g-1)),
    }


def calc_normalShock(g, M):
    '''Given γ and M as inputs, calculate:

    - P2/P1
    - T2/T1
    - ρ2/ρ1
    - du/a1
    - Po2/Po1
    - Po2/P1
    - M2
    '''

    return {
        "P2/P1": (2 * g * (M^2) - (g-1)) / (g+1),
        "T2/T1": (2 * g * (M^2) - (g-1)) * ((g-1) * (M^2) + 2) / ((M^2) * (g+1) ^ 2),
        "ρ2/ρ1": ((M^2) * (g+1)^2) / ((M^2) * (g-1) + 2),
        "du/a1": -2 * (M - (1/M)) / (g+1),
        "Po2/Po1": (2 * g * (M^2) - (g-1)) / (g+1) * (((M^2) * (g+1)^2 - 1) / (( 2 * g * (M^2) - (g-1)) * ((g-1) * (M^2) + 2))) ^ (g / (g-1)),
        "Po2/P1": (2 * g * (M^2) - (g-1)) / (g+1) * (((M^2) * (g+1)^2 - 1) / (2 * (2 * g * (M^2) - (g-1)))) ^ (g / (g-1)),
        "M2": math.sqrt(((M^2) + 2 / (g-1)) / ((M^2) * 2 * g / (g-1) - 1)),
    }


def calc_nsExpansion(g, M):
    '''Given γ and M as inputs, calculate:

    - u/a1
    - P/P1
    - T/T1
    - ρ/ρ1
    '''

    return {
        "u/a1": 1/((1 - (g-1) / 2)*(1 + (g-1) * M/2)),
        "P/P1": (1 + (g-1) * M/2) ^ (-2 * g / (g-1)),
        "T/T1": (1 + (g-1) * M/2) ^ (-2),
        "ρ/ρ1": (1 + (g-1) * M/2) ^ (-2 / (g-1)),
    }


def calc_obliqueShock(g, M, b):
    '''Given γ, M, and beta as inputs, calculate:

    - θ
    - M2
    - P2/P1
    - T2/T1
    - ρ2/ρ1
    - Po2/Po1
    - Po2/P1
    '''

    pass


def calc_pmExpansion(g, M):
    '''Given γ and M as inputs, calculate:

    - θ(M)
    '''
    
    return {
        "θ(M)": math.sqrt((g+1) / (g-1)) * math.atan(math.sqrt((g-1) * ((M^2)-1) / (g+1))) - math.atan(math.sqrt((M^2) - 1))
    }