// import { call, put, takeLatest, select } from "redux-saga/effects";
// import isEmpty from "lodash/isEmpty";
// import sortBy from "lodash/sortBy";
// import { SET_PROVIDER, GET_ALL_PROVIDERS, DELETE_PROVIDER } from "./actionTypes";
// import rsf from "../../redux/firebaseConfig";
// import { setAllProviders, getAllProviders } from "./actions";
// import { mock } from "./mock";

// export function* watchSetProvider(action) {
//   const { provider } = action;
//   const { isOffline } = (yield select()).configsReducer;
//   let newProvider = { ...provider };
//   newProvider.children = [];

//   if (!isOffline) {
//     if (provider.id) {
//       yield call(rsf.firestore.setDocument, `providers/${provider.id}`, newProvider);
//     } else {
//       yield call(rsf.firestore.addDocument, `providers`, newProvider);
//     }
//     yield put(getAllProviders());
//   }
// }

// export function* watchGetAllProviders(action) {
//   let allProviders = [];
//   const { isOffline } = (yield select()).configsReducer;

//   if (isOffline) {
//     allProviders = mock.allProviders;
//   } else {
//     const snapshot = yield call(rsf.firestore.getCollection, "providers");
//     allProviders = snapshot.docs.map(provider => {
//       return { ...provider.data(), id: provider.id };
//     });
//   }
//   if (isEmpty(allProviders)) allProviders = [];
//   sortBy(allProviders, el => el.title);
//   yield put(setAllProviders(allProviders));
// }

// export function* watchDeleteProvider(action) {
//   const { id } = action.provider;
//   const { isOffline } = (yield select()).configsReducer;

//   if (!isOffline) {
//     yield call(rsf.firestore.deleteDocument, `providers/${id}`);
//     yield put(getAllProviders());
//   }
// }

// export default function* rootSaga() {
//   yield takeLatest(SET_PROVIDER, watchSetProvider);
//   yield takeLatest(GET_ALL_PROVIDERS, watchGetAllProviders);
//   yield takeLatest(DELETE_PROVIDER, watchDeleteProvider);
// }
