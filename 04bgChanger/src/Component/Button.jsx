function Button({onClick, className, btnName}) {
    return (
        <button onClick={onClick} className={className}> {btnName} </button>
    )
}
export default Button;