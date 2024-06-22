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
import { mailOutline, lockClosedOutline } from 'ionicons/icons';
import 'animate.css';
import './ForgotPassword.css';
import { resetPassword } from '../../firebaseConfig';

interface ForgotPasswordProps {
  showToastMessage: (message: string) => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ showToastMessage }) => {
  const [email, setEmail] = useState<string>('');
  const [newPassword, setNewPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');

  const handlePasswordReset = async () => {
    if (email.trim() === '') {
      showToastMessage('Email is required');
      return;
    }

    const res = await resetPassword(email);
    if (res) {
      showToastMessage('Password reset email sent!');
      // Optionally, navigate to another page or perform additional actions
    } else {
      showToastMessage('Error sending password reset email');
    }
  };

  const handlePasswordUpdate = async () => {
    if (newPassword !== confirmPassword) {
      showToastMessage('Passwords do not match');
      return;
    }

    if (email.trim() === '' || newPassword.trim() === '' || confirmPassword.trim() === '') {
      showToastMessage('Email, new password, and confirm password are required');
      return;
    }

    // const res = await updatePasswordAfterReauth(email, '', newPassword); // Assuming no current password provided here
    // if (res) {
    //   showToastMessage('Password updated successfully');
    //   // Optionally, navigate to another page or perform additional actions
    // } else {
    //   showToastMessage('Error updating password');
    // }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Forgot Password</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-justify-content-center">
            <IonCol size="12" size-md="6">
              <div className="forgot-password-form animate__animated animate__fadeIn">
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
                  <IonLabel position="stacked">New Password</IonLabel>
                  <IonInput
                    type="password"
                    value={newPassword}
                    onIonChange={(e) => setNewPassword(e.detail.value!)}
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
                  onClick={handlePasswordUpdate}
                >
                  Update Password
                </IonButton>
                <IonButton
                  expand="block"
                  className="ion-margin-top"
                  color="secondary"
                  onClick={handlePasswordReset}
                >
                  Reset Password via Email
                </IonButton>
              </div>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default ForgotPassword;
