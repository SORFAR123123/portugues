// Estructura de datos para las colecciones, subcontenedores y mazos
const datosApp = {
    colecciones: [
        {
            id: 1,
            nombre: "Vocabulario Básico",
            imagen: "https://via.placeholder.com/200",
            subcontenedores: [
                {
                    id: 1,
                    nombre: "Saludos y Presentaciones",
                    imagen: "https://via.placeholder.com/150",
                    mazos: [
                        {
                            id: 1,
                            nombre: "Saludos Comunes",
                            imagen: "https://via.placeholder.com/120",
                            palabras: [
                                { portugues: "Olá", espanol: "Hola", pronunciacion: "Óla" },
                                { portugues: "Bom dia", espanol: "Buenos días", pronunciacion: "Bom día" },
                                { portugues: "Boa tarde", espanol: "Buenas tardes", pronunciacion: "Boa tarde" },
                                { portugues: "Boa noite", espanol: "Buenas noches", pronunciacion: "Boa noite" },
                                { portugues: "Como está?", espanol: "¿Cómo estás?", pronunciacion: "Cómo está?" },
                                { portugues: "Tudo bem?", espanol: "¿Todo bien?", pronunciacion: "Tudo bem?" },
                                { portugues: "Obrigado/a", espanol: "Gracias", pronunciacion: "Obrigado/a" },
                                { portugues: "De nada", espanol: "De nada", pronunciacion: "De nada" },
                                { portugues: "Por favor", espanol: "Por favor", pronunciacion: "Por favor" },
                                { portugues: "Desculpe", espanol: "Disculpe", pronunciacion: "Desculpe" }
                            ]
                        },
                        {
                            id: 2,
                            nombre: "Presentaciones",
                            imagen: "https://via.placeholder.com/120",
                            palabras: [
                                { portugues: "Meu nome é", espanol: "Mi nombre es", pronunciacion: "Meu nome é" },
                                { portugues: "Prazer em conhecê-lo", espanol: "Encantado de conocerte", pronunciacion: "Prazer em conocê-lo" },
                                { portugues: "De onde você é?", espanol: "¿De dónde eres?", pronunciacion: "De onde você é?" },
                                { portugues: "Eu sou de", espanol: "Yo soy de", pronunciacion: "Eu sou de" },
                                { portugues: "Quantos anos você tem?", espanol: "¿Cuántos años tienes?", pronunciacion: "Quantos anos você tem?" },
                                { portugues: "Eu tenho ... anos", espanol: "Tengo ... años", pronunciacion: "Eu tenho ... anos" },
                                { portugues: "O que você faz?", espanol: "¿A qué te dedicas?", pronunciacion: "O que você faz?" },
                                { portugues: "Eu sou estudante", espanol: "Soy estudiante", pronunciacion: "Eu sou estudante" },
                                { portugues: "Eu trabalho como", espanol: "Trabajo como", pronunciacion: "Eu trabalho como" },
                                { portugues: "Adeus", espanol: "Adiós", pronunciacion: "Adeus" }
                            ]
                        }
                    ]
                },
                {
                    id: 2,
                    nombre: "Números y Colores",
                    imagen: "https://via.placeholder.com/150",
                    mazos: [
                        {
                            id: 3,
                            nombre: "Números del 1 al 20",
                            imagen: "https://via.placeholder.com/120",
                            palabras: [
                                { portugues: "Um", espanol: "Uno", pronunciacion: "Um" },
                                { portugues: "Dois", espanol: "Dos", pronunciacion: "Dois" },
                                { portugues: "Três", espanol: "Tres", pronunciacion: "Três" },
                                { portugues: "Quatro", espanol: "Cuatro", pronunciacion: "Quatro" },
                                { portugues: "Cinco", espanol: "Cinco", pronunciacion: "Cinco" },
                                { portugues: "Seis", espanol: "Seis", pronunciacion: "Seis" },
                                { portugues: "Sete", espanol: "Siete", pronunciacion: "Sete" },
                                { portugues: "Oito", espanol: "Ocho", pronunciacion: "Oito" },
                                { portugues: "Nove", espanol: "Nueve", pronunciacion: "Nove" },
                                { portugues: "Dez", espanol: "Diez", pronunciacion: "Dez" }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            nombre: "Frases Utiles",
            imagen: "https://via.placeholder.com/200",
            subcontenedores: [
                {
                    id: 3,
                    nombre: "En el Restaurante",
                    imagen: "https://via.placeholder.com/150",
                    mazos: [
                        {
                            id: 4,
                            nombre: "Pedir Comida",
                            imagen: "https://via.placeholder.com/120",
                            palabras: [
                                { portugues: "Eu gostaria de", espanol: "Me gustaría", pronunciacion: "Eu gostaria de" },
                                { portugues: "O cardápio, por favor", espanol: "La carta, por favor", pronunciacion: "O cardápio, por favor" },
                                { portugues: "Uma mesa para dois", espanol: "Una mesa para dos", pronunciacion: "Uma mesa para dois" },
                                { portugues: "A conta, por favor", espanol: "La cuenta, por favor", pronunciacion: "A conta, por favor" },
                                { portugues: "Está incluído?", espanol: "¿Está incluido?", pronunciacion: "Está incluído?" },
                                { portugues: "Eu sou vegetariano/a", espanol: "Soy vegetariano/a", pronunciacion: "Eu sou vegetariano/a" },
                                { portugues: "Tem opções veganas?", espanol: "¿Hay opciones veganas?", pronunciacion: "Tem opções veganas?" },
                                { portugues: "Está delicioso", espanol: "Está delicioso", pronunciacion: "Está delicioso" },
                                { portugues: "Posso pagar com cartão?", espanol: "¿Puedo pagar con tarjeta?", pronunciacion: "Posso pagar com cartão?" },
                                { portugues: "Onde é o banheiro?", espanol: "¿Dónde está el baño?", pronunciacion: "Onde é o banheiro?" }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
};

// Variables globales
let coleccionActual = null;
let subcontenedorActual = null;
let mazoActual = null;
let preguntasActuales = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;

// Elementos DOM
const pantallas = {
    inicio: document.getElementById('pantalla-inicio'),
    subcontenedores: document.getElementById('pantalla-subcontenedores'),
    mazos: document.getElementById('pantalla-mazos'),
    quiz: document.getElementById('pantalla-quiz'),
    resultados: document.getElementById('pantalla-resultados')
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    cargarColecciones();
    configurarEventListeners();
});

// Cargar las colecciones en la pantalla de inicio
function cargarColecciones() {
    const contenedor = document.getElementById('contenedor-colecciones');
    contenedor.innerHTML = '';
    
    datosApp.colecciones.forEach(coleccion => {
        const card = document.createElement('div');
        card.className = 'lastsummer-card';
        card.dataset.id = coleccion.id;
        
        card.innerHTML = `
            <img src="${coleccion.imagen}" alt="${coleccion.nombre}" class="lastsummer-imagen">
            <div class="lastsummer-texto">${coleccion.nombre}</div>
            <div class="lastsummer-info">${coleccion.subcontenedores.length} categorías</div>
        `;
        
        card.addEventListener('click', () => {
            mostrarSubcontenedores(coleccion);
        });
        
        contenedor.appendChild(card);
    });
}

// Mostrar subcontenedores de una colección
function mostrarSubcontenedores(coleccion) {
    coleccionActual = coleccion;
    
    document.getElementById('titulo-coleccion').textContent = coleccion.nombre;
    
    const contenedor = document.getElementById('contenedor-subcontenedores');
    contenedor.innerHTML = '';
    
    coleccion.subcontenedores.forEach(subcontenedor => {
        const card = document.createElement('div');
        card.className = 'subcontenedor-card';
        card.dataset.id = subcontenedor.id;
        
        card.innerHTML = `
            <img src="${subcontenedor.imagen}" alt="${subcontenedor.nombre}" class="subcontenedor-imagen">
            <div class="subcontenedor-texto">${subcontenedor.nombre}</div>
            <div class="subcontenedor-info">${subcontenedor.mazos.length} mazos</div>
        `;
        
        card.addEventListener('click', () => {
            mostrarMazos(subcontenedor);
        });
        
        contenedor.appendChild(card);
    });
    
    cambiarPantalla('subcontenedores');
}

// Mostrar mazos de un subcontenedor
function mostrarMazos(subcontenedor) {
    subcontenedorActual = subcontenedor;
    
    document.getElementById('titulo-subcontenedor').textContent = subcontenedor.nombre;
    
    const contenedor = document.getElementById('contenedor-mazos');
    contenedor.innerHTML = '';
    
    subcontenedor.mazos.forEach(mazo => {
        const card = document.createElement('div');
        card.className = 'mazo-card';
        card.dataset.id = mazo.id;
        
        card.innerHTML = `
            <img src="${mazo.imagen}" alt="${mazo.nombre}" class="mazo-imagen">
            <div class="mazo-texto">${mazo.nombre}</div>
            <div class="mazo-info">${mazo.palabras.length} palabras</div>
        `;
        
        card.addEventListener('click', () => {
            iniciarQuiz(mazo);
        });
        
        contenedor.appendChild(card);
    });
    
    cambiarPantalla('mazos');
}

// Iniciar el quiz con un mazo específico
function iniciarQuiz(mazo) {
    mazoActual = mazo;
    preguntasActuales = [...mazo.palabras];
    preguntaActual = 0;
    respuestasCorrectas = 0;
    
    // Mezclar las preguntas
    preguntasActuales = mezclarArray(preguntasActuales);
    
    mostrarPregunta();
    cambiarPantalla('quiz');
}

// Mostrar la pregunta actual
function mostrarPregunta() {
    if (preguntaActual >= preguntasActuales.length) {
        mostrarResultados();
        return;
    }
    
    const pregunta = preguntasActuales[preguntaActual];
    document.getElementById('palabra-portugues').textContent = pregunta.portugues;
    document.getElementById('contador-preguntas').textContent = `Pregunta ${preguntaActual + 1}/${preguntasActuales.length}`;
    document.getElementById('resultado').textContent = '';
    document.getElementById('resultado').className = 'resultado';
    document.getElementById('siguiente-pregunta').style.display = 'none';
    
    // Configurar el botón de pronunciación
    const botonPronunciacion = document.getElementById('boton-pronunciacion');
    botonPronunciacion.onclick = () => {
        pronunciarPalabra(pregunta.portugues);
    };
    
    // Generar opciones
    generarOpciones(pregunta);
}

// Generar opciones de respuesta (1 correcta y 3 incorrectas)
function generarOpciones(preguntaCorrecta) {
    const contenedor = document.getElementById('contenedor-opciones');
    contenedor.innerHTML = '';
    
    // Obtener opciones incorrectas
    let opcionesIncorrectas = [];
    const todasLasPalabras = mazoActual.palabras.filter(p => p.portugues !== preguntaCorrecta.portugues);
    
    // Mezclar y tomar 3 opciones incorrectas
    opcionesIncorrectas = mezclarArray([...todasLasPalabras]).slice(0, 3).map(p => p.espanol);
    
    // Crear array con todas las opciones (1 correcta + 3 incorrectas)
    let todasLasOpciones = [
        preguntaCorrecta.espanol,
        ...opcionesIncorrectas
    ];
    
    // Mezclar las opciones
    todasLasOpciones = mezclarArray(todasLasOpciones);
    
    // Crear botones para cada opción
    todasLasOpciones.forEach((opcion, index) => {
        const boton = document.createElement('button');
        boton.className = 'opcion';
        boton.textContent = opcion;
        boton.dataset.esCorrecta = (opcion === preguntaCorrecta.espanol).toString();
        
        boton.addEventListener('click', () => {
            verificarRespuesta(boton, preguntaCorrecta.espanol);
        });
        
        contenedor.appendChild(boton);
    });
}

// Verificar si la respuesta es correcta
function verificarRespuesta(boton, respuestaCorrecta) {
    // Deshabilitar todos los botones
    const todosLosBotones = document.querySelectorAll('.opcion');
    todosLosBotones.forEach(btn => {
        btn.disabled = true;
    });
    
    // Marcar respuesta correcta e incorrecta
    todosLosBotones.forEach(btn => {
        if (btn.dataset.esCorrecta === 'true') {
            btn.classList.add('correcta');
        } else if (btn === boton && btn.dataset.esCorrecta === 'false') {
            btn.classList.add('incorrecta');
        }
    });
    
    // Mostrar resultado
    const resultado = document.getElementById('resultado');
    if (boton.dataset.esCorrecta === 'true') {
        resultado.textContent = '¡Correcto!';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
        
        // Avanzar automáticamente después de un breve tiempo
        setTimeout(() => {
            preguntaActual++;
            mostrarPregunta();
        }, 1500);
    } else {
        resultado.textContent = `Incorrecto. La respuesta correcta es: ${respuestaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        
        // Mostrar botón para continuar
        document.getElementById('siguiente-pregunta').style.display = 'block';
    }
}

// Mostrar resultados finales
function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / preguntasActuales.length) * 100);
    
    let mensaje = `Resultados del mazo: ${mazoActual.nombre}\n\n`;
    mensaje += `Respuestas correctas: ${respuestasCorrectas} de ${preguntasActuales.length}\n`;
    mensaje += `Porcentaje de aciertos: ${porcentaje}%\n\n`;
    
    if (porcentaje >= 80) {
        mensaje += "¡Excelente trabajo! 🎉";
    } else if (porcentaje >= 60) {
        mensaje += "Buen trabajo, pero puedes mejorar. ¡Sigue practicando! 💪";
    } else {
        mensaje += "Necesitas más práctica. ¡No te rindas! 📚";
    }
    
    document.getElementById('resultado-final').textContent = mensaje;
    cambiarPantalla('resultados');
}

// Función para pronunciar palabras (usando la API de síntesis de voz)
function pronunciarPalabra(palabra) {
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(palabra);
        utterance.lang = 'pt-BR'; // Portugués de Brasil
        utterance.rate = 0.8; // Velocidad un poco más lenta para mejor comprensión
        speechSynthesis.speak(utterance);
    } else {
        alert('Tu navegador no soporta la función de pronunciación.');
    }
}

// Función para mezclar arrays (algoritmo Fisher-Yates)
function mezclarArray(array) {
    const nuevoArray = [...array];
    for (let i = nuevoArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
    }
    return nuevoArray;
}

// Cambiar entre pantallas
function cambiarPantalla(pantalla) {
    // Ocultar todas las pantallas
    Object.values(pantallas).forEach(p => {
        p.classList.remove('activa');
    });
    
    // Mostrar la pantalla solicitada
    switch(pantalla) {
        case 'inicio':
            pantallas.inicio.classList.add('activa');
            break;
        case 'subcontenedores':
            pantallas.subcontenedores.classList.add('activa');
            break;
        case 'mazos':
            pantallas.mazos.classList.add('activa');
            break;
        case 'quiz':
            pantallas.quiz.classList.add('activa');
            break;
        case 'resultados':
            pantallas.resultados.classList.add('activa');
            break;
    }
}

// Configurar event listeners para navegación
function configurarEventListeners() {
    // Botones de volver
    document.getElementById('volver-colecciones').addEventListener('click', () => {
        cambiarPantalla('inicio');
    });
    
    document.getElementById('volver-subcontenedores').addEventListener('click', () => {
        cambiarPantalla('subcontenedores');
    });
    
    document.getElementById('volver-mazos').addEventListener('click', () => {
        cambiarPantalla('mazos');
    });
    
    document.getElementById('volver-mazos-resultados').addEventListener('click', () => {
        cambiarPantalla('mazos');
    });
    
    // Botón siguiente pregunta
    document.getElementById('siguiente-pregunta').addEventListener('click', () => {
        preguntaActual++;
        mostrarPregunta();
    });
    
    // Botón repetir mazo
    document.getElementById('repetir-mazo').addEventListener('click', () => {
        iniciarQuiz(mazoActual);
    });
}
