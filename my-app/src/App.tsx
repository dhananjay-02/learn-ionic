import { IonApp, IonButton, IonContent, setupIonicReact } from "@ionic/react"
import Accordion from "./components/Accordion"
import ToggleAccordion from "./components/ToggleAccordion";
import ActionSheet from "./components/ActionSheet";
import { isPlatform } from "@ionic/react";
import IonicAlert from "./components/IonicAlert";
import IonBadgeExample from "./components/IonBadgeExample";
import IonCardExample from "./components/IconCardExample";
import { createRef } from "react";
import IonicGridDemo from "./components/IconicGridDemo";

setupIonicReact({
  mode: isPlatform('ios') ? 'ios' : 'md',
}
);
 const contentRef = createRef<HTMLIonContentElement>();

  function scrollToBottom() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the bottom instead of instantly
    contentRef.current?.scrollToBottom(500);
  }

  function scrollToTop() {
    // Passing a duration to the method makes it so the scroll slowly
    // goes to the top instead of instantly
    contentRef.current?.scrollToTop(500);
  }

function App() {

  return (
    <IonApp>
      <IonContent  ref={contentRef}>

        <IonButton expand="block" onClick={scrollToBottom}>
        Scroll to bottom
      </IonButton>
        <br></br>
        <br></br>
        <Accordion />
        <br></br>
        <br></br>
        <ToggleAccordion/>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <ActionSheet/>
        <br></br>
        <br></br>
        <IonicAlert/>
        <br></br>
        <br></br>
        <IonBadgeExample/>
        <br></br>
        <br></br>
        <IonCardExample/>
        <br></br>
        <br></br>
        <IonicGridDemo/>

        <IonButton expand="block" onClick={scrollToTop}>
        Scroll to Top
      </IonButton>
      </IonContent>
  </IonApp>
  )
}

export default App
