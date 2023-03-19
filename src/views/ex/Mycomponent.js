import React, { Fragment } from 'react';

class MyComponent extends React.Component {

state = {
    firtsName:'',
    lastName:''
}



    handleChangefirtsName = (event) =>{
        this.setState({
            firtsName: event.target.value
        })

    }
    handleChangelastName = (event) =>{
        this.setState({
            lastName : event.target.value
        })
    }

    render() {
        console.log('sdfasd:',this.state.firtsName);
        console.log('sdfasd:',this.state.lastName);
    
        return (
            <>
            <form >
            <label for="fname">First name:</label>
            <input
             type="text"value={this.state.firtsName}
                onChange= {(event)=> this.handleChangefirtsName(event)}
             
             />
             <br/>
             
            <label for="lname">Last name:</label>
            <input 
            type="text"  value={this.state.lastName}
            onChange={(event)=> this.handleChangelastName(event)}
            
            /><br/><br/>
            <input type="submit" value="Submit"/>
            </form> 
            </>
        )

    }
}

export default MyComponent;