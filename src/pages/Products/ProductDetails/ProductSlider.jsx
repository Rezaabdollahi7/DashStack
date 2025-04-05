import { RiArrowLeftWideFill, RiArrowRightWideFill } from 'react-icons/ri'
import clsx from 'clsx'
import useEmblaCarousel from 'embla-carousel-react'
import { useCallback } from 'react'
import PropTypes from 'prop-types'

export default function ProductSlider({
  imgNumber,
  productImagesCount,
  setImgNumber,
  productImages,
}) {
  const [emblaRef, emblaApi] = useEmblaCarousel()

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
    if (imgNumber > 1) {
      setImgNumber((prevCount) => prevCount - 1)
    }
  }, [emblaApi, imgNumber, setImgNumber])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
    if (imgNumber < productImagesCount) {
      setImgNumber((prevCount) => prevCount + 1)
    }
  }, [emblaApi, imgNumber, productImagesCount, setImgNumber])

  const scrollToImage = useCallback(
    (index) => {
      if (emblaApi) {
        emblaApi.scrollTo(index)
        setImgNumber(index + 1)
      }
    },
    [emblaApi, setImgNumber],
  )

  return (
    <>
      <div className='embla relative max-h-[580px] max-w-[580px]'>
        <div
          className='embla__viewport overflow-hidden rounded-2xl'
          ref={emblaRef}
        >
          <div className='embla__container gap-8'>
            {productImages.map((productImg, index) => (
              <div
                className='embla__slide overflow-hidden rounded-2xl'
                key={index}
              >
                <figure>
                  <img
                    src={productImg}
                    alt='product-img'
                    className='h-max w-max object-contain'
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>
        <div className='btn-conatiner absolute right-4 bottom-4 flex w-max gap-1 rounded-lg bg-gray-600/70 px-3 py-2'>
          <button className='embla__prev cursor-pointer' onClick={scrollPrev}>
            <RiArrowLeftWideFill
              className={clsx(
                'size-5',
                imgNumber !== 1 ? 'text-white' : 'text-gray-500',
              )}
            />
          </button>
          <span className='w-6 text-white'>
            {imgNumber}/{productImagesCount}
          </span>
          <button className='embla__next cursor-pointer' onClick={scrollNext}>
            <RiArrowRightWideFill
              className={clsx(
                'size-5',
                imgNumber !== productImagesCount
                  ? 'text-white'
                  : 'text-gray-500',
              )}
            />
          </button>
        </div>
      </div>
      {/* Product Images Thumbnail*/}
      <div className='product-images-wrapper mx-auto flex max-w-[480px] gap-3'>
        {productImages.map((productImg, index) => (
          <div
            className='img-item cursor-pointer overflow-hidden rounded-xl'
            key={index}
            onClick={() => scrollToImage(index)}
          >
            <img
              src={productImg}
              alt='product-img'
              className={clsx(
                imgNumber === index + 1 ? 'opacity-100' : 'opacity-30',
              )}
            />
          </div>
        ))}
      </div>
    </>
  )
}

ProductSlider.propTypes = {
  imgNumber: PropTypes.number,
  productImagesCount: PropTypes.number,
  setImgNumber: PropTypes.func,
  productImages: PropTypes.array,
}
