import React from 'react';

class ChildComponent extends React.Component {


    //key:value
    state = {
        firstName: '',
        lastName: ''
    }

    /* 
    JSX => return block
    fragment
    */

    handleChangeFirstName = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    handleChangeLastName = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    handleSubmit = (event) => {
        event.preventDefault()
        console.log('>>> check data input: ', this.state)
    }
    //re-render
    render() {
        console.log('>>> Check props: ', this.props)
        let { name,age } = this.props;
        return (
            <>

            <div>child component name: {name} - {age}</div>
            </>
        )

    }
}

export default ChildComponent;