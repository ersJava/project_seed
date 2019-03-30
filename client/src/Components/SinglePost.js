import React from 'react'
import { Header, Grid, Container} from 'semantic-ui-react'
import { Link } from 'react-router-dom';


const SinglePost = ({_id, subject, username, createdAt, content}) => (
  <div key={_id}>
  <Container>
      <Grid celled>

      <Grid.Row className='ui secondary segment'>
      <Grid.Column width={2}>
      <Header as='h3' textAlign='center'>Subject</Header>
      </Grid.Column>
     
      <Grid.Column width={2}>
      <Header as='h4' textAlign='center'>Author</Header>
      </Grid.Column>
     
      <Grid.Column width={4}>
      <Header as='h4' textAlign='center'>Created</Header>
      </Grid.Column>
     
     <Grid.Column width={4}>
      <Header as='h4' textAlign='left'>Post</Header>
      </Grid.Column>
     </Grid.Row>
    
    <Grid.Row>
      <Grid.Column width={2}>
      <Header as='h3' textAlign='center'><Link to={`/posts/${_id}`}>{subject}</Link></Header>
      </Grid.Column>
      <Grid.Column width={2} textAlign='center'>
      {username}
      </Grid.Column>
      <Grid.Column width={4} textAlign='center'>
      {createdAt}
      </Grid.Column>
      <Grid.Column width={4} textAlign='left'>
      {content}
      </Grid.Column>
    </Grid.Row>
  </Grid> 
  </Container>
  </div>
)

export default SinglePost

