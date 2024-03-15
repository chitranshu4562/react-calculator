import {useContext, useState} from "react";
import {Button, IconButton, Slide, Snackbar} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';
import SnackBarContext from "../SnackBarContext";

const SnackBarComponent = () => {

    const snackBarContext = useContext(SnackBarContext);
    const SlideTransition = (props) => {
        return <Slide {...props} direction={snackBarContext.snackBar.direction}/>
    }

    const [state, setState] = useState({
        Transition: SlideTransition
    });

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        snackBarContext.handleSnackBar(false);
    }

    const action = (
        <>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}>
                <CloseIcon fontSize="small"/>
            </IconButton>
        </>
    )

    return (
        <div>
            <Snackbar
                open={snackBarContext.snackBar.open}
                autoHideDuration={snackBarContext.snackBar.duration}
                TransitionComponent={state.Transition}
                onClose={handleClose}
                message={snackBarContext.snackBar.message}
                key={state.Transition.name}
                action={action}/>
        </div>
    )
}
export default SnackBarComponent;