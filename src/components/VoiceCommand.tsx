import React, { useState } from "react";
import { 
  IonButton,  
  IonText,
  IonButtons,
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  useIonRouter,
  IonRouterOutlet, 
 } from "@ionic/react";
 import {Route} from 'react-router';
import VoiceService from "../services/VoiceService";
import About from "../pages/About";

const VoiceCommand: React.FC = () => {
  const navigation = useIonRouter();
  const [command, setCommand] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);

  const handleVoiceCommand = (command: string) => {
    setCommand(command);
    // Add logic to handle specific commands
    if (command.includes("hello")) {
      alert("Hello! How can I help you?");
    } 
    else if(command.includes("about")) { 
      navigation.push('/Ordis/app/about','forward','replace');
    }
    else if (command.includes("time")) {
      alert(`The time is ${new Date().toLocaleTimeString()}`);
    } else {
      alert(`You said: ${command}`);
    }
  };

  const startListening = () => {
    setIsListening(true);
    VoiceService.startListening(handleVoiceCommand);
  };

  return (
    <IonPage>
       <IonHeader>
                <IonToolbar>
                  <IonButtons slot='start'>
                  </IonButtons>
                  <IonTitle>Voice Command</IonTitle>
                </IonToolbar>
        </IonHeader>
      <IonContent>
      <IonText>
          <p>Click the button and say something!</p>
        </IonText>
        <IonButton onClick={startListening} disabled={isListening}>
          {isListening ? "Listening..." : "Start Voice Command"}
        </IonButton>
        {command && <p>You said: <strong>{command}</strong></p>}

         <IonRouterOutlet id="main">
         <Route exact path="/Ordis/app/about" component={About} />
         </IonRouterOutlet>
      </IonContent>
    </IonPage>
  );
};

export default VoiceCommand;