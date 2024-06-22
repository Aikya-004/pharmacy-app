import React, { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
  IonItem,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonIcon
} from '@ionic/react';
import { personCircleOutline, mailOutline, lockClosedOutline, personAddOutline, logoGoogle } from 'ionicons/icons';
import 'animate.css';
import './Signup.css';
import { registerUser, signInWithGoogle } from '../../firebaseConfig';

interface SignupProps {
  showToastMessage: (message: string) => void;
}

const Signup: React.FC<SignupProps> = ({ showToastMessage }) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const register = async () => {
    if (password !== confirmPassword) {
      showToastMessage('Passwords do not match');
      return;
    }
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      showToastMessage('Username, email, and password are required');
      return;
    }

    const res = await registerUser(email, password);
    if (res) {
      showToastMessage('Registration successful');
      // Redirect or navigate to another page upon successful registration
    } else {
      showToastMessage('Error registering user');
    }
  };

  const handleGoogleSignup = async () => {
    const res = await signInWithGoogle();
    if (res) {
      showToastMessage('Google sign-in successful');
      // Redirect or navigate to another page upon successful Google sign-in
    } else {
      showToastMessage('Error during Google sign-in');
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Sign Up</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="6">
              <div className="signup-form animate__animated animate__fadeIn">
                <IonItem>
                  <IonIcon icon={personCircleOutline} slot="start" />
                  <IonLabel position="stacked">Username</IonLabel>
                  <IonInput
                    type="text"
                    value={username}
                    onIonChange={(e) => setUsername(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem>
                  <IonIcon icon={mailOutline} slot="start" />
                  <IonLabel position="stacked">Email</IonLabel>
                  <IonInput
                    type="email"
                    value={email}
                    onIonChange={(e) => setEmail(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem>
                  <IonIcon icon={lockClosedOutline} slot="start" />
                  <IonLabel position="stacked">Password</IonLabel>
                  <IonInput
                    type="password"
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonItem>
                  <IonIcon icon={lockClosedOutline} slot="start" />
                  <IonLabel position="stacked">Confirm Password</IonLabel>
                  <IonInput
                    type="password"
                    value={confirmPassword}
                    onIonChange={(e) => setConfirmPassword(e.detail.value!)}
                    required
                  />
                </IonItem>
                <IonButton
                  expand="block"
                  className="ion-margin-top"
                  color="primary"
                  onClick={register}
                >
                  <IonIcon icon={personAddOutline} slot="start" />
                  Sign Up
                </IonButton>
                <IonButton
                  expand="block"
                  className="ion-margin-top"
                  color="secondary"
                  onClick={handleGoogleSignup}
                >
                  <IonIcon icon={logoGoogle} slot="start" />
                  Sign Up with Google
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Signup;
