function Alert({color, msg}){
    return(
        <div className={`alert alert-${color}`}>{msg}</div>
    )
}
export default Alert