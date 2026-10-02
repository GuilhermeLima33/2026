// =====================================================
// FIREBASE - OLD GUARD
// =====================================================

import { initializeApp }
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-app.js";

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
    updateProfile
}
from "https://www.gstatic.com/firebasejs/12.19.0/firebase-auth.js";


// =====================================================
// COLOQUE A CONFIGURAÇÃO DO SEU FIREBASE AQUI
// =====================================================

const firebaseConfig = {
  apiKey: "AIzaSyDDF4rCOsD7SoIJj4YTqlc5o845BKIVmmc",
  authDomain: "old-guard-7ac2e.firebaseapp.com",
  projectId: "old-guard-7ac2e",
  storageBucket: "old-guard-7ac2e.firebasestorage.app",
  messagingSenderId: "629408030865",
  appId: "1:629408030865:web:7f9dcdf63150eee7941f30",
  measurementId: "G-Y08KESGGS4"
};

// =====================================================
// VERIFICA CONFIGURAÇÃO
// =====================================================

const configured =
    firebaseConfig.apiKey &&
    firebaseConfig.authDomain &&
    firebaseConfig.projectId &&
    firebaseConfig.appId &&
    !firebaseConfig.apiKey.includes("COLOQUE") &&
    !firebaseConfig.authDomain.includes("SEU_") &&
    !firebaseConfig.projectId.includes("SEU_") &&
    !firebaseConfig.appId.includes("SEU_");


if (!configured) {

    console.warn(
        "Firebase ainda não foi configurado."
    );

    window.oldGuardFirebase = {
        configured: false
    };

    window.dispatchEvent(
        new Event("oldguard-firebase-ready")
    );

} else {

    try {

        // Inicializa Firebase
        const app = initializeApp(firebaseConfig);

        // Inicializa Authentication
        const auth = getAuth(app);


        // =================================================
        // CRIAR CONTA
        // =================================================

        async function createAccount(
            email,
            password,
            name
        ) {

            const userCredential =
                await createUserWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            const user =
                userCredential.user;


            // salva o nome do usuário
            await updateProfile(
                user,
                {
                    displayName: name
                }
            );

            return user;
        }


        // =================================================
        // LOGIN
        // =================================================

        async function login(
            email,
            password
        ) {

            const userCredential =
                await signInWithEmailAndPassword(
                    auth,
                    email,
                    password
                );

            return userCredential.user;
        }


        // =================================================
        // LOGOUT
        // =================================================

        async function logout() {

            await signOut(auth);

        }


        // =================================================
        // DISPONIBILIZA FUNÇÕES PARA script.js
        // =================================================

        window.oldGuardFirebase = {

            configured: true,

            auth,

            createAccount,

            login,

            logout

        };


        console.log(
            "Firebase conectado com sucesso!"
        );


        // =================================================
        // OBSERVA LOGIN
        // =================================================

        onAuthStateChanged(
            auth,
            user => {

                console.log(
                    "Estado do usuário:",
                    user
                );

                window.dispatchEvent(

                    new CustomEvent(
                        "oldguard-auth-change",
                        {
                            detail: user
                        }
                    )

                );

            }
        );


        window.dispatchEvent(
            new Event("oldguard-firebase-ready")
        );


    } catch (error) {

        console.error(
            "Erro ao iniciar Firebase:",
            error
        );

        window.oldGuardFirebase = {

            configured: false,

            error: error.message

        };

    }

}