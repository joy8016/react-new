import Button from "./Button"

const Hero = () => {
    return (

        <>
            <div className="bg-gray-100">
                <div className="max-w-[55rem] m-auto text-center py-[5rem] ">
                    <h1 className="text-7xl font-serif font-bold  ">The Best Way To <span className="bg-red-300 rounded-xl flex justify-center mx-70 text-[#e44124]"> Review </span>Creative Assets</h1>
                    <p className=" max-w-[28rem] m-auto mt-1.5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui tempore at iste, facere minima tempora ab corrupti ut.

                    </p>
                    <div>
                        <Button title="Join Subscription" />
                    </div>

                </div>

            </div>
        </>
    )
}

export default Hero
