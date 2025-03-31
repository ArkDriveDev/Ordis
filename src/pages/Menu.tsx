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
      useIonRouter,
      IonPopover,
  } from '@ionic/react'
import React, { useState, useEffect} from "react";
import {logOutOutline, mapOutline, person, rocketOutline} from 'ionicons/icons';
import { Redirect, Route } from 'react-router';
import About from './About';
import VoiceService from "../services/VoiceService";
import CommandList from "../services/CommandList"; 
import Aicom from '../components/images/Ordiss.gif'; 
import Nav from './Nav';
import Account from './Account';
import Schedule from './Schedule';

  const Menu: React.FC = () => {
    const navigation = useIonRouter();
    const [command, setCommand] = useState<string>("");
    const [isListening, setIsListening] = useState<boolean>(false);
    const [showFirstPopover, setShowFirstPopover] = useState(false);
    const [showSecondPopover, setShowSecondPopover] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);
  
    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (showFirstPopover) {
        timer = setTimeout(() => {
          setShowFirstPopover(false);
        }, 2000); 
      }
      return () => clearTimeout(timer); 
    }, [showFirstPopover]);
  
   
    useEffect(() => {
      let timer: NodeJS.Timeout;
      if (showSecondPopover) {
        timer = setTimeout(() => {
          setShowSecondPopover(false);
        }, 2000); 
      }
      return () => clearTimeout(timer); 
    }, [showSecondPopover]);

    const speakText = (text: string, onFinish: () => void) => {
      if ('speechSynthesis' in window) {
        setIsSpeaking(true);
        const utterance = new SpeechSynthesisUtterance(text);
        
        utterance.voice = speechSynthesis.getVoices()[0]; 
        utterance.rate = 1;
        utterance.pitch = 1;
       
        utterance.onend = () => {
          setIsSpeaking(false);
          onFinish(); 
        };
        
        speechSynthesis.speak(utterance);
      } else {
        console.error('Text-to-speech is not supported in this browser.');
      }
    };
    

    const handleVoiceCommand = (command: string) => {
      setCommand(command);
      setShowFirstPopover(false);
      setShowSecondPopover(true);

      const responseText1 = `You said: ${command}. How can I assist you further?`;
      speakText(responseText1,() =>{});
      
      CommandList(command, navigation);
    };
  
    const startListening = () => {
      const responseText2 = `Hi I'm Suda! What can I do for you?`;

      speakText(responseText2, () => {
        setShowFirstPopover(true);
        setIsListening(true);
        VoiceService.startListening(handleVoiceCommand);
      });
    };
    const path = [
        {name:'Navigation', url: '/Ordis/app/nav', icon: mapOutline},
        {name:'About', url: '/Ordis/app/about', icon: rocketOutline},
        {name:'Account', url: '/Ordis/app/account', icon: person},
       
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
                     <IonPopover
                        isOpen={showSecondPopover}
                        onDidDismiss={() => setShowSecondPopover(false)}
                        trigger="popover-trigger" 
                       >
                        <IonContent class="ion-padding">
                          <p>Command received: {command}</p>
                        </IonContent>
                     </IonPopover>
                     <IonPopover trigger="click-trigger" triggerAction="click">
                        <IonContent class="ion-padding">Hi I'm Suda! what can I do for you?</IonContent>
                      </IonPopover>

                      <p>Click Suda to listen to your command:</p>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '40vh' }}>
                    <img
                      id="click-trigger"
                      src={Aicom}
                      onClick={startListening} 
                      style={{ cursor: 'pointer' }}
                    />
                    </div>
                     <button id="command-trigger" style={{ display: 'none' }}></button>
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
            <IonMenuButton/>
            </IonButtons>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
        <IonRouterOutlet id="main">
                    <Route exact path="/Ordis/app/schedule" component={Schedule} />
                    <Route exact path="/Ordis/app/nav" component={Nav} />
                    <Route exact path="/Ordis/app/about" component={About} />
                    <Route exact path="/Ordis/app/account" component={Account} />

                    <Route exact path="/Ordis/app">
                        <Redirect to="/Ordis/app/nav"/>
                    </Route>
        </IonRouterOutlet>
        </IonContent>
      </IonPage>
    </>
    );
  };
  
  export default Menu;