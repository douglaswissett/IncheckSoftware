/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Button,
  StatusBar,
} from 'react-native';
import {Navigation} from 'react-native-navigation';

const Home: () => React$Node = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <Button
            onPress={() => {
              Navigation.push(props.componentId, {
                component: {
                  name: 'Settings',
                  options: {
                    topBar: {
                      title: {
                        text: 'Settings',
                      },
                    },
                  },
                },
              });
            }}
            title="Press to go to Settings"
            color="#841584"
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
