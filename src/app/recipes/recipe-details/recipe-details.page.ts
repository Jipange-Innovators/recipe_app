import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.page.html',
  styleUrls: ['./recipe-details.page.scss'],
})
export class RecipeDetailsPage implements OnInit {

  loadedRecipe:Recipe;

  constructor(private activatedRoute:ActivatedRoute ,private recipeService: RecipeService) {
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

}
