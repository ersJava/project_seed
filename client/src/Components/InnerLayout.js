import React from 'react'
import Cards from './Card';

const InnerLayout = () => (
    <div className="ui container stackable two column grid" >
                <div className="column">
                <div className="ui cardHolder"><Cards/></div>
                </div>
                <div className="column">
                <div className="ui cardHolder"><Cards/></div>
                </div>
                <div className="column">
                <div className="ui cardHolder"><Cards/></div>
                </div>
                <div className="column">
                <div className="ui cardHolder"><Cards/></div>
                </div>
              
                </div>  
)

export default InnerLayout