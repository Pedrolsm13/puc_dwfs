export default function CaractVeiculos(props){
    return(
        <div>
            <p>
                Motor: {props.motor}
            </p>
            <p>
                Carroceria: {props.carroceria}
            </p>
            <p>
                Câmbio: {props.cambio}
            </p>
        </div>
    )
}