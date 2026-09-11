export type SignupStatus = 'idle' | 'success' | 'error'

export type SignupState = {
  status: SignupStatus
  message: string
}

export const INITIAL_SIGNUP_STATE: SignupState = {
  status: 'idle',
  message: '',
}
