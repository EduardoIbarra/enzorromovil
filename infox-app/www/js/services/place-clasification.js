(function () {

    var app = angular.module('infox-app');

    app.service('PlaceClasification', ['$q', function ($q) {

        var defered = $q.defer();
        var promise = defered.promise;

        this.sortClasifications = function ($clasifications) {

            for(var i=0; i < $clasifications.length; i++){
                //Default icon
                $clasifications[i].icon = 'infox.png';

                switch ($clasifications[i].clasificacion){
                    case 'ESCUELAS':
                        $clasifications[i].iconStyle = 'ion-university';
                        $clasifications[i].icon = 'school.png';
                        break;
                    case 'COMIDAS RAPIDAS':
                        $clasifications[i].iconStyle = 'ion-pizza';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'RESTAURANTES':
                        $clasifications[i].iconStyle = 'ion-android-restaurant';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'REFACCIONARIAS':
                        $clasifications[i].iconStyle = 'ion-hammer';
                        break;
                    case 'SALONES':
                        $clasifications[i].iconStyle = 'ion-ios-musical-notes';
                        break;
                    case 'VENTA DE MATERIALES':
                        $clasifications[i].iconStyle = 'ion-wrench';
                        break;
                    case 'AGENCIAS AUTOMOTRICES':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        break;
                    case 'FERRETERIAS':
                        $clasifications[i].iconStyle = 'ion-settings';
                        break;
                    case 'BANCOS':
                        $clasifications[i].iconStyle = 'ion-social-usd';
                        $clasifications[i].icon = 'banks.png';
                        break;
                    case 'TELEVISION SATELITAL':
                        $clasifications[i].iconStyle = 'ion-ios-monitor';
                        break;
                    case 'IGLESIAS':
                        $clasifications[i].iconStyle = 'ion-ios-flower';
                        $clasifications[i].icon = 'church.png';
                        break;
                    case 'GASES INDUSTRIALES':
                        $clasifications[i].iconStyle = 'ion-flame';
                        $clasifications[i].icon = 'gas-station.png';
                        break;
                    case 'GASOLINERAS':
                        $clasifications[i].iconStyle = 'ion-waterdrop';
                        $clasifications[i].icon = 'gas-station.png';
                        break;
                    case 'HOSPITALES':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'CENTROS MEDICOS':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'HOTELES':
                        $clasifications[i].iconStyle = 'ion-briefcase';
                        $clasifications[i].icon = 'hotel.png';
                        break;
                    case 'MUSEOS':
                        $clasifications[i].iconStyle = 'ion-android-color-palette';
                        $clasifications[i].icon = 'museum.png';
                        break;
                    case 'CAJEROS AUTOMATICOS':
                        $clasifications[i].iconStyle = 'ion-card';
                        $clasifications[i].icon = 'atm.png';
                        break;
                    case 'COMPUTADORAS':
                        $clasifications[i].iconStyle = 'ion-android-desktop';
                        break;
                    case 'PASTELERIAS':
                        $clasifications[i].iconStyle = 'ion-fork';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'TIENDAS DEPARTAMENTALES':
                        $clasifications[i].iconStyle = 'ion-android-cart';
                        break;
                    case 'OPTICAS':
                        $clasifications[i].iconStyle = 'ion-ios-glasses';
                        break;
                    case 'CONSTRUCTORAS':
                        $clasifications[i].iconStyle = 'ion-settings';
                        break;
                    case 'VIDRIERIAS':
                        $clasifications[i].iconStyle = 'ion-social-windows';
                        break;
                    case 'DOCTORES':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'GOBIERNO':
                        $clasifications[i].iconStyle = 'ion-earth';
                        $clasifications[i].icon = 'museum.png';
                        break;
                    case 'TAXIS':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        break;
                    case 'MENSAJERIAS':
                        $clasifications[i].iconStyle = 'ion-social-dropbox';
                        break;
                    case 'PERIODICOS':
                        $clasifications[i].iconStyle = 'ion-ios-paper-outline';
                        break;
                    case 'FOTOGRAFIA Y VIDEO':
                        $clasifications[i].iconStyle = 'ion-camera';
                        break;
                    case 'VETERINARIAS':
                        $clasifications[i].iconStyle = 'ion-ios-paw';
                        break;
                    case 'PAPELERIAS':
                        $clasifications[i].iconStyle = 'ion-printer';
                        break;
                    case 'GIMNASIOS':
                        $clasifications[i].iconStyle = 'ion-android-bicycle';
                        break;
                    case 'EQUIPOS DE SONIDO':
                        $clasifications[i].iconStyle = 'ion-mic-b';
                        break;
                    case 'GRUAS':
                        $clasifications[i].iconStyle = 'ion-alert-circled';
                        break;
                    case 'FLORERIAS':
                        $clasifications[i].iconStyle = 'ion-ios-rose';
                        break;
                    case 'GRUPOS MUSICALES':
                        $clasifications[i].iconStyle = 'ion-music-note';
                        break;
                    case 'TELEVISORAS':
                        $clasifications[i].iconStyle = 'ion-monitor';
                        break;
                    case 'ARTICULOS DE LIMPIEZA':
                        $clasifications[i].iconStyle = 'ion-ios-flask-outline';
                        break;
                    case 'COMERCIALIZADORA':
                        $clasifications[i].iconStyle = 'ion-social-usd';
                        break;
                    case 'ACADEMIAS DE BELLEZA':
                        $clasifications[i].iconStyle = 'ion-wand';
                        break;
                    case 'AGENTES DE SEGUROS':
                        $clasifications[i].iconStyle = 'ion-ios-locked';
                        break;
                    case 'VIDRIERAS':
                        $clasifications[i].iconStyle = 'ion-social-windows';
                        break;
                    case 'ABOGADOS':
                        $clasifications[i].iconStyle = 'ion-briefcase';
                        break;
                    case 'ATENCION CIUDADANA':
                        $clasifications[i].iconStyle = 'ion-ios-people';
                        break;
                    case 'NOTARIAS PUBLICAS':
                        $clasifications[i].iconStyle = 'ion-briefcase';
                        break;
                    case 'GOBIERNO MUNICIPAL':
                        $clasifications[i].iconStyle = 'ion-home';
                        $clasifications[i].icon = 'museum.png';
                        break;
                    case 'CARNICERIAS':
                        $clasifications[i].iconStyle = 'ion-knife';
                        break;
                    case 'AIRES ACONDICIONADOS':
                        $clasifications[i].iconStyle = 'ion-ios-sunny';
                        break;
                    case 'ENTRENAMIENTO DE PERROS':
                        $clasifications[i].iconStyle = 'ion-ios-paw';
                        break;
                    case 'CERVECERIAS':
                        $clasifications[i].iconStyle = 'ion-beer';
                        break;
                    case 'CASAS DE CAMBIO':
                        $clasifications[i].iconStyle = 'ion-cash';
                        break;
                    case 'TINTORERIAS':
                        $clasifications[i].iconStyle = 'ion-tshirt';
                        break;
                    case 'IMPRENTAS':
                        $clasifications[i].iconStyle = 'ion-printer';
                        break;
                    case 'REMANUFACTURA DE CARTUCHOS':
                        $clasifications[i].iconStyle = 'ion-printer';
                        break;
                    case 'GASERAS':
                        $clasifications[i].iconStyle = 'ion-flame';
                        $clasifications[i].icon = 'gas-station';
                        break;
                    case 'FUNERARIAS':
                        $clasifications[i].iconStyle = 'ion-leaf';
                        break;
                    case 'FARMACIAS':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'ELECTRONICAS':
                        $clasifications[i].iconStyle = 'ion-stats-bars';
                        break;
                    case 'COMPAÑIAS DE TELEFONOS':
                        $clasifications[i].iconStyle = 'ion-ios-telephone';
                        break;
                    case 'TAQUERIAS':
                        $clasifications[i].iconStyle = 'ion-fork';
                        break;
                    case 'LAVANDERIAS':
                        $clasifications[i].iconStyle = 'ion-tshirt';
                        break;
                    case 'COMERCIALIZADORAS':
                        $clasifications[i].iconStyle = 'ion-social-usd';
                        break;
                    case 'ABARROTES':
                        $clasifications[i].iconStyle = 'ion-ios-cart';
                        break;
                    case 'ARQUITECTOS':
                        $clasifications[i].iconStyle = 'ion-home';
                        break;
                    case 'CARPINTERIAS':
                        $clasifications[i].iconStyle = 'ion-hammer';
                        break;
                    case 'CINES':
                        $clasifications[i].iconStyle = 'ion-ios-film';
                        break;
                    case 'CONTADORES':
                        $clasifications[i].iconStyle = 'ion-ios-briefcase';
                        break;
                    case 'ACADEMIAS DE BAILE':
                        $clasifications[i].iconStyle = 'ion-music-note';
                        break;
                    case 'LABORATORIOS':
                        $clasifications[i].iconStyle = 'ion-ios-flask';
                        break;
                    case 'AGENCIAS DE VIAJES':
                        $clasifications[i].iconStyle = 'ion-android-plane';
                        break;
                    case 'PRODUCTOS DE BELLEZA':
                        $clasifications[i].iconStyle = 'ion-bowtie';
                        break;
                    case 'AUTOTRANSPORTES':
                        $clasifications[i].iconStyle = 'ion-android-bus';
                        break;
                    case 'CENTRAL DE AUTOBUSES':
                        $clasifications[i].iconStyle = 'ion-android-bus';
                        break;
                    case 'GOBIERNO ESTATAL':
                        $clasifications[i].iconStyle = 'ion-ios-world-outline';
                        $clasifications[i].icon = 'museum.png';
                        break;
                    case 'SONIDOS':
                        $clasifications[i].iconStyle = 'ion-volume-high';
                        break;
                    case 'RADIODIFUSORAS':
                        $clasifications[i].iconStyle = 'ion-radio-waves';
                        break;
                    case 'AEROLINEAS':
                        $clasifications[i].iconStyle = 'ion-android-plane';
                        break;
                    case 'AEROPUERTOS':
                        $clasifications[i].iconStyle = 'ion-android-plane';
                        break;
                    case 'AUTOMOVILES':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        $clasifications[i].icon = '';
                        break;
                    case 'CENTROS CULTURALES':
                        $clasifications[i].iconStyle = 'ion-android-color-palette';
                        $clasifications[i].icon = 'museum.png';
                        break;
                    case 'FIESTAS':
                        $clasifications[i].iconStyle = 'ion-ios-musical-notes';
                        break;
                    case 'CENTROS COMERCIALES':
                        $clasifications[i].iconStyle = 'ion-android-cart';
                        break;
                    case 'ESTETICAS':
                        $clasifications[i].iconStyle = 'ion-scissors';
                        break;
                    case 'TALLER MECANICO':
                        $clasifications[i].iconStyle = 'ion-wrench';
                        break;
                    case 'ESCUELAS DE MUSICA':
                        $clasifications[i].iconStyle = 'ion-ios-musical-note';
                        break;
                    case 'CLUB DEPORTIVO':
                        $clasifications[i].iconStyle = 'ion-ios-football';
                        break;
                    case 'GOBIERNO FEDERAL':
                        $clasifications[i].iconStyle = 'ion-ios-world-outline';
                        $clasifications[i].icon = 'museum.png';
                        break;
                    case 'TIENDAS DE ACCESORIOS PARA DAMA':
                        $clasifications[i].iconStyle = 'ion-bowtie';
                        break;
                    case 'TALLERES':
                        $clasifications[i].iconStyle = 'ion-wrench';
                        break;
                    case 'TALLER ELECTRICO':
                        $clasifications[i].iconStyle = 'ion-outlet';
                        break;
                    case 'TABLAROCA':
                        $clasifications[i].iconStyle = 'ion-hammer';
                        break;
                    case 'FABRICA DE ALIMENTOS':
                        $clasifications[i].iconStyle = 'ion-ios-nutrition';
                        break;
                    case 'FORRAJERAS':
                        $clasifications[i].iconStyle = 'ion-key';
                        break;
                    case 'CASAS DE EMPEÑO':
                        $clasifications[i].iconStyle = 'ion-cash';
                        break;
                    case 'AUTOPARTES':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        break;
                    case 'MATERIALES PARA CONSTRUCCION':
                        $clasifications[i].iconStyle = 'ion-settings';
                        $clasifications[i].icon = '';
                        break;
                    case 'VIDEOCENTRO':
                        $clasifications[i].iconStyle = 'ion-videocamera';
                        $clasifications[i].icon = '';
                        break;
                    case 'TRANSPORTES DE VALORES':
                        $clasifications[i].iconStyle = 'ion-cash';
                        break;
                    case 'CLINICAS DE BELLEZA':
                        $clasifications[i].iconStyle = 'ion-ios-color-wand';
                        break;
                    case 'MAQUINARIA PARA CONSTRUCCION':
                        $clasifications[i].iconStyle = 'ion-settings';
                        break;
                    case 'INSTALACIONES ELECTRICAS':
                        $clasifications[i].iconStyle = 'ion-outlet';
                        break;
                    case 'TELEFONIA':
                        $clasifications[i].iconStyle = 'ion-android-call';
                        break;
                    case 'INMOBILIARIAS':
                        $clasifications[i].iconStyle = 'ion-ios-home';
                        break;
                    case 'BIENES RAICES':
                        $clasifications[i].iconStyle = 'ion-ios-home';
                        break;
                    case 'RADIOCOMUNICACIONES':
                        $clasifications[i].iconStyle = 'ion-radio-waves';
                        $clasifications[i].icon = '';
                        break;
                    case 'PLOMERIA':
                        $clasifications[i].iconStyle = 'ion-settings';
                        $clasifications[i].icon = '';
                        break;
                    case 'CERRAJERIAS':
                        $clasifications[i].iconStyle = 'ion-key';
                        break;
                    case 'BOUTIQUES':
                        $clasifications[i].iconStyle = 'ion-bowtie';
                        break;
                    case 'INSTRUMENTOS MUSICALES':
                        $clasifications[i].iconStyle = 'ion-music-note';
                        break;
                    case 'HOJALATERIA Y PINTURA':
                        $clasifications[i].iconStyle = 'ion-paintbucket';
                        break;
                    case 'ELECTRICISTAS':
                        $clasifications[i].iconStyle = 'ion-outlet';
                        break;
                    case 'MOTOCICLETAS':
                        $clasifications[i].iconStyle = 'ion-android-bicycle';
                        break;
                    case 'LLANTERAS':
                        $clasifications[i].iconStyle = 'ion-disc';
                        break;
                    case 'BANQUETES':
                        $clasifications[i].iconStyle = 'ion-wineglass';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'DISCOS-BAR':
                        $clasifications[i].iconStyle = 'ion-beer';
                        break;
                    case 'CIRUJANOS PLASTICOS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'creditos':
                        $clasifications[i].iconStyle = 'ion-cash';
                        $clasifications[i].icon = 'banks.png';
                        break;
                    case 'CELULARES':
                        $clasifications[i].iconStyle = 'ion-iphone';
                        break;
                    case 'SISTEMAS DE ALARMAS':
                        $clasifications[i].iconStyle = 'ion-radio-waves';
                        break;
                    case 'AMBULANCIAS':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'BICICLETAS':
                        $clasifications[i].iconStyle = 'ion-android-bicycle';
                        break;
                    case 'CAFE Y MOLINOS':
                        $clasifications[i].iconStyle = 'ion-coffee';
                        break;
                    case 'TIENDAS DE REGALOS':
                        $clasifications[i].iconStyle = 'ion-bowtie';
                        break;
                    case 'COPIADORAS':
                        $clasifications[i].iconStyle = 'ion-printer';
                        $clasifications[i].icon = 'school.png';
                        break;
                    case 'PINTURAS':
                        $clasifications[i].iconStyle = 'ion-paintbucket';
                        break;
                    case 'TIENDAS DEPORTIVAS':
                        $clasifications[i].iconStyle = 'ion-ios-football';
                        break;
                    case 'CLINICAS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'FOTOGRAFIA':
                        $clasifications[i].iconStyle = 'ion-camera';
                        break;
                    case 'TURISMO':
                        $clasifications[i].iconStyle = 'ion-android-plane';
                        break;
                    case 'MOTEL':
                        $clasifications[i].iconStyle = 'ion-briefcase';
                        $clasifications[i].icon = 'hotel.png';
                        break;
                    case 'PRODUCTOS NUTRICIONALES':
                        $clasifications[i].iconStyle = 'ion-leaf';
                        break;
                    case 'INGENIERIA AMBIENTAL':
                        $clasifications[i].iconStyle = 'ion-earth';
                        break;
                    case 'CHATS':
                        $clasifications[i].iconStyle = 'ion-ios-chatboxes';
                        break;
                    case 'LIBRERIAS':
                        $clasifications[i].iconStyle = 'ion-ios-book-outline';
                        break;
                    case 'MADERERIAS':
                        $clasifications[i].iconStyle = 'ion-settings';
                        break;
                    case 'MATERIALES ELECTRICOS':
                        $clasifications[i].iconStyle = 'ion-arrow-graph-up-right';
                        break;
                    case 'AGENCIAS DE MOTOCICLETAS':
                        $clasifications[i].iconStyle = 'ion-android-bicycle';
                        break;
                    case 'MATERIAL DIDACTICO':
                        $clasifications[i].iconStyle = 'ion-ios-book-outline';
                        break;
                    case 'MATERIAL PARA CURACIONES':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'EQUIPO MEDICO Y QUIRURGICO':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'PORTALES DE INTERNET':
                        $clasifications[i].iconStyle = 'ion-wifi';
                        break;
                    case 'MATERIAL QUIRURGICO':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'TALLER':
                        $clasifications[i].iconStyle = 'ion-settings';
                        break;
                    case 'CLUBES DEPORTIVOS':
                        $clasifications[i].iconStyle = 'ion-ios-football';
                        break;
                    case 'SISTEMAS CONTRA INCENDIO':
                        $clasifications[i].iconStyle = 'ion-flame';
                        break;
                    case 'COMIDA RAPIDA':
                        $clasifications[i].iconStyle = 'ion-pizza';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'SNACKS':
                        $clasifications[i].iconStyle = 'ion-pizza';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'LAVADO DE AUTOS':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        break;
                    case 'REFACCIONARIA':
                        $clasifications[i].iconStyle = 'ion-settings';
                        break;
                    case 'DESCARGAS':
                        $clasifications[i].iconStyle = 'ion-android-arrow-down';
                        break;
                    case 'INFORMACION':
                        $clasifications[i].iconStyle = 'ion-information';
                        break;
                    case 'POLLOS':
                        $clasifications[i].iconStyle = 'ion-android-restaurant';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'ARTICULOS DE BELLEZA':
                        $clasifications[i].iconStyle = 'ion-ios-color-wand';
                        break;
                    case 'ESTETICAS INFANTILES':
                        $clasifications[i].iconStyle = 'ion-scissors';
                        break;
                    case 'COMUNICACIONES':
                        $clasifications[i].iconStyle = 'ion-speakerphone';
                        break;
                    case 'PROFESORES':
                        $clasifications[i].iconStyle = 'ion-ios-book-outline';
                        $clasifications[i].icon = 'school.png';
                        break;
                    case 'EXTINGUIDORES':
                        $clasifications[i].iconStyle = 'ion-flame';
                        break;
                    case 'PORTALS DE INTERNET':
                        $clasifications[i].iconStyle = 'ion-earth';
                        break;
                    case 'TALLERES MECANICOS INDUSTRIALES':
                        $clasifications[i].iconStyle = 'ion-settings';
                        break;
                    case 'CAFETERIAS':
                        $clasifications[i].iconStyle = 'ion-coffee';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'TELEVISION':
                        $clasifications[i].iconStyle = 'ion-monitor';
                        break;
                    case 'TIENDA NATURISTA':
                        $clasifications[i].iconStyle = 'ion-leaf';
                        break;
                    case 'PLOMERIAS, FERRETERIAS Y ELECTRICIDAD':
                        $clasifications[i].iconStyle = 'ion-settings';
                        break;
                    case 'RESTAURANTES COCINA CHINA':
                        $clasifications[i].iconStyle = 'ion-android-restaurant';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'CLINICA':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'RENTA DE AUTOS':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        break;
                    case 'INSTITUCIONES DE CREDITO':
                        $clasifications[i].iconStyle = 'ion-cash';
                        $clasifications[i].icon = 'banks.png';
                        break;
                    case 'CLINICAS DENTALES':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'VINOS Y LICORES':
                        $clasifications[i].iconStyle = 'ion-wineglass';
                        break;
                    case 'VIDEOFILMACIONES':
                        $clasifications[i].iconStyle = 'ion-videocamera';
                        break;
                    case 'CAMARAS NACIONALES':
                        $clasifications[i].iconStyle = 'ion-videocamera';
                        break;
                    case 'COMIDAS':
                        $clasifications[i].iconStyle = 'ion-android-restaurant';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'DESARROLLO DE SOFTWARE':
                        $clasifications[i].iconStyle = 'ion-wifi';
                        break;
                    case 'CLINICAS NATURISTAS':
                        $clasifications[i].iconStyle = 'ion-leaf';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'TALLERE MECANICO':
                        $clasifications[i].iconStyle = 'ion-wrench';
                        break;
                    case 'PARQUES':
                        $clasifications[i].iconStyle = 'ion-leaf';
                        break;
                    case 'ZOOLOGICOS':
                        $clasifications[i].iconStyle = 'ion-ios-paw';
                        break;
                    case 'PERIODICOS ELECTRONICOS':
                        $clasifications[i].iconStyle = 'ion-android-wifi';
                        break;
                    case 'TIENDAS NATURISTAS':
                        $clasifications[i].iconStyle = 'ion-leaf';
                        break;
                    case 'COPIAS':
                        $clasifications[i].iconStyle = 'ion-printer';
                        break;
                    case 'ENERGIA SOLAR':
                        $clasifications[i].iconStyle = 'ion-android-sunny';
                        break;
                    case 'EXTINTORES':
                        $clasifications[i].iconStyle = 'ion-flame';
                        break;
                    case 'GOBIERNO FEDRAL':
                        $clasifications[i].iconStyle = 'ion-earth';
                        $clasifications[i].icon = 'museum.png';
                        break;
                    case 'NEVERIAS':
                        $clasifications[i].iconStyle = 'ion-icecream';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'HIERBERIAS':
                        $clasifications[i].iconStyle = 'ion-leaf';
                        break;
                    case 'PRODUCTOS ALIMENTICIOS':
                        $clasifications[i].iconStyle = 'ion-soup-can-outline';
                        break;
                    case 'PRODUCTOS QUIMICOS':
                        $clasifications[i].iconStyle = 'ion-erlenmeyer-flask';
                        break;
                    case 'TALLER DE ELECTRONICA':
                        $clasifications[i].iconStyle = 'ion-arrow-graph-up-right';
                        break;
                    case 'BARES Y DISCOS':
                        $clasifications[i].iconStyle = 'ion-radio-waves';
                        break;
                    case 'BIBLIOTECAS':
                        $clasifications[i].iconStyle = 'ion-ios-book-outline';
                        $clasifications[i].icon = 'school.png';
                        break;
                    case 'TIENDAS DE ACCESORIOS PARA DAMAS':
                        $clasifications[i].iconStyle = 'ion-bowtie';
                        break;
                    case 'ANIMALES':
                        $clasifications[i].iconStyle = 'ion-ios-paw';
                        break;
                    case 'CAFETERIA':
                        $clasifications[i].iconStyle = 'ion-coffee';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'VIDEO JUEGOS-PS3':
                        $clasifications[i].iconStyle = 'ion-playstation';
                        break;
                    case 'EQUIPOS DE SONIDOS':
                        $clasifications[i].iconStyle = 'ion-mic-b';
                        break;
                    case 'SONIDO':
                        $clasifications[i].iconStyle = 'ion-mic-b';
                        break;
                    case 'COSMETICOS':
                        $clasifications[i].iconStyle = 'ion-ios-color-wand';
                        break;
                    case 'GASOLINERA':
                        $clasifications[i].iconStyle = 'ion-waterdrop';
                        $clasifications[i].icon = 'gas-station.png';
                        break;
                    case 'ELECTRONICOS':
                        $clasifications[i].iconStyle = 'ion-iphone';
                        break;
                    case 'FINANCIERAS':
                        $clasifications[i].iconStyle = 'ion-social-usd';
                        $clasifications[i].icon = 'banks.png';
                        break;
                    case 'ACCESORIOS':
                        $clasifications[i].iconStyle = 'ion-bowtie';
                        break;
                    case 'DONADORES DE SANGRE':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'PRODUCTOS NATURALES':
                        $clasifications[i].iconStyle = 'ion-leaf';
                        break;
                    case 'PALAPAS':
                        $clasifications[i].iconStyle = 'ion-ios-partlysunny';
                        break;
                    case 'Ebanisteria y/o Carpinteria':
                        $clasifications[i].iconStyle = 'ion-settings';
                        break;
                    case 'AUTOS':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        break;
                    case 'SALONES DE BELLEZA':
                        $clasifications[i].iconStyle = 'ion-ios-color-wand';
                        break;
                    case 'VINOS':
                        $clasifications[i].iconStyle = 'ion-wineglass';
                        break;
                    case 'UNIVERSIDADES':
                        $clasifications[i].iconStyle = 'ion-university';
                        $clasifications[i].icon = 'school.png';
                        break;
                    case 'SALONES DE EVENTOS':
                        $clasifications[i].iconStyle = 'ion-ios-musical-notes';
                        break;
                    case 'REGALOS':
                        $clasifications[i].iconStyle = 'ion-social-dropbox';
                        break;
                    case 'KARAOKE':
                        $clasifications[i].iconStyle = 'ion-mic-c';
                        break;
                    case 'PRODUCTOS DE LIMPIEZA':
                        $clasifications[i].iconStyle = 'ion-ios-flask-outline';
                        break;
                    case 'TIENDAS DE ROPA':
                        $clasifications[i].iconStyle = 'ion-tshirt';
                        break;
                    case 'DISTRIBUIDORA DE REFRESCOS':
                        $clasifications[i].iconStyle = 'ion-ios-pint';
                        break;



                    case 'ACCESORIOS PARA AUTOMOVILES':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        break;
                    case 'NOTARIAS':
                        $clasifications[i].iconStyle = 'ion-briefcase';
                        break;
                    case 'AUTOLAVADOS':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        break;
                    case 'PINTACARITAS':
                        $clasifications[i].iconStyle = 'ion-paintbrush';
                        break;
                    case 'EQUIPO DE SONIDO, KARAOKE Y SHOW DE LUCES.':
                        $clasifications[i].iconStyle = 'ion-mic-b';
                        break;
                    case 'FIESTAS  INFANTILES':
                        $clasifications[i].iconStyle = 'ion-music-note';
                        break;
                    case 'acuario':
                        $clasifications[i].iconStyle = 'ion-waterdrop';
                        break;
                    case 'AGUA PURIFICADA':
                        $clasifications[i].iconStyle = 'ion-waterdrop';
                        break;
                    case 'Computo':
                        $clasifications[i].iconStyle = 'ion-monitor';
                        break;
                    case 'MEDICINA Y PSICOLOGIA':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'RENTA DE SONIDOS':
                        $clasifications[i].iconStyle = 'ion-mic-b';
                        break;
                    case 'REPARACION DE COMPUTADORAS':
                        $clasifications[i].iconStyle = 'ion-android-settings';
                        break;
                    case 'AGENCIAS DE PUBLICIDAD':
                        $clasifications[i].iconStyle = '';
                        $clasifications[i].icon = '';
                        break;
                    case 'RADIOLOGIAS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'EQUIPOS Y MATERIALES CLINICOS':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'MATERIAL DIDACTICO  EDUCATIVO':
                        $clasifications[i].iconStyle = 'ion-ios-bookmarks-outline';
                        $clasifications[i].icon = 'school.png';
                        break;
                    case 'JARDINEROS':
                        $clasifications[i].iconStyle = 'ion-leaf';
                        break;
                    case 'FOTOGRAFIAS':
                        $clasifications[i].iconStyle = 'ion-camera';
                        break;
                    case 'VENTA Y RENTA DE EQUIPO MEDICO':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'AGENCIA DE VIAJES':
                        $clasifications[i].iconStyle = 'ion-android-plane';
                        break;
                    case 'VIDEOS FILMACIONES':
                        $clasifications[i].iconStyle = 'ion-videocamera';
                        break;
                    case 'VENTA DE PLANTAS':
                        $clasifications[i].iconStyle = 'ion-videocamera';
                        break;
                    case 'BARES':
                        $clasifications[i].iconStyle = 'ion-videocamera';;
                        break;
                    case 'SUPERMERCADOS':
                        $clasifications[i].iconStyle = 'ion-android-cart';
                        break;
                    case 'ENDODONCISTAS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'PAPELERIA':
                        $clasifications[i].iconStyle = 'ion-ios-paper-outline';
                        break;
                    case 'AAA':
                        $clasifications[i].iconStyle = 'ion-help-buoy';
                        break;
                    case 'TRANSPORTES':
                        $clasifications[i].iconStyle = 'ion-android-bus';
                        break;
                    case 'CONTABILIDAD, DEFENSA FISCAL, ADMINISTRACION Y FINANZAS':
                        $clasifications[i].iconStyle = 'ion-briefcase';
                        break;
                    case 'HAMBURGUESAS':
                        $clasifications[i].iconStyle = 'ion-android-restaurant';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'CONSULTORIOS NUTRIOLOGO':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'TELEFONOS DE EMERGENCIA ADMINISTRACION POSTAL':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA POLICIA MINISTERIAL':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA CENTRO DE EMERGENCIAS':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA CENTRO ESTATAL DE TRANSFUSION SANGUINEA':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA COMISION FEDERAL DE ELECTRICIDAD':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'CORREOS':
                        $clasifications[i].iconStyle = 'ion-email';
                        break;
                    case 'ESTACION DE BOMBEROS':
                        $clasifications[i].iconStyle = 'ion-fireball';
                        break;
                    case 'TELEFONOS DE EMERGENCIA':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA CENTROS DE INTEGRACION':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA NEUROTICOS ANONIMOS':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA INCENDIOS FORESTALES':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS EMERGENCIAS LOCATEL':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS EMERGENCIAS IMSS ORIENTACION':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS EMERGENCIAS IMSS':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS EMERGENCIAS POLICIA FEDERAL':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'PROCURADURIA FEDERAL DEL CONSUMIDOR':
                        $clasifications[i].iconStyle = 'ion-ios-world-outline';
                        break;
                    case 'TELEFONOS DE EMERGENCIA SECRETARIA DE MARINA ARMADA DE MEXICO':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'TELEFONOS DE EMERGENCIA SECRETARIA DE SEGURIDAD Y VIALIDAD':
                        $clasifications[i].iconStyle = 'ion-help';
                        break;
                    case 'PREPARATORIA':
                        $clasifications[i].iconStyle = 'ion-university';
                        $clasifications[i].icon = 'school.png';
                        break;
                    case 'RETA DE KARAOKE':
                        $clasifications[i].iconStyle = 'ion-mic-b';
                        break;
                    case 'DEPARTAMENTOS':
                        $clasifications[i].iconStyle = 'ion-home';
                        break;
                    case 'PREPARATORIAS':
                        $clasifications[i].iconStyle = 'ion-university';
                        $clasifications[i].icon = 'school.png';
                        break;
                    case 'SECRETARIAS':
                        $clasifications[i].iconStyle = 'ion-briefcase';
                        $clasifications[i].icon = 'museum.png';
                        break;
                    case 'MANTENIMIENTO':
                        $clasifications[i].iconStyle = 'ion-settings';
                        break;
                    case 'ESCUELAS DE INGLES':
                        $clasifications[i].iconStyle = 'ion-university';
                        $clasifications[i].icon = 'school.png';
                        break;
                    case 'MEDICOS ALERGOLOGOS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'CENTRO MEDICO':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'DOCTORES HOMEOPATAS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'DOCTORES INTERNISTAS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'DOCTORES ESPECIALISTAS NEUMOLOGOS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'MEDICOS VETERINARIOS':
                        $clasifications[i].iconStyle = 'ion-ios-paw';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'CENTROS DE SALUD':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'LENTES':
                        $clasifications[i].iconStyle = 'ion-ios-glasses';
                        break;
                    case 'Radio por internet y Paginas Web':
                        $clasifications[i].iconStyle = 'ion-android-wifi';
                        break;
                    case 'MEDICOS VETERINARIOS ZOOTERNISTAS':
                        $clasifications[i].iconStyle = 'ion-ios-paw';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'COMEDIANTES':
                        $clasifications[i].iconStyle = 'ion-happy-outline';
                        break;
                    case 'HOSPITALES SANATORIOS Y CLINICAS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'COMIDA':
                        $clasifications[i].iconStyle = 'ion-android-restaurant';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'telefonia celular':
                        $clasifications[i].iconStyle = 'ion-android-call';
                        break;
                    case 'SERVICIOS PARA HOSPITALES':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'Restaurante':
                        $clasifications[i].iconStyle = 'ion-android-restaurant';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'Pasteleria':
                        $clasifications[i].iconStyle = 'ion-android-restaurant';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'CRUZ ROJA':
                        $clasifications[i].iconStyle = 'ion-medkit';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'regalos y novedades':
                        $clasifications[i].iconStyle = 'ion-bowtie';
                        break;
                    case 'fiestas y eventos':
                        $clasifications[i].iconStyle = 'ion-music-note';
                        break;
                    case 'RENTA DE CUBOS':
                        $clasifications[i].iconStyle = 'ion-cube';
                        break;
                    case 'informatica':
                        $clasifications[i].iconStyle = 'ion-ios-world-outline';
                        break;
                    case 'ALQUILER DE AUTOS':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        break;
                    case 'VEHICULOS Y ACCESORIOS':
                        $clasifications[i].iconStyle = 'ion-android-car';
                        break;
                    case 'ROPA INFANTIL':
                        $clasifications[i].iconStyle = 'ion-tshirt';
                        break;
                    case 'cubos':
                        $clasifications[i].iconStyle = 'ion-cube';
                        break;
                    case 'SALONES DE FIESTAS':
                        $clasifications[i].iconStyle = 'ion-music-note';
                        break;
                    case 'TIENDAS':
                        $clasifications[i].iconStyle = 'ion-android-cart';
                        $clasifications[i].icon = '';
                        break;
                    case 'SONIDO Y AUDIO':
                        $clasifications[i].iconStyle = 'ion-mic-b';
                        break;
                    case 'financiera prestamos dinero':
                        $clasifications[i].iconStyle = 'ion-cash';
                        $clasifications[i].icon = 'banks.png';
                        break;

                    case 'TELEGRAFOS':
                        $clasifications[i].iconStyle = 'ion-email';
                        break;
                    case 'comida fresca':
                        $clasifications[i].iconStyle = 'ion-android-restaurant';
                        $clasifications[i].icon = 'restaurant.png';
                        break;
                    case 'Naturista':
                        $clasifications[i].iconStyle = 'ion-leaf';
                        break;
                    case 'COMUNIDADES RELIGIOSAS':
                        $clasifications[i].iconStyle = 'ion-ios-flower';
                        $clasifications[i].icon = 'church.png';
                        break;
                    case 'AUTOFINANCIAMIENTOS':
                        $clasifications[i].iconStyle = 'ion-cash';
                        break;
                    case 'CLIMA':
                        $clasifications[i].iconStyle = 'ion-ios-partlysunny';
                        break;
                    case 'CONSULADOS':
                        $clasifications[i].iconStyle = 'ion-earth';
                        $clasifications[i].icon = 'museum.png';
                        break;
                    case 'GUIAS TURISTICOS':
                        $clasifications[i].iconStyle = 'ion-android-plane';
                        break;
                    case 'ROPA':
                        $clasifications[i].iconStyle = 'ion-tshirt';
                        break;
                    case 'FABRICAS DE CAMISAS':
                        $clasifications[i].iconStyle = 'ion-tshirt';
                        break;
                    case 'COSTURERIAS':
                        $clasifications[i].iconStyle = 'ion-tshirt';
                        break;
                    case 'DESPACHOS CONTABLES':
                        $clasifications[i].iconStyle = 'ion-briefcase';
                        break;
                    case 'TERAPIAS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        break;
                    case 'SERVICIOS DE LIMPIEZA':
                        $clasifications[i].iconStyle = 'ion-ios-flask-outline';
                        break;
                    case 'VIDEOCLUBS':
                        $clasifications[i].iconStyle = 'ion-ios-film';
                        break;
                    case 'EQUIPO DE SEGURIDAD':
                        $clasifications[i].iconStyle = 'ion-android-lock';
                        break;
                    case 'DENTISTAS':
                        $clasifications[i].iconStyle = 'ion-ios-pulse-strong';
                        $clasifications[i].icon = 'hospital.png';
                        break;
                    case 'PELUQUERIAS':
                        $clasifications[i].iconStyle = 'ion-scissors';
                        break;
                    case 'MOTELES':
                        $clasifications[i].iconStyle = 'ion-briefcase';
                        $clasifications[i].icon = 'hotel.png';
                        break;
                    default:
                        $clasifications[i].iconStyle = 'ion-information';
                        break;
                }
            }

            defered.resolve($clasifications);
            return promise;
        }

    }]);

})();