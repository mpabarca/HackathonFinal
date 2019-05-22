import React, {Component} from 'react';
import '../css/ownlocation.css';
import { runInThisContext } from 'vm';

class OwnLocation extends Component{

    constructor(props) {
        super(props);
        this.platform = null;
        this.map = null;
        this.update=this.update.bind(this);
        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            position: null,
            zoom: props.zoom,
            map: null,
            image: props.image,
            style: props.style,
            value:[]
        }
    }

    getPlatform() {return new window.H.service.Platform(this.state);}
    getMap(container, layers, settings) {return new window.H.Map(container, layers, settings);}
    getEvents(map) {return new window.H.mapevents.MapEvents(map);}
    getUI(map, layers) {return new window.H.ui.UI.createDefault(map, layers);}

    componentDidMount() {

        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    this.map.setCenter({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                    var ownMarker = new window.H.map.Marker({lat:position.coords.latitude, lng:position.coords.longitude});
                    (this.map).addObject(ownMarker);

                    var stylePto = {fillColor: 'rgba(35, 51, 129, 0.3)',lineWidth: 5,strokeColor: 'rgba(114, 38, 51, 1)'};
                    var circle = new window.H.map.Circle(
                    new window.H.geo.Point(position.coords.latitude, position.coords.longitude),500,{stylePto: stylePto} );
                    circle.setData('Circle');
                    var container = new window.H.map.Group({objects: [circle]});
                    this.map.addObject(container);
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
        this.setState({...this.state, map: this.map});
        // create default UI with layers provided by the platform
        var ui = window.H.ui.UI.createDefault(this.map, layers); 

        const addMarkerToGroup = (map, group, coord, html) => {
            var svgMarkup = '<svg width="24" height="24" ' +
            'xmlns="http://www.w3.org/2000/svg">' +
            '<rect stroke="white" fill="#1b468d" x="1" y="1" width="22" ' +
            'height="22" /><text x="12" y="18" font-size="12pt" ' +
            'font-family="Arial" font-weight="bold" text-anchor="middle" ' +
            'fill="white">H</text></svg>'
            var icon = new window.H.map.Icon(svgMarkup),
            marker = new window.H.map.Marker({lat:coord[0], lng:coord[1]}, {icon: icon});
            map.addObject(marker);

            // add custom data to the marker
            marker.setData(html);
            group.addObject(marker);
        }
        
        const addInfoBubble = (map, coord, name, key, update) => {
            var group = new window.H.map.Group();
            map.addObject(group);
            // add 'tap' event listener, that opens info bubble, to the group
            group.addEventListener('tap', update.bind(this, key), false);
            
            addMarkerToGroup(map, group, coord,
                "<div class='info-bubble'><p class='content-info-bubble'>"+name+"</p>" + 
                "<button value="+key+">Más info</button>")
        }
         Object.keys(this.props.listCompany).map(key=>(
            addInfoBubble(this.map, this.props.listCompany[key].located, this.props.listCompany[key].name,key,this.update)
          
        ));
        
    }

    update(key){
        
        this.props.update(this.props.listCompany[key]);
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
    render(){
        return(
            <div id = "here-map"
                style = {{ width: '360px', height: '640px', background: 'grey'}}
            />
        )
    }
}
export default OwnLocation;