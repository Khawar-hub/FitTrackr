import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import {persistor, store} from './redux/index';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
import Toast from "react-native-toast-message";
import { PersistGate } from 'redux-persist/integration/react';
export  const db = SQLite.openDatabase({ name: 'mydb.db', location: 'default', key: 'encryptionKey',
encrypted: true, });
LogBox.ignoreAllLogs(true);
export default function App() {

  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
      <Routes />
      <FlashMessage position="bottom" icon="auto" />
      <Toast/>
      </PersistGate>
    </Provider>
  );
}
