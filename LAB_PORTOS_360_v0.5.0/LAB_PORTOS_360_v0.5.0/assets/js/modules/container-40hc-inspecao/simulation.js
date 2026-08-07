export class ContainerInspectionSimulation {
  constructor(data) {
    this.data = data;
    this.found = new Set();
  }

  registerFinding(id) {
    if (!this.data.findings.some((item) => item.id === id)) return false;
    this.found.add(id);
    return true;
  }

  isComplete() {
    return this.found.size === this.data.findings.length;
  }

  progress() {
    return Math.round((this.found.size / this.data.findings.length) * 100);
  }
}
