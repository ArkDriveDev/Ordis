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

  const Schedule: React.FC = () => {
    const tabs = [
      {name:'Maps', tab:'maps',url: '/Ordis/app/Schedule/maps', icon:map},
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
        <Route exact path="/Ordis/app/schedule/maps" render={Maps} />
        <Route exact path="/Ordis/app/schedule">
          <Redirect to="/Ordis/app/schedule/maps" />
        </Route>

      </IonRouterOutlet>
      </IonTabs>
    </IonReactRouter>
    );
  };
  
  export default Schedule;