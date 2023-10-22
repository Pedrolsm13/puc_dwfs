import { combineReducers } from "redux";
import CalculadoraReduce from "./calculadora/Calculadora.redux";

export default combineReducers(
    {
        calculadora: CalculadoraReduce
    }
)