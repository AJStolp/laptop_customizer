import React from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

class Cart extends React.Component {
     render() {
        return (
            <div>
                <CartItem currency={this.props.currency} features={this.props.features} selected={this.props.selected} />
                <CartTotal currency={this.props.currency} features={this.props.features} selected={this.props.selected}/>
            </div>
        )
     }
}

export default Cart;