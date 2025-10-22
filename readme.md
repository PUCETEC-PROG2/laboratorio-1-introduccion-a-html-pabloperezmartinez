[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/5FM6dudY)
# Laboratorio 1: Mi Primer Portafolio en HTML

## Objetivo
Crear una página web simple usando únicamente HTML que funcione como tu portafolio personal.

## Datos del estudiante
**Nombre:** [Ingresa tu nombre]
**Carrera:** Desarrollo de Software

## Instrucciones

### Paso 1: Crear el archivo
1. Crea un nuevo archivo llamado `index.html` en esta carpeta
2. Abre el archivo con tu editor de código

### Paso 2: Estructura básica del HTML
Comienza tu archivo con la estructura básica de HTML:

```html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Portafolio de [Nombre del estudiante]</title>
</head>
<body>
    
</body>
</html>
```

### Paso 3: Agregar tu encabezado
Dentro de la etiqueta `<body>`, agrega un encabezado con tu nombre usando la etiqueta `<h1>`:

```html
<h1>Tu Nombre Completo</h1>
```

### Paso 4: Agregar tres párrafos
Después del encabezado, agrega tres párrafos usando la etiqueta `<p>`:

1. **Primer párrafo**: Describe tus habilidades
2. **Segundo párrafo**: Habla sobre tus hobbies
3. **Tercer párrafo**: Menciona tus estudios realizados

Ejemplo:
```html
<p>Mis habilidades son...</p>
<p>Mis hobbies incluyen...</p>
<p>He estudiado...</p>
```

### Paso 5: Agregar una imagen
Agrega una imagen usando la etiqueta `<img>`:

```html
<img src="ruta-de-tu-imagen.jpg" alt="Descripción de la imagen">
```

**Nota**: Puedes usar una imagen de internet copiando su URL, o colocar una imagen en la misma carpeta que tu `index.html` y usar su nombre.

### Paso 6: Agregar enlaces a redes sociales
Agrega enlaces a tus perfiles sociales usando la etiqueta `<a>`:

```html
<p>Mis redes sociales:</p>
<a href="https://tu-perfil-social.com">Nombre de la red social</a>
```

Puedes agregar varios enlaces, uno por cada red social que uses.

### Paso 7: Verificar tu trabajo
1. Guarda el archivo `index.html`
2. Abre el archivo en tu navegador web (doble clic sobre el archivo)
3. Verifica que todo se muestre correctamente

## Entrega mediante GitHub Classroom

### Paso 1: Aceptar la asignación
1. Haz clic en el enlace de GitHub Classroom que te proporcionó el profesor
2. Acepta la asignación
3. Espera a que se cree tu repositorio personal

### Paso 2: Clonar el repositorio
Abre tu terminal y ejecuta el siguiente comando (reemplaza la URL con la de tu repositorio):

```bash
git clone https://github.com/tu-organizacion/tu-repositorio.git
```

Luego, entra a la carpeta del repositorio:

```bash
cd tu-repositorio
```

### Paso 3: Crear tu archivo index.html
Crea tu archivo `index.html` siguiendo todos los pasos anteriores.

### Paso 4: Agregar los cambios
Después de crear y completar tu `index.html`, agrega los archivos al área de preparación:

```bash
git add index.html
```

O si quieres agregar todos los archivos modificados:

```bash
git add .
```

### Paso 5: Hacer commit
Guarda los cambios con un mensaje descriptivo:

```bash
git commit -m "Agregar portafolio HTML con información personal"
```

### Paso 6: Subir los cambios (push)
Envía tus cambios al repositorio en GitHub:

```bash
git push origin main
```

**Nota**: Si tu rama principal se llama `master` en lugar de `main`, usa:

```bash
git push origin master
```

### Verificar la entrega
1. Ve a tu repositorio en GitHub (en tu navegador)
2. Verifica que el archivo `index.html` esté visible
3. Asegúrate de que contiene todo lo solicitado

## Resumen de comandos Git

Clonar el repositorio (solo la primera vez)
```bash
git clone URL_DE_TU_REPOSITORIO
```
Entrar a la carpeta
```bash
cd nombre-de-tu-repositorio
```

Ver el estado de los archivos
```bash
git status
```

Agregar archivos
```bash
git add index.html
```

Hacer commit
```bash
git commit -m "Mensaje descriptivo"

Subir cambios
```bash
git push origin main
```

## Pruebas Automáticas y Sistema de Calificación

Este laboratorio incluye pruebas automáticas que verificarán tu trabajo y calcularán tu calificación sobre 10 puntos.

### Criterios de Evaluación (cada criterio vale 2 puntos)

1. ✅ **Archivo index.html existe** (2 puntos)
2. ✅ **Encabezado contiene tu nombre real** - no texto genérico (2 puntos)
3. ✅ **Tres párrafos con contenido personalizado** - no texto genérico (2 puntos)
4. ✅ **Imagen válida agregada** - con URL real (2 puntos)
5. ✅ **Al menos un enlace a redes sociales** - enlace válido (2 puntos)

**Calificación Total: 10 puntos**

### Ejecutar las pruebas localmente

Antes de hacer push a GitHub, puedes probar tu trabajo localmente:

```bash
npm test
```

O para ver tu calificación:

```bash
npm run grade
```

Si todas las pruebas pasan (✓), obtendrás 10/10 y tu trabajo está listo para ser entregado.

**Importante**: Las pruebas se ejecutarán automáticamente en GitHub cuando hagas push y calcularán tu calificación. Debes asegurarte de que todas las pruebas pasen para obtener la calificación completa de 10/10.

### Interpretar los resultados

- ✅ **PASS**: La prueba pasó correctamente (+2 puntos)
- ❌ **FAIL**: La prueba falló (0 puntos) - revisa el mensaje de error para saber qué corregir

### Escala de Calificación

- **10/10**: ¡Excelente! Todos los requisitos completados
- **8-9/10**: Buen trabajo, revisa los elementos que faltan
- **6-7/10**: Necesitas completar más requisitos
- **0-5/10**: Debes revisar y completar tu trabajo

## Requisitos de entrega
Asegúrate de que tu archivo `index.html` esté en esta carpeta y contenga todos los elementos solicitados:
- Encabezado con tu nombre real
- Tres párrafos con contenido personalizado (no genérico)
- Una imagen válida
- Al menos un enlace a tus redes sociales

## Recordatorio
- Solo usa HTML
- NO uses CSS
- NO uses JavaScript
- El archivo debe llamarse exactamente `index.html`
- Todas las pruebas deben pasar (✓)
