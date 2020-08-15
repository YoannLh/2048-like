import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

class ANumber extends React.Component {

	constructor() {
		super();
		this.state = {

		}
	}

	render() {

		return (
			<View style={styles.number}>
				<View style={styles.caseNumber}>
					<Text style={styles.textNumber}>2</Text>
				</View>
			</View>
		)
	}
}

export default ANumber;

const styles = StyleSheet.create({
	number: {
		display: 'flex',
		width: 77,
  		height: 77,
  		backgroundColor: 'orange',
  		borderRadius: 6,
  		margin: 5.25
	},
	caseNumber: {
		alignItems: 'center',
		marginTop: 14
	},
	textNumber: {
		fontSize: 40,
		fontWeight: 'bold',
		color: 'white'
	}
})