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
    alignItems: 'center',
    paddingTop: 90,
	},
  bg: {
    alignItems: 'center',
    height: 122,
  },
  img: {
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  listview: {
    flex: 1,
  },
  homebutton: {
    textAlign: 'center'
  },
  button: {
    backgroundColor: '#fff',
    fontSize: 35
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
