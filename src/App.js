import React, { Component } from 'react';
//import Layout from './components/Layout/Layout';
//import Burger from './containers/BurgerBuilder/BurgerBuilder';
import FoodJoint from './FoodJoint/FoodJoint';
import classes from './App.css';

class App extends Component {
  state={
    rList:[
      {id:1,name:"Behrouz Biryani",type:'North Indian',idealFor:'family'},
      {id:2,name:"Chawla Chicken",type:'Mughlai',idealFor:'friends'},
      {id:3,name:"Corner Bistro",type:'Chinese',idealFor:'dates'},
      {id:4,name:"Add Name",type:'Add Type',idealFor:'Add IdealFor'}
    ],
    showR:true,
    reserveObj:{id:4,name:"Add Name",type:'Add Type',idealFor:'Add IdealFor'}
  }
  deleteRHandler=(rIndex)=>{
    const rList=[...this.state.rList];
    rList.splice(rIndex,1);
    this.setState({rList:rList});
  }
  nameChangedHandler=(event,id)=>{
    const rIndex=this.state.rList.findIndex(r=>{
      return r.id===id;
    });
    const r={...this.state.rList[rIndex]};
    r.name=event.target.value.toLowerCase();
    const rList=[...this.state.rList];
    rList[rIndex]=r;
    this.setState({
      rList:rList
    })
  }
  typeChangedHandler=(event,id)=>{
    const rIndex=this.state.rList.findIndex(r=>{
      return r.id===id;
    })
    const r={...this.state.rList[rIndex]};
    r.type=event.target.value.toLowerCase();
    const rList=[...this.state.rList];
    rList[rIndex]=r;
    this.setState({
      rList:rList
    })
  }
  idealForChangedHandler=(event,id)=>{
    const rIndex=this.state.rList.findIndex(r=>{
      return r.id===id;
    })
    const r={...this.state.rList[rIndex]};
    r.idealFor=event.target.value.toLowerCase();
    const rList=[...this.state.rList];
    rList[rIndex]=r;
    this.setState({
      rList:rList
    })
  }
  toggleRHandler=()=>{
    const doesShow=this.state.showR;
    this.setState({showR:!doesShow});
  }
  addIntoRecords=(event,id)=>{
    const rList=[...this.state.rList];
    const reserveObj={...this.state.reserveObj}
    reserveObj.id=id+1;
    rList.push(reserveObj);
    this.setState({
      rList:rList,
      reserveObj:reserveObj
    })
  }
  render() {
    let rList=null;
    let pClasses=[classes.bold];
    let bClasses=[classes.Button];
    if(this.state.showR)
    {
      rList=(
        <div >
          {this.state.rList.map( (r,index)=>{
            if(index===this.state.rList.length-1)
            {
              return <FoodJoint 
                      key={r.id}
                      changedName={(event)=>this.nameChangedHandler(event,r.id)} 
                      changedType={(event)=>this.typeChangedHandler(event,r.id)}
                      changedIdealFor={(event)=>this.idealForChangedHandler(event,r.id)}
                      click={(event)=>this.addIntoRecords(event,r.id)}
                      name={r.name} 
                      type={r.type}
                      idealFor={r.idealFor}/>

            }
            else
            {
              return <FoodJoint 
                      key={r.id}
                      changedName={(event)=>this.nameChangedHandler(event,r.id)} 
                      changedType={(event)=>this.typeChangedHandler(event,r.id)}
                      changedIdealFor={(event)=>this.idealForChangedHandler(event,r.id)}
                      click={this.deleteRHandler} 
                      name={r.name} 
                      type={r.type}
                      idealFor={r.idealFor}/>
            }

          })}
        </div>
      )
      pClasses.push(classes.red);
      bClasses.push(classes.Red);
    }
    else
    {
      pClasses.push( classes.green);
      bClasses.push(classes.green);
    }
    let r=this.state.rList.length;
    pClasses.push(classes.pText);
    return (
      <div className="App">
        <div className={classes.bandp}>
        <button className={bClasses.join(' ')} onClick={this.toggleRHandler}><div className={classes.pText}>Toggle</div></button>
        <p className={pClasses.join(' ')}>DISPLAYING {r} AT THE MOMENT</p>
        </div>
        <div className={classes.sideBySide}>
          {rList}
        </div>
      </div>
      /*
      <div>
        <Layout>
          <Burger/>
        </Layout>
      </div>
      */
    );
  }
}

export default App;
