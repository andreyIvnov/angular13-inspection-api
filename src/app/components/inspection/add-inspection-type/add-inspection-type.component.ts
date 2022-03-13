import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { InspectionApiService } from 'src/app/services/inspection-api.service';

@Component({
  selector: 'app-add-inspection-type',
  templateUrl: './add-inspection-type.component.html',
  styleUrls: ['./add-inspection-type.component.css']
})
export class AddInspectionTypeComponent implements OnInit {

  inspectionTypesList$!: Observable<any[]>;

  @Input() inspectionType:any;
  id: number;
  inspectionName: string;


  constructor(private service:InspectionApiService) { }

  ngOnInit(): void {
    this.id = this.inspectionType.id;
    this.inspectionName= this.inspectionType.inspectionName;
    this.inspectionTypesList$ = this.service.getInspectionTypesList();
  }


  addInspectionType(){
    var inspectionType = {
      inspectionName: this.inspectionName
    }

    this.service.addInspectionType(inspectionType).subscribe(res => {

      var closeModalBtn = document.getElementById('add-edit-modal-close');
      if(closeModalBtn){
        closeModalBtn.click();
      }

      var showAddSeccess = document.getElementById('add-inspection-type-success-alert')
      if(showAddSeccess){
        showAddSeccess.style.display = "block"
      }

      setTimeout(function(){
        if(showAddSeccess){
          showAddSeccess.style.display = 'none';
        }
      }, 4000)

    });
  }

}
