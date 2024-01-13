import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_APIKEY,
  authDomain: "post-hive-images.firebaseapp.com",
  projectId: "post-hive-images",
  storageBucket: "post-hive-images.appspot.com",
  messagingSenderId: "101119796391",
  appId: process.env.REACT_APP_APPID,
};

const app = initializeApp(firebaseConfig);
export const imageDb = getStorage(app);
