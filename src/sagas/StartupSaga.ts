import { call, put, select, delay } from 'redux-saga/effects'

/**
 * @description startup saga
 */
export function* startup(): any {
  console.log('saga is ready')
}
