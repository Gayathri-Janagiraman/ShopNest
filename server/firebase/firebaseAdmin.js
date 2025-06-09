const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY);

initializeApp({
  credential: cert(serviceAccount),
});
