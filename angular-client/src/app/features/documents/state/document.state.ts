import { Injectable, computed, signal } from '@angular/core';
import { DocumentItem, DocumentTreeItem } from '../models/document.model';

@Injectable({
  providedIn: 'root',
})
export class DocumentState {
  private readonly documentsSignal = signal<DocumentItem[]>([]);
  private readonly treeSignal = signal<DocumentTreeItem[]>([]);
  private readonly selectedDocumentSignal = signal<DocumentItem | null>(null);
  private readonly loadingSignal = signal<boolean>(false);
  private readonly errorSignal = signal<string | null>(null);

  /** Signal of documents list */
  readonly documents = this.documentsSignal.asReadonly();

  /** Signal of document tree hierarchy */
  readonly tree = this.treeSignal.asReadonly();

  /** Signal of active selected document */
  readonly selectedDocument = this.selectedDocumentSignal.asReadonly();

  /** Loading state signal */
  readonly isLoading = this.loadingSignal.asReadonly();

  /** Error state signal */
  readonly error = this.errorSignal.asReadonly();

  /** Document count */
  readonly documentCount = computed(() => this.documentsSignal().length);

  setDocuments(documents: DocumentItem[]): void {
    this.documentsSignal.set(documents);
  }

  setTree(tree: DocumentTreeItem[]): void {
    this.treeSignal.set(tree);
  }

  setSelectedDocument(document: DocumentItem | null): void {
    this.selectedDocumentSignal.set(document);
  }

  addDocument(doc: DocumentItem): void {
    this.documentsSignal.update((current) => [doc, ...current]);
  }

  updateDocument(updated: DocumentItem): void {
    this.documentsSignal.update((current) =>
      current.map((d) => (d.id === updated.id ? { ...d, ...updated } : d))
    );
    if (this.selectedDocumentSignal()?.id === updated.id) {
      this.selectedDocumentSignal.set(updated);
    }
  }

  removeDocument(id: string): void {
    this.documentsSignal.update((current) => current.filter((d) => d.id !== id));
    if (this.selectedDocumentSignal()?.id === id) {
      this.selectedDocumentSignal.set(null);
    }
  }

  setLoading(loading: boolean): void {
    this.loadingSignal.set(loading);
  }

  setError(error: string | null): void {
    this.errorSignal.set(error);
  }
}
