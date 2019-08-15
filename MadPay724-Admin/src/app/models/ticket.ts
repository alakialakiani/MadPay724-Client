import { TicketContent } from './ticketContent';

export interface Ticket {
    id: string;
    dateModified: Date;
    title: string;
    closed: boolean;
    department: number;
    level: number;
    isAdminSide: boolean;
    ticketContents: TicketContent[];
}
