const { initializeApp, cert } = require("firebase-admin/app");

const serviceAccount = JSON.parse(process.env.FIREBASE_ADMIN_KEY);

serviceAccount.private_key = serviceAccount.private_key.replace(/\\n/g, '\n');

initializeApp({
  credential: cert(serviceAccount),
});
