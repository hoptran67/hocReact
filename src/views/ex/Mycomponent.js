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
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>>>Check data input:',this.state);
    }

    render() {
        console.log('>>>>Call render:',this.state);
        
        return (
            <>
            <form >
            <label htmlFor="fname">First name:</label>
            <input
             type="text"value={this.state.firtsName}
                onChange= {(event)=> this.handleChangefirtsName(event)}
             
             />
             <br/>
             
            <label htmlFor="lname">Last name:</label>
            <input 
            type="text"  value={this.state.lastName}
            onChange={(event)=> this.handleChangelastName(event)}
            
            /><br/><br/>
            <input type="button" value="submit"
            onClick={(event)=> this.handleSubmit(event)}
            
            />
            </form> 
            </>
        )

    }
}

export default MyComponent;