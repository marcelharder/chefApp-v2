import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Procedure } from '../_models/Procedure';
import { map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { CandA } from '../_models/CandA';
import { ProcedureDetails } from '../_models/procedureDetails';
import { PaginatedResult } from '../_models/pagination';

@Injectable({ providedIn: 'root' })
export class ProcedureService {
    baseUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }



    getProcedures(page?:number, itemsPerPage?:number): Observable<PaginatedResult<Procedure[]>> {
        const paginatedResult: PaginatedResult<Procedure[]> = new PaginatedResult<Procedure[]>();
        let params = new HttpParams();

        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }

        return this.http.get<Procedure[]>(this.baseUrl + 'procedure', { observe: 'response', params })
            .pipe(
                map(response => {
                    
                    paginatedResult.result = response.body!;
                    if (response.headers.get('Pagination') != null) {
                        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination')!);
                    }
                    return paginatedResult;
                })
            );

    }

    getProceduresPerHospital(hospitalId:number, page?:number, itemsPerPage?:number): Observable<PaginatedResult<Procedure[]>> {
        const paginatedResult: PaginatedResult<Procedure[]> = new PaginatedResult<Procedure[]>();
        let params = new HttpParams();

        if (page != null && itemsPerPage != null) {
            params = params.append('pageNumber', page);
            params = params.append('pageSize', itemsPerPage);
        }

        return this.http.get<Procedure[]>(this.baseUrl + 'proceduresPerHospital/' + hospitalId, { observe: 'response', params })
            .pipe(
                map(response => {
                    paginatedResult.result = response.body!;
                    if (response.headers.get('Pagination') != null) {
                        paginatedResult.pagination = JSON.parse(response.headers.get('Pagination')!);
                    }
                    return paginatedResult;
                })
            );
    }

    getButtonsAndCaptions(id: number): Observable<CandA> {
        return this.http.get<CandA>(this.baseUrl + 'procedure/loadButtonCapAndActions/' + id); }

  
    getReportCode(procedureSoort: number): Observable<number> {
        return this.http.get<number>(this.baseUrl + 'loadReportCode/' + procedureSoort); }

  
    getProcedure(id: number): Observable<ProcedureDetails> { return this.http.get<ProcedureDetails>(this.baseUrl + 'procedure/' + id); }

  
 
}

