export type CustomFieldType =
  | 'TEXT'
  | 'NUMBER'
  | 'DATE'
  | 'SELECT'
  | 'MULTI_SELECT'
  | 'USER'
  | 'URL'
  | 'CHECKBOX';

export interface CustomField {
  id: string;
  projectId: string;
  name: string;
  fieldType: CustomFieldType;
  options?: unknown;
  isRequired: boolean;
  defaultValue?: string | null;
  position: number;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateCustomFieldInput {
  projectId: string;
  name: string;
  fieldType: CustomFieldType;
  options?: unknown;
  isRequired?: boolean;
  defaultValue?: string;
  createdBy: string;
}

export interface UpdateCustomFieldInput {
  name?: string;
  fieldType?: CustomFieldType;
  options?: unknown;
  isRequired?: boolean;
  defaultValue?: string | null;
  position?: number;
}
