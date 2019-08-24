import React, { Component } from 'react';
import { Image ,Text, View,Alert,StyleSheet,TextInput } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from "react-navigation";
import LinearGradient from 'react-native-linear-gradient';
import { Button } from 'react-native-elements';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {user: '',pass: ''};
  }
  static navigationOptions = {
    header: null
  };
   _onPressLogin  = () =>{
    if(this.state.user=='admin' && this.state.pass=='secret') {
      this.props.navigation.dispatch(StackActions.reset({
        index: 0,
        actions: [
          NavigationActions.navigate({ routeName: 'Details' })
        ],
      }))
        // Alert.alert("Login success!") 
        // this.setState({ user: '' })
        // this.setState({ pass: '' })

    }else{
        Alert.alert("Login failed")
        this.setState({pass:''})
    }
  };
  render() {
    return (
      <View
        style={{
          flexDirection: 'column',
          flex:1
        }}>
        <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}} colors={['#0A3FD8', '#2B235B']} style={styles.linearGradient} />
        <View style={{backgroundColor: '#FFFFFF', flex: 5}} />
        <View style={styles.tengah} >
          <View style={styles.user}>
            <TextInput
              style={{height: 40}}
              placeholder="username"
              onChangeText={(user) => this.setState({user})}
              value={this.state.user}
            />
          </View>
          <View style={styles.pass}>
            <TextInput
              secureTextEntry={true}
              style={{height: 40}}
              placeholder="password"
              onChangeText={(pass) => this.setState({pass})}
              value={this.state.pass}
            />
          </View>
          <LinearGradient start={{x: 0.0, y: 0.0}} end={{x: 0.0, y: 1.0}} colors={['#0041EA', '#AF57AC']} style={styles.gradienbutton}>
          <Button title="Login" type="clear" onPress={this._onPressLogin} titleStyle={{ color: 'white' }} />
          </LinearGradient>
          <View style={styles.signup}>
            <Text>or create<Text> new accoount</Text></Text>
          </View>
        </View>
      </View>
    );
  }
}
class DetailsScreen extends React.Component {
  render() {
    return (
      <View>
        <Text>Details Screen</Text>
      </View>
    );
  }  
}
const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Details: {
    screen: DetailsScreen,
  },
}, {
    initialRouteName: 'Home',
});

export default createAppContainer(AppNavigator);
const styles = StyleSheet.create({
  buttonContainer: {
    margin: 20,
  },
  buttonKeDua:{
    margin: 0
  },
  linearGradient: {
    flex: 4,
  },
  tengah:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: '20%',
    height:300,
    width:300,
    backgroundColor: '#FFFFFF',
    elevation: 3,
  },
  user:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: '80%',
    height:40,
    width:200,
    backgroundColor: '#FFFFFF',
    elevation: 0.5,
  },
  pass:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: '55%',
    height:40,
    width:200,
    backgroundColor: '#FFFFFF',
    elevation: 0.5,
  },
  gradienbutton:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: '20%',
    height:40,
    width:200,
    borderRadius:20,
  },
  signup:{
    position: 'absolute',
    alignSelf: 'center',
    bottom: '5%',
  },
});

//https://dudu.web.id/2019/01/react-native-login-layout/
