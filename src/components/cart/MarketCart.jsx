import React, {Component} from 'react';
import { CartMenu } from './CartMenu';
import './stylecart.css';

export default class MarketCart extends Component {
    render () {
        return (
       <CartMenu>
         <aside>
        <div class="cart--area">           
            <h1>Seus Pokemons</h1>
            <div class="cart"></div>
            <div class="cart--details">
                <div class="cart--totalitem subtotal">
                    <span>Subtotal</span>
                    <span>R$ --</span>
                </div>
                <div class="cart--totalitem desconto">
                    <span>Desconto (-10%)</span>
                    <span>R$ --</span>
                </div>
                <div class="cart--totalitem total big">
                    <span>Total</span>
                    <span>R$ --</span>
                </div>
                <div class="cart--finalizar">Finalizar a compra</div>
            </div>
        </div>
        </aside>
      </CartMenu>
        )
    }
}
