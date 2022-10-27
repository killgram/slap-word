import { call, put } from 'redux-saga/effects'
import { loginService, signUpService } from '@services'
import { Navigate } from '@navigators'
import { appAction } from '@store/actions'
import { ILoginRequest, ISignUpRequest } from '@store/types/app/Interfaces'
import { errorToast, successToast } from '@utils'

/**
 * @description auth saga
 */
export function* loginRequest(action: ILoginRequest): any {
  const { login, password } = action
  try {
    const result = yield call(loginService, login!, password!)
    if (result.data.accessToken) {
      yield put(
        appAction.loginSuccess(
          result.data.login,
          result.data.password,
          result.data.maxScore,
          result.data.accessToken,
        ),
      )
      yield call(Navigate.toAppStack)
      yield call(successToast, 'Успешно 😎')
    } else {
      yield put(appAction.loginError())
      yield call(errorToast, 'Пользователь не найден 🤔')
    }
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}

/**
 * @description auth saga
 */
export function* signUpRequest(action: ISignUpRequest): any {
  const { login, password } = action
  try {
    const response = yield call(signUpService, login!, password!)
    if (response.data.success) {
      const result = yield call(loginService, login!, password!)
      yield put(
        appAction.loginSuccess(
          result.data.login,
          result.data.password,
          result.data.maxScore,
          result.data.accessToken,
        ),
      )
      yield call(Navigate.toAppStack)
      yield call(successToast, 'Успешно 😎')
    } else {
      yield put(appAction.loginError())
      yield call(errorToast, 'Логин существует 🤔')
    }
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}
