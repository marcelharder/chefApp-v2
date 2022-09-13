import { Injectable } from '@angular/core';
import { GlobalConfig,IndividualConfig, ToastrService } from 'ngx-toastr';

export interface toastPayload {
  message: string;
  title: string;
  ic: IndividualConfig;
  type: string;
}

@Injectable({
  providedIn: 'root',
})
export class CommonService {
  constructor(private toastr: ToastrService) {
    this.toastr.toastrConfig.enableHtml = true;
  }

  showToast(toast: toastPayload) {
    this.toastr.show(
      toast.message,
      toast.title,
      toast.ic,
      'toast-' + toast.type
    );
  }
}
