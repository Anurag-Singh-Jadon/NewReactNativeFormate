/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useState} from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
 ScrollView,
 TouchableOpacity,
 Image
} from 'react-native';

function App(): JSX.Element {
 const [myTextInput,setMyTextInput] = useState([{ text:''}])

 const onAdd = () =>{
   let cloneArray = [...myTextInput]
   cloneArray.push({text:''})
   setMyTextInput(cloneArray)
 }

 const onChangeText = (text: string,index: number) =>{
           let updateInputs = myTextInput.map((item,i)=>{
               if(index == i){
                 return {...item,text: text}
               }
               return item
           })
           setMyTextInput(updateInputs)
 }

 const onDone = () =>{
    console.log("my input values",myTextInput)
 }

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image source={require('./src/assets/Images/love.gif')} style={{width:100,height:100}}/>
        <Pressable  onPress={ onAdd }>
         <Text style={{color:'red'}}>Add +</Text>
        </Pressable>
        <ScrollView>
       {myTextInput.map((val,i)=>{
        return(
          <TextInput
          value={val.text}
          key={String(i)}
          placeholder='Enter value'
          style={styles.inputStyle}
          onChangeText={text => onChangeText(text,i)}/> 
        )
       })}
       </ScrollView>

       <TouchableOpacity style={styles.DoneStyle} onPress={onDone}>
        <Text>DONE</Text>
       </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  inputStyle: {
    backgroundColor: '#DADADA',
    height: 42,
    paddingHorizontal: 140,
    marginTop: 10,
    borderRadius: 12,
  },
  DoneStyle:{
    backgroundColor:'green',
    height:45,
    alignItems:'center',
    justifyContent:'center',
    borderRadius: 8
  }
});

export default App;
