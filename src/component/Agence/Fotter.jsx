const fotter = () => {
    return (
        <div className='mt-10 h-[70vh] w-full'>
            <div className='flex justify-between pt-3'>
                <div className='flex gap-3 text-white text-6xl'>
                    <button className='btnFotterPage uppercase border-4 rounded-[3.5vw] px-10'>fb</button>
                    <button className='btnFotterPage uppercase border-4 rounded-[3.5vw] px-10'>ig</button>
                    <button className='btnFotterPage uppercase border-4 rounded-[3.5vw] px-10'>in</button>
                    <button className='btnFotterPage uppercase border-4 rounded-[3.5vw] px-10'>be</button>
                </div>
                <button className='btnFotterPage text-white border-white text-8xl uppercase border-4 rounded-[3.5vw] px-10'><a href="#pageStart">Back to top</a></button>
            </div>
            <div className='pt-50 flex justify-center items-center'>
                <h1 className='text-white text-9xl uppercase text-center '>See you in motion</h1>
            </div>
        </div>
    )
}

export default fotter
