import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Ticket } from 'src/app/models/ticket';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.css']
})
export class TicketComponent implements OnInit {
  @Input() ticket: Ticket;
  @Input() ticketId: string;
  @Output() selectedTicketId = new EventEmitter<string>();
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
  }
  onClick(ticketId: string) {
    this.selectedTicketId.emit(ticketId);
    this.router.navigate(['/overview', ticketId, {relativeTo: this.route}]);
  }
}
