import React from 'react';
import {View,Text,TextInput,Button,Alert,AppRegistry,StyleSheet,TouchableOpacity} from 'react-native';

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
      return (
      <TouchableOpacity key={t}>
        <Text style={styles.ReturnedToDos}
        onPress={()=>this.removeTodo(t)}
        >{t}</Text>
        </TouchableOpacity>
        )
    })
  }
  render(){
    return(
      <View style={styles.wholeStyle}>
        <View style={styles.viewStyle}>
          <Text style ={styles.header}>Type to add a To-Do and Tap to remove</Text>
          <TextInput
            style={styles.inputStyle}
            onChangeText={(text)=>this.setState({text})}
            value = {this.state.text}
          />
        <Button
          title="Add a To-Do"
          color = "#650288"
          onPress={this.addTodo}
        />
        {this.renderTodos()}
        </View>
      </View>
      )
  }
}

const styles = {
  wholeStyle:{
    backgroundColor: 'skyblue',
    flex:1
  },
  viewStyle: {
    marginTop: 45,
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
    color: '#650288',
    fontWeight: 'bold'
  },
  ReturnedToDos:{
    margin: 5,
    fontSize: 15,
    color:'#650288'
  }
}

//export stuff
export default App;