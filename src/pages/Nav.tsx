import React from 'react';
import { clipboardOutline, documentOutline, documentsOutline, folderOutline, newspaperOutline, readerOutline, squareOutline } from 'ionicons/icons'; 
import { IonButtons, IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonIcon } from '@ionic/react';
import bgi from '../components/images/Tecno.gif';  
import nodes from '../components/images/Navi.png';  

const Nav: React.FC = () => {
  // Blinking animation style
  const blinkStyle = {
    animation: 'blink 2s infinite',
    position: 'absolute',
    fontSize: '48px',
    zIndex: 10,
    filter: 'drop-shadow(0 0 8px white)',
    transform: 'rotate(45deg)',
  };

  return (
    <IonPage style={{ position: 'relative', height: '100vh' }}>
      <style>{`
        @keyframes blink {
          0% { opacity: 0.3; }
          50% { opacity: 1; }
          100% { opacity: 0.3; }
        }
      `}</style>
      
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
            ...blinkStyle,
            top: '19%',
            left: '48%',
            color: '#87CEEB',
            animationDelay: '0.1s'
          }}
        />

        <IonIcon 
          icon={documentOutline} 
          style={{
            ...blinkStyle,
            top: '30%',
            left: '39%',
            color: '#FF5733',
            animationDelay: '0.3s'
          }}
        />

        <IonIcon 
          icon={folderOutline} 
          style={{
            ...blinkStyle,
            top: '30%',
            left: '57%',
            color: '#33FF57',
            animationDelay: '0.5s'
          }}
        />

        <IonIcon 
          icon={newspaperOutline} 
          style={{
            ...blinkStyle,
            top: '62%',
            left: '39%',
            color: '#FF33F1',
            animationDelay: '0.7s'
          }}
        />

        <IonIcon 
          icon={readerOutline} 
          style={{
            ...blinkStyle,
            top: '62%',
            left: '57%',
            color: '#33F1FF',
            animationDelay: '0.9s'
          }}
        />

        <IonIcon 
          icon={documentsOutline} 
          style={{
            ...blinkStyle,
            top: '73%',
            left: '48%',
            color: '#F1FF33',
            animationDelay: '1.1s'
          }}
        />

        <IonIcon 
          icon={squareOutline} 
          style={{
            ...blinkStyle,
            top: '42%',
            left: '46%',
            fontSize: '100px',
            color: '#000000',
            animation: 'blink 1.5s infinite',
          }}
        />
      </IonContent>
    </IonPage>
  );
};

export default Nav;