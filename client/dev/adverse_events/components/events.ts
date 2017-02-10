import {Component, Inject, OnInit} from "@angular/core";
import {EventsService} from "../services/events"


type Drug = {
  drugIndication: string,
  medicinalProduct: string,
  DosageText: string,
  autorizationNumber: string
};
type Reaction = {
  meddraPrimaryTerm: string
};
type Patient = {
  age: string;
  sex: string;
  reaction: Reaction[];
  drugs: Drug[];
};
type Event = {
  _id?: string;
  receiveDate: string;
  receiptDate: string;
  safetyReportId: string;
  companyNumber: string;
  patient: Patient;
};
@Component({
  selector: "events",
  templateUrl: "adverse_events/templates/events.html",
  styleUrls: ["adverse_events/styles/events.css"]
})
export class Events implements OnInit {
  title: string = "Adverse events list";
  events: Event[] = [];
  page: Event[] = [];
  pageIndex: number = 0;
  pageSize: number = 10;

  constructor(private _eventsService: EventsService) {
  }

  ngOnInit() {
    this._getAll();
    console.log();
  }

  next(): void {
    this.pageIndex += this.pageSize;
    if(this.pageIndex > this.events.length){
      this.pageIndex -= this.pageSize;
    }
    this.page = this.events.slice(this.pageIndex,this.pageIndex+this.pageSize);
  }

  prev(): void {
    this.pageIndex -= this.pageSize;
    if(this.pageIndex < 0){
      this.pageIndex = 0;
    }
    this.page = this.events.slice(this.pageIndex,this.pageIndex+this.pageSize);
  }

  private _getAll(): void {
    this._eventsService
        .getAll()
        .subscribe((events) => {
          this.page = events.slice(this.pageIndex,this.pageIndex+this.pageSize);
          this.events = events;
        });
  }
  remove(id: string): void {
    this._eventsService
        .remove(id)
        .subscribe(() => {
          this.events.forEach((t, i) => {
            if (t._id === id)
              return this.events.splice(i, 1);
          });
          this.page = this.events.slice(this.pageIndex,this.pageIndex+this.pageSize);
        });
  }

}
