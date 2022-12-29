import React, { useEffect } from 'react';
import { Linking, Platform, PushNotification } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {  ApolloProvider } from '@apollo/client';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

import Navigation from '~/navigation';
import { config } from '~/navigation/config';
import { apolloClient } from '~/api/apolloClient';

type IIOSLocationNotification = {
  aps: {
    alert: {
      title: string;
      body: string;
      txId: string;
    };
  };
}

const App = () => {
  useEffect(() => {
    if (Platform.OS !== 'ios' ) {
      return;
    }
    
    PushNotificationIOS.requestPermissions();

    PushNotificationIOS.addEventListener(
      'localNotification',
      onRemoteNotification,
    );

    return () => PushNotificationIOS.removeEventListener('localNotification');
  }, []);

  const onRemoteNotification = (notification: PushNotification) => {
    const {aps} = notification.getData() as IIOSLocationNotification;

    Linking.openURL(`testapp://transaction/${aps.alert.txId}`)
  };

  const linking = {
    prefixes: ['testapp://'],
    config,
  };


  return (
    <ApolloProvider client={apolloClient}>
      <NavigationContainer linking={linking}>
        <Navigation />
      </NavigationContainer>
      </ApolloProvider>
  );
};

export default App;
