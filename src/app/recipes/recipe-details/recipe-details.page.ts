import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,Router} from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';
import {AlertController} from '@ionic/angular';
@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  loadedRecipe:Recipe;

  constructor(private activatedRoute:ActivatedRoute ,
    private recipeService: RecipeService,
     private router:Router,
     private alertController:AlertController,
     ) {
         this.activatedRoute.paramMap.subscribe(
            paramMap=> {
              if(!paramMap.has('recipeId'))
              {
                //redirect

                return;
              }
            const id=paramMap.get('recipeId');
           this.loadedRecipe= this.recipeService.getRecipe(id);


            
            }
         );
   }

  ngOnInit() {
  }

  onDeleteRecipe(){

    this.alertController.create({
      header:'Are you Sure',
      message:'Do you realy want to delete this recipe?',
      buttons: [
            { 
              text:'cancel',
              role: 'cancel'
            },
            {
              text:'delete',
              handler:()=>{
                this.recipeService.deleteRecipe(this.loadedRecipe.id);
                this.router.navigate(['/recipes']);
              }
            }
      ]


    }).then(
             alertEl=> {
                  alertEl.present();
             }

    );
   
  }

}
