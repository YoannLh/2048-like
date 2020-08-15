import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import ANumber from '../Components/ANumber';

// faire une boucle pour les cases

class Grid extends React.Component {
	constructor() {
		super();
		this.state = {

		}
	}
	render() {
		return (
			<View style={styles.grid}>
				<ANumber />
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
				<View style={styles.case}></View>
			</View>
		)
	}
}

export default Grid;

const styles = StyleSheet.create({
  grid: {
  	display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    backgroundColor: 'rgba(85,85,85,0.8)',
    alignItems: 'center',
  	width: 360,
  	height: 360,
  	borderRadius: 6,
  	padding: 5
  },
  case: {
  	width: 77,
  	height: 77,
  	backgroundColor: 'rgb(155,155,155)',
  	borderRadius: 6,
  	margin: 5.25
  }
});
