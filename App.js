import { createStackNavigator } from 'react-navigation';

import PeoplePage from './src/pages/PeoplePage';
import PeopleDetailPage from './src/pages/PeopleDetailPage';

import { capitalizeFirstLetter }  from './src/util';


export default createStackNavigator({
  'Main': {
      screen: PeoplePage
  },
  'PeopleDetail' : {
      screen: PeopleDetailPage,
      navigationOptions: ({ navigation }) => {
          const peopleName = capitalizeFirstLetter(navigation.state.params.people.name.first);
  

          return ({
            title: peopleName,
            headerTitleStyle:{
                color: 'white',
                fontSize: 30,
            }

          });
          
      },

    
  }




},  {
    navigationOptions: {
          title: 'Pessoas!',
          headerTintColor: 'white',
          headerStyle: {
              backgroundColor: '#4282EC',
              borderBottomWidth: 1,
              borderBottomColor: '#1E1B98'

          },
          headerTitleStyle:{
              color: 'white',
              fontSize: 30,
              textAlign: 'center',
              flexGrow: 1,

          }
    }

});
