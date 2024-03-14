import classes from './Calculator.module.css';
import Container from "./component/Container";
import Button from "./component/Button";
import {
    ADDITION,
    CLEAR_ALL, DECIMAL,
    DIVISION,
    EIGHT, EQUAL, FIVE, FOUR,
    LEFT_PARENTHESIS,
    MODULAS, MULTIPLICATION,
    NINE, ONE,
    RIGHT_PARENTHESIS,
    SEVEN, SIX, SUBTRACTION, THREE, TWO, ZERO
} from "./component/Constants";
import {useState} from "react";
import SnackBarComponent from "./component/SnackBarComponent";
const Calculator = () => {
    const [first, setFirst] = useState(null);
    const [last, setLast] = useState(null);
    const [result, setResult] = useState(0);
    const [sign, setSign] = useState(null);
    const [count, setCount] = useState(1);
    const digits = [ZERO, ONE, TWO, THREE, FOUR, FIVE, SIX, SEVEN, EIGHT, NINE];
    const signs = [MODULAS, ADDITION, SUBTRACTION, MULTIPLICATION, DIVISION];
    const keys = [MODULAS, CLEAR_ALL, SEVEN, EIGHT, NINE, DIVISION,
        FOUR, FIVE, SIX, MULTIPLICATION, ONE, TWO, THREE, SUBTRACTION, ZERO, EQUAL, ADDITION]

    return (
        <div className={`container ${classes.contentBox}`}>
            <SnackBarComponent/>
            <Container>
                <p className="d-flex justify-content-end align-items-center">Output: {result}</p>
            </Container>
            <Container>
                <p className="d-flex justify-content-start align-items-center">first: {first}, sign: {sign}, last: {last}</p>
            </Container>
            <Container>
                {keys.map((key, index) => {
                    return (
                        <Button key={index}>{key}</Button>
                    )
                })}
            </Container>
        </div>
    )
}
export default Calculator;