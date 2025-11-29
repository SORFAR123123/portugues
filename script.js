// Estructura de datos simplificada - una colección con 10 mazos
const datosApp = {
    coleccion: {
        id: 1,
        nombre: "Vocabulario Básico",
        mazos: [
            {
                id: 1,
                nombre: "Saludos Comunes",
                imagen: "https://images.unsplash.com/photo-1516487106395-f3d756daf54c?w=150&h=150&fit=crop&crop=center",
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
                imagen: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=center",
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
            },
            {
                id: 3,
                nombre: "Números Básicos",
                imagen: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?w=150&h=150&fit=crop&crop=center",
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
            },
            {
                id: 4,
                nombre: "Familia",
                imagen: "https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Família", espanol: "Familia", pronunciacion: "Família" },
                    { portugues: "Pai", espanol: "Padre", pronunciacion: "Pai" },
                    { portugues: "Mãe", espanol: "Madre", pronunciacion: "Mãe" },
                    { portugues: "Irmão", espanol: "Hermano", pronunciacion: "Irmão" },
                    { portugues: "Irmã", espanol: "Hermana", pronunciacion: "Irmã" },
                    { portugues: "Filho", espanol: "Hijo", pronunciacion: "Filho" },
                    { portugues: "Filha", espanol: "Hija", pronunciacion: "Filha" },
                    { portugues: "Avô", espanol: "Abuelo", pronunciacion: "Avô" },
                    { portugues: "Avó", espanol: "Abuela", pronunciacion: "Avó" },
                    { portugues: "Primo/a", espanol: "Primo/a", pronunciacion: "Primo/a" }
                ]
            },
            {
                id: 5,
                nombre: "Comida y Bebida",
                imagen: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Comida", espanol: "Comida", pronunciacion: "Comida" },
                    { portugues: "Água", espanol: "Agua", pronunciacion: "Água" },
                    { portugues: "Pão", espanol: "Pan", pronunciacion: "Pão" },
                    { portugues: "Arroz", espanol: "Arroz", pronunciacion: "Arroz" },
                    { portugues: "Feijão", espanol: "Frijoles", pronunciacion: "Feijão" },
                    { portugues: "Carne", espanol: "Carne", pronunciacion: "Carne" },
                    { portugues: "Peixe", espanol: "Pescado", pronunciacion: "Peixe" },
                    { portugues: "Fruta", espanol: "Fruta", pronunciacion: "Fruta" },
                    { portugues: "Legumes", espanol: "Verduras", pronunciacion: "Legumes" },
                    { portugues: "Café", espanol: "Café", pronunciacion: "Café" }
                ]
            },
            {
                id: 6,
                nombre: "Colores",
                imagen: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Vermelho", espanol: "Rojo", pronunciacion: "Vermelho" },
                    { portugues: "Azul", espanol: "Azul", pronunciacion: "Azul" },
                    { portugues: "Verde", espanol: "Verde", pronunciacion: "Verde" },
                    { portugues: "Amarelo", espanol: "Amarillo", pronunciacion: "Amarelo" },
                    { portugues: "Preto", espanol: "Negro", pronunciacion: "Preto" },
                    { portugues: "Branco", espanol: "Blanco", pronunciacion: "Branco" },
                    { portugues: "Cinza", espanol: "Gris", pronunciacion: "Cinza" },
                    { portugues: "Roxo", espanol: "Morado", pronunciacion: "Roxo" },
                    { portugues: "Laranja", espanol: "Naranja", pronunciacion: "Laranja" },
                    { portugues: "Rosa", espanol: "Rosa", pronunciacion: "Rosa" }
                ]
            },
            {
                id: 7,
                nombre: "Animales",
                imagen: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Cachorro", espanol: "Perro", pronunciacion: "Cachorro" },
                    { portugues: "Gato", espanol: "Gato", pronunciacion: "Gato" },
                    { portugues: "Pássaro", espanol: "Pájaro", pronunciacion: "Pássaro" },
                    { portugues: "Peixe", espanol: "Pez", pronunciacion: "Peixe" },
                    { portugues: "Cavalo", espanol: "Caballo", pronunciacion: "Cavalo" },
                    { portugues: "Vaca", espanol: "Vaca", pronunciacion: "Vaca" },
                    { portugues: "Porco", espanol: "Cerdo", pronunciacion: "Porco" },
                    { portugues: "Ovelha", espanol: "Oveja", pronunciacion: "Ovelha" },
                    { portugues: "Elefante", espanol: "Elefante", pronunciacion: "Elefante" },
                    { portugues: "Leão", espanol: "León", pronunciacion: "Leão" }
                ]
            },
            {
                id: 8,
                nombre: "Partes del Cuerpo",
                imagen: "https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Cabeça", espanol: "Cabeza", pronunciacion: "Cabeça" },
                    { portugues: "Olhos", espanol: "Ojos", pronunciacion: "Olhos" },
                    { portugues: "Nariz", espanol: "Nariz", pronunciacion: "Nariz" },
                    { portugues: "Boca", espanol: "Boca", pronunciacion: "Boca" },
                    { portugues: "Orelhas", espanol: "Orejas", pronunciacion: "Orelhas" },
                    { portugues: "Braços", espanol: "Brazos", pronunciacion: "Braços" },
                    { portugues: "Mãos", espanol: "Manos", pronunciacion: "Mãos" },
                    { portugues: "Pernas", espanol: "Piernas", pronunciacion: "Pernas" },
                    { portugues: "Pés", espanol: "Pies", pronunciacion: "Pés" },
                    { portugues: "Coração", espanol: "Corazón", pronunciacion: "Coração" }
                ]
            },
            {
                id: 9,
                nombre: "Ropa",
                imagen: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Camisa", espanol: "Camisa", pronunciacion: "Camisa" },
                    { portugues: "Calça", espanol: "Pantalón", pronunciacion: "Calça" },
                    { portugues: "Vestido", espanol: "Vestido", pronunciacion: "Vestido" },
                    { portugues: "Sapato", espanol: "Zapato", pronunciacion: "Sapato" },
                    { portugues: "Meia", espanol: "Calcetín", pronunciacion: "Meia" },
                    { portugues: "Casaco", espanol: "Abrigo", pronunciacion: "Casaco" },
                    { portugues: "Chapéu", espanol: "Sombrero", pronunciacion: "Chapéu" },
                    { portugues: "Luvas", espanol: "Guantes", pronunciacion: "Luvas" },
                    { portugues: "Óculos", espanol: "Gafas", pronunciacion: "Óculos" },
                    { portugues: "Bolsa", espanol: "Bolso", pronunciacion: "Bolsa" }
                ]
            },
            {
                id: 10,
                nombre: "Tiempo y Clima",
                imagen: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=150&h=150&fit=crop&crop=center",
                palabras: [
                    { portugues: "Tempo", espanol: "Tiempo", pronunciacion: "Tempo" },
                    { portugues: "Sol", espanol: "Sol", pronunciacion: "Sol" },
                    { portugues: "Chuva", espanol: "Lluvia", pronunciacion: "Chuva" },
                    { portugues: "Neve", espanol: "Nieve", pronunciacion: "Neve" },
                    { portugues: "Vento", espanol: "Viento", pronunciacion: "Vento" },
                    { portugues: "Nuvem", espanol: "Nube", pronunciacion: "Nuvem" },
                    { portugues: "Calor", espanol: "Calor", pronunciacion: "Calor" },
                    { portugues: "Frio", espanol: "Frío", pronunciacion: "Frio" },
                    { portugues: "Dia", espanol: "Día", pronunciacion: "Dia" },
                    { portugues: "Noite", espanol: "Noche", pronunciacion: "Noite" }
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
