import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

class Top extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		return (
			<View style={styles.container}>
				<Text>2048</Text>
			</View>
		)
	}
}

export default Top;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    height: 20,
    width: '100%',
    backgroundColor: 'rgba(85, 85, 85, 0.1)',
    alignItems: 'center',
    marginTop: 20
  },
});
