import { LastProductsData } from '../../constants/LastProductsData'

const LastProducts = () => {
  return (
    <div className='flex flex-col'>
      <h6>Latest Products</h6>
      {LastProductsData.map((product, index) => {
        const { image, name, oldPrice, newPrice, price, colors } = product

        return (
          <div
            key={index}
            className='my-3 flex items-center space-x-4 rounded-lg py-2 transition hover:cursor-pointer hover:bg-gray-50'
          >
            <img
              src={image}
              alt={name}
              className='h-12 w-12 rounded-lg object-cover'
            />

            <div className='flex-1'>
              <h4 className='text-sm font-semibold text-gray-800'>{name}</h4>
              <div className='text-sm'>
                {oldPrice && newPrice ? (
                  <div className='flex gap-2'>
                    <span className='text-gray-400 line-through'>
                      ${oldPrice}
                    </span>
                    <span className='text-red-500'>${newPrice}</span>
                  </div>
                ) : (
                  <span className='text-gray-600'>${price}</span>
                )}
              </div>
            </div>

            <div className='flex items-center space-x-1'>
              {colors.slice(0, 3).map((color, index) => (
                <span
                  key={index}
                  className='-ms-3 h-5 w-5 rounded-full border-2 border-white'
                  style={{ backgroundColor: color }}
                ></span>
              ))}
              {colors.length > 3 && (
                <span className='text-xs text-gray-500'>
                  +{colors.length - 3}
                </span>
              )}
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default LastProducts
