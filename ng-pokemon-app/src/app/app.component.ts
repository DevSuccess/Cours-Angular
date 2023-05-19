import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>Welcome to {{ title }}!</h1>
      <p>
        {{ pokemonsList }}
      </p>
    </div>
  `,
})
export class AppComponent implements OnInit {
  title = "Pokédex";
  pokemonsList = ["Bulbizarre", "Salemèche", "Carapuce"];

  ngOnInit() {
    console.table(this.pokemonsList);
    this.selectPokemon('Bulbizarre');
  }

  selectPokemon(pokemonName: string){
    console.log(`Vous avez cliqué sur le pokémon ${pokemonName}`);
  }
}
