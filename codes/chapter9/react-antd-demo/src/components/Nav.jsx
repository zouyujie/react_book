import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './nav.scss';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/home" activeClassName="selected">
              首页
            </NavLink>
          </li>
          <li>
            {/* <NavLink to="/my">我的</NavLink> */}
            <NavLink
              to={{
                hash: '',
                pathname: '/my',
                search: '?username=玉杰&age=31',
                state: { salary: 30000 },
              }}
            >
              我的
            </NavLink>
            {/* <a href="#/my">我的</a> */}
          </li>
          <li>
            <NavLink to="/my/settings">设置</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
