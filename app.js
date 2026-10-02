// =====================================================
// OLD GUARD
// Sistema de treino, dieta e performance
// =====================================================


// =====================================================
// ESTADO PADRÃO
// =====================================================

const defaultState = {

    profile: {
        name: "Atleta",
        age: 20,
        gender: "male",
        height: 175,
        weight: 75,
        targetWeight: 70,
        calorieGoal: 2200,

        neck: 38,
        waist: 85,
        hip: 95,

        biotype: "Mesomorfo"
    },


    exercises: [

        {
            id: 1,
            name: "Supino Reto",
            category: "Peitoral"
        },

        {
            id: 2,
            name: "Agachamento Livre",
            category: "Pernas"
        },

        {
            id: 3,
            name: "Puxada Frontal",
            category: "Costas"
        },

        {
            id: 4,
            name: "Elevação Lateral",
            category: "Ombros"
        }

    ],


    workouts: [],


    foods: [

        {
            id: 1,
            name: "Arroz branco",
            calories: 130,
            protein: 2.7,
            carbs: 28.2,
            fat: 0.3
        },

        {
            id: 2,
            name: "Peito de frango",
            calories: 165,
            protein: 31,
            carbs: 0,
            fat: 3.6
        },

        {
            id: 3,
            name: "Ovo cozido",
            calories: 155,
            protein: 13,
            carbs: 1.1,
            fat: 10.6
        },

        {
            id: 4,
            name: "Batata doce",
            calories: 86,
            protein: 1.6,
            carbs: 20,
            fat: 0.1
        },

        {
            id: 5,
            name: "Aveia",
            calories: 389,
            protein: 16.9,
            carbs: 66,
            fat: 6.9
        }

    ],


    meals: [],


    hydration: {
        date: getToday(),
        consumed: 0,
        perKg: 37.5,
        intense: false,
        creatine: false
    },


    social: [],


    weightHistory: [
        {
            date: "2026-09-15",
            weight: 77
        },

        {
            date: "2026-09-22",
            weight: 76
        },

        {
            date: "2026-09-29",
            weight: 75
        }
    ]

};


let state = loadState();

let demoMode = false;

let registerMode = false;

let timerSeconds = 0;

let timerInterval = null;

let weightChart = null;

let workoutChart = null;



// =====================================================
// FUNÇÕES UTILITÁRIAS
// =====================================================

function getToday() {

    const now = new Date();

    const year = now.getFullYear();

    const month = String(
        now.getMonth() + 1
    ).padStart(2, "0");

    const day = String(
        now.getDate()
    ).padStart(2, "0");

    return `${year}-${month}-${day}`;

}


function generateId() {

    return Date.now();

}


function saveState() {

    localStorage.setItem(
        "oldGuardState",
        JSON.stringify(state)
    );

}


function loadState() {

    const saved =
        localStorage.getItem(
            "oldGuardState"
        );

    if (!saved) {

        return structuredClone(defaultState);

    }


    try {

        const loaded =
            JSON.parse(saved);


        return {

            ...structuredClone(defaultState),

            ...loaded,

            profile: {
                ...defaultState.profile,
                ...(loaded.profile || {})
            },

            hydration: {
                ...defaultState.hydration,
                ...(loaded.hydration || {})
            }

        };


    } catch (error) {

        return structuredClone(defaultState);

    }

}


function formatNumber(value) {

    return Number(value || 0)
        .toLocaleString(
            "pt-BR",
            {
                maximumFractionDigits: 1
            }
        );

}



// =====================================================
// AUTENTICAÇÃO
// =====================================================

const authScreen =
    document.getElementById(
        "authScreen"
    );

const app =
    document.getElementById(
        "app"
    );


document.getElementById(
    "authSwitch"
).addEventListener(
    "click",
    () => {

        registerMode =
            !registerMode;

        updateAuthScreen();

    }
);


function updateAuthScreen() {

    const registerFields =
        document.getElementById(
            "registerFields"
        );

    const title =
        document.getElementById(
            "authTitle"
        );

    const subtitle =
        document.getElementById(
            "authSubtitle"
        );

    const button =
        document.getElementById(
            "authSubmit"
        );

    const switchText =
        document.getElementById(
            "authSwitchText"
        );

    const switchButton =
        document.getElementById(
            "authSwitch"
        );


    if (registerMode) {

        registerFields.classList.remove(
            "hidden"
        );

        title.textContent =
            "Crie sua conta";

        subtitle.textContent =
            "Cadastre-se no Old Guard.";

        button.textContent =
            "Criar conta";

        switchText.textContent =
            "Já possui uma conta?";

        switchButton.textContent =
            "Entrar";


    } else {

        registerFields.classList.add(
            "hidden"
        );

        title.textContent =
            "Entre na sua conta";

        subtitle.textContent =
            "Acesse o Old Guard para continuar.";

        button.textContent =
            "Entrar";

        switchText.textContent =
            "Ainda não possui conta?";

        switchButton.textContent =
            "Criar conta";

    }

}



document.getElementById(
    "demoLogin"
).addEventListener(
    "click",
    () => {

        demoMode = true;

        openApplication(
            state.profile.name
        );

    }
);



document.getElementById(
    "authForm"
).addEventListener(
    "submit",
    async event => {

        event.preventDefault();


        const email =
            document.getElementById(
                "authEmail"
            ).value.trim();

        const password =
            document.getElementById(
                "authPassword"
            ).value;

        const name =
            document.getElementById(
                "authName"
            ).value.trim();


        const message =
            document.getElementById(
                "authMessage"
            );


        message.textContent = "";


        if (!window.oldGuardFirebase) {

            message.textContent =
                "Firebase ainda está carregando.";

            return;

        }


        if (
            !window.oldGuardFirebase
                .configured
        ) {

            message.textContent =
                "Configure o Firebase no arquivo firebase.js ou use o modo demonstração.";

            return;

        }


        try {

            let user;


            if (registerMode) {

                if (!name) {

                    message.textContent =
                        "Digite seu nome.";

                    return;

                }


                user =
                    await window
                        .oldGuardFirebase
                        .createAccount(
                            email,
                            password,
                            name
                        );


                state.profile.name =
                    name;

                saveState();


            } else {

                user =
                    await window
                        .oldGuardFirebase
                        .login(
                            email,
                            password
                        );

            }


            openApplication(
                user.displayName ||
                state.profile.name
            );


        } catch (error) {

            console.error(error);

            message.textContent =
                firebaseErrorMessage(
                    error.code
                );

        }

    }
);



function firebaseErrorMessage(code) {

    const errors = {

        "auth/email-already-in-use":
            "Este e-mail já está cadastrado.",

        "auth/invalid-email":
            "E-mail inválido.",

        "auth/weak-password":
            "A senha deve possuir pelo menos 6 caracteres.",

        "auth/invalid-credential":
            "E-mail ou senha incorretos.",

        "auth/user-not-found":
            "Usuário não encontrado.",

        "auth/wrong-password":
            "Senha incorreta."

    };


    return (
        errors[code] ||
        "Não foi possível realizar a operação."
    );

}



function openApplication(name) {

    authScreen.classList.add(
        "hidden"
    );

    app.classList.remove(
        "hidden"
    );


    document.getElementById(
        "headerUser"
    ).textContent =
        name || "Usuário";


    renderAll();

}



document.getElementById(
    "logoutButton"
).addEventListener(
    "click",
    async () => {

        if (
            !demoMode &&
            window.oldGuardFirebase &&
            window.oldGuardFirebase.configured
        ) {

            try {

                await window
                    .oldGuardFirebase
                    .logout();

            } catch (error) {

                console.error(error);

            }

        }


        demoMode = false;

        app.classList.add(
            "hidden"
        );

        authScreen.classList.remove(
            "hidden"
        );

    }
);



// Firebase avisa quando o usuário já está logado

window.addEventListener(
    "oldguard-auth-change",
    event => {

        const user =
            event.detail;


        if (user) {

            openApplication(
                user.displayName ||
                state.profile.name
            );

        }

    }
);



// =====================================================
// NAVEGAÇÃO
// =====================================================

document
    .querySelectorAll(
        "[data-page]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showPage(
                    button.dataset.page
                );

            }
        );

    });



document
    .querySelectorAll(
        "[data-go]"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                showPage(
                    button.dataset.go
                );

            }
        );

    });



function showPage(pageName) {

    document
        .querySelectorAll(
            ".page"
        )
        .forEach(page => {

            page.classList.add(
                "hidden"
            );

        });


    const page =
        document.getElementById(
            pageName
        );


    if (page) {

        page.classList.remove(
            "hidden"
        );

    }


    document
        .querySelectorAll(
            ".nav-btn"
        )
        .forEach(button => {

            button.classList.toggle(
                "active",
                button.dataset.page ===
                    pageName
            );

        });


    if (
        pageName ===
        "dashboard"
    ) {

        setTimeout(
            renderCharts,
            50
        );

    }

}



// =====================================================
// EXERCÍCIOS
// =====================================================

document.getElementById(
    "exerciseForm"
).addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const name =
            document.getElementById(
                "exerciseName"
            ).value.trim();

        const category =
            document.getElementById(
                "exerciseCategory"
            ).value;


        if (!name) {
            return;
        }


        state.exercises.push({

            id: generateId(),

            name,

            category

        });


        saveState();

        renderExercises();


        event.target.reset();

    }
);



function renderExercises() {

    const list =
        document.getElementById(
            "exerciseList"
        );

    const select =
        document.getElementById(
            "workoutExercise"
        );


    list.innerHTML = "";

    select.innerHTML = "";


    state.exercises
        .forEach(exercise => {

            const div =
                document.createElement(
                    "div"
                );

            div.className =
                "list-item";


            div.innerHTML = `

                <div>

                    <strong>
                        ${exercise.name}
                    </strong>

                    <span>
                        ${exercise.category}
                    </span>

                </div>

                <button
                    type="button"
                    data-remove-exercise="${exercise.id}"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            `;


            list.appendChild(div);


            const option =
                document.createElement(
                    "option"
                );

            option.value =
                exercise.id;

            option.textContent =
                `${exercise.name} • ${exercise.category}`;

            select.appendChild(option);

        });


    document
        .querySelectorAll(
            "[data-remove-exercise]"
        )
        .forEach(button => {

            button.onclick =
                () => {

                    const id =
                        Number(
                            button.dataset
                                .removeExercise
                        );


                    state.exercises =
                        state.exercises.filter(
                            exercise =>
                                exercise.id !== id
                        );


                    saveState();

                    renderExercises();

                };

        });

}



// =====================================================
// TREINO
// =====================================================

document.getElementById(
    "workoutForm"
).addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const exerciseId =
            Number(
                document.getElementById(
                    "workoutExercise"
                ).value
            );

        const weight =
            Number(
                document.getElementById(
                    "workoutWeight"
                ).value
            );

        const sets =
            Number(
                document.getElementById(
                    "workoutSets"
                ).value
            );

        const reps =
            Number(
                document.getElementById(
                    "workoutReps"
                ).value
            );


        if (!exerciseId) {
            return;
        }


        state.workouts.unshift({

            id: generateId(),

            exerciseId,

            weight,

            sets,

            reps,

            duration:
                timerSeconds,

            date:
                getToday()

        });


        stopTimer();

        saveState();

        renderAll();

    }
);



function renderWorkoutHistory() {

    const list =
        document.getElementById(
            "workoutHistory"
        );


    list.innerHTML = "";


    if (
        state.workouts.length ===
        0
    ) {

        list.innerHTML =
            `<p class="text-muted">Nenhum treino registrado.</p>`;

        return;

    }


    state.workouts
        .slice(0, 10)
        .forEach(workout => {

            const exercise =
                state.exercises.find(
                    item =>
                        item.id ===
                        workout.exerciseId
                );


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "list-item";


            div.innerHTML = `

                <div>

                    <strong>
                        ${exercise?.name || "Exercício"}
                    </strong>

                    <span>
                        ${workout.sets} séries ×
                        ${workout.reps} reps •
                        ${workout.weight} kg
                    </span>

                </div>

                <button
                    data-remove-workout="${workout.id}"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            `;


            list.appendChild(div);

        });


    document
        .querySelectorAll(
            "[data-remove-workout]"
        )
        .forEach(button => {

            button.onclick =
                () => {

                    const id =
                        Number(
                            button.dataset
                                .removeWorkout
                        );


                    state.workouts =
                        state.workouts.filter(
                            item =>
                                item.id !== id
                        );


                    saveState();

                    renderAll();

                };

        });

}



// =====================================================
// CRONÔMETRO
// =====================================================

document.getElementById(
    "timerButton"
).addEventListener(
    "click",
    () => {

        if (timerInterval) {

            stopTimer(false);

            return;

        }


        timerInterval =
            setInterval(
                () => {

                    timerSeconds++;

                    updateTimer();

                },
                1000
            );


        document.getElementById(
            "timerButton"
        ).textContent =
            "Pausar cronômetro";

    }
);



function stopTimer(reset = true) {

    clearInterval(
        timerInterval
    );


    timerInterval = null;


    if (reset) {

        timerSeconds = 0;

        updateTimer();

    }


    document.getElementById(
        "timerButton"
    ).textContent =
        "Iniciar cronômetro";

}



function updateTimer() {

    const minutes =
        Math.floor(
            timerSeconds / 60
        );

    const seconds =
        timerSeconds % 60;


    document.getElementById(
        "timer"
    ).textContent =
        `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

}



// =====================================================
// ALIMENTOS
// =====================================================

document.getElementById(
    "foodForm"
).addEventListener(
    "submit",
    event => {

        event.preventDefault();


        state.foods.push({

            id: generateId(),

            name:
                document.getElementById(
                    "foodName"
                ).value.trim(),

            calories:
                Number(
                    document.getElementById(
                        "foodCalories"
                    ).value
                ),

            protein:
                Number(
                    document.getElementById(
                        "foodProtein"
                    ).value
                ),

            carbs:
                Number(
                    document.getElementById(
                        "foodCarbs"
                    ).value
                ),

            fat:
                Number(
                    document.getElementById(
                        "foodFat"
                    ).value
                )

        });


        saveState();

        renderFoods();


        event.target.reset();

    }
);



function renderFoods() {

    const list =
        document.getElementById(
            "foodList"
        );

    const select =
        document.getElementById(
            "mealFood"
        );


    list.innerHTML = "";

    select.innerHTML = "";


    state.foods.forEach(
        food => {

            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "list-item";


            div.innerHTML = `

                <div>

                    <strong>
                        ${food.name}
                    </strong>

                    <span>
                        ${food.calories} kcal •
                        P ${food.protein}g •
                        C ${food.carbs}g •
                        G ${food.fat}g
                        / 100g
                    </span>

                </div>

                <button
                    data-remove-food="${food.id}"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            `;


            list.appendChild(div);


            const option =
                document.createElement(
                    "option"
                );

            option.value =
                food.id;

            option.textContent =
                food.name;

            select.appendChild(option);

        });


    document
        .querySelectorAll(
            "[data-remove-food]"
        )
        .forEach(button => {

            button.onclick =
                () => {

                    const id =
                        Number(
                            button.dataset
                                .removeFood
                        );


                    state.foods =
                        state.foods.filter(
                            food =>
                                food.id !== id
                        );


                    saveState();

                    renderFoods();

                };

        });

}



// =====================================================
// REFEIÇÕES
// =====================================================

document.getElementById(
    "mealForm"
).addEventListener(
    "submit",
    event => {

        event.preventDefault();


        const foodId =
            Number(
                document.getElementById(
                    "mealFood"
                ).value
            );


        const amount =
            Number(
                document.getElementById(
                    "mealAmount"
                ).value
            );


        state.meals.unshift({

            id: generateId(),

            type:
                document.getElementById(
                    "mealType"
                ).value,

            foodId,

            amount,

            date:
                getToday()

        });


        saveState();

        renderAll();

    }
);



function calculateTodayNutrition() {

    const today =
        getToday();


    const result = {

        calories: 0,
        protein: 0,
        carbs: 0,
        fat: 0

    };


    state.meals
        .filter(
            meal =>
                meal.date === today
        )
        .forEach(
            meal => {

                const food =
                    state.foods.find(
                        item =>
                            item.id ===
                            meal.foodId
                    );


                if (!food) {
                    return;
                }


                const factor =
                    meal.amount / 100;


                result.calories +=
                    food.calories *
                    factor;

                result.protein +=
                    food.protein *
                    factor;

                result.carbs +=
                    food.carbs *
                    factor;

                result.fat +=
                    food.fat *
                    factor;

            }
        );


    return result;

}



function renderMeals() {

    const list =
        document.getElementById(
            "mealList"
        );


    list.innerHTML = "";


    const meals =
        state.meals.filter(
            meal =>
                meal.date ===
                getToday()
        );


    if (!meals.length) {

        list.innerHTML =
            `<p class="text-muted">Nenhuma refeição registrada hoje.</p>`;

    }


    meals.forEach(meal => {

        const food =
            state.foods.find(
                item =>
                    item.id ===
                    meal.foodId
            );


        if (!food) {
            return;
        }


        const calories =
            (
                food.calories *
                meal.amount /
                100
            ).toFixed(0);


        const div =
            document.createElement(
                "div"
            );


        div.className =
            "list-item";


        div.innerHTML = `

            <div>

                <strong>
                    ${meal.type}
                </strong>

                <span>
                    ${food.name} •
                    ${meal.amount}g •
                    ${calories} kcal
                </span>

            </div>

            <button
                data-remove-meal="${meal.id}"
            >

                <i class="fa-solid fa-trash"></i>

            </button>

        `;


        list.appendChild(div);

    });


    document
        .querySelectorAll(
            "[data-remove-meal]"
        )
        .forEach(button => {

            button.onclick =
                () => {

                    const id =
                        Number(
                            button.dataset
                                .removeMeal
                        );


                    state.meals =
                        state.meals.filter(
                            meal =>
                                meal.id !== id
                        );


                    saveState();

                    renderAll();

                };

        });

}



// =====================================================
// HIDRATAÇÃO
// =====================================================

document
    .querySelectorAll(
        ".water-add"
    )
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                state.hydration.consumed +=
                    Number(
                        button.dataset.water
                    );


                saveState();

                renderHydration();

            }
        );

    });



document.getElementById(
    "resetWater"
).addEventListener(
    "click",
    () => {

        state.hydration.consumed =
            0;

        saveState();

        renderHydration();

    }
);



[
    "waterPerKg",
    "intenseWorkout",
    "useCreatine"

].forEach(id => {

    document
        .getElementById(id)
        .addEventListener(
            "change",
            () => {

                state.hydration.perKg =
                    Number(
                        document.getElementById(
                            "waterPerKg"
                        ).value
                    );


                state.hydration.intense =
                    document.getElementById(
                        "intenseWorkout"
                    ).checked;


                state.hydration.creatine =
                    document.getElementById(
                        "useCreatine"
                    ).checked;


                saveState();

                renderHydration();

            }
        );

});



function getWaterGoal() {

    let goal =
        state.profile.weight *
        state.hydration.perKg;


    if (
        state.hydration.intense
    ) {

        goal += 500;

    }


    if (
        state.hydration.creatine
    ) {

        goal += 300;

    }


    return Math.round(goal);

}



function renderHydration() {

    if (
        state.hydration.date !==
        getToday()
    ) {

        state.hydration.date =
            getToday();

        state.hydration.consumed =
            0;

        saveState();

    }


    const goal =
        getWaterGoal();


    document.getElementById(
        "waterConsumed"
    ).textContent =
        `${state.hydration.consumed} ml`;


    document.getElementById(
        "waterGoal"
    ).textContent =
        `Meta: ${goal} ml`;


    document.getElementById(
        "waterPerKg"
    ).value =
        state.hydration.perKg;


    document.getElementById(
        "intenseWorkout"
    ).checked =
        state.hydration.intense;


    document.getElementById(
        "useCreatine"
    ).checked =
        state.hydration.creatine;


    const remaining =
        Math.max(
            goal -
            state.hydration.consumed,
            0
        );


    const percentage =
        Math.min(
            state.hydration.consumed /
            goal *
            100,
            100
        );


    document.getElementById(
        "hydrationAdvice"
    ).innerHTML = `

        Você consumiu
        <strong>
            ${percentage.toFixed(0)}%
        </strong>
        da sua meta diária.

        <br><br>

        ${
            remaining > 0
                ?
                `Ainda faltam aproximadamente <strong>${remaining} ml</strong>.`
                :
                `<strong>Meta diária atingida.</strong>`
        }

    `;

}



// =====================================================
// BIOTIPOS
// =====================================================

const biotypeInfo = {

    Ectomorfo:
        "Perfil corporal geralmente associado a estrutura mais leve. Para ganho de massa, consistência no treino e ingestão energética adequada são importantes.",

    Mesomorfo:
        "Perfil normalmente associado a boa resposta a estímulos de força e hipertrofia. Progressão de carga e recuperação continuam sendo essenciais.",

    Endomorfo:
        "Perfil geralmente associado a maior facilidade para ganho de massa corporal. Organização alimentar e controle energético podem ajudar na composição corporal."

};



document
    .querySelectorAll(
        ".biotype-card"
    )
    .forEach(card => {

        card.addEventListener(
            "click",
            () => {

                state.profile.biotype =
                    card.dataset.biotype;


                saveState();

                renderBiotype();

            }
        );

    });



function renderBiotype() {

    document
        .querySelectorAll(
            ".biotype-card"
        )
        .forEach(card => {

            card.classList.toggle(
                "selected",
                card.dataset.biotype ===
                    state.profile.biotype
            );

        });


    document.getElementById(
        "biotypeTitle"
    ).textContent =
        state.profile.biotype;


    document.getElementById(
        "biotypeDescription"
    ).textContent =
        biotypeInfo[
            state.profile.biotype
        ];

}



// =====================================================
// SOCIAL
// =====================================================

document.getElementById(
    "socialForm"
).addEventListener(
    "submit",
    event => {

        event.preventDefault();


        state.social.unshift({

            id: generateId(),

            activity:
                document.getElementById(
                    "socialActivity"
                ).value,

            points:
                Number(
                    document.getElementById(
                        "socialPoints"
                    ).value
                ),

            date:
                getToday()

        });


        saveState();

        renderSocial();

    }
);



function renderSocial() {

    const list =
        document.getElementById(
            "socialList"
        );


    list.innerHTML = "";


    let total =
        0;


    state.social.forEach(
        activity => {

            total +=
                activity.points;


            const div =
                document.createElement(
                    "div"
                );


            div.className =
                "list-item";


            div.innerHTML = `

                <div>

                    <strong>
                        ${activity.activity}
                    </strong>

                    <span>
                        ${activity.date}
                        •
                        +${activity.points} pontos
                    </span>

                </div>

                <button
                    data-remove-social="${activity.id}"
                >

                    <i class="fa-solid fa-trash"></i>

                </button>

            `;


            list.appendChild(div);

        }
    );


    if (!state.social.length) {

        list.innerHTML =
            `<p class="text-muted">Nenhuma atividade publicada.</p>`;

    }


    document.getElementById(
        "totalPoints"
    ).textContent =
        total;


    document
        .querySelectorAll(
            "[data-remove-social]"
        )
        .forEach(button => {

            button.onclick =
                () => {

                    const id =
                        Number(
                            button.dataset
                                .removeSocial
                        );


                    state.social =
                        state.social.filter(
                            item =>
                                item.id !== id
                        );


                    saveState();

                    renderSocial();

                };

        });

}



// =====================================================
// PERFIL
// =====================================================

document.getElementById(
    "profileForm"
).addEventListener(
    "submit",
    event => {

        event.preventDefault();


        state.profile.name =
            document.getElementById(
                "profileName"
            ).value.trim();


        state.profile.age =
            Number(
                document.getElementById(
                    "profileAge"
                ).value
            );


        state.profile.gender =
            document.getElementById(
                "profileGender"
            ).value;


        state.profile.height =
            Number(
                document.getElementById(
                    "profileHeight"
                ).value
            );


        const oldWeight =
            state.profile.weight;


        state.profile.weight =
            Number(
                document.getElementById(
                    "profileWeight"
                ).value
            );


        state.profile.targetWeight =
            Number(
                document.getElementById(
                    "profileTargetWeight"
                ).value
            );


        state.profile.calorieGoal =
            Number(
                document.getElementById(
                    "profileCalories"
                ).value
            );


        state.profile.neck =
            Number(
                document.getElementById(
                    "profileNeck"
                ).value
            );


        state.profile.waist =
            Number(
                document.getElementById(
                    "profileWaist"
                ).value
            );


        state.profile.hip =
            Number(
                document.getElementById(
                    "profileHip"
                ).value
            );


        if (
            oldWeight !==
            state.profile.weight
        ) {

            state.weightHistory.push({

                date:
                    getToday(),

                weight:
                    state.profile.weight

            });

        }


        document.getElementById(
            "headerUser"
        ).textContent =
            state.profile.name;


        saveState();

        renderAll();

    }
);



function fillProfile() {

    document.getElementById(
        "profileName"
    ).value =
        state.profile.name;


    document.getElementById(
        "profileAge"
    ).value =
        state.profile.age;


    document.getElementById(
        "profileGender"
    ).value =
        state.profile.gender;


    document.getElementById(
        "profileHeight"
    ).value =
        state.profile.height;


    document.getElementById(
        "profileWeight"
    ).value =
        state.profile.weight;


    document.getElementById(
        "profileTargetWeight"
    ).value =
        state.profile.targetWeight;


    document.getElementById(
        "profileCalories"
    ).value =
        state.profile.calorieGoal;


    document.getElementById(
        "profileNeck"
    ).value =
        state.profile.neck;


    document.getElementById(
        "profileWaist"
    ).value =
        state.profile.waist;


    document.getElementById(
        "profileHip"
    ).value =
        state.profile.hip;

}



// =====================================================
// IMC
// =====================================================

function calculateBMI() {

    const height =
        state.profile.height /
        100;


    if (
        !height ||
        !state.profile.weight
    ) {

        return 0;

    }


    return (
        state.profile.weight /
        (
            height *
            height
        )
    );

}



// =====================================================
// % GORDURA - MÉTODO US NAVY
// =====================================================

function calculateBodyFat() {

    const {
        gender,
        height,
        neck,
        waist,
        hip
    } = state.profile;


    if (
        !height ||
        !neck ||
        !waist
    ) {

        return null;

    }


    let result;


    if (
        gender === "male"
    ) {

        const difference =
            waist -
            neck;


        if (
            difference <= 0
        ) {

            return null;

        }


        result =
            86.010 *
            Math.log10(
                difference
            )
            -
            70.041 *
            Math.log10(
                height
            )
            +
            36.76;


    } else {

        const difference =
            waist +
            hip -
            neck;


        if (
            difference <= 0
        ) {

            return null;

        }


        result =
            163.205 *
            Math.log10(
                difference
            )
            -
            97.684 *
            Math.log10(
                height
            )
            -
            78.387;

    }


    if (
        !Number.isFinite(result)
    ) {

        return null;

    }


    return Math.max(
        3,
        Math.min(
            result,
            60
        )
    );

}



function bodyFatCategory(value) {

    if (
        value === null
    ) {

        return "Informe suas medidas.";

    }


    if (
        state.profile.gender ===
        "male"
    ) {

        if (value < 6) {
            return "Muito baixo";
        }

        if (value < 14) {
            return "Faixa atlética";
        }

        if (value < 18) {
            return "Boa condição";
        }

        if (value < 25) {
            return "Faixa média";
        }

        return "Acima da faixa média";

    }


    if (value < 14) {
        return "Muito baixo";
    }

    if (value < 21) {
        return "Faixa atlética";
    }

    if (value < 25) {
        return "Boa condição";
    }

    if (value < 32) {
        return "Faixa média";
    }

    return "Acima da faixa média";

}



// =====================================================
// DASHBOARD
// =====================================================

function renderDashboard() {

    const nutrition =
        calculateTodayNutrition();


    const bodyFat =
        calculateBodyFat();


    document.getElementById(
        "dashboardCalories"
    ).textContent =
        `${formatNumber(nutrition.calories)} kcal`;


    document.getElementById(
        "dashboardCaloriesGoal"
    ).textContent =
        `Meta: ${state.profile.calorieGoal} kcal`;


    document.getElementById(
        "dashboardWeight"
    ).textContent =
        `${state.profile.weight} kg`;


    document.getElementById(
        "dashboardWeightGoal"
    ).textContent =
        `Meta: ${state.profile.targetWeight} kg`;


    document.getElementById(
        "dashboardBodyFat"
    ).textContent =
        bodyFat === null
            ?
            "--%"
            :
            `${bodyFat.toFixed(1)}%`;


    document.getElementById(
        "dashboardWorkouts"
    ).textContent =
        state.workouts.length;


    const percentage =
        Math.min(
            nutrition.calories /
            state.profile.calorieGoal *
            100,
            100
        );


    document.getElementById(
        "caloriePercentage"
    ).textContent =
        `${percentage.toFixed(0)}%`;


    document.getElementById(
        "calorieProgress"
    ).style.width =
        `${percentage}%`;


    document.getElementById(
        "macroProtein"
    ).textContent =
        `${formatNumber(nutrition.protein)}g`;


    document.getElementById(
        "macroCarbs"
    ).textContent =
        `${formatNumber(nutrition.carbs)}g`;


    document.getElementById(
        "macroFat"
    ).textContent =
        `${formatNumber(nutrition.fat)}g`;


    const insights =
        document.getElementById(
            "dashboardInsights"
        );


    insights.innerHTML = "";


    let calorieText;


    if (
        nutrition.calories <
        state.profile.calorieGoal *
        0.75
    ) {

        calorieText =
            "Seu consumo atual ainda está abaixo de 75% da meta diária.";

    } else if (
        nutrition.calories >
        state.profile.calorieGoal *
        1.1
    ) {

        calorieText =
            "Seu consumo ultrapassou a meta diária em mais de 10%.";

    } else {

        calorieText =
            "Seu consumo está próximo da meta calórica planejada.";

    }


    const hydrationGoal =
        getWaterGoal();


    const hydrationText =
        state.hydration.consumed >=
        hydrationGoal

            ?
            "Meta de hidratação atingida."

            :
            `Faltam ${hydrationGoal - state.hydration.consumed} ml para sua meta de água.`;


    const workoutText =
        state.workouts.some(
            workout =>
                workout.date ===
                getToday()
        )

            ?
            "Você possui treino registrado hoje."

            :
            "Nenhum treino foi registrado hoje.";


    [
        calorieText,
        hydrationText,
        workoutText

    ].forEach(text => {

        const item =
            document.createElement(
                "div"
            );

        item.className =
            "insight";

        item.textContent =
            text;

        insights.appendChild(item);

    });

}



// =====================================================
// PERFIL - RESULTADOS
// =====================================================

function renderProfileResults() {

    const bmi =
        calculateBMI();


    const bodyFat =
        calculateBodyFat();


    document.getElementById(
        "bmiResult"
    ).textContent =
        bmi
            ?
            bmi.toFixed(1)
            :
            "--";


    if (
        bodyFat === null
    ) {

        document.getElementById(
            "bodyFatResult"
        ).textContent =
            "--%";


        document.getElementById(
            "leanMassResult"
        ).textContent =
            "-- kg";


        return;

    }


    document.getElementById(
        "bodyFatResult"
    ).textContent =
        `${bodyFat.toFixed(1)}%`;


    document.getElementById(
        "bodyFatCategory"
    ).textContent =
        bodyFatCategory(
            bodyFat
        );


    const leanMass =
        state.profile.weight *
        (
            1 -
            bodyFat / 100
        );


    document.getElementById(
        "leanMassResult"
    ).textContent =
        `${leanMass.toFixed(1)} kg`;

}



// =====================================================
// DIETA - TOTAL
// =====================================================

function renderNutrition() {

    const nutrition =
        calculateTodayNutrition();


    document.getElementById(
        "dietCalories"
    ).textContent =
        formatNumber(
            nutrition.calories
        );


    document.getElementById(
        "dietProtein"
    ).textContent =
        `${formatNumber(nutrition.protein)}g`;


    document.getElementById(
        "dietCarbs"
    ).textContent =
        `${formatNumber(nutrition.carbs)}g`;


    document.getElementById(
        "dietFat"
    ).textContent =
        `${formatNumber(nutrition.fat)}g`;

}



// =====================================================
// GRÁFICOS
// =====================================================

function renderCharts() {

    if (
        typeof Chart ===
        "undefined"
    ) {

        return;

    }


    Chart.defaults.color =
        "#9292a3";


    Chart.defaults.borderColor =
        "#262633";


    const weightCanvas =
        document.getElementById(
            "weightChart"
        );


    const workoutCanvas =
        document.getElementById(
            "workoutChart"
        );


    if (
        weightChart
    ) {

        weightChart.destroy();

    }


    if (
        workoutChart
    ) {

        workoutChart.destroy();

    }


    weightChart =
        new Chart(
            weightCanvas,
            {

                type:
                    "line",

                data: {

                    labels:
                        state.weightHistory
                            .map(
                                item =>
                                    item.date
                            ),

                    datasets: [

                        {

                            label:
                                "Peso (kg)",

                            data:
                                state.weightHistory
                                    .map(
                                        item =>
                                            item.weight
                                    ),

                            borderColor:
                                "#9d4edd",

                            backgroundColor:
                                "rgba(157,78,221,.15)",

                            tension:
                                0.35,

                            fill:
                                true

                        }

                    ]

                },

                options: {

                    responsive:
                        true,

                    maintainAspectRatio:
                        false

                }

            }
        );


    const workoutLabels =
        state.workouts
            .slice(0, 8)
            .reverse()
            .map(
                item =>
                    item.date
            );


    const workoutVolumes =
        state.workouts
            .slice(0, 8)
            .reverse()
            .map(
                item =>
                    item.weight *
                    item.sets *
                    item.reps
            );


    workoutChart =
        new Chart(
            workoutCanvas,
            {

                type:
                    "bar",

                data: {

                    labels:
                        workoutLabels,

                    datasets: [

                        {

                            label:
                                "Volume",

                            data:
                                workoutVolumes,

                            backgroundColor:
                                "#7b2cbf",

                            borderRadius:
                                6

                        }

                    ]

                },

                options: {

                    responsive:
                        true,

                    maintainAspectRatio:
                        false

                }

            }
        );

}



// =====================================================
// RENDERIZAÇÃO GERAL
// =====================================================

function renderAll() {

    renderExercises();

    renderWorkoutHistory();

    renderFoods();

    renderMeals();

    renderHydration();

    renderBiotype();

    renderSocial();

    fillProfile();

    renderProfileResults();

    renderNutrition();

    renderDashboard();


    setTimeout(
        renderCharts,
        50
    );

}



// =====================================================
// INICIALIZAÇÃO
// =====================================================

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateAuthScreen();

        renderAll();

    }
);