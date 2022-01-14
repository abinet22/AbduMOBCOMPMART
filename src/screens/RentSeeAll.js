import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { View , ActivityIndicator,StyleSheet, FlatList,Image, Linking ,  TouchableHighlight,
 
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

export default function ({ navigation,route}) {
  const { isDarkmode } = useTheme();
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const { rentname} = route.params;
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
        middleContent="Construction Material Rent List"
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
         
    
        <View style={{ flex: 1}}>

{isLoading ? (
 <ActivityIndicator />
) : (
 <FlatList
   data={data.category}
   keyExtractor={({ id }, index) => id}
   renderItem={ ({ item }) => { return ( <TouchableOpacity onPress={()=> navigation.navigate('RentDetail')}>
          <View style={styles.notificationBox}>
          <View style={styles.row}>
        <Image source={{ uri: item.catimage }} style={styles.pic} />
        <View>
          <View style={styles.nameContainer}>
            <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.catname}</Text>
            <Text style={styles.mblTxt}>Price: 1500 </Text>
          </View>
          <View style={styles.msgContainer}>
            <Text numberOfLines={3} style={styles.msgTxt}>{item.catid}  {"\n"} 
            {rentname}   {"\n"}
            <TouchableOpacity style={styles.shareButton} onPress={()=> navigation.navigate('RentDetail')}>
              <Text style={styles.shareButton}>  See Detail Here</Text>  
            </TouchableOpacity>
            </Text>
           
          </View>
        </View>
      </View>
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
  shareButton: {
    marginTop:10,
    fontSize:12,
    height:15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    backgroundColor: "#00BFFF",
  },
  cardContent: {
    paddingVertical: 4.5,
    paddingHorizontal: 16,
  },
  notificationBox: {
   
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    borderRadius:10,
  },
  image:{
    width:45,
    height:45,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
   flex:1,
    borderBottomWidth: 1,
    padding: 10,
  },
  description:{
    fontSize:18,
    color: "#3498db",
    marginLeft:10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
    flex:0.5
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 380,
    flex:0.5
  },
  nameTxt: {
    marginLeft: 15,
    fontWeight: '600',
    color: '#222',
    fontSize: 18,
    width:170,
  },
  mblTxt: {
    fontWeight: '200',
    color: '#777',
    fontSize: 13,
    flex:0.2
  },
  msgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex:0.30
  },
  msgTxt: {
    fontWeight: '400',
    color: '#008B8B',
    fontSize: 12,
    marginLeft: 15,
  },
  //listflat
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

  
  description:{
    fontSize:18,
    color: "#3498db",
    marginLeft:10,
  },
});