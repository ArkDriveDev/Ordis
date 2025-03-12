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
  useIonRouter
 } from "@ionic/react";
import VoiceService from "../services/VoiceService";

const VoiceCommand: React.FC = () => {
  const [command, setCommand] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);

  const handleVoiceCommand = (command: string) => {
    setCommand(command);
   alert(`Command received:" ${command}`); // Debugging
  
    if (command.includes("helloooo")) {
      alert("Hello! How can I help you?");
    } 
    else if (command.includes("about")) { 
      window.location.href = "/Ordis/app/about";
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
                  <IonTitle>Voice Recogniton</IonTitle>
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
      </IonContent>
    </IonPage>
  );
};

export default VoiceCommand;