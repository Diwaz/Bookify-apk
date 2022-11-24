import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { useEffect } from 'react';
import { useFonts } from 'expo-font';
import { Provider } from 'react-redux';
import 'expo-dev-client';
import store from './redux/store';
import Routes from './navigation/Routes';
import { getUserData } from './utils/utils';
import { saveUserData } from './redux/actions/auth';
import Toast from 'react-native-toast-message';




export default function App() {

  useEffect(()=>{
    (async()=>{
      const userData = await getUserData()
      console.log("user data App.js",userData)
      if(!!userData){
        saveUserData(userData)
      }  
    })();
  },[])

  const [loaded] = useFonts({
    RudaR: require('./assets/fonts/Ruda-Regular.ttf'),
    RudaB: require('./assets/fonts/Ruda-Bold.ttf')
  });
  
  if (!loaded) {
    return null;
  }

  return (
    
    <Provider store={store}>
      

      <Routes/>
      <Toast />
    </Provider>
  );
}


