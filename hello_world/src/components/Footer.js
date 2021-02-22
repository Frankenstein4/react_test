import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const {filter} = this.props;
        return (
            <div>
               <span>show：</span>
               <button disabled={filter=='all'}>全部</button>
               <button disabled={filter=='active'}>未完成</button>
               <button disabled={filter=='completed'}>已完成</button>
            </div>
        );
    }
}

export default Footer;