import classNames from 'classnames/bind';
import styles from './Login.module.scss';
import { useRef, useState } from 'react';
const cx = classNames.bind(styles);
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const usernameRef = useRef(null);
  const passwordRef = useRef(null);
  return (
    <div className={cx('wrapper-container')}>
      <div className={cx('wrapper-login')}>
        <form action="/login" method="post">
          <h1>AGV SYSTEM</h1>
          <div className={cx('input-box')}>
            <input
              ref={usernameRef}
              type="text"
              placeholder="Tài khoản"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className={cx('input-box')}>
            <input
              ref={passwordRef}
              id="password"
              type="password"
              placeholder="Mật khẩu"
              value={password}
              resource="true"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={cx('form-controls')}>
            <button className={cx('btn')} type="button">
              Đăng nhập
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
