const { execSync } = require('child_process');

console.log('\n========================================');
console.log('   SISTEMA DE CALIFICACIÓN AUTOMÁTICA');
console.log('========================================\n');

let results;
let totalTests = 5;
let passedTests = 0;
let failedTests = 5;

try {
  // Ejecutar las pruebas con formato JSON
  const output = execSync('npx jest --json --testLocationInResults', { 
    encoding: 'utf-8',
    stdio: ['pipe', 'pipe', 'pipe']
  });
  
  results = JSON.parse(output);
  totalTests = results.numTotalTests;
  passedTests = results.numPassedTests;
  failedTests = results.numFailedTests;
  
} catch (error) {
  // Las pruebas pueden "fallar" pero aún así devolver resultados JSON
  if (error.stdout) {
    try {
      const errorOutput = error.stdout.toString();
      results = JSON.parse(errorOutput);
      totalTests = results.numTotalTests || 5;
      passedTests = results.numPassedTests || 0;
      failedTests = results.numFailedTests || totalTests;
    } catch (parseError) {
      console.error('❌ ERROR AL EJECUTAR LAS PRUEBAS\n');
      console.log('No se pudo ejecutar las pruebas correctamente.');
      console.log('\n📝 CALIFICACIÓN: 0/10');
      console.log('Asegúrate de crear el archivo index.html\n');
      console.log('========================================\n');
      process.exit(1);
    }
  } else {
    console.error('❌ ERROR AL EJECUTAR LAS PRUEBAS\n');
    console.log('\n📝 CALIFICACIÓN: 0/10');
    console.log('Asegúrate de crear el archivo index.html\n');
    console.log('========================================\n');
    process.exit(1);
  }
}

// Procesar resultados
try {
  const grade = (passedTests / totalTests) * 10;
  
  console.log('📊 RESULTADOS:');
  console.log('─────────────────────────────────────');
  console.log(`✅ Pruebas aprobadas: ${passedTests}/${totalTests}`);
  console.log(`❌ Pruebas fallidas:  ${failedTests}/${totalTests}`);
  console.log('─────────────────────────────────────');
  console.log(`📝 CALIFICACIÓN: ${grade.toFixed(1)}/10`);
  console.log('─────────────────────────────────────\n');
  
  // Desglose por prueba (cada prueba vale 2 puntos)
  console.log('📋 DESGLOSE DE CALIFICACIÓN:');
  console.log('─────────────────────────────────────');
  
  if (results && results.testResults && results.testResults.length > 0) {
    results.testResults[0].assertionResults.forEach((test, index) => {
      const points = test.status === 'passed' ? 2 : 0;
      const status = test.status === 'passed' ? '✅' : '❌';
      console.log(`${status} Prueba ${index + 1}: ${points}/2 puntos`);
      console.log(`   ${test.title}`);
    });
  }
  
  console.log('─────────────────────────────────────');
  console.log(`\n🎯 CALIFICACIÓN FINAL: ${grade.toFixed(1)}/10\n`);
  
  if (grade === 10) {
    console.log('🎉 ¡EXCELENTE! Has completado todos los requisitos.\n');
  } else if (grade >= 8) {
    console.log('👍 ¡Buen trabajo! Revisa los elementos que faltan.\n');
  } else if (grade >= 6) {
    console.log('⚠️  Necesitas completar más requisitos.\n');
  } else {
    console.log('❌ Debes revisar y completar tu trabajo.\n');
  }
  
  console.log('========================================\n');
  
  // Si alguna prueba falló, salir con código de error
  if (failedTests > 0) {
    process.exit(1);
  }
  
} catch (error) {
  console.error('❌ ERROR AL PROCESAR RESULTADOS\n');
  console.log('\n📝 CALIFICACIÓN: 0/10');
  console.log('========================================\n');
  process.exit(1);
}
