import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const Sidebar = () => (
  <Sidebar.Pushable as={Segment}>
    <Sidebar as={Menu} animation='overlay' icon='labeled' inverted vertical visible width='thin'>
      <Menu.Item as='a'>
        <Icon name='users' />
        START A TEAM
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='handshake outline' />
        JOIN A TEAM
      </Menu.Item>
      <Menu.Item as='a'>
        <Icon name='lightbulb outline' />
        POST PROJECT IDEA
      </Menu.Item>
    </Sidebar>
  </Sidebar.Pushable>
)

export default Sidebar;