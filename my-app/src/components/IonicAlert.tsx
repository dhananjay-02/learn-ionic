import React, { useState } from 'react';
import { IonAlert, IonButton } from '@ionic/react';

function IonicAlert() {
  const [showFirstAlert, setShowFirstAlert] = useState(false);
  const [showSecondAlert, setShowSecondAlert] = useState(false);

  return (
    <>
      <IonButton onClick={() => setShowFirstAlert(true)}>Click Me</IonButton>

      <IonAlert
        isOpen={showFirstAlert}
        onDidDismiss={() => setShowFirstAlert(false)}
        header="Please enter your info"
        inputs={[
          { placeholder: 'Name' },
          { placeholder: 'Nickname (max 8 characters)', attributes: { maxlength: 8 } },
          { type: 'number', placeholder: 'Age', min: 1, max: 100 },
          { type: 'textarea', placeholder: 'A little about yourself' },
        ]}
        buttons={[
          {
            text: 'Next Alert',
            handler: () => setShowSecondAlert(true), // open second alert
          },
          'Cancel',
        ]}
      />

      <IonAlert
        isOpen={showSecondAlert}
        onDidDismiss={() => setShowSecondAlert(false)}
        header="Second Alert"
        message="This is the second alert triggered from the first!"
        buttons={['OK']}
      />
    </>
  );
}

export default IonicAlert;
