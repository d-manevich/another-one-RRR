import { PureComponent } from 'react'
import styles from 'app/newComponent.module.scss'

export default class NewComponent extends PureComponent {
  render() {
    return (
      <div className={styles.new}>
        <span>NEW~!!!!!! </span>
        <div className={styles.an} />
      </div>
    )
  }
}
