import React from 'react'
import CustomItems from './CustomItems'

class CustomList extends React.Component {
    render(){
        return (
        <form className="main__form">
            <h2>Customize your laptop</h2>
            <CustomItems currency={this.props.currency} features={this.props.features} selected={this.props.selected} updateFeature={this.props.updateFeature}/>
        </form>
        )
    }
}

export default CustomList