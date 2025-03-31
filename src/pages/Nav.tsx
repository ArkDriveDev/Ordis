import React from 'react';
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import bgi from '../components/images/background.gif';  
import nodes from '../components/images/node.png';  

const Nav: React.FC = () => {

  return (
    <IonPage style={{ position: 'relative', height: '100vh' }}>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start"></IonButtons>
          <IonTitle>Navigation</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen style={{ position: 'relative' }}>
        <img
          src={bgi}
          alt="background"
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',  
            zIndex: -1,  
          }}
        />
        
        <img
          src={nodes}
          alt="nodes"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)', 
            width: '100%',  
            zIndex: 1,  
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Nav;
