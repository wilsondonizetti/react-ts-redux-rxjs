import React, {Component} from 'react';
import {Observable, BehaviorSubject} from 'rxjs';

export default class FirstComponent extends Component {
  constructor(props){
    super(props);

    this.state = {
      itens: new BehaviorSubject([]),
      lastId: 0
    };

    subscriberItens: BehaviorSubject;
  }

  add = (msg)=>{ 
    let itens = this.state.itens;
    let id = this.state.lastId +1;
    if(msg === '' || msg === null || msg === undefined)
      msg = `Teste ${id}`;
    let values = itens.value;
    values.push({ id: id, description: msg});
    itens.next(values);
    this.setState({itens: itens, lastId: id}); 
  };

  componentDidMount(){
    this.subscriberItens = this.state.itens.subscribe((msg)=> console.log(msg));

    setTimeout(()=> this.add('teste'), 1000);
    setTimeout(()=> this.add('teste 2'), 2000);
    setTimeout(()=> this.add('teste 3'), 3000);
    setTimeout(()=> this.add('teste 4'), 4000);
    setTimeout(()=> this.add('teste 5'), 5000);
  }

  componentWillUnmount(){
    this.subscriberItens.unsubscribe();
  }

   render(){
     return(
       <div className="row">
          <h2>Teste de componente {this.props.teste}</h2>
          <button type="button" className="btn btn-primary" onClick={()=> console.log('state', this.state.itens)}>State</button>&nbsp;
          <button type="button"  className="btn" onClick={()=>this.add('')}>Add</button>
          <p>{this.state.itens.value.length} elements at List</p>
          <ul>
          {
            this.state.itens.value.map((item)=> {
              return (<li key={item.id}><span>{item.description}</span></li>);
            })
          }
          </ul>
       </div>);
  };
}