import React, { Component } from 'react';
import {
  StackNavigator,
} from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Linking,
} from 'react-native';
import MapView from 'react-native-maps'
import DeepLinking from 'react-native-deep-linking';
import ActionButton from './components/ActionButton';
import { Button } from 'react-native-elements'

const morialtaCoor = require( './routes/route1.js');
const loftyCoor = require( './routes/route2.js');
const mylorCoor = require( './routes/route3.js');
const notonCoor = require( './routes/route4.js');
const styles = require('./styles.js');

 class morialtaRouteScreen extends Component {
  static navigationOptions = {
    title: 'MorialtaRoute',
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -34.928534,
        longitude: 138.599854,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers:[{
        latlng:{latitude: -34.928534,
        longitude: 138.599854,},
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        title:'you are here',
        description:'you are here',
      }],

  }
}
  /**
   * Ref: https://facebook.github.io/react-native/docs/geolocation.html
   */
  getAndUpdateLocation() {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        const region = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        const marker = [{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          title:'you are here',
          description:'you are here',
        }];
        this.setState({
          region: {
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          markers:[{
            latlng:{latitude: data.coords.latitude,
            longitude: data.coords.longitude,},
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            title:'you are here',
            description:'you are here',
          }],

        });
      },
      (err) => {
        console.log('err', err);
      },
      {}
    );
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActionButton title="Find me!" onPress={() => this.getAndUpdateLocation()} />
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={(region) => this.onRegionChange(region)}
          >
         {this.state.markers.map(marker => (
         <MapView.Marker
         coordinate={marker.latlng}
         title={marker.title}
         description={marker.description}
        />
      ))}
        {morialtaCoor.coor.polylines.map(polyline => (
        <MapView.Polyline
          key={polyline.id}
          coordinates={polyline.coordinates}
          strokeColor="blue"
          fillColor="red"
          strokeWidth={2}
          />
        ))}
        </MapView>
      </View>
    );
  }
}



class loftyRouteScreen extends Component {
  static navigationOptions = {
    title: 'LoftyRoute',
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -34.928534,
        longitude: 138.599854,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers:[{
        latlng:{latitude: -34.928534,
        longitude: 138.599854,},
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        title:'you are here',
        description:'you are here',
      }],

  }
}
  /**
   * Ref: https://facebook.github.io/react-native/docs/geolocation.html
   */
  getAndUpdateLocation() {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        const region = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        const marker = [{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          title:'you are here',
          description:'you are here',
        }];
        this.setState({
          region: {
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          markers:[{
            latlng:{latitude: data.coords.latitude,
            longitude: data.coords.longitude,},
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            title:'you are here',
            description:'you are here',
          }],

        });
      },
      (err) => {
        console.log('err', err);
      },
      {}
    );
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActionButton title="Find me!" onPress={() => this.getAndUpdateLocation()} />
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={(region) => this.onRegionChange(region)}
          >
         {this.state.markers.map(marker => (
         <MapView.Marker
         coordinate={marker.latlng}
         title={marker.title}
         description={marker.description}
         />
     ))}
        {loftyCoor.coor.polylines.map(polyline => (
        <MapView.Polyline
          key={polyline.id}
          coordinates={polyline.coordinates}
          strokeColor="blue"
          fillColor="red"
          strokeWidth={2}
          />
      ))}
        </MapView>
      </View>
    );
  }
}

class mylorRouteScreen extends Component {
  static navigationOptions = {
    title: 'MylorRoute',
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -34.928534,
        longitude: 138.599854,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers:[{
        latlng:{latitude: -34.928534,
        longitude: 138.599854,},
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        title:'you are here',
        description:'you are here',
      }],

  }
}
  /**
   * Ref: https://facebook.github.io/react-native/docs/geolocation.html
   */
  getAndUpdateLocation() {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        const region = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        const marker = [{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          title:'you are here',
          description:'you are here',
        }];
        this.setState({
          region: {
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          markers:[{
            latlng:{latitude: data.coords.latitude,
            longitude: data.coords.longitude,},
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            title:'you are here',
            description:'you are here',
          }],

        });
      },
      (err) => {
        console.log('err', err);
      },
      {}
    );
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActionButton title="Find me!" onPress={() => this.getAndUpdateLocation()} />
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={(region) => this.onRegionChange(region)}
          >
         {this.state.markers.map(marker => (
         <MapView.Marker
         coordinate={marker.latlng}
         title={marker.title}
         description={marker.description}
         />
       ))}
        {mylorCoor.coor.polylines.map(polyline => (
        <MapView.Polyline
          key={polyline.id}
          coordinates={polyline.coordinates}
          strokeColor="blue"
          fillColor="red"
          strokeWidth={2}
          />
        ))}
        </MapView>
      </View>
    );
  }
}


class notonRouteScreen extends Component {
  static navigationOptions = {
    title: 'NotonRoute',
  };

  constructor(props) {
    super(props);

    this.state = {
      region: {
        latitude: -34.928534,
        longitude: 138.599854,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      },
      markers:[{
        latlng:{latitude: -34.928534,
        longitude: 138.599854,},
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        title:'you are here',
        description:'you are here',
      }],

  }
}
  /**
   * Ref: https://facebook.github.io/react-native/docs/geolocation.html
   */
  getAndUpdateLocation() {
    navigator.geolocation.getCurrentPosition(
      (data) => {
        const region = {
          latitude: data.coords.latitude,
          longitude: data.coords.longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        };
        const marker = [{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
          title:'you are here',
          description:'you are here',
        }];
        this.setState({
          region: {
            latitude: data.coords.latitude,
            longitude: data.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          },
          markers:[{
            latlng:{latitude: data.coords.latitude,
            longitude: data.coords.longitude,},
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
            title:'you are here',
            description:'you are here',
          }],

        });
      },
      (err) => {
        console.log('err', err);
      },
      {}
    );
  }

  onRegionChange(region) {
    this.setState({ region });
  }

  render() {
    return (
      <View style={styles.container}>
        <ActionButton title="Find me!" onPress={() => this.getAndUpdateLocation()} />
        <MapView
          style={styles.map}
          region={this.state.region}
          onRegionChange={(region) => this.onRegionChange(region)}
          >
         {this.state.markers.map(marker => (
         <MapView.Marker
         coordinate={marker.latlng}
         title={marker.title}
         description={marker.description}
         />
          ))}
          {notonCoor.coor.polylines.map(polyline => (
        <MapView.Polyline
          key={polyline.id}
          coordinates={polyline.coordinates}
          strokeColor="blue"
          fillColor="red"
          strokeWidth={2}
          />
        ))}
        </MapView>
      </View>
    );
  }
}


class MapsScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Challenge',
  };
  constructor(props) {
    super(props);

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={styles.bg}>
          <Image source={require('./images/pic4.png')} style={styles.img} >
          <Button style={styles.button}
            backgroundColor = '#008B8B'
            underlayColor = 'transparent'
            title="Morialta Map"
            onPress={() =>
              navigate('morialtaRoute', { name: 'morialta map' })
            }>
          </Button>
        </Image>
        </View>
        <View style={styles.bg}>
          <Image source={require('./images/pic5.png')} style={styles.img}>
          <Button style={styles.button}
            backgroundColor = '#eb983f'
            underlayColor = 'transparent'
            title="Mylor Map"
            onPress={() =>
              navigate('mylorRoute', { name: 'mylor map' })
            }>
          </Button>
          </Image>
        </View>
        <View style={styles.bg}>
          <Image source={require('./images/pic3.png')} style={styles.img}>
          <Button style={styles.button}
           backgroundColor = '#118ab2'
           underlayColor = 'transparent'
           title="Lofty Map"
           onPress={() =>
             navigate('loftyRoute', { name: 'lofty map' })
           }>
          </Button>
          </Image>
        </View>
        <View style={styles.bg}>
          <Image source={require('./images/pic6.png')} style={styles.img}>
          <Button style={styles.button}
            backgroundColor = '#9b9b9b'
            title="Noton Map"
            underlayColor = 'transparent'
            onPress={() =>
              navigate('notonRoute', { name: 'noton map' })
            }>
         </Button>
         </Image>
        </View>
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props);

  }

  componentDidMount(){   
     DeepLinking.addScheme('https://');
    Linking.addEventListener('url', this.handleUrl);
 
    DeepLinking.addRoute('/www.google.com.au', (response) => {
      // example://test 
      this.setState({ response });
    });
 
    Linking.getInitialURL().then((url) => {
      if (url) {
        Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));}

componentWillUnmount() {
    Linking.removeEventListener('url', this.handleUrl);
  }
 
  handleUrl = ({ url }) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        DeepLinking.evaluateUrl(url);
      }
    });
  }



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.home }>

          <Button
            title='Go to Everydayhero'
            backgroundColor= '#20B2AA'
            underlayColor = 'transparent'
            onPress={() =>
            Linking.openURL('https://everydayhero.com/au/sign-in')}
            />
            <Button style={ styles.homebutton }
              title="Check Our Maps"
              backgroundColor= '#2F4F4F'
              underlayColor = 'transparent'
              onPress={() =>
              navigate('Maps', { name: 'map options' })}
            />

      </View>


    );
  }
}

export const Nav = StackNavigator({

  Home: { screen: HomeScreen },
  Maps: { screen: MapsScreen },
  morialtaRoute:{screen:morialtaRouteScreen},
  loftyRoute:{ screen: loftyRouteScreen},
  mylorRoute: { screen: mylorRouteScreen },
  notonRoute:{screen: notonRouteScreen},

});

export default class App extends Component {
  render() {
    return <Nav />;
  }
}


AppRegistry.registerComponent('App', () => App);
