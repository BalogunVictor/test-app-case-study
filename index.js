import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {NavigationContainer} from '@react-navigation/native';
import 'react-native-gesture-handler';
import QueryClientProviderWrapper from './src/providers/queryclient';
import {store} from './src/store/store';
import {Provider} from 'react-redux';

const Main = () => (
  <NavigationContainer>
    <QueryClientProviderWrapper>
      <Provider store={store}>
        <App />
      </Provider>
    </QueryClientProviderWrapper>
  </NavigationContainer>
);

AppRegistry.registerComponent(appName, () => Main);
