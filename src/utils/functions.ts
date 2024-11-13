import {PESOS} from "./Constants.ts";
import {GradesProp} from "../Contracts/GradesProp.ts";


export const calcMediaFinal = ({g1, g2}: GradesProp) => {
    return ((Number(g1) * PESOS.PROVA) + Number(g2) * PESOS.ATIVIDADES);
}

export const calcMediaFinalExame = ({g1, g2}: GradesProp) => {
    return ((Number(g1)) + Number(g2)) / 2;
}

export const simularRegular = ({g1}: GradesProp) => {

    const simulationResult: number = (PESOS.MEDIA_FINAL - (g1 * PESOS.ATIVIDADES)) / PESOS.PROVA;

    return Number(simulationResult.toFixed(1));
}

export const simularExame = ({g1}: GradesProp) => {
    return 2 * PESOS.MEDIA_FINAL - g1
}