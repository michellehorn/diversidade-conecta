import { Text, View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeScreen } from './src/pages/Home';
import { LinearGradient } from 'expo-linear-gradient';
import Candidate from './src/pages/Candidate';
import Company from './src/pages/Company';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer
      theme={{ colors: { background: 'transparent', border: 'transparent' } }}
    >
      <LinearGradient
        style={{
          position: 'relative',
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          flex: 1
        }}
        colors={[
          '#FE000041',
          '#FD8C0041',
          '#FFE50041',
          '#119F0B41',
          '#0644B341'
        ]}
      >
        <Tab.Navigator
          screenOptions={{
            tabBarActiveBackgroundColor: 'transparent',
            tabBarActiveTintColor: '#4c1131',
            tabBarInactiveBackgroundColor: 'transparent',
            tabBarInactiveTintColor: '#4c113155'
          }}
        >
          <Tab.Screen
            name='Home'
            component={HomeScreen}
            options={{
              tabBarIcon: makeIconRender('home'),
              headerStyle: {
                backgroundColor: 'transparent'
              },
              headerTintColor: 'transparent',
              headerTitleStyle: {
                fontWeight: 'bold'
              },
              headerBackgroundContainerStyle: {
                backgroundColor: 'transparent'
              }
            }}
          />
          <Tab.Screen
            name='Pessoa candidata'
            component={Candidate}
            options={{ tabBarIcon: makeIconRender('account-multiple-plus') }}
          />
          <Tab.Screen
            name='Empresa'
            component={Company}
            options={{ tabBarIcon: makeIconRender('briefcase') }}
          />
        </Tab.Navigator>
      </LinearGradient>
    </NavigationContainer>
  );
}

function makeIconRender(name) {
  return ({ color, size }) => (
    <MaterialCommunityIcons name={name} color={color} size={size} />
  );
}
