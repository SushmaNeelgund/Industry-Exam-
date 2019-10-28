import { Component, OnInit } from "@angular/core";
import { TreeNode } from "ng-treetable/src/component/model";
import { MessageService, MenuItem } from "primeng/api";
import { NodeService } from "../node.service";
import { FormControl, FormGroup, FormBuilder } from "@angular/forms";

@Component({
  selector: "app-treetable",
  templateUrl: "./treetable.component.html",
  styleUrls: ["./treetable.component.css"],
  providers: [MessageService]
})
export class TreetableComponent implements OnInit {
  files: TreeNode[];
  AddForm: FormGroup;
  selectedNode: TreeNode;
  cols: any[];
  items: MenuItem[];
  result;
  display: boolean = false;
  node: TreeNode;
  //   result = {data: {
  //   name: 'abc.doc',
  //   size: '30kb',
  //   type: 'Document'
  //   },
  //   children: []
  // };

  constructor(
    private nodeService: NodeService,
    private messageService: MessageService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.nodeService.getFilesystem().then(files => (this.files = files));

    this.cols = [
      { field: "name", header: "Name" },
      { field: "size", header: "Size" },
      { field: "type", header: "Type" }
    ];

    this.items = [
      {
        label: "View",
        icon: "pi pi-search",
        command: event => this.viewFile(this.selectedNode)
      },
      {
        label: "Toggle",
        icon: "pi pi-sort",
        command: event => this.toggleFile(this.selectedNode)
      },
      {
        label: "Add",
        icon: "pi pi-plus",
        command: event => this.AddField(this.selectedNode)
      }
    ];
    this.AddForm = this.fb.group({
      name: new FormControl(null),
      size: new FormControl(null),
      type: new FormControl(null)
    });
  }

  viewFile(node) {
    this.messageService.add({
      severity: "info",
      summary: "File Selected",
      detail: node.data.name + " - " + node.data.size
    });
  }

  toggleFile(node) {
    node.expanded = !node.expanded;
    this.files = [...this.files];
  }
  // addChild(node){
  //   this.messageService.add({
  //     severity: 'info',
  //     summary: 'File Selected',
  //     detail: node.data.name + ' - ' + node.data.size
  //   });
  //   this.result = {data: {
  //     name: 'abc.doc',
  //     size: '30kb',
  //     type: 'Document'
  //   },
  //   children: []
  // };

  //   node['children'].push(this.result);
  // }

  AddField(node) {
    this.display = true;
    this.node = node;
  }

  OnAddArticleSave() {
    if (
      this.AddForm.value.name != null &&
      this.AddForm.value.size != null &&
      this.AddForm.value.type != null
    ) {
      this.result = {
        data: {
          name: this.AddForm.value.name,
          size: this.AddForm.value.size,
          type: this.AddForm.value.type
        },
        children: []
      };
      this.node.children.push(this.result);

      this.display = false;
      this.AddForm.reset();
    } else {
      // alert('please fill the records');
      // this.showWarn();

      this.messageService.add({ severity: "warn", summary: "required", detail: 'Fields are required' });
    }
  }
}
