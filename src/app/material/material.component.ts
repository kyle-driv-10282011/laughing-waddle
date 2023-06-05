import { Component, OnInit } from '@angular/core';
import { DynapiService } from '../dynapi.service';
import { list_material, struct_data_rqlite } from '../rqlite';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
  styleUrls: ['./material.component.css']
})
export class MaterialComponent implements OnInit{
  materials: any;
  materiallist: list_material[] = [];
  constructor(public dynapiService: DynapiService) { }

  ngOnInit(): void {
    this.dynapiService.getAllMaterials().subscribe((data)=>{
      this.materials = data.results[0].values;
      console.log(this.materials);
    })
  }

  deleteMaterial(materialid: number) {

    
    this.dynapiService.deleteMaterial(materialid).subscribe(res => {
      this.materials = this.materials.filter((item: { id: any; }) => item.id !== materialid);
      
    })

      const index = this.materials.findIndex((id: number) => id === materialid);
      if (index !== -1) {
        this.materials.splice(index, 1);
      }

      // deleteMaterial(id:number){
      //   this.materialService.delete(id).subscribe(res => {
      //        this.materials = this.materials.filter(item => item.id !== id);
      //        console.log('Post deleted successfully!');
      //   })
      // }
  }


    itemList: string[] = [];

    addItem() {
      const newItem = `Item ${this.itemList.length + 1}`;
      this.itemList.push(newItem);
    }

    removeItem(index: number) {
      this.itemList.splice(index, 1);
    }


}

