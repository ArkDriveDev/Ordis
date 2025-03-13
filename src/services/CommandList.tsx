// src/services/CommandList.tsx
import { useIonRouter } from "@ionic/react";

const CommandList = (command: string, navigation: ReturnType<typeof useIonRouter>) => {
  if (command.includes("hello")) {
    alert("Hello! How can I help you?");
  } 
  else if (command.includes("about")) { 
    navigation.push('/Ordis/app/about', 'forward', 'replace');
  }
  else if (command.includes("time")) {
    alert(`The time is ${new Date().toLocaleTimeString()}`);
  } else {
    alert(`You said: ${command}`);
  }
};

export default CommandList ;