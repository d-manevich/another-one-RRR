import { PureComponent } from 'react';
import { connect } from 'react-redux';

import { onSend, changeText, reset, stop } from 'app/otherReducerShit'

class Form extends PureComponent {
  handleChange = event => {
    this.props.changeText(event.currentTarget.value)
  }

  render() {
    return (
      <div>
        <div>Enter text</div>
        <textarea onChange={ this.handleChange } value={ this.props.text } />
        <button onClick={ this.props.onSend }>
          { this.props.isFetching ? 'Sending...' : 'Send' }
        </button>
        <button onClick={ this.props.onReset }>Reset</button>
        <button onClick={ this.props.onReset }>Reset 2</button>
        <button onClick={ this.props.onStop }>Stop</button>
        <div>Entered text: { this.props.text }</div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  text: state.reducer.text,
  isFetching: state.reducer.isFetching,
})

const mapDispatchToProps = dispatch => ({
  changeText: text => dispatch(changeText(text)),
  onSend: () => dispatch(onSend()),
  onReset: () => dispatch(reset()),
  onStop: () => dispatch(stop()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Form)
