import classes from './Calculator.module.css';
import Container from "./component/Container";
import Button from "./component/Button";
import {
    ADDITION,
    CLEAR_ALL, CROSS, DECIMAL,
    DIVISION,
    EIGHT, EQUAL, FIVE, FOUR,
    LEFT_PARENTHESIS,
    MODULAS, MULTIPLICATION,
    NINE, ONE,
    RIGHT_PARENTHESIS,
    SEVEN, SIX, SUBTRACTION, THREE, TWO, ZERO
} from "./component/Constants";
import {useContext, useState} from "react";
import SnackBarContext from "./SnackBarContext";
import {CropSquareSharp} from "@mui/icons-material";
const Calculator = () => {
    const snackBarContext = useContext(SnackBarContext);
    const [input, setInput] = useState('');
    const [result, setResult] = useState(0);
    const keys = [MODULAS, CLEAR_ALL, CROSS, SEVEN, EIGHT, NINE, DIVISION,
        FOUR, FIVE, SIX, MULTIPLICATION, ONE, TWO, THREE, SUBTRACTION, ZERO, EQUAL, ADDITION, DECIMAL, LEFT_PARENTHESIS, RIGHT_PARENTHESIS]

    const handleClick = (value) => {
        if (value === EQUAL) {
            calculateResult();
        } else if (value === CLEAR_ALL) {
            clearAll();
        } else if (value === CROSS) {
            deleteLastElement();
        } else {
            setInput(input + value);
        }
    }

    const deleteLastElement = () => {
        setInput(input.slice(0, -1))
    }

    const calculateResult = () => {
        try {
            setResult(eval(input));
        } catch (error) {
            snackBarContext.handleSnackBar(true, 'An error occurred while calculation.');
        }
    }

    const clearAll = () => {
        setResult(0);
        setInput('');
    }
    return (
        <div className={`container ${classes.contentBox}`}>
            <Container>
                <h1 className="d-flex justify-content-end align-items-center">{result}</h1>
            </Container>
            <Container className={classes.containerHeight}>
                <h2 className="d-flex justify-content-start align-items-center">{input}</h2>
            </Container>
            <Container>
                {keys.map((key, index) => {
                    return (
                        <Button key={index} clickHandler={handleClick}>{key}</Button>
                    )
                })}
            </Container>
        </div>
    )
}
export default Calculator;