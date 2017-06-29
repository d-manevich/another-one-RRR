import { PureComponent } from 'react'
import styles from 'app/controls/button.module.scss'

export default class Button extends PureComponent {
  render() {
    return (
      <button className={styles.btn}>Кнопка</button>
    )
  }
}
