export interface NavigationBadge {
  text: string;
  variant?: 'indigo' | 'emerald' | 'amber' | 'rose' | 'slate';
}

export interface NavigationItem {
  id: string;
  label: string;
  route?: string;
  icon?: string;
  children?: NavigationItem[];
  permission?: string;
  featureFlag?: string;
  badge?: NavigationBadge;
  external?: boolean;
}

export interface NavigationGroup {
  id: string;
  title?: string;
  items: NavigationItem[];
}
