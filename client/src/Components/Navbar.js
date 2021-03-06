import React from 'react'
import { Dropdown, Icon, Menu, Segment } from 'semantic-ui-react'
import Logo from '../Components/Logo'
import logo2 from "../assets/images/psLogo.png"
import Logout from '../Components/Logout';


const Navbar = ({ session }) => (
  <div>
    <Menu attached='top' className="inverted menu2 ui grid" visible='wide'>
    
       <a href="/main" ><span className="navbarTitle">PROJECT SEED</span></a>
       
     
        
        {/* <h3>Hi {session.getCurrentUser.username}</h3> */}
      <Menu.Menu position='right' className="inverted">
        <Dropdown className="inverted" item icon='user circle inverted outline' simple>
        <Dropdown.Menu className="inverted" >
          <Dropdown.Item >Profile</Dropdown.Item>
          <Dropdown.Item>Settings</Dropdown.Item>
          <Dropdown.Item><Logout /></Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
       
      </Menu.Menu>
    </Menu>

  </div>
)

export default Navbar