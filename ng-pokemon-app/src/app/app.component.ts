import { Component, OnInit } from "@angular/core";

import { POKEMONS } from "./mock-pokemon-list";
import { Pokemon } from "./pokemon";
@Component({
  selector: "app-root",
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  title = "Pokemon List";
  pokemonList: Pokemon[] = POKEMONS;

  ngOnInit() {
    console.table(this.pokemonList);
    // this.selectPokemon(this.pokemonList[5]);
  }

  selectPokemon(pokemon: Pokemon){
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }
}
