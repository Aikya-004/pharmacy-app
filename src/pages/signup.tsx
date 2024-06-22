import React, { useState } from 'react';
import {
  IonButton,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonTitle,
  IonToolbar,
  IonIcon,
  IonToast,
} from '@ionic/react';
import { personOutline, lockClosedOutline, callOutline, mailOutline, logoGoogle } from 'ionicons/icons';
import './Signup.css'; // Assuming you have some basic styling here

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleSignUp = () => {
    if (!mobileNumber) {
      setToastMessage('Mobile number is required');
      setShowToast(true);
      return;
    }

    if (password !== confirmPassword) {
      setToastMessage('Passwords do not match');
      setShowToast(true);
      return;
    }

    // Sign up logic here
    setToastMessage('Sign Up button clicked');
    setShowToast(true);
  };

  const handleGoogleRegister = () => {
    // Google register logic here
    setToastMessage('Register with Google button clicked');
    setShowToast(true);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
         
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="signup-container">
          <h2 className="register-heading">Register</h2>
          <IonItem className="animated-input-item">
            <IonIcon icon={mailOutline} slot="start" />
            <IonLabel position="stacked" className="bold-label animated-placeholder">
              Email (optional)
            </IonLabel>
            <IonInput
              value={email}
              onIonChange={(e) => setEmail(e.detail.value!)}
              type="email"
              placeholder="Enter your email"
              className="animated-placeholder-input"
            />
          </IonItem>
          <IonItem className="animated-input-item">
            <IonIcon icon={callOutline} slot="start" />
            <IonLabel position="stacked" className="bold-label animated-placeholder">
              Mobile Number
            </IonLabel>
            <IonInput
              value={mobileNumber}
              onIonChange={(e) => setMobileNumber(e.detail.value!)}
              type="tel"
              placeholder="Enter your mobile number"
              className="animated-placeholder-input"
              required
            />
          </IonItem>
          <IonItem className="animated-input-item">
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel position="stacked" className="bold-label animated-placeholder">
              Password
            </IonLabel>
            <IonInput
              value={password}
              onIonChange={(e) => setPassword(e.detail.value!)}
              type="password"
              placeholder="Enter your password"
              className="animated-placeholder-input"
              required
            />
          </IonItem>
          <IonItem className="animated-input-item">
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel position="stacked" className="bold-label animated-placeholder">
              Confirm Password
            </IonLabel>
            <IonInput
              value={confirmPassword}
              onIonChange={(e) => setConfirmPassword(e.detail.value!)}
              type="password"
              placeholder="Confirm your password"
              className="animated-placeholder-input"
              required
            />
          </IonItem>
          <IonButton expand="block" onClick={handleSignUp} className="ion-margin-top">
            Sign Up
          </IonButton>

          <div className="separator">
            <span>or</span>
          </div>

          <IonButton expand="block" color="secondary" onClick={handleGoogleRegister} className="ion-margin-top">
            <IonIcon icon={logoGoogle} slot="start" />
            Register with Google
          </IonButton>
        </div>
        <IonToast
          isOpen={showToast}
          onDidDismiss={() => setShowToast(false)}
          message={toastMessage}
          duration={3000}
        />
      </IonContent>
    </IonPage>
  );
};

export default SignUp;
