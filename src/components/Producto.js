import { Component } from "react";
/* import Button from './Button' */

const styles = {
    producto: {
        border: 'solid 1px #eee',
        boxShadow: '0 5px 5px rgb(0, 0, 0, 0.1)',
        width: '30%',
        padding: '10px 15px',
        borderRadius: '5px',
    },
    img: {
        width: '100%',
    },
    button: {
        backgroundColor: '#0A283E',
        color: '#fff',
        padding: '15px 20px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
    }
}

class Producto extends Component {
    render() {
        const { producto, agregarAlCarro } = this.props

        return (
            <div style={styles.producto}>
                <img alt={producto.name} src={producto.img} style={styles.img} />
                <h3>{producto.name}</h3>
                <p>{producto.price}</p>
                <button style={styles.button} onClick={() => agregarAlCarro(producto)}>
                    Agregar al carro
                </button>
            </div>
        )
    }
}

export default Producto