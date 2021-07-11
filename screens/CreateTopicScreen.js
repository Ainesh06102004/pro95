import * as React from 'react';
import {View,Text,TouchableOpacity,StyleSheet,TextInput,KeyboardAvoidingView,Alert} from 'react-native';
import MyHeader from '../components/MyHeader';
import db from '../config';
import firebase from 'firebase';

export default class CreateTopicScreen extends React.Component{
    constructor(){
        super();
        this.state={
            userId : firebase.auth().currentUser.email,
            topicName:'',
            description:'',
        }
    }

    createUniqueId(){
        return Math.random().toString(36).substring(7)
    }

    addTopic = (topicName,description)=>{
        var userId = this.state.userId
        var randomTopicId = this.createUniqueId();
        db.collection('created_topics').add({
            'user_id':userId,
            'topic_name':topicName,
            'description':description,
            'topic_id':randomTopicId,
        })
        this.setState({
            topicName:'',
            description:'',
        })
        return Alert.alert('Topic Created And Added Successfully')
    }
    
    render(){
        return(
            <View style={{flex:1}}>
                <MyHeader title = "Create Your Topic" navigation = {this.props.navigation}/>
                <KeyboardAvoidingView style={styles.keyBoardStyle}>
                    <TextInput
                        style={styles.formTextInput}
                        placeholder='Topic Name'
                        onChangeText={(text)=>{
                            this.setState({topicName:text})
                        }}
                        value = {this.state.topicName}
                    />

                    <TextInput
                        style={[styles.formTextInput,{height:300,}]}
                        multiline
                        numberOfLines = {10} 
                        placeholder='Your Ideas About the Topic'
                        onChangeText={(text)=>{
                            this.setState({description:text})
                        }}
                        value = {this.state.description}
                    />

                    <TouchableOpacity 
                        style={styles.button}
                        onPress={()=>{
                            this.addTopic(this.state.topicName,this.state.description)
                        }}>
                        <Text>Create</Text>
                    </TouchableOpacity>   
                </KeyboardAvoidingView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    keyBoardStyle : {
      flex:1,
      alignItems:'center',
      justifyContent:'center'
    },
    formTextInput:{
      width:"75%",
      height:35,
      alignSelf:'center',
      borderColor:'#ffab91',
      borderRadius:10,
      borderWidth:1,
      marginTop:20,
      padding:10,
    },
    button:{
      width:"50%",
      height:50,
      justifyContent:'center',
      alignItems:'center',
      borderRadius:10,
      backgroundColor:"#ff5722",
      shadowColor: "#000",
      shadowOffset: {
         width: 0,
         height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,
      elevation: 16,
      marginTop:20
      },
    }
  )