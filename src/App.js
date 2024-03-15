import './App.css';
import Calculator from "./Calculator";
import SnackBarComponent from "./component/SnackBarComponent";
import {useState} from "react";
import SnackBarContext from "./SnackBarContext";

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
    return (
        <>
            <SnackBarContext.Provider value={{snackBar, handleSnackBar}}>
                <SnackBarComponent/>
                <Calculator/>
            </SnackBarContext.Provider>
        </>
    );
}

export default App;
