import { call, put } from 'redux-saga/effects'
import { loginService } from '@services'
import { Navigate } from '@navigators'
import { appAction } from '@store/actions'
import { ILoginRequest } from '@store/types/app/Interfaces'
import { errorToast } from '@utils'

/**
 * @description startup saga
 */
export function* loginRequest(action: ILoginRequest): any {
  const { login, password } = action
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
  } else {
    yield put(appAction.loginError())
    yield call(errorToast, 'Пользователь не найден 🤔')
  }
  try {
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}
