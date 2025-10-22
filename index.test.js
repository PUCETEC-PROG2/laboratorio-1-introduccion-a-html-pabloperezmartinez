const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Pruebas del Portafolio HTML', () => {
  let html;
  let dom;
  let document;

  beforeAll(() => {
    // Leer el archivo index.html
    const indexPath = path.join(__dirname, 'index.html');
    
    // Verificar que el archivo existe
    if (!fs.existsSync(indexPath)) {
      throw new Error('El archivo index.html no existe');
    }
    
    html = fs.readFileSync(indexPath, 'utf-8');
    dom = new JSDOM(html);
    document = dom.window.document;
  });

  // Prueba 1: Verificar que index.html existe
  test('1. El archivo index.html existe', () => {
    const indexPath = path.join(__dirname, 'index.html');
    expect(fs.existsSync(indexPath)).toBe(true);
  });

  // Prueba 2: El encabezado tiene el nombre del estudiante
  test('2. El encabezado H1 contiene el nombre del estudiante (no genérico)', () => {
    const h1 = document.querySelector('h1');
    
    // Verificar que existe el h1
    expect(h1).not.toBeNull();
    
    const h1Text = h1.textContent.trim();
    
    // Verificar que no está vacío
    expect(h1Text.length).toBeGreaterThan(0);
    
    // Verificar que no es texto genérico
    const textoGenerico = [
      'tu nombre',
      'nombre completo',
      'tu nombre completo',
      'nombre del estudiante',
      'estudiante',
      'nombre aquí',
      'escribe tu nombre'
    ];
    
    const esGenerico = textoGenerico.some(texto => 
      h1Text.toLowerCase().includes(texto)
    );
    
    expect(esGenerico).toBe(false);
    
    // Verificar que tiene al menos 2 palabras (nombre y apellido)
    const palabras = h1Text.split(/\s+/).filter(p => p.length > 0);
    expect(palabras.length).toBeGreaterThanOrEqual(2);
  });

  // Prueba 3: Los párrafos existen y no son texto genérico
  test('3. Existen al menos 3 párrafos con contenido no genérico', () => {
    const parrafos = document.querySelectorAll('p');
    
    // Verificar que hay al menos 3 párrafos
    expect(parrafos.length).toBeGreaterThanOrEqual(3);
    
    // Textos genéricos a evitar
    const textosGenericos = [
      'mis habilidades son',
      'describe tus habilidades',
      'mis hobbies incluyen',
      'habla sobre tus hobbies',
      'he estudiado',
      'menciona tus estudios',
      'lorem ipsum',
      'texto de ejemplo',
      'escribe aquí',
      'agrega tu texto'
    ];
    
    let parrafosValidos = 0;
    
    parrafos.forEach(p => {
      const texto = p.textContent.trim().toLowerCase();
      
      // Verificar que el párrafo tenga contenido significativo
      if (texto.length > 20) {
        // Verificar que no sea texto genérico
        const esGenerico = textosGenericos.some(generico => 
          texto.includes(generico)
        );
        
        if (!esGenerico) {
          parrafosValidos++;
        }
      }
    });
    
    // Debe haber al menos 3 párrafos con contenido válido
    expect(parrafosValidos).toBeGreaterThanOrEqual(3);
  });

  // Prueba 4: Se ha agregado una imagen
  test('4. Existe al menos una imagen con atributo src', () => {
    const imagenes = document.querySelectorAll('img');
    
    // Verificar que hay al menos una imagen
    expect(imagenes.length).toBeGreaterThanOrEqual(1);
    
    // Verificar que la primera imagen tiene src
    const primeraImagen = imagenes[0];
    expect(primeraImagen.hasAttribute('src')).toBe(true);
    
    const src = primeraImagen.getAttribute('src');
    
    // Verificar que src no está vacío
    expect(src).toBeTruthy();
    expect(src.length).toBeGreaterThan(0);
    
    // Verificar que no es un placeholder genérico
    const placeholdersGenericos = [
      'ruta-de-tu-imagen',
      'tu-imagen',
      'imagen.jpg',
      'foto.jpg',
      'placeholder'
    ];
    
    const esPlaceholder = placeholdersGenericos.some(placeholder => 
      src.toLowerCase().includes(placeholder)
    );
    
    expect(esPlaceholder).toBe(false);
  });

  // Prueba 5: Existe al menos un enlace a perfiles sociales
  test('5. Existe al menos un enlace válido a redes sociales', () => {
    const enlaces = document.querySelectorAll('a');
    
    // Verificar que hay al menos un enlace
    expect(enlaces.length).toBeGreaterThanOrEqual(1);
    
    // Dominios de redes sociales comunes
    const redesSociales = [
      'facebook.com',
      'twitter.com',
      'instagram.com',
      'linkedin.com',
      'github.com',
      'youtube.com',
      'tiktok.com',
      'x.com',
      'threads.net',
      'whatsapp.com'
    ];
    
    let enlaceValido = false;
    
    enlaces.forEach(a => {
      const href = a.getAttribute('href');
      
      if (href) {
        const hrefLower = href.toLowerCase();
        
        // Verificar si es un enlace a red social
        const esRedSocial = redesSociales.some(red => 
          hrefLower.includes(red)
        );
        
        // Verificar que no sea un placeholder genérico
        const esGenerico = 
          hrefLower.includes('tu-perfil') ||
          hrefLower.includes('tuusuario') ||
          hrefLower.includes('tu-usuario') ||
          hrefLower.includes('example.com');
        
        if (esRedSocial && !esGenerico) {
          enlaceValido = true;
        }
      }
    });
    
    expect(enlaceValido).toBe(true);
  });
});
