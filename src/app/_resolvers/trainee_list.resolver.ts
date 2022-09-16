import {Injectable} from '@angular/core';
import { Resolve, Router, ActivatedRouteSnapshot } from '@angular/router';
import { ProcedureService } from '../_services/procedure.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { CommonService } from '../_services/common.service';
import { User } from '../_models/User';
import { UserService } from '../_services/user.service';

@Injectable()

export class TraineeListResolver implements Resolve<User[]> { 
   
    constructor(private procedureservice: ProcedureService,
        private router: Router,
        private us: UserService,
        private alertify: CommonService) {}

        resolve(route: ActivatedRouteSnapshot): Observable<any> {
            return this.us.getTrainees(route.params['id'])
            .pipe(catchError(error => {
                //this.alertify.error('Problem retrieving data');
                this.router.navigate(['/home']);
               return of(null);
            }));
        }
    


}