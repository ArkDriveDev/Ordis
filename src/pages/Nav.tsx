import React from 'react';
import { clipboardOutline, documentOutline, documentsOutline, folderOutline, newspaperOutline, readerOutline, squareOutline } from 'ionicons/icons'; 
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonIcon  } from '@ionic/react';
import bgi from '../components/images/Tecno.gif';  
import nodes from '../components/images/Navi.png';  

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
            width: '30%',  
            zIndex: 1,  
          }}
        />

        <IonIcon 
          icon={clipboardOutline} 
          style={{
            position: 'absolute',
            top: '19%',  
            left: '48%',   
            fontSize: '48px',
            color: '#87CEEB', 
            zIndex: 10,
            filter: 'drop-shadow(0 0 8px white)', 
            transform: 'rotate(45deg)', 
          }}
        />

        <IonIcon 
          icon={documentOutline} 
          style={{
            position: 'absolute',
            top: '30%',  
            left: '39%',   
            fontSize: '48px',
            color: '#87CEEB', 
            zIndex: 10,
            filter: 'drop-shadow(0 0 8px white)', 
            transform: 'rotate(45deg)', 
          }}
        />

       <IonIcon 
          icon={folderOutline} 
          style={{
            position: 'absolute',
            top: '30%',  
            left: '57%',   
            fontSize: '48px',
            color: '#87CEEB', 
            zIndex: 10,
            filter: 'drop-shadow(0 0 8px white)', 
            transform: 'rotate(45deg)', 
          }}
        />

        <IonIcon 
          icon={newspaperOutline} 
          style={{
            position: 'absolute',
            top: '62%',  
            left: '39%',   
            fontSize: '48px',
            color: '#87CEEB', 
            zIndex: 10,
            filter: 'drop-shadow(0 0 8px white)', 
            transform: 'rotate(45deg)', 
          }}
        />

       <IonIcon 
          icon={readerOutline} 
          style={{
            position: 'absolute',
            top: '62%',  
            left: '57%',   
            fontSize: '48px',
            color: '#87CEEB', 
            zIndex: 10,
            filter: 'drop-shadow(0 0 8px white)', 
            transform: 'rotate(45deg)', 
          }}
        />

      <IonIcon 
          icon={documentsOutline} 
          style={{
            position: 'absolute',
            top: '73%',  
            left: '48%',   
            fontSize: '48px',
            color: '#87CEEB', 
            zIndex: 10,
            filter: 'drop-shadow(0 0 8px white)', 
            transform: 'rotate(45deg)', 
          }}
        />

        <IonIcon 
          icon={squareOutline} 
          style={{
            position: 'absolute',
            top: '42%',  
            left: '46%',   
            fontSize: '100px',
            color: '#000000', 
            zIndex: 10,
            filter: 'drop-shadow(0 0 8px white)', 
            transform: 'rotate(45deg)', 
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Nav;
