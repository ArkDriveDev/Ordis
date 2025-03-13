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
import handleCommand from "../services/CommandList"; // Import the command handler

const VoiceCommand: React.FC = () => {
  const navigation = useIonRouter();
  const [command, setCommand] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);

  const handleVoiceCommand = (command: string) => {
    setCommand(command);
    alert(`Command received: ${command}`); // Debugging
    handleCommand(command, navigation); // Use the command handler
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
          <IonTitle>Voice Recognition</IonTitle>
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