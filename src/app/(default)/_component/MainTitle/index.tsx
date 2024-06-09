'use client'

import { useEffect, useRef } from 'react'
import styles from './MainTitle.module.scss'

export default function MainTitle(): JSX.Element {
  useEffect(() => {
    const content: string[] = [
      '연결되는 공간',
      '날씨를 공유하는 공간',
      '즐거움을 느끼는 공간',
    ]
    const text: HTMLElement | null = document.querySelector('.typing-info')
    let i: number = 0
    let j: number = 0

    function typing(): void {
      if (text) {
        if (i < content.length && j < content[i].length) {
          let txt: string = content[i][j]
          text.innerHTML += txt === '\n' ? '<br/>' : txt
          j++
          setTimeout(typing, 200)
        } else if (i < content.length) {
          text.innerHTML += '<br/>'
          i++
          j = 0
          setTimeout(typing, 200)
        } else {
          setTimeout(() => {
            text.textContent = ''
            i = 0
            typing()
          }, 1000)
        }
      }
    }
    typing()
  }, [])

  return (
    <div className={styles.main}>
      <div className={styles.title}>날씨의 속삭임 🌤️</div>
      <div>
        <div className={styles.subtitle}>날씨의 속삭임 구성원들과</div>
        <div className={styles.description}>
          <div className={'typing-info'}></div>
        </div>
      </div>
    </div>
  )
}
