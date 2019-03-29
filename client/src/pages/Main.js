import React from 'react';
import Navbar from '../Components/Navbar';
import Side from '../Components/Sidemenu';
import '../Components/App.css';
import InnerLayoutMain from '../Components/InnerLayoutMain';

import { Query } from 'react-apollo';
import { GET_ALL_PROJECTS  } from "../queries";
import Cards from '../Components/Card';


function Login({ session }) {
    return (
            <div>
                <Navbar session={session}/>
                <Side />
                <InnerLayoutMain />
                <div className = "ui grid">
                    <div className = "column four wide"></div>
                    <div className = "column twelve wide">
                    <div className = "ui two column doubling grid container">

                        <Query query = {GET_ALL_PROJECTS}>
                            {({ data, loading, error}) => {
                                if (loading) return <div>Loading</div>
                                if (error) return <div>Error</div>
                                console.log(data.getAllProjects);
                                return(<div className ="cardHolder">{data.getAllProjects
                                    .map(project=><Cards
                                        key = {project._id}
                                        title = {project.title}
                                        description = {project.description}
                                        deployLink = {project.githubRepo}
                                        screenshot = {project.screenshot}
                                />)}</div>
                                )
                            }}
                        </Query>
                    </div>
                    </div>
                </div>
            </div>
    );
  }
  
  export default Login;