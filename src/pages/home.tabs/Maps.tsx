import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  
  const Maps: React.FC = () => {
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot='start'>
            </IonButtons>
            <IonTitle>Maps</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent fullscreen>
          
        </IonContent>
      </IonPage>
    );
  };
  
  export default Maps;