import React, {Component} from 'react';


class FilterMarker extends Component{

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
            markerGlass: [],
            markerPaperboard: [],
            markerPlastics: [],
            markerTechnology: [],
            markerGender: [],
            
        }
        this.showGlassMarker=this.showGlassMarker.bind(this);
        this.showPaperboardMarker=this.showPaperboardMarker.bind(this);
        this.showPlasticsMarker=this.showPlasticsMarker.bind(this);
        this.showTechonologyMarker=this.showTechonologyMarker.bind(this);
        this.showGenderMarker=this.showGenderMarker.bind(this);
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
                        var container = new window.H.map.Group({objects: [circle]});
                        this.map.addObject(container);

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
                let genderPosition = data.results.filter(gender => {
                        return gender.position;
                    })
                        return genderPosition;
                    })
                    .then(data => {
                        this.setState({
                        ...this.state,
                        markerGender: data, 
                        }, 
                            
                        )})                
        }

    showGlassMarker() {
        //aqui hay que limpiar el mapa
        this.state.markerGlass.forEach(glass => {
            let marker = new  window.H.map.Marker({lat: glass.position[0], lng: glass.position[1]})
            this.map.addObject(marker);
        });
        this.setState({
            ...this.state,
            markerGlass: [],
            
        })
    }

    showPaperboardMarker() {
        //aqui hay que limpiar el mapa
        this.state.markerPaperboard.forEach(paperboard => {
            let marker = new  window.H.map.Marker({lat: paperboard.position[0], lng: paperboard.position[1]})
            this.map.addObject(marker);
        });
        this.setState({
            ...this.state,
            markerPaperboard: []
        })
    }

    showPlasticsMarker() {
        this.state.markerPlastics.forEach(plastics => {
            let marker = new  window.H.map.Marker({lat: plastics.position[0], lng: plastics.position[1]})
            this.map.addObject(marker);
        });

        this.setState({
            ...this.state,
            markerPlastics: []
        })
    }

    showTechonologyMarker() {
        this.state.markerTechnology.forEach(technology => {
            let marker = new  window.H.map.Marker({lat: technology.position[0], lng: technology.position[1]})
            this.map.addObject(marker);
        });

        this.setState({
            ...this.state,
            markerTechnology: []
        })
    }

    showGenderMarker() {
        this.state.markerGender.forEach(gender => {
            let marker = new  window.H.map.Marker({lat: gender.position[0], lng: gender.position[1]})
            this.map.addObject(marker);
        });
        this.setState({
            ...this.state,
            markerGender: []
        })
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
                <div>
                <button onClick={this.showPaperboardMarker}>Carton</button>
                <button onClick={this.showPlasticsMarker}>Pásticos</button>
                <button onClick={this.showGlassMarker} >Vidrios</button>
                <button onClick={this.showTechonologyMarker}>Teconogía</button>
                <button onClick={this.showGenderMarker}>Textil</button>
            </div>
            <div id = "here-map"
                style = {{ width: '360px', height: '640px', background: 'grey'}}
            />
            
            </div>
        )
    }
}
export default FilterMarker;