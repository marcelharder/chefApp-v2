import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProcedureService } from '../_services/procedure.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from '../_services/common.service';
import { Procedure } from '../_models/Procedure';
import { IndividualConfig } from 'ngx-toastr';

@Injectable()

export class ProcedureListResolver implements Resolve<Procedure[]> { 
    pageNumber = 1;
    pageSize = 10;
    constructor(private procedureservice: ProcedureService,
        private router: Router,
        private alertify: CommonService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<any> {
            return this.procedureservice.getProcedures(this.pageNumber, this.pageSize)
            .pipe(catchError(error => {
                //this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
               return of(null);
            }));
        }
    


}