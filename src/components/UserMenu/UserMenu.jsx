import React from 'react';
import { connect } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
import defaultAvatar from '../UserMenu/simpson.png';
import style from './UserMenu.module.css';

const UserMenu = ({ avatar, name, onLogout }) => (
  <div className={style.container}>
    <img src={avatar} alt="" width="32" className={style.avatar} />
    <span className={style.name}>Welcome, {name}</span>
    <button type="button" onClick={onLogout}>
      Logout
    </button>
  </div>
);
const mapStateToProps = state => ({
  name: authSelectors.getUsername(state),
  avatar: defaultAvatar,
});

const mapDispatchToProps = {
  onLogout: authOperations.logOut,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserMenu);
