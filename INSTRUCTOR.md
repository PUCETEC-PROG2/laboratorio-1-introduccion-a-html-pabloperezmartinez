# Sistema de Calificación Automática - Guía para el Profesor

## Resumen

Este template de laboratorio incluye un sistema de calificación automática que evalúa el trabajo de los estudiantes sobre 10 puntos mediante 5 pruebas unitarias.

## Estructura de Calificación

Cada prueba vale **2 puntos**, para un total de **10 puntos**:

| Prueba | Criterio | Puntos |
|--------|----------|--------|
| 1 | Archivo `index.html` existe | 2 |
| 2 | Encabezado con nombre real (no genérico) | 2 |
| 3 | Tres párrafos con contenido personalizado | 2 |
| 4 | Imagen con URL válida | 2 |
| 5 | Al menos un enlace a redes sociales válido | 2 |
| **TOTAL** | | **10** |

## Archivos del Sistema

- **`index.test.js`**: Contiene las 5 pruebas unitarias usando Jest y jsdom
- **`grade.js`**: Script que ejecuta las pruebas y calcula la calificación
- **`.github/workflows/test.yml`**: GitHub Actions workflow para ejecución automática
- **`package.json`**: Configuración de Node.js con las dependencias necesarias

## Cómo Funciona

### Para los Estudiantes

Los estudiantes pueden ejecutar:

```bash
npm test        # Ver resultados de las pruebas
npm run grade   # Ver su calificación detallada
```

### En GitHub Classroom

1. Cuando el estudiante hace `git push`, se activa automáticamente el workflow
2. GitHub Actions ejecuta `npm run grade`
3. El sistema muestra:
   - Resultados de cada prueba (✅ o ❌)
   - Puntos obtenidos por prueba
   - Calificación final sobre 10
   - Mensaje motivacional según la calificación

### Salida del Sistema

El sistema muestra:

```
========================================
   SISTEMA DE CALIFICACIÓN AUTOMÁTICA
========================================

📊 RESULTADOS:
─────────────────────────────────────
✅ Pruebas aprobadas: 5/5
❌ Pruebas fallidas:  0/5
─────────────────────────────────────
📝 CALIFICACIÓN: 10.0/10
─────────────────────────────────────

📋 DESGLOSE DE CALIFICACIÓN:
─────────────────────────────────────
✅ Prueba 1: 2/2 puntos
   1. El archivo index.html existe
✅ Prueba 2: 2/2 puntos
   2. El encabezado H1 contiene el nombre...
...

🎯 CALIFICACIÓN FINAL: 10.0/10

🎉 ¡EXCELENTE! Has completado todos los requisitos.
========================================
```

## Validaciones Implementadas

### Prueba 1: Archivo existe
- Verifica que `index.html` esté en la raíz del proyecto

### Prueba 2: Encabezado con nombre real
- Busca un elemento `<h1>`
- Verifica que no esté vacío
- Verifica que no contenga texto genérico como "tu nombre", "nombre completo", etc.
- Verifica que tenga al menos 2 palabras (nombre y apellido)

### Prueba 3: Tres párrafos personalizados
- Busca elementos `<p>`
- Verifica que haya al menos 3 párrafos
- Verifica que cada párrafo tenga más de 20 caracteres
- Verifica que no contengan texto genérico como "mis habilidades son", "lorem ipsum", etc.
- Cuenta solo los párrafos válidos (mínimo 3)

### Prueba 4: Imagen válida
- Busca elementos `<img>`
- Verifica que tenga atributo `src`
- Verifica que `src` no esté vacío
- Verifica que no sea un placeholder genérico como "ruta-de-tu-imagen", "placeholder", etc.

### Prueba 5: Enlace a redes sociales
- Busca elementos `<a>`
- Verifica que tengan atributo `href`
- Verifica que el enlace sea a una red social real (Facebook, Twitter, LinkedIn, GitHub, etc.)
- Verifica que no sea un enlace genérico como "tu-perfil", "tuusuario", "example.com", etc.

## Ver Resultados en GitHub

1. Ve al repositorio del estudiante en GitHub
2. Haz clic en la pestaña "Actions"
3. Selecciona el workflow más reciente
4. Verás la calificación en los logs de la ejecución

## Modificar el Sistema

### Cambiar Puntuación

Edita `grade.js` y modifica la línea:

```javascript
const points = test.status === 'passed' ? 2 : 0;  // Cambiar 2 por otro valor
```

### Agregar Más Pruebas

1. Edita `index.test.js`
2. Agrega un nuevo `test()` dentro del `describe()`
3. Actualiza `grade.js` si es necesario ajustar el total de puntos

### Cambiar Textos Genéricos Detectados

Edita los arrays en `index.test.js`:

```javascript
const textoGenerico = [
  'tu nombre',
  'nombre completo',
  // ... agregar más
];
```

## Dependencias

- **Node.js**: v18 o superior
- **Jest**: ^30.2.0 (framework de testing)
- **jsdom**: ^23.0.1 (para parsear y manipular HTML)

## Troubleshooting

### Las pruebas no se ejecutan
- Verificar que `node_modules` esté instalado: `npm install`
- Verificar versión de Node.js: `node --version`

### GitHub Actions falla
- Verificar que `.github/workflows/test.yml` exista
- Verificar que `package.json` tenga el script `grade`
- Verificar logs en la pestaña Actions de GitHub

### Falsos positivos/negativos
- Ajustar las validaciones en `index.test.js`
- Agregar o quitar textos genéricos de las listas

## Recomendaciones

1. **Probar localmente**: Antes de que los estudiantes hagan push, deben ejecutar `npm run grade`
2. **Retroalimentación clara**: Los mensajes de error de Jest son descriptivos
3. **Iteración**: Los estudiantes pueden hacer múltiples commits hasta aprobar
4. **Documentación**: El `readme.md` explica claramente los criterios

## Licencia

Este sistema es de código abierto y puede ser modificado según las necesidades de tu curso.
