import React from 'react';
import Routes from './routes';
import {Provider} from 'react-redux';
import {store} from './redux/index';
import FlashMessage from 'react-native-flash-message';
import {LogBox} from 'react-native';
import SQLite from 'react-native-sqlite-storage';
export  const db = SQLite.openDatabase({ name: 'mydb.db', location: 'default', key: 'encryptionKey',
encrypted: true, });
LogBox.ignoreAllLogs(true);
export default function App() {

  return (
    <Provider store={store}>
      <Routes />
      <FlashMessage position="bottom" icon="auto" />
    </Provider>
  );
}
