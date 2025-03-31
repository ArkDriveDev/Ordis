import { useIonRouter } from "@ionic/react";
const CommandList = (command: string, navigation: ReturnType<typeof useIonRouter>) => {
  if (command.includes("hello")) {
    alert("Hello! How can I help you?");
  } 
  else if (command.includes("about")) { 
    navigation.push('/Ordis/app/about', 'forward', 'replace');
  }
  else if (command.includes("nav")) { 
    navigation.push('/Ordis/app/nav', 'forward', 'replace');
  }
  else if (command.includes("account")) { 
    navigation.push('/Ordis/app/account', 'forward', 'replace');
  }
  else if (command.includes("time")) {
    alert(`The time is ${new Date().toLocaleTimeString()}`);
  } else {
    alert(`You said: ${command}`);
  }

};

export default CommandList;