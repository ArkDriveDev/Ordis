import { 
    IonIcon, 
    IonLabel, 
    IonRouterOutlet, 
    IonTabBar, 
    IonTabButton, 
    IonTabs, 
  } from '@ionic/react';
  import { IonReactRouter } from '@ionic/react-router';
  import {map,mic} from 'ionicons/icons';
  import { Route, Redirect } from 'react-router';
  import routes from "../config/Routes";
  const Home: React.FC = () => {
    const tabs = [
      {name:'Maps', tab:'maps',url: '/Ordis/app/home/maps', icon:map},
      {name:'Voice Command', tab:'voiceCommand',url: '/Ordis/app/home/voiceCommand', icon:mic},
    ]
    return (
      <IonReactRouter>
      <IonTabs>
        <IonTabBar slot="bottom">

          {tabs.map((item, index) => (
            <IonTabButton key={index} tab={item.tab} href={item.url}>
              <IonIcon icon={item.icon} />
              <IonLabel>{item.name}</IonLabel>
            </IonTabButton>
          ))}
          
        </IonTabBar>S
      <IonRouterOutlet>

      {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              render={route.render}
              exact={route.exact}
            />
          ))}


        <Route exact path="/Ordis/app/home">
          <Redirect to="/Ordis/app/home/maps" />
        </Route>

      </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
    );
  };
  
  export default Home;