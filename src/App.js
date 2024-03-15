import './App.css';
import Calculator from "./Calculator";
import SnackBarComponent from "./component/SnackBarComponent";
import {useState} from "react";
import SnackBarContext from "./SnackBarContext";
import {Button} from "@mui/material";

function App() {
    const [snackBar, setSnackBar] = useState({
        open: false,
        message: '',
        duration: 5000,
        direction: 'right'
    })

    const handleSnackBar = (value, message = snackBar.message) => {
        setSnackBar({
            ...snackBar,
            open: value,
            message: message
        })
    }
    console.log('Snack bar state: ', snackBar)
    return (
        <>
            <SnackBarContext.Provider value={{snackBar, handleSnackBar}}>
                <SnackBarComponent/>
                <Button onClick={() => handleSnackBar(true, 'Opening snack bar from button')} variant="contained">open snackBar</Button>
                <Calculator/>
            </SnackBarContext.Provider>
        </>
    );
}

export default App;
