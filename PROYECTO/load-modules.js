// Lista de módulos y sus contenedores destino
const modules = [
  { path: 'components/containers/portrait/index.html', target: '#container-portrait' },
  { path: 'components/moduls/card-portrait/index.html', target: '#card-portrait' }
];

// Función para cargar un módulo
async function loadModule(mod) {
  try {
    const response = await fetch(mod.path);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const html = await response.text();
    const container = document.querySelector(mod.target);
    if (!container) {
      console.warn(`Container ${mod.target} not found, waiting...`);
      return false;
    }
    container.innerHTML = html;
    return true;
  } catch (error) {
    console.error(`Error loading module ${mod.path}:`, error);
    return false;
  }
}

// Cargar módulos en orden
document.addEventListener('DOMContentLoaded', async () => {
  // Primero carga el contenedor
  await loadModule(modules[0]);
  // Luego carga el módulo de la tarjeta
  await loadModule(modules[1]);
});
