import classNames from 'classnames/bind';
import styles from './Poppor.module.scss';

const cs = classNames.bind(styles);

function Wrapper({ children, className }) {
    return <div className={cs('wrapper', className)}>{children}</div>;
}

export default Wrapper;
