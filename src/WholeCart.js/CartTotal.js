import React from 'react'


class CartTotal extends React.Component {
    render(){

    const total = Object.keys(this.props.selected).reduce(
        (acc, curr) => acc + this.props.selected[curr].cost,
        0
      );

        return(
        <section className="main__summary">
            <div className="summary__total">
                <div className="summary__total__label">Total</div>
                <div className="summary__total__value">
                    {this.USCurrencyFormat.format(total)}
                </div>
        </div>
        </section> 
        )
    }
}



export default CartTotal;