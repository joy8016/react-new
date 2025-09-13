function Button(obj){
    return(
        <>

        <button onClick={obj.func} >{obj.text}</button>
        
        </>
    )
}

export default Button