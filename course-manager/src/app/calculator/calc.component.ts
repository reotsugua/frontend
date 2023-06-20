import { Component, OnInit } from "@angular/core";
import { Botao } from "./calc";

@Component({
    selector: 'app-calc-button',
    templateUrl: './calc-component.html'
})
export class CalcButtons implements OnInit{
    
    botoes: Botao [] = [];
    
    ngOnInit(): void {
        this.botoes = [
            {
                valor: 1,
            },
            {
                valor: 2,
            },
            {
                valor: 3,
            },
            {
                valor: 4,
            }
        ]
    }
}