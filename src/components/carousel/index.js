import PersonDetail from '@components/people/PersonDetail'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import { useRef } from 'react'
import { useFirestore } from 'react-redux-firebase'
import { useSwipeable } from 'react-swipeable'

import { addLike } from '@actions'
import { useDispatch } from 'react-redux'

const Carousel = ({ cards, cardsAmount }) => {

  const firestore = useFirestore()
  let carousel = useRef(null)
  const dispatch = useDispatch()

  const refPassthrough = el => {
    handleSwipe.ref(el)
    carousel.current = el
  }

  const handleSwipe = useSwipeable({
    onSwipedLeft: ()=>carouselScroll(1),
    onSwipedRight: ()=>carouselScroll(-1)
  })

  const carouselScroll = (sign = 1) => {
    const { current: { scrollLeft, scrollWidth, clientWidth }} = carousel
    const x = clientWidth / cardsAmount * Math.sign(sign)
    const target = scrollLeft === (scrollWidth - clientWidth)
      ? 0
      : scrollLeft + x
    carousel.current.scrollTo({left: target, behavior: 'smooth'})
  }

  const handleLike = async (person, like) => {
    await dispatch(addLike(person, like))
    carouselScroll()
  }

  return (
    <div className="relative">
      <ChevronLeftIcon
        className="w-5 h-5 text-green-800 absolute top-1/2 left-2 cursor-pointer hidden md:block"
        onClick={()=>carouselScroll(-1)}
    />
      <ChevronRightIcon
        className="w-5 h-5 text-green-800 absolute top-1/2 right-2 cursor-pointer hidden md:block"
        onClick={()=>carouselScroll(1)}  
      />
      <div className="flex flex-nowrap overflow-hidden" {...handleSwipe} ref={refPassthrough}>
        {
          cards.length && cards.map(card => (
            <div
              className={cardsAmount > 1 ? `min-w-1/${cardsAmount}` : 'min-w-full'}
              key={card.id}
            >
              <PersonDetail person={card} onLike={handleLike} />
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default Carousel