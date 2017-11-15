/*
Contributor: Yulin Zhou, Wenchi Tseng, Siyu Tan
*/
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
  Animated,
  Alert
} from 'react-native';
import MapView from 'react-native-maps'
import DeepLinking from 'react-native-deep-linking';
import ActionButton from './components/ActionButton';
import Geofence from 'react-native-expo-geofence';
import { Constants, Permissions, Notifications } from 'expo';
import RNLocalNotifications from 'react-native-local-notifications';
import { Button } from 'react-native-elements'
import { Icons } from 'react-native-elements'

const triggerPoint1 = require( './triggerPoints/triggerPoint1.js');
const morialtaCoor = require( './routes/route1.js');
const loftyCoor = require( './routes/route2.js');
const mylorCoor = require( './routes/route3.js');
const notonCoor = require( './routes/route4.js');
const styles = require('./styles.js');


//class for Route Morialta
 class morialtaRouteScreen extends Component {

   static navigationOptions = {
     title: 'MorialtaRoute',
   };
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
          title:'You are here',
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
  //ask for permissions to send local notification
  async componentDidMount() {
    let result = await Permissions.askAsync(Permissions.NOTIFICATIONS);
    if (Constants.lisDevice && result.status === 'granted') {
     console.log('Notification permissions granted.')
    }
  }
  //push notification
  getNotification() {
    const localNotification = {
      title: 'Fence 1',
      body: 'Turn left!',
      ios: {
        sound: true
      },
      android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true
      }
    };

    let t = new Date();
    t.setSeconds(t.getSeconds() + 10);
    const schedulingOptions = {
      time: t,
    };

    Notifications.scheduleLocalNotificationAsync(localNotification, schedulingOptions);
  }

  render() {
    return (
      <View style={styles.container}>
        <ActionButton title="Find me!" onPress={() => this.getAndUpdateLocation()} />
        <ActionButton title="Start!" onPress={() => this.getNotification()} />
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
              radius={ this.state.distance }
              strokeColor='transparent'
              fillColor="rgba(0, 0, 0, 0.2)"
            />
          ))}
          </MapView>
      </View>
    );
  }
}


//class for Lofty route
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
        title:'You are here',
        description:'You are here',
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
//class for Mylor Route
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

//class for Noton route
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

//class for the map menu screen
class MapsScreen extends React.Component {
  static navigationOptions = {
    title: 'Your Challenge',
  };
  constructor(props) {
    super(props);

  }
//render the view
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <View style={ styles.bg }>
          <Image source={require('./images/pic4.png')} style={styles.img} >
            <Button style={styles.button}
              backgroundColor = '#008B8B'
              underlayColor = 'transparent'
              fontWeight = 'bold'
              borderRadius = { 3 }
              title="Morialta Map >"
              onPress={() => navigate('morialtaRoute', { name: 'morialta map' })
              }>
            </Button>
        </Image>
        </View>
        <View style={styles.bg}>
          <Image source={require('./images/pic5.png')} style={styles.img}>
            <Button style={styles.button}
              backgroundColor = '#eb983f'
              underlayColor = 'transparent'
              fontWeight = 'bold'
              borderRadius = { 3 }
              title="Mylor Map >"
              onPress={() => navigate('mylorRoute', { name: 'mylor map' })
              }>
            </Button>
          </Image>
        </View>
        <View style={styles.bg}>
          <Image source={require('./images/pic3.png')} style={styles.img}>
            <Button style={styles.button}
             backgroundColor = '#118ab2'
             underlayColor = 'transparent'
             fontWeight = 'bold'
             borderRadius = { 3 }
             title="Lofty Map >"
             onPress={() => navigate('loftyRoute', { name: 'lofty map' })
             }>
            </Button>
          </Image>
        </View>
        <View style={styles.bg}>
          <Image source={require('./images/pic6.png')} style={styles.img}>
            <Button style={styles.button}
              backgroundColor = '#9b9b9b'
              borderRadius = { 3 }
              fontWeight = 'bold'
              title="Noton Map >"
              underlayColor = 'transparent'
              onPress={() => navigate('notonRoute', { name: 'noton map' })
              }>
           </Button>
         </Image>
        </View>
      </View>
    );
  }
}
/*
ref: https://facebook.github.io/react-native/docs/animations.html#interpolation
*/
//class for special effect displayed in homepage
class FadeInView extends React.Component {
  state = {
    fadeAnim: new Animated.Value(0),
  }
//set the timing
  componentDidMount() {
    Animated.timing(
      this.state.fadeAnim,
      {
        toValue: 1,
        duration: 3000,
      }
    ).start();
  }

  render() {
    let { fadeAnim } = this.state;

    return (
      <Animated.View
        style={{
          opacity: fadeAnim,
        }}
      >
      {this.props.children}
      </Animated.View>
    );
  }
}
//class for home page
class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  constructor(props) {
    super(props);

  }
//external linking to Everydayhero website(The organization does not own its own App yet)
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
        <View style={styles.home}>
          <Image style={styles.absolute}
            source={require('./images/home.png')}
            blurRadius={ 4 }
          />
            <FadeInView style={styles.aniview}>
              <Text style={styles.text}>Your Journey</Text>
              <Text style={styles.text}>Starts Here</Text>
            </FadeInView>
            <Button
              style={styles.homebutton }
              title='To Everydayhero'
              backgroundColor= '#20B2AA'
              borderRadius= { 70 }
              fontSize= '18'
              fontWeight = '500'
              underlayColor = 'transparent'
              onPress={() => Linking.openURL('https://everydayhero.com/au/sign-in')}
            />
            <Button
              style={styles.homebutton }
              borderRadius={ 70 }
              title="Our Maps"
              fontSize= '18'
              fontWeight = '500'
              backgroundColor= '#2F4F4F'
              underlayColor = 'transparent'
              onPress={() => navigate('Maps', { name: 'map options' })}
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
