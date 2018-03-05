import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { styles } from './styles';
import {
  Button,
  Platform,
  Text,
  View
} from 'react-native';
import { countUp } from '../../actions/counter';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Home extends Component {

  static propTypes = {
    countUp: PropTypes.func,
    count: PropTypes.number.isRequired,
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to React Native! + Redux
        </Text>
        <Text style={styles.instructions}>
          To get started, edit App.js
        </Text>
        <Text style={styles.instructions}>
          {instructions}
        </Text>
        <Button title='count up' onPress={() => this.props.countUp()} />
        <Text style={styles.instructions}>
          count:{this.props.count}
        </Text>
      </View>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.counter.count,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    countUp: () => dispatch(countUp()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);