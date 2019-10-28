import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { TreeNode, MessageService } from 'primeng/api';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class NodeService {

  constructor( private messageService: MessageService, private http: HttpClient) { }
  getFilesystem() {
    return this.http.get<any>('assets/filesystem.json')
      .toPromise()
      .then(res => <TreeNode[]>res.data);
    }
}
