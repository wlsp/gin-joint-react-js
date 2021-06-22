import React, { Component } from 'react';

class States extends Component {
    state = { 
        isDark: false
     }
     handleDark = () => {
         this.setState({isDark : !this.state.isDark })
     }
    render() { 
        return ( 
            <div style={{background: this.state.isDark ? "#333" : "#ddd"}}>
                <button onClick={this.handleDark}>Change dark Mode</button>
            </div>
         );
    }
}
 
export default States;