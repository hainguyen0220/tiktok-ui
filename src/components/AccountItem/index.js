import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classnames from "classnames/bind";
import styles from './AccountItem.module.scss'

const cx =classnames.bind(styles)

function AccountItem() {
    return ( 
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tiktok-obj/1666228267645954.jpeg?x-expires=1659168000&x-signature=Sitf9w%2BDgO9f6X1a1gvMEjsVyzg%3D" 
            alt="Hai" />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span> Nguyen Long Hai</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('usernames')}>nguenlonghai</span>
            </div>

        </div>
    );
}

export default AccountItem;