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
  TouchableOpacity,
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
            <Text>Counter: {props.counter}</Text>
            <TouchableOpacity
              onPress={() => store.dispatch({type: 'INCREMENT'})}>
              <Text>Increment</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => store.dispatch({type: 'DECREMENT'})}>
              <Text>Decrement</Text>
            </TouchableOpacity>
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
