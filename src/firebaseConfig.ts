import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  GoogleAuthProvider, 
  signInWithPopup, 
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider 
} from 'firebase/auth';
import { toast } from 'react-toastify';

const firebaseConfig = {
  apiKey: "AIzaSyAk0vy1QfaPYw0dtGsAp8LoGoLkz_JmDRI",
  authDomain: "pharmacy-bf073.firebaseapp.com",
  projectId: "pharmacy-bf073",
  storageBucket: "pharmacy-bf073.appspot.com",
  messagingSenderId: "116729519867",
  appId: "1:116729519867:web:56155ae0c86c9395555a5e",
  measurementId: "G-M9D74TSRZ0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export async function loginUser(email: string, password: string) {
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log('Login successful:', res);
    return true;
  } catch (error: any) {
    console.error('Error during login:', error);
    toast.error(error.message); // Display error message using toast
    return false;
  }
}

export async function registerUser(email: string, password: string) {
  try {
    const res = await createUserWithEmailAndPassword(auth, email, password);
    console.log('Registration successful:', res);
    return true;
  } catch (error: any) {
    console.error('Error during registration:', error);
    toast.error(error.message); // Display error message using toast
    return false;
  }
}

export async function signInWithGoogle() {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    console.log('Google sign-in successful:', res);
    return true;
  } catch (error: any) {
    console.error('Error during Google sign-in:', error);
    toast.error(error.message); // Display error message using toast
    return false;
  }
}

export async function resetPassword(email: string) {
  try {
    // Send a password reset email
    await sendPasswordResetEmail(auth, email);
    toast.success('Password reset email sent!');
    return true;
  } catch (error: any) {
    console.error('Error sending password reset email:', error);
    toast.error(error.message); // Display error message using toast
    return false;
  }
}

// // Re-authenticate and update password
// export async function updatePasswordAfterReauth(email: string, currentPassword: string, newPassword: string) {
//   try {
//     const user = auth.currentUser;
//     if (!user) {
//       toast.error('No user is signed in.');
//       return false;
//     }

//     const credential = EmailAuthProvider.credential(email, currentPassword);
//     await reauthenticateWithCredential(user, credential);

//     await updatePassword(user, newPassword);
//     toast.success('Password has been updated!');
//     return true;
//   } catch (error: any) {
//     console.error('Error updating password:', error);
//     toast.error(error.message); // Display error message using toast
//     return false;
//   }
// }
