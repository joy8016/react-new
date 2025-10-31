import Button from "./Button"

const Header = () => {
    return (

        <div className='bg-red-300 py-5'>
            <header className="max-w-[60rem] flex items-center justify-between text-xl text-black m-auto px-2">
                <h1 className='text-3xl'><span className="font-extrabold text-[tomato]">B</span>rand</h1>
                <div className='flex gap-3.5 max-[500px]:hidden'>
                    <a href="">Features</a>
                    <a href="">Use Cases</a>
                    <a href="">Integration</a>
                    <a href="">About Us</a>
                </div>
                <Button title="Join Us"/>
            </header>
        </div>

    )
}

export default Header
