import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { PageHeaderComponent } from '../../../shared/components/page-header/page-header.component';

export interface Food {
  value: string;
  viewValue: string;
}

@Component({
    selector: 'app-select',
    templateUrl: './select.component.html',
    styleUrls: ['./select.component.scss'],
    imports: [
        PageHeaderComponent,
        MatCardModule,
        MatFormFieldModule,
        MatSelectModule,
        ReactiveFormsModule,
        FormsModule,
        MatOptionModule,
    ]
})
export class SelectComponent {
  selectedColor!: string;
  selectedTopping!: string[];
  selectedPokemon!: string;
  toppingsForm = new FormControl('');
  toppingList: string[] = [
    'Extra cheese',
    'Mushroom',
    'Onion',
    'Pepperoni',
    'Sausage',
    'Tomato',
  ];

  colors = [
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'blue', label: 'Blue' },
    { value: 'cyan', label: 'Cyan' },
    { value: 'magenta', label: 'Magenta' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'black', label: 'Black' },
  ];

  toppings = [
    { value: 'pepperoni', label: 'Pepperoni' },
    { value: 'mushrooms', label: 'Mushrooms' },
    { value: 'onions', label: 'Onions' },
    { value: 'sausage', label: 'Sausage' },
    { value: 'bacon', label: 'Bacon' },
    { value: 'cheese', label: 'Cheese' },
    { value: 'olives', label: 'Olives' },
    { value: 'peppers', label: 'Peppers' },
    { value: 'pineapple', label: 'Pineapple' },
    { value: 'spinach', label: 'Spinach' },
  ];

  pokemon = [
    {
      label: 'Grass',
      pokemon: [
        { value: 'bulbasaur', label: 'Bulbasaur' },
        { value: 'oddish', label: 'Oddish' },
        { value: 'bellsprout', label: 'Bellsprout' },
      ],
    },
    {
      label: 'Water',
      pokemon: [
        { value: 'squirtle', label: 'Squirtle' },
        { value: 'psyduck', label: 'Psyduck' },
        { value: 'horsea', label: 'Horsea' },
      ],
    },
    {
      label: 'Fire',
      disabled: true,
      pokemon: [
        { value: 'charmander', label: 'Charmander' },
        { value: 'vulpix', label: 'Vulpix' },
        { value: 'flareon', label: 'Flareon' },
      ],
    },
    {
      label: 'Psychic',
      pokemon: [
        { value: 'mew', label: 'Mew' },
        { value: 'mewtwo', label: 'Mewtwo' },
      ],
    },
  ];
}
