import React from 'react';
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import bgi from '../components/images/background.gif'; 
const Nav: React.FC = () => {

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"></IonButtons>
          <IonTitle>Navigation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <img src={bgi} alt="background" style={{ width: '100%', height: 'auto' }} />
      </IonContent>
    </IonPage>
  );
};

export default Nav;
