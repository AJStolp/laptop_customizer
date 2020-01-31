import React from 'react'
import CartItem from './CartItem'
import CartTotal from './CartTotal'

class Cart extends React.Component {
     render() {
        return (
            <div>
                <CartItem currency={this.props.currency} selected={this.props.selected} features={this.props.features}/>
                <CartTotal currency={this.props.currency} features={this.props.features}/>
            </div>
        )
     }
}

export default Cart;