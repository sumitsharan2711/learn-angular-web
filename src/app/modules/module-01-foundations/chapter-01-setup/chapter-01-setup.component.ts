import { Component } from '@angular/core';

type DemoStatus = 'not-started' | 'in-progress' | 'blocked' | 'done';

interface SetupCheck {
  id: string;
  title: string;
  description: string;
  complete: boolean;
}

@Component({
  selector: 'app-chapter-01-setup',
  standalone: true,
  imports: [],
  templateUrl: './chapter-01-setup.component.html',
  styleUrl: './chapter-01-setup.component.scss'
})
export class Chapter01SetupComponent {
  // SCENARIO 1: show and update a learner's name.
  learnerName = 'Erudite Learner';
  nameDraft = this.learnerName;
  learnerGoal = 'Build a complete Angular web application';

  // SCENARIO 2: checklist values are the source of progress.
  setupChecks: SetupCheck[] = this.createDefaultChecks();

  // SCENARIO 3: one status controls message and style.
  currentStatus: DemoStatus = 'not-started';
  lastAction = 'Choose an action to see how component state changes.';

  get completedCount(): number {
    return this.setupChecks.filter(item => item.complete).length;
  }

  get setupPercent(): number {
    return this.setupChecks.length
      ? Math.round(this.completedCount / this.setupChecks.length * 100)
      : 0;
  }

  get statusLabel(): string {
    const labels: Record<DemoStatus, string> = {
      'not-started': 'Not started',
      'in-progress': 'In progress',
      'blocked': 'Blocked',
      'done': 'Done'
    };
    return labels[this.currentStatus];
  }

  onNameDraftChange(event: Event): void {
    this.nameDraft = (event.target as HTMLInputElement).value;
  }

  applyLearnerName(): void {
    const name = this.nameDraft.trim();
    if (!name) {
      this.lastAction = 'Please enter a name before applying it.';
      return;
    }
    this.learnerName = name;
    this.lastAction = `Welcome panel updated for ${name}.`;
  }

  toggleSetupCheck(id: string): void {
    this.setupChecks = this.setupChecks.map(item =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    this.lastAction = `Checklist updated: ${this.completedCount} of ${this.setupChecks.length} marked ready.`;
  }

  setStatus(status: DemoStatus): void {
    this.currentStatus = status;
    this.lastAction = `Workflow status changed to "${this.statusLabel}".`;
  }

  resetDemo(): void {
    this.learnerName = 'Erudite Learner';
    this.nameDraft = this.learnerName;
    this.setupChecks = this.createDefaultChecks();
    this.currentStatus = 'not-started';
    this.lastAction = 'The three learning scenarios have been reset.';
  }

  private createDefaultChecks(): SetupCheck[] {
    // Demonstration only. This does not inspect your actual computer.
    return [
      { id: 'node', title: 'Node.js', description: 'Runs development tools.', complete: true },
      { id: 'cli', title: 'Angular CLI', description: 'Creates and builds projects.', complete: true },
      { id: 'server', title: 'Development server', description: 'Serves the app in your browser.', complete: false },
      { id: 'route', title: 'Chapter route', description: 'Opens this learning component.', complete: false }
    ];
  }
}
