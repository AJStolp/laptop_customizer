import React from 'react'

class CustomList extends React.Component {
    render(){
        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            {features}
        </form>
        )
    }
}

export default CustomList