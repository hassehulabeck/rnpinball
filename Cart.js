import React from "react";

const Cart = (props) => {
    let totalSum = 0;

    return (
        <div>
            <h1>Varukorg</h1>
            {/* <section>
                {props.cart.map((player, index) => (
                    <article key={index}>
                        {player.first_name} {player.last_name}
                    </article>
                ))}
            </section> */}
            <Total cart={props.cart} />
        </div>
    );
};

const Total = (props) => {
    const total = props.cart.reduce(
        (prevValue, currentValue) =>
            prevValue + Number(currentValue.wppr_points),
        0
    );
    return <p>Totalt värde: {Number(total).toFixed(2)}</p>;
};

export default Cart;
