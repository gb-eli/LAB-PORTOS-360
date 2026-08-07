export class EventBus {
  #events = new Map();

  on(eventName, handler) {
    if (!this.#events.has(eventName)) this.#events.set(eventName, new Set());
    this.#events.get(eventName).add(handler);
    return () => this.off(eventName, handler);
  }

  off(eventName, handler) {
    this.#events.get(eventName)?.delete(handler);
  }

  emit(eventName, payload = {}) {
    this.#events.get(eventName)?.forEach((handler) => handler(payload));
  }

  clear() {
    this.#events.clear();
  }
}
