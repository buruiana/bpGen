import { call, put, takeLatest, select } from "redux-saga/effects";
import isEmpty from "lodash/isEmpty";
import sortBy from "lodash/sortBy";

export function* getPrettyCode(code, parser = "babel") {
  if (isEmpty(code)) return;

  let prettyCode = [];
  try {
    yield put(setProjectError(""));
    const res = yield prettify({ code, parser });
    prettyCode = res.data;
  } catch (err) {
    console.log("console: err", err);
    prettyCode = JSON.parse(err.config.data);
    prettyCode = prettyCode.code;

    yield put(setProjectError(err.response.data));
  }
  return prettyCode;
}

export default function* rootSaga() {
  yield takeLatest(PRETTIFY_CODE, watchPrettyfyCode);
}
