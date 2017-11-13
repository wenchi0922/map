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
  Button,
  Linking
} from 'react-native';
import { MKColor, MKButton } from 'react-native-material-kit'
import MapView from 'react-native-maps'
import DeepLinking from 'react-native-deep-linking';
import ActionButton from './components/ActionButton';
import Geofence from 'react-native-expo-geofence';
import { Constants, Permissions, Notifications } from 'expo';

const morialtaCoor = require( './routes/route1.js');
const loftyCoor = require( './routes/route2.js');
const mylorCoor = require( './routes/route3.js');
const notonCoor = require( './routes/route4.js');
const styles = require('./styles.js');

const triggerPoint1 = require( './triggerPoints/triggerPoint1.js');


class morialtaRouteScreen extends Component {

  currentPoint = { latitude : -34.89680   , longitude : 138.69200  };

  getByProximity() {
        var pos = this.currentPoint;
        var result = Geofence.filterByProximity(triggerPoint1.Points[0], pos, this.state.distance/1000);
        return result; // returns points that are in the fence
  }

  getDistance() {
        var pos = this.currentPoint;
        var distance = Geofence.distanceInKM(triggerPoint1.Points[0], pos);
        return distance;  // in km
  }

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
      distance: 200,  //Siyu: 200 meters
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
        {this.getByProximity() ?
          <Text style={styles.notificationText}> You are in Fence 1! </Text> :
          <Text style={styles.notificationText}> You are not in Fence 1! </Text>
        }
        <Text style={styles.notificationText}> You are {this.getDistance()} km away from the center of Fence 1.</Text>
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

        {triggerPoint1.Points.map( x => (
          <MapView.Circle
            center={x}
            radius={this.state.distance}
            strokeColor='transparent'
            fillColor="rgba(0, 0, 0, 0.2)"
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
    title: 'Maps',
  };
  constructor(props) {
    super(props);

  }

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.container} >
      <Image source={require('./images/flinders.png')}  style={styles.backgroundImage}>


      <Button style={styles.button}
        title="Go to Morialta Map"
        color='cornflowerblue'
        onPress={() =>
          navigate('morialtaRoute', { name: 'morialta map' })
        }>
      </Button>
      <Button
       title="Go to Mylor Map"
       onPress={() =>
         navigate('mylorRoute', { name: 'mylor map' })
       }
        />
        <Button
       title="Go to Lofty Map"
       onPress={() =>
         navigate('loftyRoute', { name: 'lofty map' })
       }
        />

        <Button
       title="Go to Noton Map"
       onPress={() =>
         navigate('notonRoute', { name: 'noton map' })
       }
        />
        </Image>
      </View>


    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props) {
    super(props);

  }

  componentDidMount(){
     DeepLinking.addScheme('https://');
    Linking.addEventListener('url', this.handleUrl);

    DeepLinking.addRoute('/www.google.com.au', (response) => {
      // example://test
      this.setState({ response });
    });



    Linking.getInitialURL().then((url) => {
      if (url) {
        Linking.openURL(url);
      }
    }).catch(err => console.error('An error occurred', err));}

componentWillUnmount() {
    Linking.removeEventListener('url', this.handleUrl);
  }

  handleUrl = ({ url }) => {
    Linking.canOpenURL(url).then((supported) => {
      if (supported) {
        DeepLinking.evaluateUrl(url);
      }
    });
  }



  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={ styles.container} >
      <Image source={require('./images/flinders.png')}  style={styles.backgroundImage}>
      <Button
       title="Login to everyday hero"
       onPress={() =>
       Linking.openURL('https://everydayhero.com/au/sign-in')}
        />
      <Button style={styles.button}
        title="Find your maps"
        color='cornflowerblue'
        onPress={() =>
          navigate('Maps', { name: 'map options' })
        }>
      </Button>
        </Image>
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
