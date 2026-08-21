export interface NavigationItem {
  id: string;
  title: string;
  route: string;
  icon?: string;
  badge?: string;
  badgeColor?: string;
}

export interface NavigationSection {
  title: string;
  items: NavigationItem[];
}
