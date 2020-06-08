/**
 * @format
 */
import {Navigation} from 'react-native-navigation';
import Home from './src/screens/home/Home';
import Settings from './src/screens/settings/Settings';

Navigation.registerComponent('Home', () => Home);
Navigation.registerComponent('Settings', () => Settings);

Navigation.events().registerAppLaunchedListener(() => {
  Navigation.setRoot({
    root: {
      stack: {
        children: [
          {
            component: {
              name: 'Home',
              options: {
                topBar: {
                  title: {
                    text: 'Home',
                  },
                },
              },
            },
          },
        ],
      },
    },
  });
});
