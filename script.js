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
                mazos: {
                    'mazo1': { nombre: 'Mazo 1', palavras: generarPalabrasBasicas(1) },
                    'mazo2': { nombre: 'Mazo 2', palavras: generarPalabrasBasicas(2) },
                    'mazo3': { nombre: 'Mazo 3', palavras: generarPalabrasBasicas(3) },
                    'mazo4': { nombre: 'Mazo 4', palavras: generarPalabrasBasicas(4) },
                    'mazo5': { nombre: 'Mazo 5', palavras: generarPalabrasBasicas(5) }
                }
            },
            'sub1_2': { 
                nombre: 'Apresentações', 
                mazos: {
                    'mazo1': { nombre: 'Mazo 1', palavras: generarPalabrasPresentaciones(1) },
                    'mazo2': { nombre: 'Mazo 2', palavras: generarPalabrasPresentaciones(2) },
                    'mazo3': { nombre: 'Mazo 3', palavras: generarPalabrasPresentaciones(3) },
                    'mazo4': { nombre: 'Mazo 4', palavras: generarPalabrasPresentaciones(4) },
                    'mazo5': { nombre: 'Mazo 5', palavras: generarPalabrasPresentaciones(5) }
                }
            },
            'sub1_3': { 
                nombre: 'Despedidas', 
                mazos: {
                    'mazo1': { nombre: 'Mazo 1', palavras: generarPalabrasDespedidas(1) },
                    'mazo2': { nombre: 'Mazo 2', palavras: generarPalabrasDespedidas(2) },
                    'mazo3': { nombre: 'Mazo 3', palavras: generarPalabrasDespedidas(3) },
                    'mazo4': { nombre: 'Mazo 4', palavras: generarPalabrasDespedidas(4) },
                    'mazo5': { nombre: 'Mazo 5', palavras: generarPalabrasDespedidas(5) }
                }
            }
        }
    },
    'contenedor2': {
        nombre: 'Comida e Restaurante',
        subcontenedores: {
            'sub2_1': { 
                nombre: 'Pratos Principais', 
                mazos: {
                    'mazo1': { nombre: 'Mazo 1', palavras: generarPalabrasComida(1) },
                    'mazo2': { nombre: 'Mazo 2', palavras: generarPalabrasComida(2) },
                    'mazo3': { nombre: 'Mazo 3', palavras: generarPalabrasComida(3) },
                    'mazo4': { nombre: 'Mazo 4', palavras: generarPalabrasComida(4) },
                    'mazo5': { nombre: 'Mazo 5', palavras: generarPalabrasComida(5) }
                }
            },
            'sub2_2': { 
                nombre: 'Bebidas', 
                mazos: {
                    'mazo1': { nombre: 'Mazo 1', palavras: generarPalabrasBebidas(1) },
                    'mazo2': { nombre: 'Mazo 2', palavras: generarPalabrasBebidas(2) },
                    'mazo3': { nombre: 'Mazo 3', palavras: generarPalabrasBebidas(3) },
                    'mazo4': { nombre: 'Mazo 4', palavras: generarPalabrasBebidas(4) },
                    'mazo5': { nombre: 'Mazo 5', palavras: generarPalabrasBebidas(5) }
                }
            },
            'sub2_3': { 
                nombre: 'Sobremesas', 
                mazos: {
                    'mazo1': { nombre: 'Mazo 1', palavras: generarPalabrasSobremesas(1) },
                    'mazo2': { nombre: 'Mazo 2', palavras: generarPalabrasSobremesas(2) },
                    'mazo3': { nombre: 'Mazo 3', palavras: generarPalabrasSobremesas(3) },
                    'mazo4': { nombre: 'Mazo 4', palavras: generarPalabrasSobremesas(4) },
                    'mazo5': { nombre: 'Mazo 5', palavras: generarPalabrasSobremesas(5) }
                }
            }
        }
    },
    'contenedor3': {
        nombre: 'Viagens e Transporte',
        subcontenedores: {
            'sub3_1': { 
                nombre: 'Meios de Transporte', 
                mazos: {
                    'mazo1': { nombre: 'Mazo 1', palavras: generarPalabrasTransporte(1) },
                    'mazo2': { nombre: 'Mazo 2', palavras: generarPalabrasTransporte(2) },
                    'mazo3': { nombre: 'Mazo 3', palavras: generarPalabrasTransporte(3) },
                    'mazo4': { nombre: 'Mazo 4', palavras: generarPalabrasTransporte(4) },
                    'mazo5': { nombre: 'Mazo 5', palavras: generarPalabrasTransporte(5) }
                }
            },
            'sub3_2': { 
                nombre: 'Direções', 
                mazos: {
                    'mazo1': { nombre: 'Mazo 1', palavras: generarPalabrasDirecciones(1) },
                    'mazo2': { nombre: 'Mazo 2', palavras: generarPalabrasDirecciones(2) },
                    'mazo3': { nombre: 'Mazo 3', palavras: generarPalabrasDirecciones(3) },
                    'mazo4': { nombre: 'Mazo 4', palavras: generarPalabrasDirecciones(4) },
                    'mazo5': { nombre: 'Mazo 5', palavras: generarPalabrasDirecciones(5) }
                }
            },
            'sub3_3': { 
                nombre: 'Hotelaria', 
                mazos: {
                    'mazo1': { nombre: 'Mazo 1', palavras: generarPalabrasHotel(1) },
                    'mazo2': { nombre: 'Mazo 2', palavras: generarPalabrasHotel(2) },
                    'mazo3': { nombre: 'Mazo 3', palavras: generarPalabrasHotel(3) },
                    'mazo4': { nombre: 'Mazo 4', palavras: generarPalabrasHotel(4) },
                    'mazo5': { nombre: 'Mazo 5', palavras: generarPalabrasHotel(5) }
                }
            }
        }
    }
};

// ============================================================================
// BASE DE DATOS DE PALABRAS
// ============================================================================

function generarPalabrasBasicas(nivel) {
    const palabras = [
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
    ];
    return palabras.slice(0, 10);
}

function generarPalabrasPresentaciones(nivel) {
    const palabras = [
        { portugues: 'Prazer em conhecê-lo', opciones: ['Encantado de conocerte', 'Mucho gusto', 'Hola', 'Adiós'], resposta: 0 },
        { portugues: 'Muito prazer', opciones: ['Mucho gusto', 'Encantado', 'Hola', 'Adiós'], resposta: 0 },
        { portugues: 'Como se chama?', opciones: ['¿Cómo te llamas?', '¿Cómo estás?', '¿De dónde eres?', '¿Qué hora es?'], resposta: 0 },
        { portugues: 'Me chamo...', opciones: ['Me llamo...', 'Yo soy...', 'Mi nombre es...', 'Tengo...'], resposta: 0 },
        { portugues: 'De onde você é?', opciones: ['¿De dónde eres?', '¿Cómo estás?', '¿Qué tal?', '¿Cuántos años tienes?'], resposta: 0 },
        { portugues: 'Eu sou do Brasil', opciones: ['Soy de Brasil', 'Soy de México', 'Soy de España', 'Soy de Argentina'], resposta: 0 },
        { portugues: 'O que você faz?', opciones: ['¿Qué haces?', '¿Qué quieres?', '¿Qué tienes?', '¿Qué necesitas?'], resposta: 0 },
        { portugues: 'Eu sou estudante', opciones: ['Soy estudiante', 'Soy profesor', 'Soy médico', 'Soy ingeniero'], resposta: 0 },
        { portugues: 'Quantos anos você tem?', opciones: ['¿Cuántos años tienes?', '¿Cómo estás?', '¿De dónde eres?', '¿Qué hora es?'], resposta: 0 },
        { portugues: 'Eu tenho 25 anos', opciones: ['Tengo 25 años', 'Soy 25 años', 'Tengo 25 hermanos', 'Quiero 25 años'], resposta: 0 }
    ];
    return palabras.slice(0, 10);
}

function generarPalabrasDespedidas(nivel) {
    const palabras = [
        { portugues: 'Tchau', opciones: ['Chao', 'Hola', 'Gracias', 'Por favor'], resposta: 0 },
        { portugues: 'Até logo', opciones: ['Hasta luego', 'Hola', 'Adiós', 'Buenos días'], resposta: 0 },
        { portugues: 'Até amanhã', opciones: ['Hasta mañana', 'Hasta luego', 'Hola', 'Adiós'], resposta: 0 },
        { portugues: 'Até breve', opciones: ['Hasta pronto', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 },
        { portugues: 'Nos vemos', opciones: ['Nos vemos', 'Hola', 'Adiós', 'Gracias'], resposta: 0 },
        { portugues: 'Cuide-se', opciones: ['Cuídate', 'Adiós', 'Hola', 'Gracias'], resposta: 0 },
        { portugues: 'Tenha um bom dia', opciones: ['Que tengas un buen día', 'Buenos días', 'Buenas tardes', 'Buenas noches'], resposta: 0 },
        { portugues: 'Boa noite', opciones: ['Buenas noches', 'Buenos días', 'Buenas tardes', 'Hola'], resposta: 0 },
        { portugues: 'Adeus', opciones: ['Adiós', 'Hola', 'Hasta luego', 'Buenos días'], resposta: 0 },
        { portugues: 'Até mais tarde', opciones: ['Hasta más tarde', 'Hasta luego', 'Adiós', 'Hola'], resposta: 0 }
    ];
    return palabras.slice(0, 10);
}

function generarPalabrasComida(nivel) {
    const palabras = [
        { portugues: 'Arroz', opciones: ['Arroz', 'Frijoles', 'Pan', 'Pasta'], resposta: 0 },
        { portugues: 'Feijão', opciones: ['Frijoles', 'Arroz', 'Carne', 'Pescado'], resposta: 0 },
        { portugues: 'Carne', opciones: ['Carne', 'Pescado', 'Pollo', 'Verdura'], resposta: 0 },
        { portugues: 'Frango', opciones: ['Pollo', 'Carne', 'Pescado', 'Cerdo'], resposta: 0 },
        { portugues: 'Peixe', opciones: ['Pescado', 'Carne', 'Pollo', 'Marisco'], resposta: 0 },
        { portugues: 'Salada', opciones: ['Ensalada', 'Sopa', 'Postre', 'Bebida'], resposta: 0 },
        { portugues: 'Sopa', opciones: ['Sopa', 'Ensalada', 'Postre', 'Bebida'], resposta: 0 },
        { portugues: 'Pão', opciones: ['Pan', 'Queso', 'Mantequilla', 'Jamón'], resposta: 0 },
        { portugues: 'Queijo', opciones: ['Queso', 'Pan', 'Leche', 'Yogur'], resposta: 0 },
        { portugues: 'Ovo', opciones: ['Huevo', 'Leche', 'Pan', 'Queso'], resposta: 0 }
    ];
    return palabras.slice(0, 10);
}

function generarPalabrasBebidas(nivel) {
    const palabras = [
        { portugues: 'Água', opciones: ['Agua', 'Jugo', 'Refresco', 'Café'], resposta: 0 },
        { portugues: 'Suco', opciones: ['Jugo', 'Agua', 'Refresco', 'Café'], resposta: 0 },
        { portugues: 'Café', opciones: ['Café', 'Té', 'Chocolate', 'Leche'], resposta: 0 },
        { portugues: 'Chá', opciones: ['Té', 'Café', 'Chocolate', 'Leche'], resposta: 0 },
        { portugues: 'Leite', opciones: ['Leche', 'Agua', 'Jugo', 'Café'], resposta: 0 },
        { portugues: 'Cerveja', opciones: ['Cerveza', 'Vino', 'Agua', 'Refresco'], resposta: 0 },
        { portugues: 'Vinho', opciones: ['Vino', 'Cerveza', 'Agua', 'Refresco'], resposta: 0 },
        { portugues: 'Refrigerante', opciones: ['Refresco', 'Agua', 'Jugo', 'Café'], resposta: 0 },
        { portugues: 'Água com gás', opciones: ['Agua con gas', 'Agua sin gas', 'Refresco', 'Jugo'], resposta: 0 },
        { portugues: 'Café com leite', opciones: ['Café con leche', 'Café solo', 'Té', 'Chocolate'], resposta: 0 }
    ];
    return palabras.slice(0, 10);
}

function generarPalabrasSobremesas(nivel) {
    const palabras = [
        { portugues: 'Bolo', opciones: ['Pastel', 'Galleta', 'Helado', 'Flan'], resposta: 0 },
        { portugues: 'Sorvete', opciones: ['Helado', 'Pastel', 'Galleta', 'Flan'], resposta: 0 },
        { portugues: 'Chocolate', opciones: ['Chocolate', 'Vainilla', 'Fresa', 'Caramelo'], resposta: 0 },
        { portugues: 'Pudim', opciones: ['Flan', 'Pastel', 'Helado', 'Galleta'], resposta: 0 },
        { portugues: 'Fruta', opciones: ['Fruta', 'Verdura', 'Carne', 'Pescado'], resposta: 0 },
        { portugues: 'Biscoito', opciones: ['Galleta', 'Pastel', 'Pan', 'Queso'], resposta: 0 },
        { portugues: 'Torta', opciones: ['Tarta', 'Pastel', 'Galleta', 'Flan'], resposta: 0 },
        { portugues: 'Doce', opciones: ['Dulce', 'Salado', 'Amargo', 'Ácido'], resposta: 0 },
        { portugues: 'Gelatina', opciones: ['Gelatina', 'Flan', 'Helado', 'Pastel'], resposta: 0 },
        { portugues: 'Mousse', opciones: ['Mousse', 'Flan', 'Helado', 'Pastel'], resposta: 0 }
    ];
    return palabras.slice(0, 10);
}

function generarPalabrasTransporte(nivel) {
    const palabras = [
        { portugues: 'Carro', opciones: ['Coche', 'Autobús', 'Tren', 'Avión'], resposta: 0 },
        { portugues: 'Ônibus', opciones: ['Autobús', 'Coche', 'Tren', 'Avión'], resposta: 0 },
        { portugues: 'Trem', opciones: ['Tren', 'Autobús', 'Coche', 'Avión'], resposta: 0 },
        { portugues: 'Avião', opciones: ['Avión', 'Coche', 'Autobús', 'Tren'], resposta: 0 },
        { portugues: 'Metrô', opciones: ['Metro', 'Autobús', 'Tren', 'Coche'], resposta: 0 },
        { portugues: 'Bicicleta', opciones: ['Bicicleta', 'Moto', 'Coche', 'Autobús'], resposta: 0 },
        { portugues: 'Moto', opciones: ['Moto', 'Bicicleta', 'Coche', 'Autobús'], resposta: 0 },
        { portugues: 'Barco', opciones: ['Barco', 'Avión', 'Coche', 'Tren'], resposta: 0 },
        { portugues: 'Taxi', opciones: ['Taxi', 'Autobús', 'Coche', 'Tren'], resposta: 0 },
        { portugues: 'Caminhão', opciones: ['Camión', 'Coche', 'Autobús', 'Tren'], resposta: 0 }
    ];
    return palabras.slice(0, 10);
}

function generarPalabrasDirecciones(nivel) {
    const palabras = [
        { portugues: 'Direita', opciones: ['Derecha', 'Izquierda', 'Recto', 'Atrás'], resposta: 0 },
        { portugues: 'Esquerda', opciones: ['Izquierda', 'Derecha', 'Recto', 'Atrás'], resposta: 0 },
        { portugues: 'Reto', opciones: ['Recto', 'Derecha', 'Izquierda', 'Atrás'], resposta: 0 },
        { portugues: 'Atrás', opciones: ['Atrás', 'Delante', 'Derecha', 'Izquierda'], resposta: 0 },
        { portugues: 'Em frente', opciones: ['Enfrente', 'Atrás', 'Derecha', 'Izquierda'], resposta: 0 },
        { portugues: 'Ao lado', opciones: ['Al lado', 'Enfrente', 'Atrás', 'Derecha'], resposta: 0 },
        { portugues: 'Longe', opciones: ['Lejos', 'Cerca', 'Aquí', 'Allí'], resposta: 0 },
        { portugues: 'Perto', opciones: ['Cerca', 'Lejos', 'Aquí', 'Allí'], resposta: 0 },
        { portugues: 'Aqui', opciones: ['Aquí', 'Allí', 'Lejos', 'Cerca'], resposta: 0 },
        { portugues: 'Ali', opciones: ['Allí', 'Aquí', 'Lejos', 'Cerca'], resposta: 0 }
    ];
    return palabras.slice(0, 10);
}

function generarPalabrasHotel(nivel) {
    const palabras = [
        { portugues: 'Hotel', opciones: ['Hotel', 'Casa', 'Apartamento', 'Escuela'], resposta: 0 },
        { portugues: 'Quarto', opciones: ['Habitación', 'Baño', 'Cocina', 'Sala'], resposta: 0 },
        { portugues: 'Cama', opciones: ['Cama', 'Mesa', 'Silla', 'Armario'], resposta: 0 },
        { portugues: 'Banheiro', opciones: ['Baño', 'Habitación', 'Cocina', 'Sala'], resposta: 0 },
        { portugues: 'Recepção', opciones: ['Recepción', 'Habitación', 'Baño', 'Cocina'], resposta: 0 },
        { portugues: 'Chave', opciones: ['Llave', 'Puerta', 'Ventana', 'Cama'], resposta: 0 },
        { portugues: 'Reserva', opciones: ['Reserva', 'Cancelación', 'Llegada', 'Salida'], resposta: 0 },
        { portugues: 'Check-in', opciones: ['Check-in', 'Check-out', 'Reserva', 'Cancelación'], resposta: 0 },
        { portugues: 'Check-out', opciones: ['Check-out', 'Check-in', 'Reserva', 'Cancelación'], resposta: 0 },
        { portugues: 'Café da manhã', opciones: ['Desayuno', 'Almuerzo', 'Cena', 'Merienda'], resposta: 0 }
    ];
    return palabras.slice(0, 10);
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
        utterance.lang = 'pt-BR';
        utterance.rate = 0.8;
        utterance.pitch = 1;
        utterance.volume = 1;
        
        speechSynthesis.cancel();
        speechSynthesis.speak(utterance);
        
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
    console.log('Cargando contenedor:', idContenedor);
    
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
    } else {
        console.error('Contenedor no encontrado:', idContenedor);
    }
}

function cargarSubcontenedor(idSubcontenedor) {
    console.log('Cargando subcontenedor:', idSubcontenedor);
    
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
    } else {
        console.error('Subcontenedor no encontrado:', idSubcontenedor);
    }
}

function cargarMazo(idMazo) {
    console.log('Cargando mazo:', idMazo);
    
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
    } else {
        console.error('Mazo no encontrado:', idMazo);
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
