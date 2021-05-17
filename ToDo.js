import React, { Component } from 'react';
import {StyleSheet,View, Text,TextInput,TouchableOpacity} from 'react-native'  
import Icon from 'react-native-vector-icons/FontAwesome';




class ToDo extends Component {
    constructor(){
        super();
        this.state={
            task:"",
            tasks:[{id:1,title:'React Lab 2 ',done:false},{id:2,title:'Grad Project',done:false},{id:1,title:'Rails Project',done:false}]
        }
    }
    addtask=()=>{
        let id=0;
        if(this.state.tasks.length!=0)
            id=this.state.tasks[this.state.tasks.length-1].id+1;

        let task={id:id,title:this.state.task,done:false};
        this.state.tasks.push(task);
        this.setState({tasks:this.state.tasks});
        console.log(this.state.task)

    }
    removetask=(id)=>{
        let index;
        for (var i=0; i < this.state.tasks.length; i++) {
            if (this.state.tasks[i].id === id) {
                index = i;
            }
        } 
        this.state.tasks.splice(index, 1);
        this.setState({tasks:this.state.tasks});
     
    }
    donetask=(id)=>{
        let index=0;
        for (var i=0; i < this.state.tasks.length; i++) {
            if (this.state.tasks[i].id === id) {
                index = i;
            }
        }
        this.state.tasks[index].done=true;
        this.setState({tasks:this.state.tasks}); 
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={{backgroundColor:'#FFEBCD',fontSize:30}}>My To-do List</Text>

               {this.state.tasks.length > 0 ?this.state.tasks.map((item)=>{
                
                if(item.done==false){

                 return  <View style={styles.task}> 
                <View   style={{
                        display: "flex",
                        flexDirection:"row",
                        justifyContent: "flex-start",
                        alignItems: "center"
                        }}   >
                        <Text style={{fontSize:20}}>{item.title}</Text>  
                        <View style={{   display: "flex",
                                        flexDirection:"row",
                                            marginLeft:150}}>
                            <Icon style={{fontSize:20}}
                                raised
                                name='check'
                                type='font-awesome'
                                color='green'
                                onPress={()=>this.donetask(item.id)} />
                            <Icon style={{fontSize:20}}
                                raised
                                name='close'
                                type='font-awesome'
                                color='red'
                                onPress={()=>this.removetask(item.id)} />    

                        </View> 
                </View>

                </View>
                }
                else{
                    return  <View style={styles.donetask}> 
                    <View   style={{
                            display: "flex",
                            flexDirection:"row",
                            justifyContent: "flex-start",
                            alignItems: "center"
                            }}   >
                            <Text style={{fontSize:20}}>{item.title}</Text>  
                            <View style={{   display: "flex",
                                            flexDirection:"row",
                                                marginLeft:150}}>
                                <Icon style={{fontSize:20}}
                                    raised
                                    name='check'
                                    type='font-awesome'
                                    color='green'
                                    onPress={()=>this.donetask(item.id)} />
                                <Icon style={{fontSize:20}}
                                    raised
                                    name='close'
                                    type='font-awesome'
                                    color='red'
                                    onPress={()=>this.removetask(item.id)} />    
    
                            </View> 
                    </View>
    
                    </View>
                }
            }):<Text>"No tasks yet"</Text>}


                <View   style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center"
                        }}   
                        className="m-1">
                    <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Enter New Task"
                    placeholderTextColor = "grey"
                    autoCapitalize = "none"
                    onChangeText = {(text) => this.setState({ task: text })}/>
                    <TouchableOpacity
                        style = {styles.submitButton}
                        onPress = {this.addtask}>
                        <Text style = {styles.submitButtonText}> Add </Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }

}

    export default ToDo;

    const styles = StyleSheet.create({
        container: {
            marginTop:100,
            padding: 15,
            backgroundColor:'#FFEBCD',
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 12,
            },
            shadowOpacity: 0.58,
            shadowRadius: 16.00,
            
            elevation: 24,
        },
        task:{
            backgroundColor:'#F8F8FF',
            margin:3,
            padding:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            
            elevation: 9,
        },
        donetask:{
            backgroundColor:'#90EE90',
            margin:3,
            padding:10,
            shadowColor: "#000",
            shadowOffset: {
                width: 0,
                height: 4,
            },
            shadowOpacity: 0.32,
            shadowRadius: 5.46,
            
            elevation: 9,
        },
        input: {
        borderColor: 'teal',
        borderWidth:5,
        width:300,
        padding:5
        },
        submitButton: {
        backgroundColor: 'teal',
        padding: 10,
        margin: 15,
        height: 40,
        },
        submitButtonText:{
        color: 'white'
        }
    })