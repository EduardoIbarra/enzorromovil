import {Injectable} from '@angular/core';

@Injectable()

export class GlobalVariables {

    searchParams: any;
    placeId: any;
    day: any;
    recentSearchResults: any = [];
    recentNearbySearchResults: any = [];
    recentSearch: string;
    recentNearbySearch: string;
    nearbyTabActive: boolean = false;
    showNearbyTut: boolean = false;
    showTakeMeThereTut: boolean = false;
    goToPlace: boolean;
    goBackToNearby: boolean = false;
    isConnected: boolean = true;

    constructor() {
        this.searchParams = '';
        this.placeId = null;
    }

    public getDay() {
        let day = new Date().getDay();
        switch (day) {
            case 0:
                this.day = 'Domingo';
                break;
            case 1:
                this.day = 'Lunes';
                break;
            case 2:
                this.day = 'Martes';
                break;
            case 3:
                this.day = 'Miercoles';
                break;
            case 4:
                this.day = 'Jueves';
                break;
            case 5:
                this.day = 'Viernes';
                break;
            case 6:
                this.day = 'Sabado';
                break;
        }

        return this.day;
    }

}