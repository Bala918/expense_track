import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
var [name, setName] = useState("Bala")
const MyComponent = () => {
  const update_name = ()=>{
    setName = "Krishnan"
  }  
  return (    
    <View style={styles.container}>
      <View style={styles.container2}>
        <Text>
          {name}
        </Text>
        <button onPress={name} />
      </View>                 
    </View>    
  );
};

export default MyComponent;

const styles = StyleSheet.create({
  container : {
    flex:1,
    justifyContent:'center',
    backgroundColor:"lightblue",
    borderWidth:10,
    borderColor:"red",        
  },
  container2 : {        
    margin:16,
    borderWidth:1,
    borderColor:"blue",     
    alignItems:"center"    
  }  
})
