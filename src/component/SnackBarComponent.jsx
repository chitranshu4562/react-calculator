import {useState} from "react";
import {Button, IconButton, Slide, Snackbar} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import Fade from '@mui/material/Fade';

const SnackBarComponent = ({
                               duration = 5000,
                               message = 'Snack bar is opened',
                               direction = 'right'
                           }) => {

    const [state, setState] = useState({
        open: false,
        Transition: Fade
    });

    const SlideTransition = (props) => {
        return <Slide {...props} direction={direction}/>
    }

    const handleClick = (Transition) => {
        setState({
            open: true,
            Transition,
        });
    }

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setState({
            ...state,
            open: false
        });
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
            <Button onClick={() => handleClick(SlideTransition)}>Open SnackBar</Button>
            <Snackbar
                open={state.open}
                autoHideDuration={duration}
                TransitionComponent={state.Transition}
                onClose={handleClose}
                message={message}
                key={state.Transition.name}
                action={action}/>
        </div>
    )
}
export default SnackBarComponent;