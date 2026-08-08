export class ModuleRegistry {
  #modules = new Map();

  register(metadata) {
    if (!metadata?.id) throw new Error('Módulo sem ID.');
    this.#modules.set(metadata.id, metadata);
  }

  registerMany(modules = []) {
    modules.forEach((module) => this.register(module));
  }

  get(id) { return this.#modules.get(id); }
  list() { return [...this.#modules.values()]; }
}
