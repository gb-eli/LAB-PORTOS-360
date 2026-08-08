export class Router {
  constructor(routes, notFound) {
    this.routes = routes;
    this.notFound = notFound;
    this.currentCleanup = null;
    this.handle = this.handle.bind(this);
  }

  start() {
    window.addEventListener('hashchange', this.handle);
    this.handle();
  }

  async handle() {
    if (typeof this.currentCleanup === 'function') {
      await this.currentCleanup();
      this.currentCleanup = null;
    }

    const hash = location.hash.replace(/^#/, '') || '/';
    const match = this.routes.find((route) => route.match(hash));
    this.currentCleanup = match ? await match.render(hash) : await this.notFound(hash);
    window.scrollTo({ top: 0, behavior: 'instant' });
  }
}
