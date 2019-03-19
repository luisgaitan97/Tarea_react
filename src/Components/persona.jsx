import React, { Component } from 'react';
import  ListadoPersonas  from './../services/personasServices';

class persona extends Component {
    state = {  datos: ListadoPersonas()};
    
handlerEliminar= personas =>
    {
    const datos = this.state.datos.filter(p=> p.id !==personas.id);
    this.setState({datos});
    };

handlerAgregar=()=>
    {
    const nuevo={
        id:Math.random()*1000,
        nombre:'Luis Fabian',
        apellido:'Perez Gaitan',
        Deporte:'Ajedrez',
        Municipio:'Nandasmo',
        Estado:true};

    const datos=this.state.datos;
    datos.push(nuevo);
    this.setState({datos});
    }

render() { 
    
return ( <div className="container">
<button onClick={this.handlerAgregar} className="btn btn-success">agregar personas</button>
<br />
<ul className="list-group ">{this.state.datos.map(personas => ( 
<li key={personas.id} className="list-group-items d-flex justify-content-between align-items-center " > 
</li>
)
)
}
</ul>
<div class="table-responsive">
 <table class="table table-striped table-sm">
                      
    <thead>
        <tr>
        <th>Identificador</th>
        <th>Nombres</th>
        <th>Apellidos</th>
        <th>Deporte</th>
        <th>Municipio</th>
        <th>Opciones </th>                        
        </tr>
        </thead>
    <tbody>
{this.state.datos.map(personas =>(
        <tr>
        <th>{personas.id}</th>
        <th>{personas.nombres}</th>
        <th>{personas.apellidos}</th>
        <th>{personas.Deporte}</th>
        <th>{personas.Municipio}</th>
        <th ><button onClick={()=>this.handlerEliminar(personas)} className="btn btn-danger btn-sm">eliminar</button></th>
       </tr>
))}
</tbody>
</table>
</div>
</div> 
)
}
} export default persona;