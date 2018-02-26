//imported things
import React from 'react';
import {View,Text,TextInput,Button,Alert,AppRegistry,StyleSheet} from 'react-native';


//functions 
class App extends React.Component{
  state = {
    text: "",
    t
  }
  addTodo = () =>{
    var newTodo = this.state.text;
    var arr = this.state.todo;
    arr.push(newTodo);
    this.setState({todo: arr,text: ""});
    Alert.alert("Added item to To-Do list!");
  }
  removeTodo = (t) =>{
    var arr = this.state.todo;
    var pos = arr.indexOf(t);
    arr.splice(pos,1);
    this.setState({todo: arr});
  }
  renderTodos = () =>{
    return this.state.todo.map(t=>{
      return (<Text style={styles.ReturnedToDos} 
        key={t}
        onPress={()=>this.removeTodo(t)}
        >{t}</Text>
        )
    })
  }
  //rendering of app components
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text style ={styles.header}>Type to add a To-Do and Tap to remove</Text>
        {/*Takes user input and saves what user types inside array once button is clicked.*/}
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
          value = {this.state.text}
        />
      {/* Adds items to array.*/}
       <Button
        title="Add a To-Do"
        color = "#650288"
        onPress={this.addTodo}
       />
       {/* Renders array below the button that adds them.*/}
       {this.renderTodos()}
      </View>
      )
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'skyblue'
  },
  inputStyle:{
    height: 40,
    alignSelf: "stretch",
    borderColor: "skyblue",
    margin: 5,
    borderWidth: 3
  },
  header:{
    fontSize: 20,
    color: "#650288",
    fontWeight: 'bold'
  },
  ReturnedToDos:{
    margin: 5
  }
}
//exported 
export default App;