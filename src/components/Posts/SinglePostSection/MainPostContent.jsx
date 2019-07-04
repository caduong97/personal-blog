import React, { Component } from 'react';

class MainPostContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h2>Heading</h2>
                <p>Dec 13, 2018 9:08:37 AM</p>
                <p>Marketing leaders that were interviewed in Gartner’s 2017-2018 CMO Survey said that they invested two-thirds of their budget in supporting customer retention and growth. With so many customers oscillating between phones, tablets, game consoles, desktops and laptops, many marketers are desperate for a unified view of the customers. They seek an effective way to efficiently collect, manage and use their first-party customer data. Yet, like unicorns and yetis, the elusive unified single view of the customer is easier found in dreams than in reality. The technology systems identifying as Customer Data Platforms (CDPs) have yet to settle on standard capabilities.</p>
                <h4>What is a Customer Data Platform?</h4>
                <p>CDPs hold multiple definitions with slight variations, but usually, one is defined as a platform that:</p>
                <ul>
                    <li>aims to bring together all customer data and combine the data together into unified customer profiles</li>
                    <li>is managed and used by marketing, but can also support all relevant stakeholders (i.e. sales)</li>
                    <li>should include behavioural, transactional and profiling data an organisation has on its customers, which can also be enriched with 3rd party data.</li>
                </ul>
            </div>
        );
    }
}

export default MainPostContent;