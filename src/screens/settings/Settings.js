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
  View,
  StyleSheet,
  Button,
  Text,
  StatusBar,
} from 'react-native';
import {connect} from 'react-redux';
import {compose} from 'redux';
import store from '../../store';
import {withStore} from '../../hoc';

const Settings: () => React$Node = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView contentContainerStyle={styles.container}>
          <View>
            <Text testID="counter">Counter: {props.counter}</Text>
            <Button
              onPress={() => store.dispatch({type: 'INCREMENT'})}
              title="Increment"
              color="#841584"
            />
            <Button
              onPress={() => store.dispatch({type: 'DECREMENT'})}
              title="Decrement"
              color="#841584"
            />
          </View>
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

const mapStateToProps = (state) => ({
  counter: state,
});

const mapDispatchToProps = (dispatch) => ({});

const enhancers = compose(
  withStore,
  connect(mapStateToProps, mapDispatchToProps),
);

export default enhancers(Settings);
