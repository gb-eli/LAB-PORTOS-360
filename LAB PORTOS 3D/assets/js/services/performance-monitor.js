export class PerformanceMonitor {
  constructor(eventBus) {
    this.eventBus = eventBus;
    this.frames = 0;
    this.last = performance.now();
    this.raf = null;
  }

  start() {
    const tick = (time) => {
      this.frames += 1;
      if (time - this.last >= 1000) {
        const fps = Math.round((this.frames * 1000) / (time - this.last));
        this.eventBus.emit('performance:fps', { fps });
        this.frames = 0;
        this.last = time;
      }
      this.raf = requestAnimationFrame(tick);
    };
    this.raf = requestAnimationFrame(tick);
  }

  stop() {
    if (this.raf) cancelAnimationFrame(this.raf);
  }
}
