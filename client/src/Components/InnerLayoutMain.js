import React, { Component } from 'react';
import { Query } from 'react-apollo';
import { GET_ALL_PROJECTS } from '../queries'
import Cards from './Card';

class Main extends Component {
    render() {
        return (
            <div>
                <Query query = {GET_ALL_PROJECTS}>
                    {({ data, loading, error}) => {
                        if (loading) return <div>Loading</div>
                        if (error) return <div>Error</div>
                        console.log(data.getAllProjects);
                        return(<div className = "cardHolder">{data.getAllProjects
                            .map(project =><Cards
                                key = {project._id}
                                title = {project.title}
                                description = {project.description}
                                deployLink = {project.deployLink}
                                githubRepo = {project.githubRepo}
                                screenshot = {project.screenshot}
                            />)}
                        }</div>)
                    }}
                </Query>
            </div>
        )
    };
}

export default Main;