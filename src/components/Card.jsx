function Card(/*{ name, price, url }*/) {
    return (
        <div className="border-black rounded-2xl border-2 max-w-md min-w-max" >
            <div className="flex justify-center">
                <img className="max-w-xs" src="https://assets.bose.com/content/dam/cloudassets/Bose_DAM/Web/consumer_electronics/global/products/headphones/noise_cancelling_headphones_700/product_silo_images/Silo_jpg/noise_cancelling_headphones_700_blk_EC_hero.png/jcr:content/renditions/cq5dam.web.1920.1920.png" alt="Photo of {product}" />
            </div>
            <div className="border-t-2 border-black flex justify-between px-4 py-1">
                <p className="font-bold text-lg">Bose Headphones 700</p>
                <p className="text-red-500 font-bold">$349.99</p>
            </div>
        </div>
    )
}

export default Card