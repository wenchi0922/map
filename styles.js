import { Dimensions } from 'react-native'

const React = require('react-native')
const {StyleSheet} = React
const constants = {
  actionColor: '#24CE84'
};

const styles = StyleSheet.create({
  map: {
    flex:1
  },
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  },
  home: {
    paddingTop: 425,
    flexDirection: 'row',
    justifyContent: 'space-around'
	},
  homebutton: {
    marginTop:10,
    paddingTop:15,
    paddingBottom:15,
    marginLeft:30,
    marginRight:30,
    borderRadius: 100,
    marginTop: 10
  },
  bg: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1.25,
    alignItems: 'center',
    height: 126,
  },
  img: {
    flex: 1,
    alignSelf: 'stretch',
    width: null
  },
  listview: {
    flex: 1,
  },
  button: {
    width: 150,
    height: 50
  },
  homebutton: {
    width: 150,
    height: 50
  },
  li: {
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 14,
    paddingBottom: 16,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  liContainer: {
    flex: 2,
  },
  liText: {
    color: '#333',
    fontSize: 16,
  },
  navbar: {
    alignItems: 'center',
    backgroundColor: '#fff',
    borderBottomColor: '#eee',
    borderColor: 'transparent',
    borderWidth: 1,
    justifyContent: 'center',
    height: 44,
    flexDirection: 'row'
  },
  navbarTitle: {
    color: '#444',
    fontSize: 16,
    fontWeight: "500"
  },
  center: {
    textAlign: 'center',
  },
  actionText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  action: {
    backgroundColor: constants.actionColor,
    borderColor: 'transparent',
    borderWidth: 1,
    paddingLeft: 16,
    paddingTop: 14,
    paddingBottom: 16,
  },
  notificationText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 25,
  },
})

module.exports = styles
module.exports.constants = constants;
