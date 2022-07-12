/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView
} from 'react-native';
import ChatList from './src/screens/ChatList';
const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ChatList />
    </SafeAreaView>
  );
};

export default App;
