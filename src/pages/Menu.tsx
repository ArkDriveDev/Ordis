import { 
    IonButton,
    IonButtons,
      IonContent, 
      IonHeader, 
      IonIcon, 
      IonItem, 
      IonMenu, 
      IonMenuButton, 
      IonMenuToggle, 
      IonPage, 
      IonRouterOutlet, 
      IonTitle, 
      IonToolbar,
      IonText,
      useIonRouter,
      IonPopover
  } from '@ionic/react'
import React, { useState } from "react";
import {homeOutline, logOutOutline, rocketOutline} from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import Home from './Home';
import About from './About';
import VoiceService from "../services/VoiceService";
import CommandList from "../services/CommandList"; 
import Aicom from '../components/images/AIf.gif'; 

  const Menu: React.FC = () => {
    const navigation = useIonRouter();
    const [command, setCommand] = useState<string>("");
    const [isListening, setIsListening] = useState<boolean>(false);
  
    const handleVoiceCommand = (command: string) => {
      setCommand(command);
      alert(`Command received: ${command}`); // Debugging
      CommandList(command, navigation); // Use the command handler
    };
  
    const startListening = () => {
      setIsListening(true);
      VoiceService.startListening(handleVoiceCommand);
    };
    const path = [
        {name:'Home', url: '/Ordis/app/home', icon: homeOutline},
        {name:'About', url: '/Ordis/app/about', icon: rocketOutline},
    ]

    return (
        <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu Content</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        {path.map((item,index) =>(
                            <IonMenuToggle key={index}>
                                <IonItem routerLink={item.url} routerDirection="forward">
                                    <IonIcon icon={item.icon} slot="start"></IonIcon>
                                    {item.name}
                                </IonItem>
                            </IonMenuToggle>
                        ))}

                <IonText>
                    <p>Click the button and say something!</p>
                 </IonText>
                 <img
                    src={Aicom}
                    onClick={startListening} 
                style={{ cursor: 'pointer' }}
      />

        <IonButton routerLink="/Ordis" routerDirection="back" expand="full">
                            <IonIcon icon={logOutOutline} slot="start"> </IonIcon>
                        Logout
                        </IonButton>
        </IonContent>
      </IonMenu>
      <IonPage id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonMenuButton></IonMenuButton>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonRouterOutlet id="main">
                    <Route exact path="/Ordis/app/home" component={Home} />
                    <Route exact path="/Ordis/app/about" component={About} />

                    <Route exact path="/Ordis/app">
                        <Redirect to="/Ordis/app/home"/>
                    </Route>
                </IonRouterOutlet>
        </IonContent>
      </IonPage>
    </>
    );
  };
  
  export default Menu;