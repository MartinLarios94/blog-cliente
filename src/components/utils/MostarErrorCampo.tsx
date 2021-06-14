export default function MostarErrorCampo(props: mostrarErrorCampoProps){
    return(
        <div className="text-danger">{props.mensaje}</div>
    )
}

interface mostrarErrorCampoProps{
    mensaje: string
}