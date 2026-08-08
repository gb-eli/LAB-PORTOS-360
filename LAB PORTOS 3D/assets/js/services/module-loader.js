export async function loadModule(metadata) {
  if (!metadata?.entry) throw new Error('Módulo sem arquivo de entrada.');
  return import(metadata.entry);
}
