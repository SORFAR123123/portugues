// Estructura de datos con mazos de Blue Lock
const datosApp = {
    coleccion: {
        id: 1,
        nombre: "Vocabulario Blue Lock",
        mazos: [
            {
                id: 1,
                nombre: "Introducción a Blue Lock",
                imagen: "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Após", espanol: "Después", pronunciacion: "Após" },
                    { portugues: "Amistoso", espanol: "Amistoso", pronunciacion: "Amistoso" },
                    { portugues: "Contra", espanol: "Contra", pronunciacion: "Contra" },
                    { portugues: "Seleção", espanol: "Selección", pronunciacion: "Seleção" },
                    { portugues: "Japonesa", espanol: "Japonesa", pronunciacion: "Japonesa" },
                    { portugues: "Sub-20", espanol: "Sub-20", pronunciacion: "Sub-20" },
                    { portugues: "Blue", espanol: "Azul", pronunciacion: "Blue" },
                    { portugues: "Lock", espanol: "Cerradura", pronunciacion: "Lock" },
                    { portugues: "Entra", espanol: "Entra", pronunciacion: "Entra" },
                    { portugues: "Nova", espanol: "Nueva", pronunciacion: "Nova" }
                ]
            },
            {
                id: 2,
                nombre: "Liga Neo Egoísta",
                imagen: "https://images.unsplash.com/photo-1556056504-5c7696c4c28d?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "É", espanol: "Es", pronunciacion: "É" },
                    { portugues: "Início", espanol: "Inicio", pronunciacion: "Início" },
                    { portugues: "Liga", espanol: "Liga", pronunciacion: "Liga" },
                    { portugues: "Neo", espanol: "Neo", pronunciacion: "Neo" },
                    { portugues: "Egoísta", espanol: "Egoísta", pronunciacion: "Egoísta" },
                    { portugues: "Cinco", espanol: "Cinco", pronunciacion: "Cinco" },
                    { portugues: "Times", espanol: "Equipos", pronunciacion: "Times" },
                    { portugues: "Elite", espanol: "Élite", pronunciacion: "Elite" },
                    { portugues: "Europa", espanol: "Europa", pronunciacion: "Europa" },
                    { portugues: "Portas", espanol: "Puertas", pronunciacion: "Portas" }
                ]
            },
            {
                id: 3,
                nombre: "Atacantes y Proyecto",
                imagen: "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Para", espanol: "Para", pronunciacion: "Para" },
                    { portugues: "Atacantes", espanol: "Atacantes", pronunciacion: "Atacantes" },
                    { portugues: "Projeto", espanol: "Proyecto", pronunciacion: "Projeto" },
                    { portugues: "Colocando", espanol: "Colocando", pronunciacion: "Colocando" },
                    { portugues: "Lado", espanol: "Lado", pronunciacion: "Lado" },
                    { portugues: "Confronto", espanol: "Enfrentamiento", pronunciacion: "Confronto" },
                    { portugues: "Direto", espanol: "Directo", pronunciacion: "Direto" },
                    { portugues: "Maiores", espanol: "Mayores", pronunciacion: "Maiores" },
                    { portugues: "Prodígios", espanol: "Prodigios", pronunciacion: "Prodígios" },
                    { portugues: "Futebol", espanol: "Fútbol", pronunciacion: "Futebol" }
                ]
            },
            {
                id: 4,
                nombre: "Kaiser - El Emperador",
                imagen: "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Quer", espanol: "Quiere", pronunciacion: "Quer" },
                    { portugues: "Dizer", espanol: "Decir", pronunciacion: "Dizer" },
                    { portugues: "Pelo", espanol: "Por el", pronunciacion: "Pelo" },
                    { portugues: "Visto", espanol: "Visto", pronunciacion: "Visto" },
                    { portugues: "Visando", espanol: "Apuntando", pronunciacion: "Visando" },
                    { portugues: "Sobreviver", espanol: "Sobrevivir", pronunciacion: "Sobreviver" },
                    { portugues: "Agora", espanol: "Ahora", pronunciacion: "Agora" },
                    { portugues: "Meta", espanol: "Meta", pronunciacion: "Meta" },
                    { portugues: "Dominar", espanol: "Dominar", pronunciacion: "Dominar" },
                    { portugues: "Prazer", espanol: "Placer", pronunciacion: "Prazer" }
                ]
            },
            {
                id: 5,
                nombre: "Presentaciones",
                imagen: "https://images.unsplash.com/photo-1543326727-cf6c39e8f84c?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Conhecer", espanol: "Conocer", pronunciacion: "Conhecer" },
                    { portugues: "Vocês", espanol: "Ustedes", pronunciacion: "Vocês" },
                    { portugues: "Me", espanol: "Me", pronunciacion: "Me" },
                    { portugues: "Chamem", espanol: "Llamen", pronunciacion: "Chamem" },
                    { portugues: "Kaiser", espanol: "Kaiser", pronunciacion: "Kaiser" },
                    { portugues: "Imperador", espanol: "Emperador", pronunciacion: "Imperador" },
                    { portugues: "Rei", espanol: "Rey", pronunciacion: "Rei" },
                    { portugues: "Ei", espanol: "Eh", pronunciacion: "Ei" },
                    { portugues: "Doido", espanol: "Loco", pronunciacion: "Doido" },
                    { portugues: "Encontrar", espanol: "Encontrar", pronunciacion: "Encontrar" }
                ]
            },
            {
                id: 6,
                nombre: "Desafíos y Rivalidades",
                imagen: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Certifique", espanol: "Asegúrate", pronunciacion: "Certifique" },
                    { portugues: "Desafio", espanol: "Desafío", pronunciacion: "Desafio" },
                    { portugues: "Esmagar", espanol: "Aplastar", pronunciacion: "Esmagar" },
                    { portugues: "Toque", espanol: "Toque", pronunciacion: "Toque" },
                    { portugues: "Intimidade", espanol: "Intimidad", pronunciacion: "Intimidade" },
                    { portugues: "Calma", espanol: "Calma", pronunciacion: "Calma" },
                    { portugues: "Irritei", espanol: "Irrité", pronunciacion: "Irritei" },
                    { portugues: "Favorito", espanol: "Favorito", pronunciacion: "Favorito" },
                    { portugues: "Todos", espanol: "Todos", pronunciacion: "Todos" },
                    { portugues: "Oportunidade", espanol: "Oportunidad", pronunciacion: "Oportunidade" }
                ]
            },
            {
                id: 7,
                nombre: "Animales del Circo",
                imagen: "https://images.unsplash.com/photo-1558618047-3c76ca7d13?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Animais", espanol: "Animales", pronunciacion: "Animais" },
                    { portugues: "Circo", espanol: "Circo", pronunciacion: "Circo" },
                    { portugues: "Herói", espanol: "Héroe", pronunciacion: "Herói" },
                    { portugues: "Sair", espanol: "Salir", pronunciacion: "Sair" },
                    { portugues: "Time", espanol: "Equipo", pronunciacion: "Time" },
                    { portugues: "Frustrado", espanol: "Frustrado", pronunciacion: "Frustrado" },
                    { portugues: "Momento", espanol: "Momento", pronunciacion: "Momento" },
                    { portugues: "Tornar", espanol: "Volverse", pronunciacion: "Tornar" },
                    { portugues: "Palhaço", espanol: "Payaso", pronunciacion: "Palhaço" },
                    { portugues: "Treinos", espanol: "Entrenamientos", pronunciacion: "Treinos" }
                ]
            },
            {
                id: 8,
                nombre: "Competencia Intensa",
                imagen: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Intensos", espanol: "Intensos", pronunciacion: "Intensos" },
                    { portugues: "Conquistar", espanol: "Conquistar", pronunciacion: "Conquistar" },
                    { portugues: "Vaga", espanol: "Vacante", pronunciacion: "Vaga" },
                    { portugues: "Temos", espanol: "Tenemos", pronunciacion: "Temos" },
                    { portugues: "Pouco", espanol: "Poco", pronunciacion: "Pouco" },
                    { portugues: "Tempo", espanol: "Tiempo", pronunciacion: "Tempo" },
                    { portugues: "Apenas", espanol: "Solamente", pronunciacion: "Apenas" },
                    { portugues: "Destaca", espanol: "Destaca", pronunciacion: "Destaca" },
                    { portugues: "Primeiro", espanol: "Primero", pronunciacion: "Primeiro" },
                    { portugues: "Presente", espanol: "Presente", pronunciacion: "Presente" }
                ]
            },
            {
                id: 9,
                nombre: "Juego y Egoísmo",
                imagen: "https://images.unsplash.com/photo-1486286701208-1d58e9338013?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Que", espanol: "Que", pronunciacion: "Que" },
                    { portugues: "Comece", espanol: "Comience", pronunciacion: "Comece" },
                    { portugues: "Jogo", espanol: "Juego", pronunciacion: "Jogo" },
                    { portugues: "Então", espanol: "Entonces", pronunciacion: "Então" },
                    { portugues: "Olhe", espanol: "Mire", pronunciacion: "Olhe" },
                    { portugues: "Bem", espanol: "Bien", pronunciacion: "Bem" },
                    { portugues: "Pra", espanol: "Para", pronunciacion: "Pra" },
                    { portugues: "Mim", espanol: "Mí", pronunciacion: "Mim" },
                    { portugues: "Mesmo", espanol: "Mismo", pronunciacion: "Mesmo" },
                    { portugues: "Consegui", espanol: "Conseguí", pronunciacion: "Consegui" }
                ]
            },
            {
                id: 10,
                nombre: "Kunigami y Lavinho",
                imagen: "https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Titular", espanol: "Titular", pronunciacion: "Titular" },
                    { portugues: "Venci", espanol: "Vencí", pronunciacion: "Venci" },
                    { portugues: "Merda", espanol: "Mierda", pronunciacion: "Merda" },
                    { portugues: "Gênio", espanol: "Genio", pronunciacion: "Gênio" },
                    { portugues: "Somente", espanol: "Solamente", pronunciacion: "Somente" },
                    { portugues: "Kunigami", espanol: "Kunigami", pronunciacion: "Kunigami" },
                    { portugues: "Jogar", espanol: "Jugar", pronunciacion: "Jogar" },
                    { portugues: "Quanto", espanol: "Cuánto", pronunciacion: "Quanto" },
                    { portugues: "Observe", espanol: "Observe", pronunciacion: "Observe" },
                    { portugues: "Minha", espanol: "Mi", pronunciacion: "Minha" }
                ]
            }
        ]
    }
};

// Variables globales
let mazoActual = null;
let preguntasActuales = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;

// Elementos DOM
const pantallas = {
    inicio: document.getElementById('pantalla-inicio'),
    quiz: document.getElementById('pantalla-quiz'),
    resultados: document.getElementById('pantalla-resultados')
};

// Inicialización de la aplicación
document.addEventListener('DOMContentLoaded', function() {
    cargarMazos();
    configurarEventListeners();
});

// Cargar los mazos en la pantalla de inicio
function cargarMazos() {
    const contenedor = document.getElementById('contenedor-mazos');
    contenedor.innerHTML = '';
    
    datosApp.coleccion.mazos.forEach(mazo => {
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
        mensaje += "¡Excelente trabajo! 🎉 Eres un verdadero egoísta";
    } else if (porcentaje >= 60) {
        mensaje += "Buen trabajo, pero puedes mejorar. ¡Sigue practicando en Blue Lock! 💪";
    } else {
        mensaje += "Necesitas más práctica. ¡No te rindas y sigue entrenando! 📚";
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
    document.getElementById('volver-inicio').addEventListener('click', () => {
        cambiarPantalla('inicio');
    });
    
    document.getElementById('volver-inicio-resultados').addEventListener('click', () => {
        cambiarPantalla('inicio');
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
