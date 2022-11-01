import { call, put, select } from 'redux-saga/effects'
import { aboutAppAction } from '@store/actions'
import { getAboutAppService } from '@services'
import { errorToast } from '@utils'

/**
 * @description get about app saga
 */
export function* getAboutApp(): any {
  const state = yield select()
  const accessToken = state?.app?.accessToken

  try {
    const data = yield call(getAboutAppService, accessToken)
    const { appGit, authorGit, author, name, appVersion } = data.data[0]
    yield put(
      aboutAppAction.onAboutAppSuccess(
        appGit,
        authorGit,
        author,
        name,
        appVersion,
      ),
    )
  } catch (e) {
    yield call(errorToast, 'Что-то пошло не так 😔')
  }
}
