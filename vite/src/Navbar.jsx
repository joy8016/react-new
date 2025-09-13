
function Navbar({data}) {
    console.log(data)

    return (
        <>
            <Button data={data} />







        </>
    )
}

function Button({data}) {
    console.log(data)
    return (
        <div>
            <button>{data}</button>
            
        </div>
    )

}

export default Navbar