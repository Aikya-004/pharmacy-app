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
  IonSegment,
  IonSegmentButton,
} from '@ionic/react';
import { personOutline, lockClosedOutline, logoGoogle, callOutline, eye, eyeOff } from 'ionicons/icons';
import './Login.css'; // Assuming you have some basic styling here

const Login: React.FC = () => {
  const [inputMode, setInputMode] = useState<'email' | 'mobile'>('email');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState('');

  const handleLogin = () => {
    // Login logic here
    setToastMessage('Login button clicked');
    setShowToast(true);
  };

  const handleGoogleLogin = () => {
    // Google login logic here
    setToastMessage('Google login button clicked');
    setShowToast(true);
  };

  const handleForgotPassword = () => {
    // Forgot password logic here
    setToastMessage('Forgot password button clicked');
    setShowToast(true);
  };

  const handleSignUp = () => {
    // Sign up logic here
    setToastMessage('Sign Up button clicked');
    setShowToast(true);
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <div className="login-container">
          <h1 className="login-heading">Login</h1>
          <IonSegment
            value={inputMode}
            onIonChange={(e: CustomEvent) => setInputMode(e.detail.value as 'email' | 'mobile')}
          >
            <IonSegmentButton value="email">
              <IonLabel>Email</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="mobile">
              <IonLabel>Mobile</IonLabel>
            </IonSegmentButton>
          </IonSegment>

          {inputMode === 'email' ? (
            <IonItem className="animated-input-item">
              <IonIcon icon={personOutline} slot="start" />
              <IonLabel position="stacked" className="bold-label animated-placeholder move-down">
                Username
              </IonLabel>
              <IonInput
                value={username}
                onIonChange={(e) => setUsername(e.detail.value ?? '')}
                type="email"
                placeholder="Enter your email"
                className="animated-placeholder-input"
              />
            </IonItem>
          ) : (
            <IonItem className="animated-input-item">
              <IonIcon icon={callOutline} slot="start" />
              <IonLabel position="stacked" className="bold-label animated-placeholder move-down">
                Mobile Number
              </IonLabel>
              <IonInput
                value={mobileNumber}
                onIonChange={(e) => setMobileNumber(e.detail.value ?? '')}
                type="tel"
                placeholder="Enter your mobile number"
                className="animated-placeholder-input"
              />
            </IonItem>
          )}

          <IonItem className="animated-input-item">
            <IonIcon icon={lockClosedOutline} slot="start" />
            <IonLabel position="stacked" className="bold-label animated-placeholder move-down">
              Password
            </IonLabel>
            <IonInput
              value={password}
              onIonChange={(e) => setPassword(e.detail.value ?? '')}
              type={showPassword ? 'text' : 'password'}
              placeholder="Enter your password"
              className="animated-placeholder-input"
            />
            <IonIcon
              icon={showPassword ? eyeOff : eye}
              slot="end"
              className="password-toggle-icon"
              onClick={togglePasswordVisibility}
            />
          </IonItem>
          <IonButton expand="block" onClick={handleLogin} className="ion-margin-top">
            Login
          </IonButton>
          <div className="additional-options-container">
            <IonButton fill="clear" onClick={handleSignUp} className="additional-options-button black-text">
              Sign Up
            </IonButton>
            <IonButton fill="clear" onClick={handleForgotPassword} className="additional-options-button black-text">
              Forgot Password?
            </IonButton>
          </div>
          <div className="or-container">
            <span className="or-text">OR</span>
          </div>
          <IonButton expand="block" color="secondary" onClick={handleGoogleLogin} className="ion-margin-top google-button">
            <div className="google-icon-circle">
              <IonIcon icon={logoGoogle} className="google-icon" />
            </div>
            Login with Google
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

export default Login;
