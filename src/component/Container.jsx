import classes from './Container.module.css';
const Container = ({children, className=''}) => {
    const classNames = `${classes.contentBox} ${className}`
    return (
        <div className={classNames}>{children}</div>
    )
}
export default Container;