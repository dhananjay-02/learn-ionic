import React from 'react';
import { IonCol, IonGrid, IonRow } from '@ionic/react';

function IonicGridDemo() {
  return (
    <>
      <b>No change for xs breakpoint, push 1st column & pull 2nd column for sm and up</b>
      <IonGrid>
        <IonRow>
          <IonCol push-sm="6" style={{ backgroundColor: '#ff9999', color: '#000' }}>1=push-sm"6"</IonCol>
          <IonCol pull-sm="6" style={{ backgroundColor: '#99ccff', color: '#000' }}>2=pull-sm"6"</IonCol>
        </IonRow>
      </IonGrid>

      <b>No change for xs breakpoint, push middle columns & pull last column for md and up</b>
      <IonGrid>
        <IonRow>
          <IonCol style={{ backgroundColor: '#ffcc99', color: '#000' }}>1</IonCol>
          <IonCol push-md="3" style={{ backgroundColor: '#99ff99', color: '#000' }}>2= push-md"3"</IonCol>
          <IonCol push-md="3" style={{ backgroundColor: '#ff99ff', color: '#000' }}>3=  push-md"3"</IonCol>
          <IonCol pull-md="6" style={{ backgroundColor: '#ccccff', color: '#000' }}>4=  pull-md"6"</IonCol>
        </IonRow>
      </IonGrid>

      <b>Switch first and last 3 columns for xs breakpoints, reverse columns for lg and up</b>
      <IonGrid>
        <IonRow>
          <IonCol push="6" push-lg="10" style={{ backgroundColor: '#ff9999', color: '#000' }}>1=push-lg"10"</IonCol>
          <IonCol push="6" push-lg="6" style={{ backgroundColor: '#99ccff', color: '#000' }}>2=push-lg"6"</IonCol>
          <IonCol push="6" push-lg="2" style={{ backgroundColor: '#99ff99', color: '#000' }}>3=push-lg"2"</IonCol>
          <IonCol pull="6" pull-lg="2" style={{ backgroundColor: '#ffcc99', color: '#000' }}>4=pull-lg"2"</IonCol>
          <IonCol pull="6" pull-lg="6" style={{ backgroundColor: '#ccccff', color: '#000' }}>5=pull-lg"6"</IonCol>
          <IonCol pull="6" pull-lg="10" style={{ backgroundColor: '#ff99ff', color: '#000' }}>6=pull-lg"10"</IonCol>
        </IonRow>
      </IonGrid>
    </>
  );
}

export default IonicGridDemo;
