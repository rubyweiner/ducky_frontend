import React, { Component } from 'react';
import { Menu, Button } from 'semantic-ui-react'
import { NavLink } from "react-router-dom";
import Profile from './Profile'

const duckyIcon = 'https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-15-512.png'

class NavBar extends Component {

  render() {
		return (
      <div className={`ui menu navbar`}>
      <div className="item">
        <h2 className="ui header">
          <div className="content">Ducky</div>
        </h2>
      </div>

      <NavLink
        activeClassName="ui active item"
        className="ui item"
        to="/home"
      >
        Home
      </NavLink>

      <NavLink
        exact
        to="/profile"
        className="ui item"
        activeClassName="ui active item"
      >
        Profile
      </NavLink>

      <NavLink
        exact
        to="/login"
        className="ui item"
        activeClassName="ui active item"
      >
        LogOut
      </NavLink>

    </div>

		)
	}
}

export default NavBar
// {props.user ? (
//   <span className="ui item">Logged in as: username}</span>
// ) : (
//   <NavLink
//     exact
//     to="/login"
//     className="ui item"
//     activeClassName="ui active item"
//   >
//     Login
//   </NavLink>
// )}

//
// <div>
//   <Menu >
//    <Menu.Item>
//      <img src='https://cdn3.iconfinder.com/data/icons/solidix-toys/128/toy_children-15-512.png' />
//    </Menu.Item>
//
//    <Menu.Item header>Ducky</Menu.Item>
//
//    <Menu.Item
//      name='home'
//      active={activeItem === 'home'}
//      onClick={this.handleItemClick}
//    >
//     Home
//    </Menu.Item>
//
//    <Menu.Item
//      name='profile'
//      active={activeItem === 'profile'}
//      onClick={this.handleItemClick}
//    >
//     Profile
//    </Menu.Item>
//
//
//
//    <Menu.Item  position='right'>
//      <Button basic onClick={() => this.props.logOut()}>Log-Out</Button>
//    </Menu.Item>
//   </Menu>
//   </div>,
//
//   this.state.activeItem === "profile"? <Profile /> : null
