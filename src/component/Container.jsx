import classes from './Container.module.css';
const Container = ({children}) => {
    return (
        <div className={classes.contentBox}>{children}</div>
    )
}
export default Container;