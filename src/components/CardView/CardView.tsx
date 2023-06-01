import { useEffect, useRef, useState } from 'react'
import { useWatch } from 'react-hook-form'
import cn from 'classnames'
import { formatCardNumberView } from 'utils/formatCardNumber'
import { twoDigits } from 'utils/formatDate'
import { CardMasks } from 'utils/constants/cardMasks'
import { ICardViewProps } from './CardView.interface'
import styles from './CardView.module.scss'

import chip from 'assets/images/chip.png'
import visa from 'assets/images/visa.png'

const CardView = ({ focusFieldName }: ICardViewProps) => {
  const [isFrontCard, setIsFrontCard] = useState(true)

  const focusRef = useRef<HTMLInputElement>(null)

  const values = useWatch()

  useEffect(() => {
    if (!!focusFieldName) {
      if (focusFieldName === 'cardCVV') {
        setIsFrontCard(false)
      } else {
        setIsFrontCard(true)

        let target = document.getElementById(focusFieldName)

        if (focusRef?.current) {
          focusRef.current.style.width = `${target?.offsetWidth}px`
          focusRef.current.style.height = `${target?.offsetHeight}px`
          focusRef.current.style.transform = `translateX(${target?.offsetLeft}px) translateY(${target?.offsetTop}px)`
        }
      }
    }
  }, [focusFieldName])

  return (
    <div className={cn(styles.cardWrapper, !isFrontCard && styles.isBackCard)}>
      <div className={styles.cardContainer}>
        <div className={styles.cardFront}>
          <div
            ref={focusRef}
            className={cn(styles.focus, focusFieldName && styles.active)}
          />
          <div className={styles.cardImages}>
            <img src={chip} alt="chip" className={styles.chip} />
            <img src={visa} alt="visa" className={styles.typeCard} />
          </div>
          <div className={styles.cardInfo} id="cardNumber">
            <span className={cn(styles.info, styles.cardNumber)}>
              {formatCardNumberView(values.cardNumber)}
            </span>
          </div>
          <div className={styles.cardInfoContainer}>
            <div
              className={cn(styles.cardInfo, styles.cardHolder)}
              id="cardHolder"
            >
              <span className={styles.label}>Card Holder</span>
              <span className={styles.info}>
                {values.cardHolder || CardMasks.CardHolder}
              </span>
            </div>
            <div className={styles.cardInfo} id="cardExpires">
              <span className={styles.label}>Expires</span>
              <span className={styles.info}>
                {twoDigits(values.month) || CardMasks.Month}/
                {twoDigits(values.year) || CardMasks.Year}
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.cardContainer}>
        <div className={styles.cardBack}>
          <div className={styles.magneticStripe} />
          <div className={styles.cardInfo}>
            <span className={styles.label}>CVV</span>
            <div className={styles.cvvField}>{values.cvv}</div>
            <img src={visa} alt="visa" className={styles.typeCard} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardView
