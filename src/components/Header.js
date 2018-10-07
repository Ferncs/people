import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

/*
backgroud-color:
backgroundColor:
*/

const Header = (props) => (
	<View style={style.container}>
		<Text style={style.title}>{props.title}</Text>
	</View>
);




/stylesheet/
const style = StyleSheet.create( {
	container: {
	//[propriedades CSS] : [Valor]
		marginTop: 25,
		backgroundColor: '#6987DD',


		alignItems: 'center',
		justifyContent: 'center',
	},

	title: {
		fontSize: 50,
		color: '#fff',
	}
})

export default Header;

