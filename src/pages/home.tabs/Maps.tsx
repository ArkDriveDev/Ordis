import { 
    IonButtons,
      IonContent, 
      IonHeader, 
      IonPage, 
      IonTitle, 
      IonToolbar 
  } from '@ionic/react';
  import { lazy, Suspense } from "react";
  const MapView = lazy(() => import("./Map"));
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
        <Suspense fallback={<div>Loading map...</div>}>
          <MapView />
        </Suspense>
        </IonContent>
      </IonPage>
    );
  };
  
  export default Maps;