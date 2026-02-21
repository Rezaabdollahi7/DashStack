import { useCallback } from 'react'
import { useDotButton } from './EmblaCarouselDotButton'
import { DotButton } from './Carousel/DotButton'
import { usePrevNextButtons } from './EmblaCarouselArrowButtons'
import { PrevButton } from './Carousel/PrevButton'
import { NextButton } from './Carousel/NextButton'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import PropTypes from 'prop-types'

const EmblaCarousel = ({
  slides,
  options = { loop: true, dragFree: false },
  autoplay = true,
}) => {
  const plugins = autoplay ? [Autoplay()] : []
  const [emblaRef, emblaApi] = useEmblaCarousel(options, plugins)

  const onNavButtonClick = useCallback(() => {
    const autoplayPlugin = emblaApi?.plugins()?.autoplay
    if (!autoplayPlugin) return

    const resetOrStop =
      autoplayPlugin.options.stopOnInteraction === false
        ? autoplayPlugin.reset
        : autoplayPlugin.stop

    resetOrStop()
  }, [emblaApi])

  const { selectedIndex, scrollSnaps, onDotButtonClick } = useDotButton(
    emblaApi,
    onNavButtonClick,
  )
  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi, onNavButtonClick)

  return (
    <section className='embla relative h-full w-full rounded-2xl bg-black text-white'>
      <div className='embla__controls'>
        <div className='embla__buttons'>
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>

        <div className='embla__dots'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => onDotButtonClick(index)}
              className={`embla__dot ${index === selectedIndex ? 'embla__dot--selected' : ''}`}
            />
          ))}
        </div>
      </div>

      <div
        className='embla__viewport overflow-hidden rounded-2xl'
        ref={emblaRef}
      >
        <div className='embla__container h-full'>
          {slides.map((slide, index) => (
            <div key={index} className='embla__slide'>
              {slide}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
EmblaCarousel.propTypes = {
  slides: PropTypes.arrayOf(PropTypes.element).isRequired,
  options: PropTypes.object,
  autoplay: PropTypes.bool,
}
export default EmblaCarousel
