/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useState} from 'react';

import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';

function App(): JSX.Element {
  const [myTextInput, setMyTextInput] = useState([{text: '',isRequired: false}]);

  const onAdd = () => {
    let cloneArray = [...myTextInput];
    cloneArray.push({text: '',isRequired:false});
    setMyTextInput(cloneArray);
  };

  const onDelete = (index: number) => {
    let cloneArray = [...myTextInput];
    let filterArray = cloneArray.filter((val, i) => {
      if (i !== index) {
        return val;
      }
    });
    setMyTextInput(filterArray);
  };

  const onChangeText = (text: string, index: number) => {
    let updateInputs = myTextInput.map((item, i) => {
      if (index == i) {
        return {...item, text: text};
      }
      return item;
    });
    setMyTextInput(updateInputs);
  };

  const onDone = () => {
    let hitApi = true
    let cloneArray = [...myTextInput]
    let checkEmptyValue =  cloneArray.map((val,i)=>{

      if(val?.text == ''){
        hitApi = false
        return{...val,isRequired: true}
      }else{
        return {...val,isRequired: false}
      }
    })
    setMyTextInput(checkEmptyValue)
    if(hitApi){
     alert("api hit")
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          source={require('./src/assets/Images/love.gif')}
          style={{width: 100, height: 100}}
        />
        <Pressable onPress={onAdd}>
          <Text style={{color: 'red'}}>Add +</Text>
        </Pressable>
        <ScrollView>
          {myTextInput.map((val, i) => {
            return (
              <View style={styles.boxView}>
                <View style={{flex: 0.8}}>
                  <TextInput
                    value={val.text}
                    key={String(i)}
                    placeholder="Enter value"
                    style={styles.inputStyle}
                    onChangeText={text => onChangeText(text, i)}
                  />
                  {!!val?.isRequired?<Text style={{color:'red',marginTop:4}}>This field is Required*</Text>: null}
                </View>
                {i !== 0 ? (
                  <TouchableOpacity
                    style={{marginLeft: 8, flex: 0.2}}
                    onPress={() => onDelete(i)}>
                    <Text>Delete</Text>
                  </TouchableOpacity>
                ) : (
                  <View style={{marginLeft: 8, flex: 0.2}} />
                )}
              </View>
            );
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
    paddingHorizontal: 60,
    marginTop: 10,
    borderRadius: 12,
    flex: 0.8,
  },
  DoneStyle: {
    backgroundColor: 'green',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  boxView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default App;
