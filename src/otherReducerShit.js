export const CHANGE_TEXT = 'CHANGE_TEXT'
export const SEND = 'SEND'
export const RESET = 'RESET'
export const STOP = 'STOP'

export const changeText = text => ({
  type: CHANGE_TEXT,
  payload: { text }
})

export const onSend = () => ({ type: SEND })
export const reset = () => ({ type: RESET })
export const stop = () => ({ type: STOP })
