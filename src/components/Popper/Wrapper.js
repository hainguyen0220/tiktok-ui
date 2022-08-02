import classNames from "classnames/bind";
import styles from './Poppor.module.scss';

const cs = classNames.bind(styles);

function Wrapper({ children }) {
    return <div className={cs('wrapper')}>{children}</div>;

}

export default Wrapper;

