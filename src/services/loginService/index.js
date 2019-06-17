import { call, put, takeLatest, select } from "redux-saga/effects";
import { push } from "react-router-redux";
import rsf from "../../redux/firebaseConfig";
import { LOGIN, LOGOUT } from "./actionTypes";
import {
  loginSuccess,
  loginFailure,
  logoutSuccess,
  logoutFailure
} from "../loginService/actions";

export function* watchLogin(action) {
  const { email, password } = action.credentials;

  try {
    const data = yield call(
      rsf.auth.signInWithEmailAndPassword,
      email,
      password
    );

    yield put(loginSuccess(data));
    yield put(push("/home"));
  } catch (error) {
    yield put(loginFailure(error));
  }
}

export function* watchLogout() {
  try {
    const data = yield call(rsf.auth.signOut);
    yield put(logoutSuccess(data));
  } catch (error) {
    yield put(logoutFailure(error));
  }
}

export default function* rootSaga() {
  yield takeLatest(LOGIN, watchLogin);
  yield takeLatest(LOGOUT, watchLogout);
}
