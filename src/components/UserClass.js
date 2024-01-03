import React from "react"

class UserClass extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,
            count2: 1

        }
    }


    render() {
        return (
            <div className="user-card">
                <h1>Count: {this.state.count}</h1>
                <button onClick={() => {
                    this.setState({
                        count: this.state.count + 1
                    })
                }}>count +</button>
                <h2>Name: {this.props.name}</h2>
                <h3>Location: Visakhapatnam</h3>
                <h3>Contact: meghnaUrlana</h3>
            </div>
        )
    }
}

export default UserClass