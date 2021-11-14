import React, {useState, Fragment} from 'react';

const Contador = () => {
    const [miValor, setmiValor] = useState(100);
    //funcion para incrementar
    const miFuncion = () => {
        setmiValor(miValor + 1); 
    }
    const miFuncionDe = () => {
        setmiValor(miValor - 1); 
    }
    return (
        <Fragment>
            <p>hola soy tu componente</p>
            <p>el valor del constante es: {miValor}</p>
            <button onClick={miFuncion}>incrementa</button> <br/> <br/>
            <button onClick={miFuncionDe}>decrementa</button>
        </Fragment>
    );
}
 
export default Contador
