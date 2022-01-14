import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { View , ActivityIndicator,StyleSheet, FlatList,Image,  TouchableHighlight,
 
  TextInput, TouchableOpacity} from "react-native";
import {
  Layout,
  TopNav,
  Text,
  themeColor,
  useTheme,
} from "react-native-rapi-ui";
import { Ionicons } from "@expo/vector-icons";
import {Card} from 'react-native-shadow-cards';

export default function ({ navigation }) {
  const { isDarkmode } = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    setLoading(true);
    Axios.get('https://conmart.chereta.et/api/allcategories')
      .then(({ data }) => setData( data ))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

 
  return (
    <Layout>
      <TopNav
        middleContent="Material Search By Sub Category"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : "#191921"}
          />
        }
        leftAction={() => navigation.goBack()}
      />
     
    
     <View style={styles.formContent}>
          <View style={styles.inputContainer}>
            <Image style={[styles.icon, styles.inputIcon]} source={{uri: 'https://media.istockphoto.com/vectors/search-icon-vector-magnifier-glass-zoom-symbol-thin-line-design-vector-id1133992738?b=1&k=6&m=1133992738&s=170667a&w=0&h=ljTPphyvP7c9iltpvRj4vmKX7OPyR5BQiIGXQ8WIQAs='}}/>
            <TextInput style={styles.inputs}
              
                placeholder="Search"
                underlineColorAndroid='transparent'
               />
          </View>

          <TouchableHighlight style={styles.saveButton} onPress={() => {}}>
           <Text style={[styles.icon, styles.iconBtnSearch]} >Search</Text>
                  </TouchableHighlight>
        </View>
         
         
      <View style={{ flex: 1, padding: 14 }}>
     
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data.category}
          keyExtractor={({ id }, index) => id}
          renderItem={ ({ item }) => { return ( <TouchableOpacity  onPress={() =>navigation.navigate('ProductListScreen')}>
              <View style={styles.notificationBox}>
                <Image style={styles.image}
                  source={{uri: item.catimage}}/>
                
                <Text style={styles.description}>{item.catname}</Text>
              </View>
          </TouchableOpacity>
           )} }
        />
      )}
     
     
    </View>
    </Layout>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7",
  },
  formContent:{
    flexDirection: 'row',
    marginTop:10,
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:30,
      borderBottomWidth: 1,
      height:45,
      flexDirection: 'row',
      alignItems:'center',
      flex:1,
      margin:10,
  },
  icon:{
    width:30,
    height:30,
  },
  iconBtnSearch:{
    alignSelf:'center',
   
    fontSize:10
  },
  inputs:{
      height:45,
      marginLeft:16,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    marginLeft:15,
    justifyContent: 'center'
  },
  saveButton: {
    height:45,
    justifyContent: 'center',
    alignItems: 'center',
    margin:10,
    width:70,
    alignSelf: 'flex-end',
    backgroundColor: '#ffffff',
    borderRadius:20,
  },
  saveButtonText: {
    color: 'white',
  },
  notificationList:{
    marginTop:20,
    padding:10,
  },
  notificationBox: {
    padding:15,
    marginTop:2,
    marginBottom:2,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  image:{
    width:25,
    height:25,
  },
  description:{
    fontSize:18,
    color: "#3498db",
    marginLeft:10,
  },
});