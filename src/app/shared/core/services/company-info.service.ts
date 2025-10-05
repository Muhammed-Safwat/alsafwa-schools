import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { CompanyInfo, ProjectInfo } from '../interfaces/company-info.interface';

@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService {

  constructor(private translate: TranslateService) {}

  getCompanyInfo(): Observable<CompanyInfo> {
    return new Observable(observer => {
      this.translate.get([
        'company.name',
        'company.description',
        'company.website',
        'company.email',
        'company.phone',
        'company.address',
        'company.copyinset-inline-end',
        'company.developed_by',
        'company.powered_by'
      ]).subscribe(translations => {
        const companyInfo: CompanyInfo = {
          name: translations['company.name'],
          description: translations['company.description'],
          website: translations['company.website'],
          email: translations['company.email'],
          phone: translations['company.phone'],
          address: translations['company.address'],
          copyinset-inline-end: translations['company.copyinset-inline-end'],
          developedBy: translations['company.developed_by'],
          poweredBy: translations['company.powered_by']
        };
        observer.next(companyInfo);
        observer.complete();
      });
    });
  }

  getProjectInfo(): Observable<ProjectInfo> {
    return new Observable(observer => {
      this.translate.get([
        'project.name',
        'project.description',
        'project.version',
        'project.technology'
      ]).subscribe(translations => {
        const projectInfo: ProjectInfo = {
          name: translations['project.name'],
          description: translations['project.description'],
          version: translations['project.version'],
          technology: translations['project.technology']
        };
        observer.next(projectInfo);
        observer.complete();
      });
    });
  }

  getCopyinset-inline-endText(): Observable<string> {
    return new Observable(observer => {
      this.translate.get(['company.copyinset-inline-end', 'company.name']).subscribe(translations => {
        const copyinset-inline-endText = `${translations['company.copyinset-inline-end']} © ${new Date().getFullYear()} ${translations['company.name']}`;
        observer.next(copyinset-inline-endText);
        observer.complete();
      });
    });
  }
}
