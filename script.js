// ============================================================================
// CONFIGURACIÓN DE URLs DE IMÁGENES
// ============================================================================

const configImagenes = {
    contenedores: {
        'contenedor1': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'contenedor2': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop',
        'contenedor3': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        'contenedor4': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
        'contenedor5': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop'
    },
    subcontenedores: {
        'sub1_1': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'sub1_2': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop',
        'sub1_3': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        'sub2_1': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
        'sub2_2': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop',
        'sub2_3': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'sub3_1': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop',
        'sub3_2': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        'sub3_3': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
        'sub4_1': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop',
        'sub4_2': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'sub4_3': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop',
        'sub5_1': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        'sub5_2': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
        'sub5_3': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop'
    },
    mazos: {
        'mazo1': 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop',
        'mazo2': 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=300&fit=crop',
        'mazo3': 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=300&fit=crop',
        'mazo4': 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=300&fit=crop',
        'mazo5': 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=300&fit=crop'
    }
};

// ============================================================================
// ESTRUCTURA PRINCIPAL - PORTUGUÉS
// ============================================================================

const estrutura = {
    'contenedor1': {
        nombre: 'Saudações Básicas',
        subcontenedores: {
            'sub1_1': { 
                nombre: 'Cumprimentos Diários', 
                mazos: generarMazosEspecificos('sub1_1') 
            },
            'sub1_2': { 
                nombre: 'Apresentações', 
                mazos: generarMazosEspecificos('sub1_2') 
            },
            'sub1_3': { 
                nombre: 'Despedidas', 
                mazos: generarMazosEspecificos('sub1_3') 
            }
        }
    },
    'contenedor2': {
        nombre: 'Comida e Restaurante',
        subcontenedores: {
            'sub2_1': { 
                nombre: 'Pratos Principais', 
                mazos: generarMazosEspecificos('sub2_1') 
            },
            'sub2_2': { 
                nombre: 'Bebidas', 
                mazos: generarMazosEspecificos('sub2_2') 
            },
            'sub2_3': { 
                nombre: 'Sobremesas', 
                mazos: generarMazosEspecificos('sub2_3') 
            }
        }
    },
    'contenedor3': {
        nombre: 'Viagens e Transporte',
        subcontenedores: {
            'sub3_1': { 
                nombre: 'Meios de Transporte', 
                mazos: generarMazosEspecificos('sub3_1') 
            },
            'sub3_2': { 
                nombre: 'Direções', 
                mazos: generarMazosEspecificos('sub3_2') 
            },
            'sub3_3': { 
                nombre: 'Hotelaria', 
                mazos: generarMazosEspecificos('sub3_3') 
            }
        }
    },
    'contenedor4': {
        nombre: 'Trabalho e Negócios',
        subcontenedores: {
            'sub4_1': { 
                nombre: 'Profissões', 
                mazos: generarMazosEspecificos('sub4_1') 
            },
            'sub4_2': { 
                nombre: 'Escritório', 
                mazos: generarMazosEspecificos('sub4_2') 
            },
            'sub4_3': { 
                nombre: 'Reuniões', 
                mazos: generarMazosEspecificos('sub4_3') 
            }
        }
    },
    'contenedor5': {
        nombre: 'Casa e Família',
        subcontenedores: {
            'sub5_1': { 
                nombre: 'Família', 
                mazos: generarMazosEspecificos('sub5_1') 
            },
            'sub5_2': { 
                nombre: 'Casa', 
                mazos: generarMazosEspecificos('sub5_2') 
            },
            'sub5_3': { 
                nombre: 'Atividades Domésticas', 
                mazos: generarMazosEspecificos('sub5_3') 
            }
        }
    }
};

// ============================================================================
// BASE DE DATOS DE PALAVRAS EM PORTUGUÊS
// ============================================================================

function generarMazosEspecificos(subcontenedorId) {
    const mazos = {};
    
    for (let i = 1; i <= 5; i++) {
        const mazoId = `mazo${i}`;
        mazos[mazoId] = {
            nombre: `Mazo ${i}`,
            palavras: generarPalabrasEspecificas(subcontenedorId, i)
        };
    }
    
    return mazos;
}

function generarPalabrasEspecificas(subcontenedorId, numeroMazo) {
    const palavrasDatabase = {
        // SAUDAÇÕES BÁSICAS
        'sub1_1': {
            1: [
                { portugues: 'Bom dia', opciones: ['Buenos días', 'Buenas tardes', 'Buenas noches', 'Hola'], resposta: 0 },
                { portugues: 'Boa tarde', opciones: ['Buenas tardes', 'Buenos días', 'Buenas noches', 'Adiós'], resposta: 0 },
                { portugues: 'Boa noite', opciones: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hola'], resposta: 0 },
                { portugues: 'Olá', opciones: ['Hola', 'Adiós', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Oi', opciones: ['Hola', 'Adiós', 'Sí', 'No'], resposta: 0 },
                { portugues: 'Tudo bem?', opciones: ['¿Todo bien?', '¿Cómo estás?', '¿Qué tal?', '¿Qué pasa?'], resposta: 0 },
                { portugues: 'Como vai?', opciones: ['¿Cómo vas?', '¿Qué tal?', '¿Todo bien?', '¿Cómo estás?'], resposta: 0 },
                { portugues: 'Estou bem', opciones: ['Estoy bien', 'Estoy mal', 'Estoy cansado', 'Estoy feliz'], resposta: 0 },
                { portugues: 'Obrigado', opciones: ['Gracias', 'Por favor', 'De nada', 'Lo siento'], resposta: 0 },
                { portugues: 'De nada', opciones: ['De nada', 'Gracias', 'Por favor', 'Perdón'], resposta: 0 }
            ],
            2: [
                { portugues: 'Por favor', opciones: ['Por favor', 'Gracias', 'De nada', 'Lo siento'], resposta: 0 },
                { portugues: 'Com licença', opciones: ['Con permiso', 'Perdón', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Desculpe', opciones: ['Disculpe', 'Perdón', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Perdão', opciones: ['Perdón', 'Gracias', 'Por favor', 'De nada'], resposta: 0 },
                { portugues: 'Até logo', opciones: ['Hasta luego', 'Hola', 'Adiós', 'Buenos días'], resposta: 0 },
                { portugues: 'Até amanhã', opciones: ['Hasta mañana', 'Hasta luego', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'Tchau', opciones: ['Chao', 'Hola', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Adeus', opciones: ['Adiós', 'Hola', 'Hasta luego', 'Buenos días'], resposta: 0 },
                { portugues: 'Bem-vindo', opciones: ['Bienvenido', 'Adiós', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Prazer', opciones: ['Mucho gusto', 'Gracias', 'Por favor', 'De nada'], resposta: 0 }
            ],
            3: [
                { portugues: 'Como você está?', opciones: ['¿Cómo estás?', '¿Qué tal?', '¿Todo bien?', '¿Qué pasa?'], resposta: 0 },
                { portugues: 'Qual é o seu nome?', opciones: ['¿Cuál es tu nombre?', '¿Cómo estás?', '¿De dónde eres?', '¿Qué hora es?'], resposta: 0 },
                { portugues: 'Meu nome é...', opciones: ['Mi nombre es...', 'Yo soy...', 'Me llamo...', 'Tengo...'], resposta: 0 },
                { portugues: 'Prazer em conhecê-lo', opciones: ['Encantado de conocerte', 'Mucho gusto', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'De onde você é?', opciones: ['¿De dónde eres?', '¿Cómo estás?', '¿Qué tal?', '¿Cuántos años tienes?'], resposta: 0 },
                { portugues: 'Eu sou de...', opciones: ['Yo soy de...', 'Yo tengo...', 'Yo quiero...', 'Yo voy...'], resposta: 0 },
                { portugues: 'Quantos anos você tem?', opciones: ['¿Cuántos años tienes?', '¿Cómo estás?', '¿De dónde eres?', '¿Qué hora es?'], resposta: 0 },
                { portugues: 'Eu tenho ... anos', opciones: ['Yo tengo ... años', 'Yo soy ... años', 'Yo tengo ... hermanos', 'Yo quiero ... años'], resposta: 0 },
                { portugues: 'O que você faz?', opciones: ['¿Qué haces?', '¿Qué quieres?', '¿Qué tienes?', '¿Qué necesitas?'], resposta: 0 },
                { portugues: 'Eu sou estudante', opciones: ['Yo soy estudiante', 'Yo soy profesor', 'Yo soy médico', 'Yo soy ingeniero'], resposta: 0 }
            ]
        },
        'sub1_2': {
            1: [
                { portugues: 'Prazer em conhecê-lo', opciones: ['Encantado de conocerte', 'Mucho gusto', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'Muito prazer', opciones: ['Mucho gusto', 'Encantado', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'Este é o meu amigo', opciones: ['Este es mi amigo', 'Este es mi hermano', 'Este es mi padre', 'Este es mi jefe'], resposta: 0 },
                { portugues: 'Gostaria de apresentar...', opciones: ['Me gustaría presentar...', 'Quiero presentar...', 'Este es...', 'Te presento...'], resposta: 0 },
                { portugues: 'Como se chama?', opciones: ['¿Cómo te llamas?', '¿Cómo estás?', '¿De dónde eres?', '¿Qué hora es?'], resposta: 0 },
                { portugues: 'Me chamo...', opciones: ['Me llamo...', 'Yo soy...', 'Mi nombre es...', 'Tengo...'], resposta: 0 },
                { portugues: 'É um prazer', opciones: ['Es un placer', 'Mucho gusto', 'Encantado', 'Hola'], resposta: 0 },
                { portugues: 'Igualmente', opciones: ['Igualmente', 'También', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Permita-me apresentar-me', opciones: ['Permítame presentarme', 'Me presento', 'Soy...', 'Hola'], resposta: 0 },
                { portugues: 'Sou...', opciones: ['Soy...', 'Tengo...', 'Quiero...', 'Voy...'], resposta: 0 }
            ]
        },
        'sub1_3': {
            1: [
                { portugues: 'Tchau', opciones: ['Chao', 'Hola', 'Gracias', 'Por favor'], resposta: 0 },
                { portugues: 'Até logo', opciones: ['Hasta luego', 'Hola', 'Adiós', 'Buenos días'], resposta: 0 },
                { portugues: 'Até amanhã', opciones: ['Hasta mañana', 'Hasta luego', 'Hola', 'Adiós'], resposta: 0 },
                { portugues: 'Até breve', opciones: ['Hasta pronto', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Até mais tarde', opciones: ['Hasta más tarde', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 },
                { portugues: 'Nos vemos', opciones: ['Nos vemos', 'Hola', 'Adiós', 'Gracias'], resposta: 0 },
                { portugues: 'Cuide-se', opciones: ['Cuídate', 'Adiós', 'Hola', 'Gracias'], resposta: 0 },
                { portugues: 'Tenha um bom dia', opciones: ['Que tengas un buen día', 'Buenos días', 'Buenas tardes', 'Buenas noches'], resposta: 0 },
                { portugues: 'Boa noite', opciones: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hola'], resposta: 0 },
                { portugues: 'Adeus', opciones: ['Adiós', 'Hola', 'Hasta luego', 'Buenos días'], resposta: 0 }
            ]
        }
    };

    if (palavrasDatabase[subcontenedorId] && palavrasDatabase[subcontenedorId][numeroMazo]) {
        return palavrasDatabase[subcontenedorId][numeroMazo];
    } else {
        return generarPalabras(10);
    }
}

function generarPalabras(cantidad) {
    const palavras = [];
    const palavrasBase = [
        { portugues: 'Casa', opciones: ['Casa', 'Apartamento', 'Edificio', 'Escuela'], resposta: 0 },
        { portugues: 'Carro', opciones: ['Coche', 'Moto', 'Bicicleta', 'Autobús'], resposta: 0 },
        { portugues: 'Livro', opciones: ['Libro', 'Revista', 'Periódico', 'Cuaderno'], resposta: 0 },
        { portugues: 'Água', opciones: ['Agua', 'Jugo', 'Refresco', 'Café'], resposta: 0 },
        { portugues: 'Comida', opciones: ['Comida', 'Bebida', 'Postre', 'Aperitivo'], resposta: 0 },
        { portugues: 'Tempo', opciones: ['Tiempo', 'Espacio', 'Lugar', 'Momento'], resposta: 0 },
        { portugues: 'Amigo', opciones: ['Amigo', 'Enemigo', 'Conocido', 'Vecino'], resposta: 0 },
        { portugues: 'Família', opciones: ['Familia', 'Amigos', 'Compañeros', 'Vecinos'], resposta: 0 },
        { portugues: 'Trabalho', opciones: ['Trabajo', 'Estudio', 'Descanso', 'Juego'], resposta: 0 },
        { portugues: 'Escola', opciones: ['Escuela', 'Casa', 'Trabajo', 'Parque'], resposta: 0 }
    ];
    
    for (let i = 0; i < quantidade; i++) {
        palavras.push({...palavrasBase[i % palavrasBase.length]});
    }
    return palavras;
}

// ============================================================================
// FUNCIONES GLOBALES
// ============================================================================

let contenedorActual = '';
let subcontenedorActual = '';
let mazoActual = [];
let preguntaActual = 0;
let respuestasCorrectas = 0;
let respuestasIncorrectas = 0;

// ============================================================================
// FUNCIÓN DE PRONUNCIACIÓN
// ============================================================================

function pronunciarPalabra() {
    if (preguntaActual >= mazoActual.length) return;
    
    const palabra = mazoActual[preguntaActual].portugues;
    
    if ('speechSynthesis' in window) {
        const utterance = new SpeechSynthesisUtterance(palabra);
        utterance.lang = 'pt-BR'; // Portugués de Brasil
        utterance.rate = 0.8; // Velocidad moderada
        utterance.pitch = 1;
        utterance.volume = 1;
        
        // Detener cualquier pronunciación anterior
        speechSynthesis.cancel();
        
        // Pronunciar la palabra
        speechSynthesis.speak(utterance);
        
        // Cambiar temporalmente el botón para mostrar que está funcionando
        const boton = document.getElementById('boton-pronunciacion');
        const textoOriginal = boton.textContent;
        boton.textContent = '🔊 Pronunciando...';
        boton.disabled = true;
        
        setTimeout(() => {
            boton.textContent = textoOriginal;
            boton.disabled = false;
        }, 2000);
        
    } else {
        alert('Seu navegador não suporta a função de pronúncia. Tente usar Chrome, Firefox ou Edge.');
    }
}

// ============================================================================
// FUNCIONES DEL SISTEMA PRINCIPAL
// ============================================================================

function obtenerUrlImagen(tipo, id) {
    if (configImagenes[tipo] && configImagenes[tipo][id]) {
        return configImagenes[tipo][id];
    }
    return 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=300&h=300&fit=crop';
}

function cargarContenedor(idContenedor) {
    if (estructura[idContenedor]) {
        contenedorActual = idContenedor;
        const contenedor = estrutura[idContenedor];
        
        document.getElementById('titulo-contenedor').textContent = contenedor.nombre;
        document.getElementById('nombre-contenedor').textContent = `Sub-Contêineres de ${contenedor.nombre}`;
        
        const contenedorSub = document.getElementById('contenedor-subcontenedores');
        contenedorSub.innerHTML = '';
        
        Object.keys(contenedor.subcontenedores).forEach(key => {
            const sub = contenedor.subcontenedores[key];
            const subDiv = document.createElement('div');
            subDiv.className = 'subcontenedor-card';
            subDiv.onclick = () => cargarSubcontenedor(key);
            
            subDiv.innerHTML = `
                <img src="${obtenerUrlImagen('subcontenedores', key)}" alt="${sub.nombre}" class="subcontenedor-imagen">
                <div class="subcontenedor-texto">${sub.nombre}</div>
                <div class="subcontenedor-info">5 mazos disponíveis</div>
            `;
            
            contenedorSub.appendChild(subDiv);
        });
        
        cambiarPantalla('pantalla-subcontenedores');
    }
}

function cargarSubcontenedor(idSubcontenedor) {
    const contenedor = estrutura[contenedorActual];
    const subcontenedor = contenedor.subcontenedores[idSubcontenedor];
    if (subcontenedor) {
        subcontenedorActual = idSubcontenedor;
        
        document.getElementById('titulo-subcontenedor').textContent = subcontenedor.nombre;
        document.getElementById('nombre-subcontenedor').textContent = `Mazos de ${subcontenedor.nombre}`;
        
        const contenedorMazos = document.getElementById('contenedor-mazos');
        contenedorMazos.innerHTML = '';
        
        Object.keys(subcontenedor.mazos).forEach(key => {
            const mazo = subcontenedor.mazos[key];
            const mazoDiv = document.createElement('div');
            mazoDiv.className = 'mazo-card';
            mazoDiv.onclick = () => cargarMazo(key);
            
            mazoDiv.innerHTML = `
                <img src="${obtenerUrlImagen('mazos', key)}" alt="${mazo.nombre}" class="mazo-imagen">
                <div class="mazo-texto">${mazo.nombre}</div>
                <div class="mazo-info">10 palavras</div>
            `;
            
            contenedorMazos.appendChild(mazoDiv);
        });
        
        cambiarPantalla('pantalla-mazos');
    }
}

function cargarMazo(idMazo) {
    const contenedor = estrutura[contenedorActual];
    const subcontenedor = contenedor.subcontenedores[subcontenedorActual];
    if (subcontenedor && subcontenedor.mazos[idMazo]) {
        mazoActual = [...subcontenedor.mazos[idMazo].palavras];
        preguntaActual = 0;
        respuestasCorrectas = 0;
        respuestasIncorrectas = 0;
        
        mezclarPreguntas();
        cambiarPantalla('pantalla-quiz');
        mostrarPregunta();
    }
}

function mezclarPreguntas() {
    for (let i = mazoActual.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [mazoActual[i], mazoActual[j]] = [mazoActual[j], mazoActual[i]];
    }
}

function mostrarPregunta() {
    if (preguntaActual < mazoActual.length) {
        const pregunta = mazoActual[preguntaActual];
        
        document.getElementById('numero-pregunta').textContent = preguntaActual + 1;
        document.getElementById('total-preguntas').textContent = mazoActual.length;
        document.getElementById('palabra-portugues').textContent = pregunta.portugues;
        document.getElementById('resultado').textContent = '';
        document.getElementById('resultado').className = 'resultado';
        document.getElementById('boton-siguiente').style.display = 'none';
        
        // Configurar el botón de pronunciación
        const botonPronunciacion = document.getElementById('boton-pronunciacion');
        botonPronunciacion.onclick = pronunciarPalabra;
        botonPronunciacion.disabled = false;
        botonPronunciacion.textContent = '🔊 Ouvir Pronúncia';
        
        const contenedorOpciones = document.getElementById('contenedor-opciones');
        contenedorOpciones.innerHTML = '';
        
        const opcionesMezcladas = [...pregunta.opciones];
        for (let i = opcionesMezcladas.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [opcionesMezcladas[i], opcionesMezcladas[j]] = [opcionesMezcladas[j], opcionesMezcladas[i]];
        }
        
        opcionesMezcladas.forEach((opcion, index) => {
            const botonOpcion = document.createElement('button');
            botonOpcion.className = 'opcion';
            botonOpcion.textContent = opcion;
            botonOpcion.onclick = () => verificarRespuesta(opcion, pregunta.opciones[pregunta.resposta]);
            contenedorOpciones.appendChild(botonOpcion);
        });
    } else {
        mostrarResultados();
    }
}

function verificarRespuesta(respuestaSeleccionada, respostaCorrecta) {
    const opciones = document.querySelectorAll('.opcion');
    const resultado = document.getElementById('resultado');
    
    opciones.forEach(opcion => {
        opcion.disabled = true;
    });
    
    // Deshabilitar el botón de pronunciación durante la verificación
    document.getElementById('boton-pronunciacion').disabled = true;
    
    opciones.forEach(opcion => {
        if (opcion.textContent === respostaCorrecta) {
            opcion.classList.add('correcta');
        } else if (opcion.textContent === respostaSeleccionada && respostaSeleccionada !== respostaCorrecta) {
            opcion.classList.add('incorrecta');
        }
    });
    
    if (respuestaSeleccionada === respostaCorrecta) {
        resultado.textContent = '¡Correto! ✅';
        resultado.className = 'resultado correcto';
        respuestasCorrectas++;
        
        setTimeout(() => {
            siguientePregunta();
        }, 1500);
        
    } else {
        resultado.textContent = `Incorreto. A resposta correta é: ${respostaCorrecta}`;
        resultado.className = 'resultado incorrecto';
        respuestasIncorrectas++;
        
        document.getElementById('boton-siguiente').style.display = 'block';
    }
}

function siguientePregunta() {
    preguntaActual++;
    mostrarPregunta();
}

function mostrarResultados() {
    const porcentaje = Math.round((respuestasCorrectas / mazoActual.length) * 100);
    
    cambiarPantalla('pantalla-resultados');
    
    const resultadoFinal = document.getElementById('resultado-final');
    
    resultadoFinal.innerHTML = `
        Resumo do Quiz:
        
        Perguntas totais: ${mazoActual.length}
        Respostas corretas: ${respuestasCorrectas}
        Respostas incorretas: ${respuestasIncorrectas}
        Percentual de acertos: ${porcentaje}%
        
        ${porcentaje >= 80 ? '¡Excelente trabalho! 🎉' : 
          porcentaje >= 60 ? 'Bom trabalho, mas pode melhorar 👍' : 
          'Continue praticando, você vai melhorar na próxima vez 💪'}
    `;
}

function cambiarPantalla(idPantalla) {
    document.querySelectorAll('.pantalla').forEach(pantalla => {
        pantalla.classList.remove('activa');
    });
    document.getElementById(idPantalla).classList.add('activa');
}

function volverAlInicio() {
    cambiarPantalla('pantalla-inicio');
}

function volverASubcontenedores() {
    cambiarPantalla('pantalla-subcontenedores');
}

function volverAMazos() {
    cambiarPantalla('pantalla-mazos');
}

function repetirQuiz() {
    preguntaActual = 0;
    respuestasCorrectas = 0;
    respuestasIncorrectas = 0;
    mezclarPreguntas();
    cambiarPantalla('pantalla-quiz');
    mostrarPregunta();
}

// ============================================================================
// INICIALIZACIÓN
// ============================================================================

document.addEventListener('DOMContentLoaded', function() {
    console.log("🚀 Aplicativo de Português carregado!");
});
