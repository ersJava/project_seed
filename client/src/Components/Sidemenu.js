import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar, Container } from 'semantic-ui-react'
import ContainerEX from './Container';

const Side= () => (
  <Sidebar.Pushable>
    <Sidebar as={Menu} animation='push' icon='labeled' inverted vertical visible width='thin'>
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

    <Sidebar.Pusher>
      <Segment basic>
        <Header as='h3'>Projects</Header>
      <ContainerEX />
      </Segment>
    </Sidebar.Pusher>
  </Sidebar.Pushable>
)

export default Side