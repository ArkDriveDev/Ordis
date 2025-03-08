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
  import Maps from './home.tabs/Maps';
  import VoiceCom from './home.tabs/VoiceCom';
  const Home: React.FC = () => {
    const tabs = [
      {name:'Maps', tab:'maps',url: '/Ordis/app/home/maps', icon:map},
      {name:'Voice Command', tab:'voiceCom',url: '/Ordis/app/home/voiceCom', icon:mic},
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
          
        </IonTabBar>
      <IonRouterOutlet>

        <Route exact path="/Ordis/app/home/maps" render={Maps} />
        <Route exact path="/Ordis/app/home/voiceCom" component={VoiceCom} />


        <Route exact path="/Ordis/app/home">
          <Redirect to="/Ordis/app/home/maps" />
        </Route>

      </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
    );
  };
  
  export default Home;