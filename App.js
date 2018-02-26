//import stuff
import React from 'react';
import {View,Text,TextInput,Button,Alert,AppRegistry,StyleSheet} from 'react-native';


//create stuff
class App extends React.Component{
  state = {
    text: "",
    todo: []

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
  render(){
    return(
      <View style={styles.viewStyle}>
        <Text style ={styles.header}>Type to add a To-Do and Tap to remove</Text>
        <TextInput
          style={styles.inputStyle}
          onChangeText={(text)=>this.setState({text})}
          value = {this.state.text}
        />
       <Button
        title="Add a To-Do"
        color = "green"
        onPress={this.addTodo}
       />
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
    color: 'green',
    fontWeight: 'bold'
  },
  ReturnedToDos:{
    margin: 5
  }
}

//export stuff
export default App;