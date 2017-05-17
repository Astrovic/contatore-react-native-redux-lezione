import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

const Contatore = props => (
  <View style={styles.container}>
    <Text>Contatore</Text>
    <Text style={styles.conto}>Conto: {props.conto}</Text>
    <TouchableOpacity
      onPress={props.increment}
      style={styles.button}
    >
      <Text style={styles.text}>+</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={props.decrement}
      style={styles.button}
    >
      <Text style={styles.text}>-</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={props.reset}
      style={styles.button}
    >
      <Text style={styles.text}>0</Text>
    </TouchableOpacity>
  </View>
);

Contatore.propTypes = {
  conto: PropTypes.number,
  increment: PropTypes.func,
  decrement: PropTypes.func,
  reset: PropTypes.func
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    alignItems: 'center',
    width: 50,
    margin: 10,
    padding: 10,
    backgroundColor: 'lightcoral'
  },
  conto: {
    margin: 20,
    fontSize: 24
  },
  text: {
    fontSize: 20
  }
});

export default Contatore;
