import classes from './Button.module.css';

const Button = ({children, type = "button", clickHandler, buttonClass = ''}) => {
    const customClasses = `${buttonClass} ${classes.attractiveButton}`;
    function handleClick(value, event) {
        clickHandler(value);
    }

    return (
        <button id={children}
                className={customClasses}
                type={type}
                onClick={(event) => handleClick(children, event)}>{children}</button>
    )
}
export default Button;