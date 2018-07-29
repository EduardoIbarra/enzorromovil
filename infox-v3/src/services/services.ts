import {Injectable} from '@angular/core';
import {Http, Jsonp} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class AppService {

    api_url = 'http://infoxsoft.com/app/';
    constructor(public http: Http, public jsonp: Jsonp) {
    }

    public getAdvertisement = () => {
        return this.jsonp.get('http://www.infox.mx/apps/consulta_anunciopor.php?&jsoncallback=JSONP_CALLBACK');
    };

    public autocompleteSearch = (query) => {
        return this.jsonp.get('http://www.infox.mx/apps/autocomplete.php?jsoncallback=JSONP_CALLBACK&termino=' + query);
    };

    public getPlaces = (query, page, day) => {
        return this.jsonp.get('http://infox.mx/apps/consulta_datos.php?termino=' + query + '&page=' + page + '&ciudad=0&dia=' + day + '&jsoncallback=JSONP_CALLBACK');
    };

    public getPlaceDetails = (placeId) => {
        return this.jsonp.get('http://infox.mx/apps/consulta_info.php?idnum=' + placeId + '&jsoncallback=JSONP_CALLBACK');
    };

    public sendComments = (placeId, comments) => {
        return this.jsonp.get('http://infox.mx/apps/datos_incorrectos.php?idnum=' + placeId + '&comentarios=' + comments + '&jsoncallback=JSONP_CALLBACK');
    };

    public getNearbyPlaces = (lat, lng, page, search) => {
        return this.jsonp.get('http://infox.mx/apps/georapp_json.php?callback=JSONP_CALLBACK&lat=' + lat + '&lng=' + lng + '&np=' + page + '&b=' + search).map((response)=>{
            return response.json();
        });
    };

    public getGpsData = (userLat, userLng, placeLat, placeLng, mode) => {
        return this.http.get('https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=' + userLat + ',' + userLng + '&destinations=' + placeLat + ',' + placeLng + '&mode=' + mode + '&language=es&key=AIzaSyDhHyggzzMjFmbrFXj-edhwN-xOJmuaT6g');
    };

    public getCountries = () => {
        return this.http.get(this.api_url + 'manual_location.php?operation=countries');
    };

    public getStates = (country) => {
        return this.http.get(this.api_url + 'manual_location.php?operation=states&country=' + country);
    };

    public getCities = (state) => {
        return this.http.get(this.api_url + 'manual_location.php?operation=cities&state=' + state);
    };
}
