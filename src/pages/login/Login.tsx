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
  IonGrid,
  IonRow,
  IonCol,
  IonText
} from '@ionic/react';
import { personCircleOutline, lockClosedOutline, logInOutline, logoGoogle, eye, eyeOff } from 'ionicons/icons';
import 'animate.css';
import './Login.css';
import { loginUser, signInWithGoogle } from '../../firebaseConfig';

interface LoginProps {
  showToastMessage: (message: string) => void;
}

const Login: React.FC<LoginProps> = ({ showToastMessage }) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [showPassword, setShowPassword] = useState(false);

  const login = async () => {
    const res = await loginUser(email, password);
    if (res) {
      showToastMessage('You have logged in successfully');
      // Redirect or navigate to another page upon successful login
    } else {
      showToastMessage('Error logging in with your credentials');
    }
  };

  const handleGoogleLogin = async () => {
    const res = await signInWithGoogle();
    if (res) {
      showToastMessage('Google sign-in successful');
      // Redirect or navigate to another page upon successful Google login
    } else {
      showToastMessage('Error during Google sign-in');
    }
  };

  const handleForgotPassword = () => {
    window.location.href = '/forgot-password';
  };

  const handleSignUp = () => {
    window.location.href = '/signup';
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="6">
              <div className="login-form animate__animated animate__fadeIn">
                <IonItem>
                  <IonIcon icon={personCircleOutline} slot="start" />
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
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onIonChange={(e) => setPassword(e.detail.value!)}
                    required
                  />
                  <IonIcon
                    icon={showPassword ? eyeOff : eye}
                    slot="end"
                    className="password-toggle-icon"
                    onClick={togglePasswordVisibility}
                  />
                </IonItem>
                <IonButton
                  expand="block"
                  className="ion-margin-top"
                  color="primary"
                  onClick={login}
                >
                  <IonIcon icon={logInOutline} slot="start" />
                  Login
                </IonButton>
                <IonButton
                  expand="block"
                  className="ion-margin-top"
                  color="secondary"
                  onClick={handleGoogleLogin}
                >
                  <IonIcon icon={logoGoogle} slot="start" />
                  Login with Google
                </IonButton>
                <IonText color="medium">
                  <p className="ion-text-center ion-margin-top" onClick={handleForgotPassword}>
                    Forgot Password?
                  </p>
                </IonText>
                <IonText color="medium">
                  <p className="ion-text-center ion-margin-top">
                    Don't have an account? <span className="signup-link" onClick={handleSignUp}>Sign Up</span>
                  </p>
                </IonText>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Login;
