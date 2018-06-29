import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class PlaceClasification {

    constructor() {}

    public sortClasification = (clasifications) => {
        for (let i = 0; i < clasifications.length; i++) {
            //Default icon
            clasifications[i].icon = 'infox.png';

            switch (clasifications[i].clasificacion) {
                case 'ESCUELAS':
                    clasifications[i].iconStyle = 'ios-school';
                    clasifications[i].icon = 'school.png';
                    break;
                case 'COMIDAS RAPIDAS':
                    clasifications[i].iconStyle = 'md-pizza';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'RESTAURANTES':
                    clasifications[i].iconStyle = 'md-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'REFACCIONARIAS':
                    clasifications[i].iconStyle = 'ios-hammer';
                    break;
                case 'SALONES':
                    clasifications[i].iconStyle = 'ios-musical-notes';
                    break;
                case 'VENTA DE MATERIALES':
                    clasifications[i].iconStyle = 'ios-build';
                    break;
                case 'AGENCIAS AUTOMOTRICES':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'FERRETERIAS':
                    clasifications[i].iconStyle = 'ios-construct';
                    break;
                case 'BANCOS':
                    clasifications[i].iconStyle = 'logo-usd';
                    clasifications[i].icon = 'banks.png';
                    break;
                case 'TELEVISION SATELITAL':
                    clasifications[i].iconStyle = 'md-desktop';
                    break;
                case 'IGLESIAS':
                    clasifications[i].iconStyle = 'ios-flower';
                    clasifications[i].icon = 'church.png';
                    break;
                case 'GASES INDUSTRIALES':
                    clasifications[i].iconStyle = 'ios-flame';
                    clasifications[i].icon = 'gas-station.png';
                    break;
                case 'GASOLINERAS':
                    clasifications[i].iconStyle = 'ios-water';
                    clasifications[i].icon = 'gas-station.png';
                    break;
                case 'HOSPITALES':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'CENTROS MEDICOS':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'HOTELES':
                    clasifications[i].iconStyle = 'ios-briefcase';
                    clasifications[i].icon = 'hotel.png';
                    break;
                case 'MUSEOS':
                    clasifications[i].iconStyle = 'md-color-palette';
                    clasifications[i].icon = 'museum.png';
                    break;
                case 'CAJEROS AUTOMATICOS':
                    clasifications[i].iconStyle = 'ios-card';
                    clasifications[i].icon = 'atm.png';
                    break;
                case 'COMPUTADORAS':
                    clasifications[i].iconStyle = 'md-desktop';
                    break;
                case 'PASTELERIAS':
                    clasifications[i].iconStyle = 'ios-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'TIENDAS DEPARTAMENTALES':
                    clasifications[i].iconStyle = 'md-cart';
                    break;
                case 'OPTICAS':
                    clasifications[i].iconStyle = 'md-glasses';
                    break;
                case 'CONSTRUCTORAS':
                    clasifications[i].iconStyle = 'ios-construct';
                    break;
                case 'VIDRIERIAS':
                    clasifications[i].iconStyle = 'logo-windows';
                    break;
                case 'DOCTORES':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'GOBIERNO':
                    clasifications[i].iconStyle = 'ios-globe';
                    clasifications[i].icon = 'museum.png';
                    break;
                case 'TAXIS':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'MENSAJERIAS':
                    clasifications[i].iconStyle = 'logo-dropbox';
                    break;
                case 'PERIODICOS':
                    clasifications[i].iconStyle = 'md-paper';
                    break;
                case 'FOTOGRAFIA Y VIDEO':
                    clasifications[i].iconStyle = 'ios-camera';
                    break;
                case 'VETERINARIAS':
                    clasifications[i].iconStyle = 'md-paw';
                    break;
                case 'PAPELERIAS':
                    clasifications[i].iconStyle = 'md-print';
                    break;
                case 'GIMNASIOS':
                    clasifications[i].iconStyle = 'md-bicycle';
                    break;
                case 'EQUIPOS DE SONIDO':
                    clasifications[i].iconStyle = 'md-mic';
                    break;
                case 'GRUAS':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'FLORERIAS':
                    clasifications[i].iconStyle = 'ios-rose';
                    break;
                case 'GRUPOS MUSICALES':
                    clasifications[i].iconStyle = 'ios-musical-notes';
                    break;
                case 'TELEVISORAS':
                    clasifications[i].iconStyle = 'ios-desktop-outline';
                    break;
                case 'ARTICULOS DE LIMPIEZA':
                    clasifications[i].iconStyle = 'ios-flask-outline';
                    break;
                case 'COMERCIALIZADORA':
                    clasifications[i].iconStyle = 'logo-usd';
                    break;
                case 'ACADEMIAS DE BELLEZA':
                    clasifications[i].iconStyle = 'ios-color-wand';
                    break;
                case 'AGENTES DE SEGUROS':
                    clasifications[i].iconStyle = 'md-lock';
                    break;
                case 'VIDRIERAS':
                    clasifications[i].iconStyle = 'logo-windows';
                    break;
                case 'ABOGADOS':
                    clasifications[i].iconStyle = 'ios-briefcase';
                    break;
                case 'ATENCION CIUDADANA':
                    clasifications[i].iconStyle = 'ios-people';
                    break;
                case 'NOTARIAS PUBLICAS':
                    clasifications[i].iconStyle = 'ios-briefcase';
                    break;
                case 'GOBIERNO MUNICIPAL':
                    clasifications[i].iconStyle = 'ios-home';
                    clasifications[i].icon = 'museum.png';
                    break;
                case 'CARNICERIAS':
                    clasifications[i].iconStyle = 'md-restaurant';
                    break;
                case 'AIRES ACONDICIONADOS':
                    clasifications[i].iconStyle = 'md-sunny';
                    break;
                case 'ENTRENAMIENTO DE PERROS':
                    clasifications[i].iconStyle = 'md-paw';
                    break;
                case 'CERVECERIAS':
                    clasifications[i].iconStyle = 'md-beer';
                    break;
                case 'CASAS DE CAMBIO':
                    clasifications[i].iconStyle = 'md-cash';
                    break;
                case 'TINTORERIAS':
                    clasifications[i].iconStyle = 'md-shirt';
                    break;
                case 'IMPRENTAS':
                    clasifications[i].iconStyle = 'md-print';
                    break;
                case 'REMANUFACTURA DE CARTUCHOS':
                    clasifications[i].iconStyle = 'md-print';
                    break;
                case 'GASERAS':
                    clasifications[i].iconStyle = 'ios-flame';
                    clasifications[i].icon = 'gas-station';
                    break;
                case 'FUNERARIAS':
                    clasifications[i].iconStyle = 'ios-leaf';
                    break;
                case 'FARMACIAS':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'ELECTRONICAS':
                    clasifications[i].iconStyle = 'ios-outlet';
                    break;
                case 'COMPAÑIAS DE TELEFONOS':
                    clasifications[i].iconStyle = 'call';
                    break;
                case 'TAQUERIAS':
                    clasifications[i].iconStyle = 'ios-restaurant';
                    break;
                case 'LAVANDERIAS':
                    clasifications[i].iconStyle = 'md-shirt';
                    break;
                case 'COMERCIALIZADORAS':
                    clasifications[i].iconStyle = 'logo-usd';
                    break;
                case 'ABARROTES':
                    clasifications[i].iconStyle = 'ios-cart';
                    break;
                case 'ARQUITECTOS':
                    clasifications[i].iconStyle = 'ios-home';
                    break;
                case 'CARPINTERIAS':
                    clasifications[i].iconStyle = 'ios-hammer';
                    break;
                case 'CINES':
                    clasifications[i].iconStyle = 'ios-film';
                    break;
                case 'CONTADORES':
                    clasifications[i].iconStyle = 'ios-briefcase';
                    break;
                case 'ACADEMIAS DE BAILE':
                    clasifications[i].iconStyle = 'ios-musical-notes';
                    break;
                case 'LABORATORIOS':
                    clasifications[i].iconStyle = 'ios-flask';
                    break;
                case 'AGENCIAS DE VIAJES':
                    clasifications[i].iconStyle = 'ios-plane';
                    break;
                case 'PRODUCTOS DE BELLEZA':
                    clasifications[i].iconStyle = 'ios-bowtie';
                    break;
                case 'AUTOTRANSPORTES':
                    clasifications[i].iconStyle = 'md-bus';
                    break;
                case 'CENTRAL DE AUTOBUSES':
                    clasifications[i].iconStyle = 'md-bus';
                    break;
                case 'GOBIERNO ESTATAL':
                    clasifications[i].iconStyle = 'ios-globe-outline';
                    clasifications[i].icon = 'museum.png';
                    break;
                case 'SONIDOS':
                    clasifications[i].iconStyle = 'md-volume-up';
                    break;
                case 'RADIODIFUSORAS':
                    clasifications[i].iconStyle = 'ios-radio-outline';
                    break;
                case 'AEROLINEAS':
                    clasifications[i].iconStyle = 'ios-plane';
                    break;
                case 'AEROPUERTOS':
                    clasifications[i].iconStyle = 'ios-plane';
                    break;
                case 'AUTOMOVILES':
                    clasifications[i].iconStyle = 'md-car';
                    clasifications[i].icon = '';
                    break;
                case 'CENTROS CULTURALES':
                    clasifications[i].iconStyle = 'md-color-palette';
                    clasifications[i].icon = 'museum.png';
                    break;
                case 'FIESTAS':
                    clasifications[i].iconStyle = 'ios-musical-notes';
                    break;
                case 'CENTROS COMERCIALES':
                    clasifications[i].iconStyle = 'md-cart';
                    break;
                case 'ESTETICAS':
                    clasifications[i].iconStyle = 'ios-cut';
                    break;
                case 'TALLER MECANICO':
                    clasifications[i].iconStyle = 'ios-build';
                    break;
                case 'ESCUELAS DE MUSICA':
                    clasifications[i].iconStyle = 'ios-musical-notes';
                    break;
                case 'CLUB DEPORTIVO':
                    clasifications[i].iconStyle = 'ios-football';
                    break;
                case 'GOBIERNO FEDERAL':
                    clasifications[i].iconStyle = 'ios-globe-outline';
                    clasifications[i].icon = 'museum.png';
                    break;
                case 'TIENDAS DE ACCESORIOS PARA DAMA':
                    clasifications[i].iconStyle = 'ios-bowtie';
                    break;
                case 'TALLERES':
                    clasifications[i].iconStyle = 'ios-build';
                    break;
                case 'TALLER ELECTRICO':
                    clasifications[i].iconStyle = 'ios-outlet';
                    break;
                case 'TABLAROCA':
                    clasifications[i].iconStyle = 'ios-hammer';
                    break;
                case 'FABRICA DE ALIMENTOS':
                    clasifications[i].iconStyle = 'ios-nutrition';
                    break;
                case 'FORRAJERAS':
                    clasifications[i].iconStyle = 'ios-key';
                    break;
                case 'CASAS DE EMPEÑO':
                    clasifications[i].iconStyle = 'md-cash';
                    break;
                case 'AUTOPARTES':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'MATERIALES PARA CONSTRUCCION':
                    clasifications[i].iconStyle = 'ios-construct';
                    clasifications[i].icon = '';
                    break;
                case 'VIDEOCENTRO':
                    clasifications[i].iconStyle = 'ios-videocam';
                    clasifications[i].icon = '';
                    break;
                case 'TRANSPORTES DE VALORES':
                    clasifications[i].iconStyle = 'md-cash';
                    break;
                case 'CLINICAS DE BELLEZA':
                    clasifications[i].iconStyle = 'ios-color-wand';
                    break;
                case 'MAQUINARIA PARA CONSTRUCCION':
                    clasifications[i].iconStyle = 'ios-construct';
                    break;
                case 'INSTALACIONES ELECTRICAS':
                    clasifications[i].iconStyle = 'ios-outlet';
                    break;
                case 'TELEFONIA':
                    clasifications[i].iconStyle = 'call';
                    break;
                case 'INMOBILIARIAS':
                    clasifications[i].iconStyle = 'ios-home';
                    break;
                case 'BIENES RAICES':
                    clasifications[i].iconStyle = 'ios-home';
                    break;
                case 'RADIOCOMUNICACIONES':
                    clasifications[i].iconStyle = 'ios-radio-outline';
                    clasifications[i].icon = '';
                    break;
                case 'PLOMERIA':
                    clasifications[i].iconStyle = 'ios-construct';
                    clasifications[i].icon = '';
                    break;
                case 'CERRAJERIAS':
                    clasifications[i].iconStyle = 'ios-key';
                    break;
                case 'BOUTIQUES':
                    clasifications[i].iconStyle = 'ios-bowtie';
                    break;
                case 'INSTRUMENTOS MUSICALES':
                    clasifications[i].iconStyle = 'ios-musical-notes';
                    break;
                case 'HOJALATERIA Y PINTURA':
                    clasifications[i].iconStyle = 'md-color-fill';
                    break;
                case 'ELECTRICISTAS':
                    clasifications[i].iconStyle = 'ios-outlet';
                    break;
                case 'MOTOCICLETAS':
                    clasifications[i].iconStyle = 'md-bicycle';
                    break;
                case 'LLANTERAS':
                    clasifications[i].iconStyle = 'ios-disc';
                    break;
                case 'BANQUETES':
                    clasifications[i].iconStyle = 'ios-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'DISCOS-BAR':
                    clasifications[i].iconStyle = 'md-beer';
                    break;
                case 'CIRUJANOS PLASTICOS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'creditos':
                    clasifications[i].iconStyle = 'md-cash';
                    clasifications[i].icon = 'banks.png';
                    break;
                case 'CELULARES':
                    clasifications[i].iconStyle = 'ios-phone-portrait';
                    break;
                case 'SISTEMAS DE ALARMAS':
                    clasifications[i].iconStyle = 'ios-radio-outline';
                    break;
                case 'AMBULANCIAS':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'BICICLETAS':
                    clasifications[i].iconStyle = 'md-bicycle';
                    break;
                case 'CAFE Y MOLINOS':
                    clasifications[i].iconStyle = 'ios-cafe';
                    break;
                case 'TIENDAS DE REGALOS':
                    clasifications[i].iconStyle = 'ios-bowtie';
                    break;
                case 'COPIADORAS':
                    clasifications[i].iconStyle = 'md-print';
                    clasifications[i].icon = 'school.png';
                    break;
                case 'PINTURAS':
                    clasifications[i].iconStyle = 'md-color-fill';
                    break;
                case 'TIENDAS DEPORTIVAS':
                    clasifications[i].iconStyle = 'ios-football';
                    break;
                case 'CLINICAS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'FOTOGRAFIA':
                    clasifications[i].iconStyle = 'ios-camera';
                    break;
                case 'TURISMO':
                    clasifications[i].iconStyle = 'ios-plane';
                    break;
                case 'MOTEL':
                    clasifications[i].iconStyle = 'ios-briefcase';
                    clasifications[i].icon = 'hotel.png';
                    break;
                case 'PRODUCTOS NUTRICIONALES':
                    clasifications[i].iconStyle = 'ios-leaf';
                    break;
                case 'INGENIERIA AMBIENTAL':
                    clasifications[i].iconStyle = 'ios-globe';
                    break;
                case 'CHATS':
                    clasifications[i].iconStyle = 'md-chatbubbles';
                    break;
                case 'LIBRERIAS':
                    clasifications[i].iconStyle = 'ios-book-outline';
                    break;
                case 'MADERERIAS':
                    clasifications[i].iconStyle = 'ios-construct';
                    break;
                case 'MATERIALES ELECTRICOS':
                    clasifications[i].iconStyle = 'ios-outlet';
                    break;
                case 'AGENCIAS DE MOTOCICLETAS':
                    clasifications[i].iconStyle = 'md-bicycle';
                    break;
                case 'MATERIAL DIDACTICO':
                    clasifications[i].iconStyle = 'ios-book-outline';
                    break;
                case 'MATERIAL PARA CURACIONES':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'EQUIPO MEDICO Y QUIRURGICO':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'PORTALES DE INTERNET':
                    clasifications[i].iconStyle = 'ios-wifi';
                    break;
                case 'MATERIAL QUIRURGICO':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'TALLER':
                    clasifications[i].iconStyle = 'ios-construct';
                    break;
                case 'CLUBES DEPORTIVOS':
                    clasifications[i].iconStyle = 'ios-football';
                    break;
                case 'SISTEMAS CONTRA INCENDIO':
                    clasifications[i].iconStyle = 'ios-flame';
                    break;
                case 'COMIDA RAPIDA':
                    clasifications[i].iconStyle = 'md-pizza';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'SNACKS':
                    clasifications[i].iconStyle = 'md-pizza';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'LAVADO DE AUTOS':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'REFACCIONARIA':
                    clasifications[i].iconStyle = 'ios-construct';
                    break;
                case 'DESCARGAS':
                    clasifications[i].iconStyle = 'md-arrow-down';
                    break;
                case 'INFORMACION':
                    clasifications[i].iconStyle = 'ios-information-circle';
                    break;
                case 'POLLOS':
                    clasifications[i].iconStyle = 'md-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'ARTICULOS DE BELLEZA':
                    clasifications[i].iconStyle = 'ios-color-wand';
                    break;
                case 'ESTETICAS INFANTILES':
                    clasifications[i].iconStyle = 'ios-cut';
                    break;
                case 'COMUNICACIONES':
                    clasifications[i].iconStyle = 'ios-megaphone';
                    break;
                case 'PROFESORES':
                    clasifications[i].iconStyle = 'ios-book-outline';
                    clasifications[i].icon = 'school.png';
                    break;
                case 'EXTINGUIDORES':
                    clasifications[i].iconStyle = 'ios-flame';
                    break;
                case 'PORTALS DE INTERNET':
                    clasifications[i].iconStyle = 'ios-globe';
                    break;
                case 'TALLERES MECANICOS INDUSTRIALES':
                    clasifications[i].iconStyle = 'ios-construct';
                    break;
                case 'CAFETERIAS':
                    clasifications[i].iconStyle = 'ios-cafe';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'TELEVISION':
                    clasifications[i].iconStyle = 'ios-desktop-outline';
                    break;
                case 'TIENDA NATURISTA':
                    clasifications[i].iconStyle = 'ios-leaf';
                    break;
                case 'PLOMERIAS, FERRETERIAS Y ELECTRICIDAD':
                    clasifications[i].iconStyle = 'ios-construct';
                    break;
                case 'RESTAURANTES COCINA CHINA':
                    clasifications[i].iconStyle = 'md-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'CLINICA':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'RENTA DE AUTOS':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'INSTITUCIONES DE CREDITO':
                    clasifications[i].iconStyle = 'md-cash';
                    clasifications[i].icon = 'banks.png';
                    break;
                case 'CLINICAS DENTALES':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'VINOS Y LICORES':
                    clasifications[i].iconStyle = 'ios-wine';
                    break;
                case 'VIDEOFILMACIONES':
                    clasifications[i].iconStyle = 'ios-videocam';
                    break;
                case 'CAMARAS NACIONALES':
                    clasifications[i].iconStyle = 'ios-videocam';
                    break;
                case 'COMIDAS':
                    clasifications[i].iconStyle = 'md-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'DESARROLLO DE SOFTWARE':
                    clasifications[i].iconStyle = 'ios-wifi';
                    break;
                case 'CLINICAS NATURISTAS':
                    clasifications[i].iconStyle = 'ios-leaf';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'TALLERE MECANICO':
                    clasifications[i].iconStyle = 'ios-build';
                    break;
                case 'PARQUES':
                    clasifications[i].iconStyle = 'ios-leaf';
                    break;
                case 'ZOOLOGICOS':
                    clasifications[i].iconStyle = 'md-paw';
                    break;
                case 'PERIODICOS ELECTRONICOS':
                    clasifications[i].iconStyle = 'md-wifi';
                    break;
                case 'TIENDAS NATURISTAS':
                    clasifications[i].iconStyle = 'ios-leaf';
                    break;
                case 'COPIAS':
                    clasifications[i].iconStyle = 'md-print';
                    break;
                case 'ENERGIA SOLAR':
                    clasifications[i].iconStyle = 'md-sunny';
                    break;
                case 'EXTINTORES':
                    clasifications[i].iconStyle = 'ios-flame';
                    break;
                case 'GOBIERNO FEDRAL':
                    clasifications[i].iconStyle = 'ios-globe';
                    clasifications[i].icon = 'museum.png';
                    break;
                case 'NEVERIAS':
                    clasifications[i].iconStyle = 'md-ice-cream';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'HIERBERIAS':
                    clasifications[i].iconStyle = 'ios-leaf';
                    break;
                case 'PRODUCTOS ALIMENTICIOS':
                    clasifications[i].iconStyle = 'md-pint';
                    break;
                case 'PRODUCTOS QUIMICOS':
                    clasifications[i].iconStyle = 'ios-beaker-outline';
                    break;
                case 'TALLER DE ELECTRONICA':
                    clasifications[i].iconStyle = 'ios-outlet';
                    break;
                case 'BARES Y DISCOS':
                    clasifications[i].iconStyle = 'ios-radio-outline';
                    break;
                case 'BIBLIOTECAS':
                    clasifications[i].iconStyle = 'ios-book-outline';
                    clasifications[i].icon = 'school.png';
                    break;
                case 'TIENDAS DE ACCESORIOS PARA DAMAS':
                    clasifications[i].iconStyle = 'ios-bowtie';
                    break;
                case 'ANIMALES':
                    clasifications[i].iconStyle = 'md-paw';
                    break;
                case 'CAFETERIA':
                    clasifications[i].iconStyle = 'ios-cafe';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'VIDEO JUEGOS-PS3':
                    clasifications[i].iconStyle = 'logo-playstation';
                    break;
                case 'EQUIPOS DE SONIDOS':
                    clasifications[i].iconStyle = 'md-mic';
                    break;
                case 'SONIDO':
                    clasifications[i].iconStyle = 'md-mic';
                    break;
                case 'COSMETICOS':
                    clasifications[i].iconStyle = 'ios-color-wand';
                    break;
                case 'GASOLINERA':
                    clasifications[i].iconStyle = 'ios-water';
                    clasifications[i].icon = 'gas-station.png';
                    break;
                case 'ELECTRONICOS':
                    clasifications[i].iconStyle = 'ios-phone-portrait';
                    break;
                case 'FINANCIERAS':
                    clasifications[i].iconStyle = 'logo-usd';
                    clasifications[i].icon = 'banks.png';
                    break;
                case 'ACCESORIOS':
                    clasifications[i].iconStyle = 'ios-bowtie';
                    break;
                case 'DONADORES DE SANGRE':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'PRODUCTOS NATURALES':
                    clasifications[i].iconStyle = 'ios-leaf';
                    break;
                case 'PALAPAS':
                    clasifications[i].iconStyle = 'ios-partly-sunny';
                    break;
                case 'Ebanisteria y/o Carpinteria':
                    clasifications[i].iconStyle = 'ios-construct';
                    break;
                case 'AUTOS':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'SALONES DE BELLEZA':
                    clasifications[i].iconStyle = 'ios-color-wand';
                    break;
                case 'VINOS':
                    clasifications[i].iconStyle = 'ios-wine';
                    break;
                case 'UNIVERSIDADES':
                    clasifications[i].iconStyle = 'ios-school';
                    clasifications[i].icon = 'school.png';
                    break;
                case 'SALONES DE EVENTOS':
                    clasifications[i].iconStyle = 'ios-musical-notes';
                    break;
                case 'REGALOS':
                    clasifications[i].iconStyle = 'logo-dropbox';
                    break;
                case 'KARAOKE':
                    clasifications[i].iconStyle = 'md-microphone';
                    break;
                case 'PRODUCTOS DE LIMPIEZA':
                    clasifications[i].iconStyle = 'ios-flask-outline';
                    break;
                case 'TIENDAS DE ROPA':
                    clasifications[i].iconStyle = 'md-shirt';
                    break;
                case 'DISTRIBUIDORA DE REFRESCOS':
                    clasifications[i].iconStyle = 'ios-pint';
                    break;
                case 'ACCESORIOS PARA AUTOMOVILES':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'NOTARIAS':
                    clasifications[i].iconStyle = 'ios-briefcase';
                    break;
                case 'AUTOLAVADOS':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'PINTACARITAS':
                    clasifications[i].iconStyle = 'ios-brush';
                    break;
                case 'EQUIPO DE SONIDO, KARAOKE Y SHOW DE LUCES.':
                    clasifications[i].iconStyle = 'md-mic';
                    break;
                case 'FIESTAS  INFANTILES':
                    clasifications[i].iconStyle = 'ios-musical-notes';
                    break;
                case 'acuario':
                    clasifications[i].iconStyle = 'ios-water';
                    break;
                case 'AGUA PURIFICADA':
                    clasifications[i].iconStyle = 'ios-water';
                    break;
                case 'Computo':
                    clasifications[i].iconStyle = 'ios-desktop-outline';
                    break;
                case 'MEDICINA Y PSICOLOGIA':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'RENTA DE SONIDOS':
                    clasifications[i].iconStyle = 'md-mic';
                    break;
                case 'REPARACION DE COMPUTADORAS':
                    clasifications[i].iconStyle = 'md-settings';
                    break;
                case 'AGENCIAS DE PUBLICIDAD':
                    clasifications[i].iconStyle = '';
                    clasifications[i].icon = '';
                    break;
                case 'RADIOLOGIAS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'EQUIPOS Y MATERIALES CLINICOS':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'MATERIAL DIDACTICO  EDUCATIVO':
                    clasifications[i].iconStyle = 'ios-bookmarks-outline';
                    clasifications[i].icon = 'school.png';
                    break;
                case 'JARDINEROS':
                    clasifications[i].iconStyle = 'ios-leaf';
                    break;
                case 'FOTOGRAFIAS':
                    clasifications[i].iconStyle = 'ios-camera';
                    break;
                case 'VENTA Y RENTA DE EQUIPO MEDICO':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'AGENCIA DE VIAJES':
                    clasifications[i].iconStyle = 'ios-plane';
                    break;
                case 'VIDEOS FILMACIONES':
                    clasifications[i].iconStyle = 'ios-videocam';
                    break;
                case 'VENTA DE PLANTAS':
                    clasifications[i].iconStyle = 'ios-videocam';
                    break;
                case 'BARES':
                    clasifications[i].iconStyle = 'ios-videocam';
                    break;
                case 'SUPERMERCADOS':
                    clasifications[i].iconStyle = 'md-cart';
                    break;
                case 'ENDODONCISTAS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'PAPELERIA':
                    clasifications[i].iconStyle = 'md-paper';
                    break;
                case 'AAA':
                    clasifications[i].iconStyle = 'ios-help-buoy';
                    break;
                case 'TRANSPORTES':
                    clasifications[i].iconStyle = 'md-bus';
                    break;
                case 'CONTABILIDAD, DEFENSA FISCAL, ADMINISTRACION Y FINANZAS':
                    clasifications[i].iconStyle = 'ios-briefcase';
                    break;
                case 'HAMBURGUESAS':
                    clasifications[i].iconStyle = 'md-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'CONSULTORIOS NUTRIOLOGO':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'TELEFONOS DE EMERGENCIA ADMINISTRACION POSTAL':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS DE EMERGENCIA POLICIA MINISTERIAL':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS DE EMERGENCIA CENTRO DE EMERGENCIAS':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS DE EMERGENCIA CENTRO ESTATAL DE TRANSFUSION SANGUINEA':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS DE EMERGENCIA COMISION FEDERAL DE ELECTRICIDAD':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'CORREOS':
                    clasifications[i].iconStyle = 'md-mail';
                    break;
                case 'ESTACION DE BOMBEROS':
                    clasifications[i].iconStyle = 'md-flame';
                    break;
                case 'TELEFONOS DE EMERGENCIA':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS DE EMERGENCIA CENTROS DE INTEGRACION':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS DE EMERGENCIA NEUROTICOS ANONIMOS':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS DE EMERGENCIA INCENDIOS FORESTALES':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS EMERGENCIAS LOCATEL':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS EMERGENCIAS IMSS ORIENTACION':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS EMERGENCIAS IMSS':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS EMERGENCIAS POLICIA FEDERAL':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'PROCURADURIA FEDERAL DEL CONSUMIDOR':
                    clasifications[i].iconStyle = 'ios-globe-outline';
                    break;
                case 'TELEFONOS DE EMERGENCIA SECRETARIA DE MARINA ARMADA DE MEXICO':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'TELEFONOS DE EMERGENCIA SECRETARIA DE SEGURIDAD Y VIALIDAD':
                    clasifications[i].iconStyle = 'md-help';
                    break;
                case 'PREPARATORIA':
                    clasifications[i].iconStyle = 'ios-school';
                    clasifications[i].icon = 'school.png';
                    break;
                case 'RETA DE KARAOKE':
                    clasifications[i].iconStyle = 'md-mic';
                    break;
                case 'DEPARTAMENTOS':
                    clasifications[i].iconStyle = 'ios-home';
                    break;
                case 'PREPARATORIAS':
                    clasifications[i].iconStyle = 'ios-school';
                    clasifications[i].icon = 'school.png';
                    break;
                case 'SECRETARIAS':
                    clasifications[i].iconStyle = 'ios-briefcase';
                    clasifications[i].icon = 'museum.png';
                    break;
                case 'MANTENIMIENTO':
                    clasifications[i].iconStyle = 'ios-construct';
                    break;
                case 'ESCUELAS DE INGLES':
                    clasifications[i].iconStyle = 'ios-school';
                    clasifications[i].icon = 'school.png';
                    break;
                case 'MEDICOS ALERGOLOGOS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'CENTRO MEDICO':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'DOCTORES HOMEOPATAS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'DOCTORES INTERNISTAS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'DOCTORES ESPECIALISTAS NEUMOLOGOS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'MEDICOS VETERINARIOS':
                    clasifications[i].iconStyle = 'md-paw';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'CENTROS DE SALUD':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'LENTES':
                    clasifications[i].iconStyle = 'md-glasses';
                    break;
                case 'Radio por internet y Paginas Web':
                    clasifications[i].iconStyle = 'md-wifi';
                    break;
                case 'MEDICOS VETERINARIOS ZOOTERNISTAS':
                    clasifications[i].iconStyle = 'md-paw';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'COMEDIANTES':
                    clasifications[i].iconStyle = 'md-happy';
                    break;
                case 'HOSPITALES SANATORIOS Y CLINICAS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'COMIDA':
                    clasifications[i].iconStyle = 'md-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'telefonia celular':
                    clasifications[i].iconStyle = 'call';
                    break;
                case 'SERVICIOS PARA HOSPITALES':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'Restaurante':
                    clasifications[i].iconStyle = 'md-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'Pasteleria':
                    clasifications[i].iconStyle = 'md-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'CRUZ ROJA':
                    clasifications[i].iconStyle = 'md-medkit';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'regalos y novedades':
                    clasifications[i].iconStyle = 'ios-bowtie';
                    break;
                case 'fiestas y eventos':
                    clasifications[i].iconStyle = 'ios-musical-notes';
                    break;
                case 'RENTA DE CUBOS':
                    clasifications[i].iconStyle = 'md-cube';
                    break;
                case 'informatica':
                    clasifications[i].iconStyle = 'ios-globe-outline';
                    break;
                case 'ALQUILER DE AUTOS':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'VEHICULOS Y ACCESORIOS':
                    clasifications[i].iconStyle = 'md-car';
                    break;
                case 'ROPA INFANTIL':
                    clasifications[i].iconStyle = 'md-shirt';
                    break;
                case 'cubos':
                    clasifications[i].iconStyle = 'md-cube';
                    break;
                case 'SALONES DE FIESTAS':
                    clasifications[i].iconStyle = 'ios-musical-notes';
                    break;
                case 'TIENDAS':
                    clasifications[i].iconStyle = 'md-cart';
                    clasifications[i].icon = '';
                    break;
                case 'SONIDO Y AUDIO':
                    clasifications[i].iconStyle = 'md-mic';
                    break;
                case 'financiera prestamos dinero':
                    clasifications[i].iconStyle = 'md-cash';
                    clasifications[i].icon = 'banks.png';
                    break;

                case 'TELEGRAFOS':
                    clasifications[i].iconStyle = 'md-mail';
                    break;
                case 'comida fresca':
                    clasifications[i].iconStyle = 'md-restaurant';
                    clasifications[i].icon = 'restaurant.png';
                    break;
                case 'Naturista':
                    clasifications[i].iconStyle = 'ios-leaf';
                    break;
                case 'COMUNIDADES RELIGIOSAS':
                    clasifications[i].iconStyle = 'ios-flower';
                    clasifications[i].icon = 'church.png';
                    break;
                case 'AUTOFINANCIAMIENTOS':
                    clasifications[i].iconStyle = 'md-cash';
                    break;
                case 'CLIMA':
                    clasifications[i].iconStyle = 'ios-partly-sunny';
                    break;
                case 'CONSULADOS':
                    clasifications[i].iconStyle = 'ios-globe';
                    clasifications[i].icon = 'museum.png';
                    break;
                case 'GUIAS TURISTICOS':
                    clasifications[i].iconStyle = 'ios-plane';
                    break;
                case 'ROPA':
                    clasifications[i].iconStyle = 'md-shirt';
                    break;
                case 'FABRICAS DE CAMISAS':
                    clasifications[i].iconStyle = 'md-shirt';
                    break;
                case 'COSTURERIAS':
                    clasifications[i].iconStyle = 'md-shirt';
                    break;
                case 'DESPACHOS CONTABLES':
                    clasifications[i].iconStyle = 'ios-briefcase';
                    break;
                case 'TERAPIAS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    break;
                case 'SERVICIOS DE LIMPIEZA':
                    clasifications[i].iconStyle = 'ios-flask-outline';
                    break;
                case 'VIDEOCLUBS':
                    clasifications[i].iconStyle = 'ios-film';
                    break;
                case 'EQUIPO DE SEGURIDAD':
                    clasifications[i].iconStyle = 'md-lock';
                    break;
                case 'DENTISTAS':
                    clasifications[i].iconStyle = 'ios-pulse';
                    clasifications[i].icon = 'hospital.png';
                    break;
                case 'PELUQUERIAS':
                    clasifications[i].iconStyle = 'ios-cut';
                    break;
                case 'MOTELES':
                    clasifications[i].iconStyle = 'ios-briefcase';
                    clasifications[i].icon = 'hotel.png';
                    break;
                default:
                    clasifications[i].iconStyle = 'ios-information-circle';
                    break;
            }

        }
        return clasifications;
    };

}
