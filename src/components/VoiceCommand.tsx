import React, { useState } from "react";
import { IonButton, IonContent, IonPage, IonText } from "@ionic/react";
import VoiceService from "../services/VoiceService";

const VoiceCommand: React.FC = () => {
  const [command, setCommand] = useState<string>("");
  const [isListening, setIsListening] = useState<boolean>(false);

  const handleVoiceCommand = (command: string) => {
    setCommand(command);
    // Add logic to handle specific commands
    if (command.includes("hello")) {
      alert("Hello! How can I help you?");
    } else if (command.includes("time")) {
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
      <IonContent>
        <IonText>
          <h1>_</h1>
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