import React, {Component} from 'react';
// import PropTypes from 'prop-types';

class Map extends Component {

    constructor(props) {
        super(props);

        this.platform = null;
        this.map = null;

        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            position: null,
            zoom: props.zoom,
            map: null,
            image: props.image,
            style: props.style,
        }
    }

    getPlatform() {
        
        return new window.H.service.Platform(this.state);
    }

    getMap(container, layers, settings) {
        return new window.H.Map(container, layers, settings);
    }

    getEvents(map) {
        return new window.H.mapevents.MapEvents(map);
    }

    getUI(map, layers) {
        return new window.H.ui.UI.createDefault(map, layers);
       
    }
    

    componentDidMount() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.map.setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                (error) => this.setState({
                    error: error.message
                })
            );
        }
        //aqui se llaman todos los estados
        this.platform = this.getPlatform();
        

        //aqui se configura el tipo de mapa
        var layers = this.platform.createDefaultLayers();

        //con element renderizamos el mapa
        var element = document.getElementById('here-map');

        //muestra mapa de acuerdo a mi ubicacion
        this.map = this.getMap(element, layers.normal.map, {
            center: this.state.center,
            zoom: this.state.zoom,
        }); 

        //con esto puedo hacer zoom 
        new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(this.map));
      
       this.getUI(this.map, layers);
        this.setState({
            ...this.state,
            map: this.map
        });



  
  // Crear los parámetros para la solicitud de enrutamiento.:
  const routingParameters = {
    // El modo de enrutamiento:
    'mode': 'fastest;car', 
    // El punto de partida de la ruta:
    'waypoint0': 'geo!-33.44922637939453,-70.6505355834961',
    // El punto final de la ruta.:
    'waypoint1': 'geo!-33.4190702,-70.6418162',
    // Para recuperar la forma de la ruta, elegimos el modo de representación de ruta 'display'
    'representation': 'display'
  };

  const routingParameters1 = {
    // El modo de enrutamiento:
    'mode': 'fastest;pedestrian', 
    // El punto de partida de la ruta:
    'waypoint0': 'geo!-33.44922637939453,-70.6505355834961',
    // El punto final de la ruta.:
    'waypoint1': 'geo!-33.4190702,-70.6418162',
    // Para recuperar la forma de la ruta, elegimos el modo de representación de ruta 'display'
    'representation': 'display'
  };

//   const routingParameters2 = {
//     // El modo de enrutamiento:
//     'mode': 'fastest;carHOV', 
//     // El punto de partida de la ruta:
//     'waypoint0': 'geo!-33.44922637939453,-70.6505355834961',
//     // El punto final de la ruta.:
//     'waypoint1': 'geo!-33.4190702,-70.6418162',
//     // Para recuperar la forma de la ruta, elegimos el modo de representación de ruta 'display'
//     'representation': 'display'
//   };
 
  
  // Definir una función de devolución de llamada para procesar la respuesta de enrutamiento.:
  let onResult = (result) =>  {
    var route,
      routeShape,
      startPoint,
      endPoint,
      linestring;
    if(result.response.route) {
    // Escoge la primera ruta de la respuesta:
    route = result.response.route[0];
    // Elige la forma de la ruta:
    routeShape = route.shape;
  
    // Cree una serie lineal para usar como fuente puntual para la línea de ruta
    linestring = new window.H.geo.LineString();
  
    // Empuje todos los puntos en la forma en la cadena lineal:
    routeShape.forEach((point) => {
      let parts = point.split(',');
      linestring.pushLatLngAlt(parts[0], parts[1]);
    });
  
    // Recupere las posiciones mapeadas de los puntos de ruta solicitados:
    startPoint = route.waypoint[0].mappedPosition;
    endPoint = route.waypoint[1].mappedPosition;
  
    // Crea una polilínea para mostrar la ruta.:
    let routeLine = new window.H.map.Polyline(linestring, {
      style: { strokeColor: 'green', lineWidth: 6 },
      arrows: { fillColor: 'white', frequency: 2, width: 0.8, length: 0.7 }
    });
  
    // Crea un marcador para el punto de inicio::
    let startMarker = new window.H.map.Marker({
      lat: startPoint.latitude,
      lng: startPoint.longitude
    });
  
    // Crear un marcador para el punto final:
    let endMarker = new window.H.map.Marker({
      lat: endPoint.latitude,
      lng: endPoint.longitude
    });
  
    // Agrega la polilínea de la ruta y los dos marcadores al mapa
    this.map.addObjects([routeLine, startMarker, endMarker]);
  
    // Configure la ventana gráfica del mapa para que toda la ruta sea visible.:
    this.map.setViewBounds(routeLine.getBounds());
    }
  };
  
  // Configure la ventana gráfica del mapa para que toda la ruta sea visible.
  let router = this.platform.getRoutingService();
  
  // Llame a CalculateRoute () con los parámetros de enrutamiento, la devolución de llamada y una función de devolución de llamada de error (llamada si se produce un error de comunicación):
  
  router.calculateRoute(routingParameters, onResult,
    (error) => {
      alert(error.message);
    });

    router.calculateRoute(routingParameters1, onResult,
        (error) => {
          alert(error.message);
        });
    
    // router.calculateRoute(routingParameters2, onResult,
    //         (error) => {
    //           alert(error.message);
    //         });
   
//     var svgMarkup = '<svg width="24" height="24" ' +
//   'xmlns="http://www.w3.org/2000/svg">' +
//   '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
//   'height="22" /><text x="12" y="18" font-size="12pt" ' +
//   'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
//   'fill="white">H</text></svg>'


//   var icon = new window.H.map.Icon(svgMarkup),
//   coords = {lat: -33.446136087311324, lng: -70.64452567456583},
  
//   marker = new window.H.map.Marker(coords, {icon: icon});
//   console.log(Object.keys(coords))
//   ;
  
  
//   this.map.addObject(marker);
//   this.map.setCenter(coords);

function addMarkersToMap (map) {
    var svgMarkup = '<svg width="24" height="24" ' +
  'xmlns="http://www.w3.org/2000/svg">' +
  '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
  'height="22" /><text x="12" y="18" font-size="12pt" ' +
  'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
  'fill="white">H</text></svg>'
  var icon = new window.H.map.Icon(svgMarkup),

    coords = {lat:-33.446136, lng:-70.644526};
    var lugar1Marker = new window.H.map.Marker(coords, {icon: icon});
    map.addObject(lugar1Marker);
    
    let coords2 = {lat: -33.44123, lng: -70.64635};
    var lugar2Marker = new window.H.map.Marker(coords2, {icon: icon});
    map.addObject(lugar2Marker);

    let coords3 = {lat:-33.43448, lng:-70.651156};
    var lugar3Marker = new window.H.map.Marker(coords3, {icon: icon});
    map.addObject(lugar3Marker);
  
    let coords4 = {lat: -33.432474, lng: -70.657894};
    var lugar4Marker = new window.H.map.Marker(coords4, {icon: icon});
    map.addObject(lugar4Marker);
  
    let coords5 = {lat: -33.42977, lng: -70.64783};
    var lugar5Marker = new window.H.map.Marker(coords5, {icon:icon});
    map.addObject(lugar5Marker);
}

  addMarkersToMap(this.map);


    var stylePto = {
        fillColor: 'rgba(35, 51, 129, 0.3)',
        lineWidth: 5,
        strokeColor: 'rgba(114, 38, 51, 1)'
    };
    var circle = new window.H.map.Circle(
    new window.H.geo.Point(-33.4493132, -70.6503051), //center
    1000, // Radius in meters
    {stylePto: stylePto}
     );
     circle.setData('Circle');
     var container = new window.H.map.Group({
        objects: [circle]
      });
      this.map.addObject(container);
    

}

shouldComponentUpdate(props, state) {
    this.changeTheme(props.image, props.style);
    return false;
}

//Cree una instancia de MapTileService para solicitar mosaicos base (es decir, base.map.api.here.com
//aqui especificamos el estilo del mapa y como se mostrara
changeTheme(image, style) {
    var tiles = this.platform.getMapTileService({
        'type': 'base'
    });
    var layer = tiles.createTileLayer(
        'maptile',
        image,
        256,
        'png', {
            'style': 'flame'
        }
    );
    this.map.setBaseLayer(layer);
}

 render (){
    return (
        <div id = "here-map"
            style = {{ width: '360px', height: '640px', background: 'grey'}}
        />
    )
    }
}
    

export default Map;

