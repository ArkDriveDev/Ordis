import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';

  import VoiceCommand from "../../components/VoiceCommand";


  const VoiceCom: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
            </IonButtons>
            <IonTitle>Voice Command</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          <VoiceCommand />
        </IonContent>
      </IonPage>
    );
  };
  
  export default VoiceCom;