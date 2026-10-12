import { ChangeDetectionStrategy, Component } from '@angular/core';

type ComponentStatus = 'draft' | 'review' | 'approved' | 'blocked';
type ComponentCategory = 'People' | 'Inventory' | 'Finance';

interface DemoCard {
  id: number;
  title: string;
  description: string;
  category: ComponentCategory;
  status: ComponentStatus;
  owner: string;
  progress: number;
}

@Component({
  selector: 'app-chapter-02-components',
  standalone: true,
  imports: [],
  templateUrl: './chapter-02-components.component.html',
  styleUrl: './chapter-02-components.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Chapter02ComponentsComponent {
  // Scenario 1: component metadata and identity explorer.
  componentTitle = 'Purchase Order Summary';
  selectorName = 'app-purchase-order-summary';
  componentPurpose = 'Shows a compact summary of one purchase order.';
  showBlueprint = true;

  // Scenario 2: reusable visual pattern driven by data.
  cards: DemoCard[] = [
    {
      id: 101,
      title: 'Supplier onboarding',
      description: 'Collect and review supplier details before activation.',
      category: 'People',
      status: 'review',
      owner: 'Maya',
      progress: 65
    },
    {
      id: 102,
      title: 'Stock reconciliation',
      description: 'Compare recorded stock with the warehouse count.',
      category: 'Inventory',
      status: 'approved',
      owner: 'Arun',
      progress: 100
    },
    {
      id: 103,
      title: 'Travel reimbursement',
      description: 'Validate an employee claim before payment.',
      category: 'Finance',
      status: 'draft',
      owner: 'Noor',
      progress: 25
    },
    {
      id: 104,
      title: 'Purchase order PO-204',
      description: 'Resolve a missing delivery date before approval.',
      category: 'Inventory',
      status: 'blocked',
      owner: 'Isha',
      progress: 40
    }
  ];
  selectedCardId = 101;
  categoryFilter: ComponentCategory | 'All' = 'All';
  cardDensity: 'comfortable' | 'compact' = 'comfortable';

  // Scenario 3: parent-like coordination of selected data and actions.
  lastEvent = 'Select a card to see how one UI action changes component state.';
  actionHistory: string[] = [];

  get visibleCards(): DemoCard[] {
    if (this.categoryFilter === 'All') return this.cards;
    return this.cards.filter(card => card.category === this.categoryFilter);
  }

  get selectedCard(): DemoCard | undefined {
    return this.cards.find(card => card.id === this.selectedCardId);
  }

  get approvedCount(): number {
    return this.cards.filter(card => card.status === 'approved').length;
  }

  get averageProgress(): number {
    if (!this.cards.length) return 0;
    return Math.round(this.cards.reduce((sum, card) => sum + card.progress, 0) / this.cards.length);
  }

  get selectedStatusLabel(): string {
    const labels: Record<ComponentStatus, string> = {
      draft: 'Draft',
      review: 'In review',
      approved: 'Approved',
      blocked: 'Blocked'
    };
    return this.selectedCard ? labels[this.selectedCard.status] : 'No selection';
  }

  updateComponentTitle(event: Event): void {
    this.componentTitle = (event.target as HTMLInputElement).value;
    this.recordEvent('Edited the example component title.');
  }

  updateSelector(event: Event): void {
    this.selectorName = (event.target as HTMLInputElement).value
      .trim()
      .toLowerCase()
      .replace(/[^a-z0-9-]/g, '-');
    this.recordEvent('Changed the selector preview.');
  }

  toggleBlueprint(): void {
    this.showBlueprint = !this.showBlueprint;
    this.recordEvent(this.showBlueprint ? 'Opened component blueprint.' : 'Collapsed component blueprint.');
  }

  chooseCategory(event: Event): void {
    const value = (event.target as HTMLSelectElement).value;
    this.categoryFilter = value as ComponentCategory | 'All';
    const firstVisible = this.visibleCards[0];
    if (firstVisible) this.selectedCardId = firstVisible.id;
    this.recordEvent(`Filtered cards to ${this.categoryFilter}.`);
  }

  selectCard(id: number): void {
    this.selectedCardId = id;
    const card = this.selectedCard;
    this.recordEvent(card ? `Selected "${card.title}".` : 'Selection cleared.');
  }

  setDensity(density: 'comfortable' | 'compact'): void {
    this.cardDensity = density;
    this.recordEvent(`Changed card density to ${density}.`);
  }

  cycleSelectedStatus(): void {
    const selected = this.selectedCard;
    if (!selected) {
      this.recordEvent('No card is selected.');
      return;
    }

    const next: Record<ComponentStatus, ComponentStatus> = {
      draft: 'review',
      review: 'approved',
      approved: 'blocked',
      blocked: 'draft'
    };

    this.cards = this.cards.map(card =>
      card.id === selected.id ? { ...card, status: next[card.status] } : card
    );
    this.recordEvent(`Changed "${selected.title}" status to ${this.selectedStatusLabel}.`);
  }

  addProgressToSelected(): void {
    const selected = this.selectedCard;
    if (!selected) return;

    this.cards = this.cards.map(card =>
      card.id === selected.id
        ? { ...card, progress: Math.min(100, card.progress + 10) }
        : card
    );
    this.recordEvent(`Added 10% progress to "${selected.title}".`);
  }

  resetExamples(): void {
    this.componentTitle = 'Purchase Order Summary';
    this.selectorName = 'app-purchase-order-summary';
    this.showBlueprint = true;
    this.cards = this.createInitialCards();
    this.selectedCardId = 101;
    this.categoryFilter = 'All';
    this.cardDensity = 'comfortable';
    this.actionHistory = [];
    this.lastEvent = 'Examples reset. Select a card to start again.';
  }

  private recordEvent(message: string): void {
    this.lastEvent = message;
    this.actionHistory = [message, ...this.actionHistory].slice(0, 4);
  }

  private createInitialCards(): DemoCard[] {
    return [
      { id: 101, title: 'Supplier onboarding', description: 'Collect and review supplier details before activation.', category: 'People', status: 'review', owner: 'Maya', progress: 65 },
      { id: 102, title: 'Stock reconciliation', description: 'Compare recorded stock with the warehouse count.', category: 'Inventory', status: 'approved', owner: 'Arun', progress: 100 },
      { id: 103, title: 'Travel reimbursement', description: 'Validate an employee claim before payment.', category: 'Finance', status: 'draft', owner: 'Noor', progress: 25 },
      { id: 104, title: 'Purchase order PO-204', description: 'Resolve a missing delivery date before approval.', category: 'Inventory', status: 'blocked', owner: 'Isha', progress: 40 }
    ];
  }
}
