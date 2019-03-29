import React from 'react'
import Cards from './Card';

const InnerLayoutMain = () => (
    <div class="ui container stackable two column grid" >
                <div class="column">
                <div class="ui cardHolder"><Cards/></div>
                </div>
                <div class="column">
                <div class="ui cardHolder"><Cards/></div>
                </div>
                <div class="column">
                <div class="ui cardHolder"><Cards/></div>
                </div>
                <div class="column">
                <div class="ui cardHolder"><Cards/></div>
                </div>
              
                </div>  
)

export default InnerLayoutMain