import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { App as CapacitorApp } from "@capacitor/app";

const firebaseConfig = {
  apiKey: "AIzaSyBpuBHSht1S_zN3xO6vX9lbknvOPm_KBHs",
  authDomain: "lab4langapp-5d8e8.firebaseapp.com",
  projectId: "lab4langapp-5d8e8",
  storageBucket: "lab4langapp-5d8e8.appspot.com",
  messagingSenderId: "250471220134",
  appId: "1:250471220134:web:aeec7dda2e6d4497df8567"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default CapacitorApp; 
