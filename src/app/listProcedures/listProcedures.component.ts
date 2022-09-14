import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginatedResult, Pagination } from '../_models/pagination';
import { Procedure } from '../_models/Procedure';
import { AccountService } from '../_services/account.service';
import { ProcedureService } from '../_services/procedure.service';

@Component({
  selector: 'app-listProcedures',
  templateUrl: './listProcedures.component.html',
  styleUrls: ['./listProcedures.component.css']
})
export class ListProceduresComponent implements OnInit {

  procedures: Array<Procedure> = [];
  pagination: Pagination = { currentPage: 0, itemsPerPage: 5, totalItems: 5, totalPages: 10 };
  selectedHospital = "";

  constructor(
    private route: ActivatedRoute,
    private auth: AccountService,
    private procedureService: ProcedureService,
    private router: Router
  ) { }

  ngOnInit() {
    // get all the procedures for this user filtered per current hospital, which is done on the server
    this.route.data.subscribe(data => {

      this.procedures = data['proc'].result;
      this.pagination = data['proc'].pagination;
    });

    this.auth.currentHospitalName.subscribe((res) => { this.selectedHospital = res });

  }
  pageChanged(event: any): void { this.pagination.currentPage = event.page; this.loadProcedures(); }


  loadProcedures() {
    this.procedureService.getProcedures(this.pagination.currentPage, this.pagination.itemsPerPage).subscribe({
      next: (res: PaginatedResult<Procedure[]>) => {
        this.procedures = res.result;
        this.pagination = res.pagination;
      },
      error: (error) => { console.log('here is my error' + error); },
      complete: () => { }
    })


  }




  testNav(id: number) {
    // change the id in the BehaviorSubject and redirect to procedureDetails
    this.auth.setCurrentProcedure(id);
    this.router.navigate(['/opReport']);
  }

}
