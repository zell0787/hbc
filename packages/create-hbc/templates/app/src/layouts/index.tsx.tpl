import { Link, Outlet } from 'hbc-core';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
