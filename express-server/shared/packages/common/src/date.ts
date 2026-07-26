import { addDays, addWeeks, addMonths, differenceInDays, isAfter, isBefore, startOfDay, endOfDay, format } from 'date-fns';

export { addDays, addWeeks, addMonths, differenceInDays, isAfter, isBefore, startOfDay, endOfDay, format };

export function toISOString(date: Date): string {
  return date.toISOString();
}

export function nowISO(): string {
  return new Date().toISOString();
}

export function isExpired(expiresAt: string | Date): boolean {
  return isAfter(new Date(), new Date(expiresAt));
}

export function addMinutes(date: Date, minutes: number): Date {
  return new Date(date.getTime() + minutes * 60 * 1000);
}

export function toUnixTimestamp(date: Date): number {
  return Math.floor(date.getTime() / 1000);
}

export function fromUnixTimestamp(timestamp: number): Date {
  return new Date(timestamp * 1000);
}
