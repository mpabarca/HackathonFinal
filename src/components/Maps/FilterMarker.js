import React, {Component} from 'react';
import '../Navbar/Navbar.css';
import Button from 'react-bootstrap/Button';
import '../Footer/Footer.css';

class FilterMarker extends Component{

    constructor(props) {
        super(props);
        this.update=this.update.bind(this);
        this.updateOnclick=this.updateOnclick.bind(this);
        this.state = {
            app_id: props.app_id,
            app_code: props.app_code,
            position: null,
            zoom: props.zoom,
            map: null,
            image: props.image,
            style: props.style,
            markerGlass: [],
            markerPaperboard: [],
            markerPlastics: [],
            markerTechnology: [],
            markerTextile: [],
            objectsToEliminate1: [],
            

            
        }
        this.showGlassMarker=this.showGlassMarker.bind(this);
        this.showPaperboardMarker=this.showPaperboardMarker.bind(this);
        this.showPlasticsMarker=this.showPlasticsMarker.bind(this);
        this.showTechonologyMarker=this.showTechonologyMarker.bind(this);
        this.showTextileMarker=this.showTextileMarker.bind(this);
    }


    

    getPlatform() {return new window.H.service.Platform(this.state);}
    getMap(container, layers, settings) {return new window.H.Map(container, layers, settings);}
    getEvents(map) {return new window.H.mapevents.MapEvents(map);}
    getUI(map, layers) {return new window.H.ui.UI.createDefault(map, layers);}
    componentDidMount() {

        let getPosition = () => {
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
                        new window.H.geo.Point(position.coords.latitude, position.coords.longitude),1000,{stylePto: stylePto} );
                        circle.setData('Circle');
                        this.map.addObject(circle);

                    },
                    (error) => this.setState({
                        error: error.message
                    })
                );
            }
        };

        

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
        setTimeout(getPosition, 0);
        //con esto puedo hacer zoom 
        new window.H.mapevents.Behavior(new window.H.mapevents.MapEvents(this.map));
      
       this.getUI(this.map, layers);
        this.setState({
            ...this.state,
            map: this.map
        });
        
        
        fetch('https://places.cit.api.here.com/places/v1/autosuggest?at=-33.4190702,-70.6418162&q=vidrio&app_id=SqgXt9Xu4ZtrdyRXBAHw&app_code=4_H5feYpb2trd0PaEdD_bQ')
        .then(data => data.json())
        .then(data => {
            // console.log(data)
            let glassPosition = data.results.filter(glass => {
                return glass.position;
            })
            return glassPosition;
        })
        .then(data => {
            this.setState({
                ...this.state,
                markerGlass: data, 
            }, 
        
            )})

        
        fetch('https://places.cit.api.here.com/places/v1/autosuggest?at=-33.4190702,-70.6418162&q=carton&app_id=SqgXt9Xu4ZtrdyRXBAHw&app_code=4_H5feYpb2trd0PaEdD_bQ')
        .then(data => data.json())
        .then(data => {
            // console.log(data)
            let paperboardPosition = data.results.filter(paperboard => {
                return paperboard.position;
            })
            return paperboardPosition;
        })
        .then(data => {
            this.setState({
                ...this.state,
                markerPaperboard: data, 
            }, 
        
            )})
            

        fetch('https://places.cit.api.here.com/places/v1/autosuggest?at=-33.4190702,-70.6418162&q=plasticos&app_id=SqgXt9Xu4ZtrdyRXBAHw&app_code=4_H5feYpb2trd0PaEdD_bQ')
        .then(data => data.json())
                .then(data => {
                // console.log(data)
                let plasticsPosition = data.results.filter(plastics => {
                    return plastics.position;
                })
                return plasticsPosition;
            })
            .then(data => {
                this.setState({
                    ...this.state,
                    markerPlastics: data, 
                }, 
            
                )})

        fetch('https://places.cit.api.here.com/places/v1/autosuggest?at=-33.4190702,-70.6418162&q=tecnologia&app_id=SqgXt9Xu4ZtrdyRXBAHw&app_code=4_H5feYpb2trd0PaEdD_bQ')
                .then(data => data.json())
                        .then(data => {
                        // console.log(data)
                        let technologyPosition = data.results.filter(technology => {
                            return technology.position;
                        })
                        return technologyPosition;
                    })
                    .then(data => {
                        this.setState({
                            ...this.state,
                            markerTechnology: data, 
                        }, 
                    
                        )})
        
        fetch('https://places.cit.api.here.com/places/v1/autosuggest?at=-33.4190702,-70.6418162&q=genero&app_id=SqgXt9Xu4ZtrdyRXBAHw&app_code=4_H5feYpb2trd0PaEdD_bQ')
                .then(data => data.json())
                .then(data => {
                // console.log(data)
                let textilePosition = data.results.filter(textile => {
                        return textile.position;
                    })
                        return textilePosition;
                    })
                    .then(data => {
                        this.setState({
                        ...this.state,
                        markerTextile: data, 
                        }, 
                            
                        )})                
        }

    showGlassMarker() {
        this.map.removeObjects(this.state.objectsToEliminate1)
        let tempArray = []

        this.state.markerGlass.forEach(glass => {
            let marker = new  window.H.map.Marker({lat: glass.position[0], lng: glass.position[1]})
            this.map.addObject(marker);
            tempArray.push(marker);
            // add 'tap' event listener, that opens info bubble, to the group
            marker.addEventListener('tap', this.update.bind(this, glass), false);
        });
        this.setState({
            ...this.state,
            objectsToEliminate1: tempArray
        })
  
    }

    

    showPaperboardMarker() {
            this.map.removeObjects(this.state.objectsToEliminate1)
            let tempArray = []
        //aqui hay que limpiar el mapa
        this.state.markerPaperboard.forEach(paperboard => {
            let marker = new  window.H.map.Marker({lat: paperboard.position[0], lng: paperboard.position[1]})
            this.map.addObject(marker);
            tempArray.push(marker);
            // add 'tap' event listener, that opens info bubble, to the group
            marker.addEventListener('tap', this.update.bind(this, paperboard), false);
        });
        this.setState({
            ...this.state,
            objectsToEliminate1: tempArray 
        })
    }

    showPlasticsMarker() {
            this.map.removeObjects(this.state.objectsToEliminate1)
            let tempArray= [];

        this.state.markerPlastics.forEach(plastics => {
            let marker = new  window.H.map.Marker({lat: plastics.position[0], lng: plastics.position[1]})
            this.map.addObject(marker);
            tempArray.push(marker);
            // add 'tap' event listener, that opens info bubble, to the group
            marker.addEventListener('tap', this.update.bind(this, plastics), false);
        });

        this.setState({
            ...this.state,
            objectsToEliminate1: tempArray
        })
    }

    showTechonologyMarker() {
            this.map.removeObjects(this.state.objectsToEliminate1)
            let tempArray = []

            this.state.markerTechnology.forEach(technology => {
            let marker = new  window.H.map.Marker({lat: technology.position[0], lng: technology.position[1]})
            this.map.addObject(marker);

            tempArray.push(marker);
            // add 'tap' event listener, that opens info bubble, to the group
            marker.addEventListener('tap', this.update.bind(this, technology), false);
        });

        this.setState({
            ...this.state,
            objectsToEliminate1: tempArray
        })
    }

    showTextileMarker() {
        this.map.removeObjects(this.state.objectsToEliminate1)
        let tempArray = []


        this.state.markerTextile.forEach(textile => {
            let marker = new  window.H.map.Marker({lat: textile.position[0], lng: textile.position[1]})
            this.map.addObject(marker);
            tempArray.push(marker);

            // add 'tap' event listener, that opens info bubble, to the group
            marker.addEventListener('tap', this.update.bind(this, textile), false);
        });
        this.setState({
            ...this.state,
            objectsToEliminate1: tempArray
        })
    }

    update(info){
        this.props.update(['company' ,info]);
    }
    updateOnclick(e){
        e.preventDefault();
        this.props.updateOnclick(e.target.value);
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
            <div>
                <div className="navbarIcons">
                    <Button className="glassBtn " variant="outline-ligth" onClick={this.showGlassMarker}>
                        <img  className="Icon" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/vidrio-letra.png" />
                    </Button>
                    <Button className="glassBtn " variant="outline-ligth" onClick={this.showTextileMarker}>
                        <img  className="Icon" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/tela-letra.png" />
                    </Button>
                    <Button className="glassBtn " variant="outline-ligth" onClick={this.showPlasticsMarker}>
                        <img  className="Icon" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/plastico-letra.png" />
                    </Button>
                    <Button className="glassBtn " variant="outline-ligth" onClick={this.showPaperboardMarker}>
                        <img  className="Icon" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/papel-letra.png" />
                    </Button>
                    <Button className="glassBtn " variant="outline-ligth" onClick={this.showTechonologyMarker}>
                        <img  className="Icon" src="https://raw.githubusercontent.com/marianacarbonell/HackathonFinal/master/bocetos/celulares-letra.png" />
                    </Button>
                </div>
                <div id = "here-map"
                    style = {{ width: '360px', height: '590px', background: 'grey'}}
                />
                <button value="addCompany" onClick={this.updateOnclick} id="iconFooter"><i class="fas fa-plus-circle"></i></button>
            </div>
        )
    }
}
export default FilterMarker;