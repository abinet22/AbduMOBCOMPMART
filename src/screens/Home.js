import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { View,Linking  , ActivityIndicator,StyleSheet, Dimensions, FlatList,Image, TouchableOpacity,  ScrollView, TouchableHighlight} from "react-native";

import {
  Layout,
  Button,
  Text,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";
const { height, width } = Dimensions.get("window");
import {Card} from 'react-native-shadow-cards';
import { fontSize } from "react-native-rapi-ui/constants/typography";
export default function ({ navigation }) {
  const { isDarkmode, setTheme } = useTheme();
  const [data, setData] = useState([]);

  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    
    Axios.get('https://conmart.chereta.et/api/allcategories')
      .then(({ data }) => setData( data ))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);
  return (
    <Layout>
       <View style={styles.container}>
        <ScrollView style={styles.content}>
          <View style={styles.card}>
         
            <View style={styles.cardContent}>
              <View style={styles.header}>
                <View style={styles.mainImageContainer}>
                  <Image style={styles.mainImage} source={{uri:"https://media-exp1.licdn.com/dms/image/C511BAQGVOVc8_rZxnQ/company-background_10000/0/1585122674791?e=2159024400&v=beta&t=s2zM_tZKmXOx1u0OEbZxxpXmZAjxBZU__df_6gjim4Y"}}/>
                </View>
               
              </View>
            </View>
          </View>




          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Quick Links</Text>
            </View>
            <View >
            <View >
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        horizontal={true}
        data={data.quick}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainerq}
              onPress={() =>navigation.navigate('QSubCategoryScreen')}
            >
           <Card style={styles.cardq}>
             
                <Text numberOfLines={1} style={styles.infoq}>{item.qname}</Text>
                <View >
                <Image style={styles.iconq} source={{uri: item.qimageurl}}/>
                <Text numberOfLines={2} style={styles.msgTxt}>{item.qdesc}</Text>
              </View>
             </Card>
            </TouchableOpacity>
          );
        }}
      />
    </View> 
            </View>
          </View>

          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Today Favourite Product Price List</Text>
            </View>
            <View style={styles.cardContent}>
        
              <View style={{ flex: 1}}>
     
     {isLoading ? (
       <ActivityIndicator />
     ) : (
       <FlatList
         data={data.category}
         keyExtractor={({ id }, index) => id}
         renderItem={ ({ item }) => { return ( <TouchableOpacity  onPress={() =>navigation.navigate('FavouriteDetail')}>
                <View style={styles.notificationBox}>
                <View style={styles.row}>
              <Image source={{ uri: item.catimage }} style={styles.pic} />
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.catname}</Text>
                  <Text style={styles.mblTxt}>Price: 1500</Text>
                </View>
                <View style={styles.msgContainer}>
                  <Text numberOfLines={2} style={styles.msgTxt}> Description: {item.catid}  {"\n"} See Detail Here!.</Text>
                 
                </View>
              </View>
            </View>
              </View>
          
         </TouchableOpacity>
          )} }
       />
     )}
    
    
   </View>
            
            </View>
            <TouchableHighlight onPress={() =>navigation.navigate('FavouriteSeeAll')}>
            <View style={styles.cardHeader}>
              <Text style={styles.shareButton}>See More Items Here!</Text>
            </View>
            </TouchableHighlight>
            
          </View>
          <View style={styles.card}>
            <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Construction Material Categories</Text>
            </View>
            <View >
            <View style={styles.containerhf}>
  {isLoading ? (
       <ActivityIndicator />
     ) : (
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        horizontal={true}
        data={data.category}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainerhf}
              onPress={() => navigation.navigate('SubCategoryScreen')}
            >
           <Card style={styles.cardhf}>
            
           <Image style={styles.categoriesPhoto} source={{ uri: item.catimage }} />
           <Text numberOfLines={2} style={styles.categoriesName}>{item.catname}</Text>
          
     
             </Card>
            </TouchableOpacity>
          );
        }}
      /> 
  )}
    </View> 
            </View>
          </View>

          <View style={styles.card}>
          <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Construction Material Rent</Text>
            </View>
            <View >
            <View >
  {isLoading ? (
       <ActivityIndicator />
     ) : (
      <FlatList
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.flatList}
        horizontal={true}
        data={data.rent}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              style={styles.cardContainerrent}
              onPress={() => navigation.navigate('RentSeeAll',{rentname:item.rname})}
            >
            <View style={styles.cardContent}>
         <View style={styles.bodyContent}>
         <View style={styles.menuBox}>
                <Image style={styles.icon} source={{uri: item.rimageurl}}/>
                <Text numberOfLines={1} style={styles.info}>{item.rname}</Text>
              </View>
        
         </View>
        
         </View>
            </TouchableOpacity>
          );
        }}
      /> 
  )}
    </View> 
            </View>
         
            
       </View>
       <View style={styles.card}>
          <View style={styles.cardHeader}>
              <Text style={styles.cardTitle}>Construction Material Equipment</Text>
            </View>
          
            <View >
            <View >
  {isLoading ? (
       <ActivityIndicator />
     ) : (
      <FlatList
        data={data.category}
        keyExtractor={({ id }, index) => id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
         
              onPress={() => navigation.navigate('EquipmentAll')}
            >
            <View style={styles.cardContent}>
         <View style={styles.bodyContent}>
         <View style={styles.box}>
                <Image style={styles.image} source={{uri: item.catimage}}/>
                <Text style={styles.username}>{item.catname} {"\n"}
<Text style={  {fontWeight:"400"},
    {color: "#696969"},
   { fontSize: 12}}> This Section include </Text></Text>
              </View>
        
         </View>
        
         </View>
            </TouchableOpacity>
          );
        }}
      /> 
  )}
    </View> 
            </View>



            
       </View>
        </ScrollView>
      </View>
     
    </Layout>
  );
}
const styles = StyleSheet.create({
  categoriesItemContainer: {
    flex: 1,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    height: 215,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 20,
  },
  categoriesPhoto: {
    width: '100%',
    height: 55,
    borderRadius: 20,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    shadowColor: 'blue',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0,
    elevation: 3
  },
  categoriesName: {
    flex: 1,
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#008B8B',
    marginTop: 8
  },
  categoriesInfo: {
    marginTop: 3,
    marginBottom: 5
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
  container:{
    flex:1,
    marginTop:20,
    backgroundColor:"#ebf0f7",
  },
  content:{
    marginLeft:10,
    marginRight:10,
    marginTop:20,
  },
  header:{
    flex:1,
  },
  mainImage:{
    width:'100%',
    height:200,
  },
  smallImagesContainer:{
    flexDirection:'column',
    marginLeft:30
  },
  smallImage:{
    width:60,
    height:60,
    marginTop:5, 
  },
  btnColor: {
    height:40,
    width:40,
    borderRadius:40,
    marginHorizontal:3
  },
  contentColors:{
    flexDirection:'row', 
  },
  name:{
    fontSize:22,
    color:"#696969",
    fontWeight:'bold',
  },
  price:{
    marginTop:10,
    fontSize:18,
    color:"green",
    fontWeight:'bold'
  },
  description:{
    fontSize:18,
    color:"#696969",
  },
  shareButton: {
    marginTop:10,
    height:25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius:10,
    backgroundColor: "#00BFFF",
  },
  shareButtonText:{
    color: "#FFFFFF",
    fontSize:20,
  },
//horizontalflatlist
containerhf: {
  flex: 1,
  justifyContent: "center",
  paddingTop: 2,
 
  padding: 2,
},
flatListhf: {
  paddingHorizontal: 16,
  paddingVertical: 16,
},
cardContainerhf: {
  height: 130,
  width: width * 0.2,
  marginRight: 8,
},
cardhf: {
  height: 120,
  width: width * 0.2,
  borderRadius: 12,
  padding: 10,
},
cardhfcat: {
  
  width: width * 0.5,
  borderRadius: 12,
  padding: 10,
},
texthf: { color: "white", fontWeight: 'bold' },
  /******** card **************/
  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 5,
    backgroundColor:"white",
    marginHorizontal: 5,
  },
  cardContent: {
    paddingVertical: 4.5,
    paddingHorizontal: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 1.5,
    paddingBottom: 15,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
  },
  cardTitle:{
    color:"#00BFFF"
  },
  
  bodyContent:{
    paddingTop:2,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  cardContainerrent: {
    height: 200,
    width: width * 0.5,
    marginRight: 8,
  },
  menuBox:{
    backgroundColor: "#DCDCDC",
    width:width * 0.5,
    height:170,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  icon: {
    width:width * 0.5,
    height:146,
  },
  info:{
    fontSize:14,
    color: "#696969",
  },
  //quick
  cardContainerq: {
    height: 220,
    width: width * 0.2,
    marginRight: 8,
  },
  cardq: {
    height: 200,
    width: width * 0.2,
    borderRadius: 12,
   
  },
  menuBoxq:{
    backgroundColor: "#DCDCDC",
 
    height:150,
    alignItems: 'center',
    justifyContent: 'center',
    margin:12,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:2,
      width:-2
    },
    elevation:4,
  },
  iconq: {
    width:width * 0.2,
    height:150,
    justifyContent: 'center',
  
    shadowColor: 'black',
    shadowOpacity: .2,
   
  },
  infoq:{
   fontWeight:"400",
    color: "#696969",
    fontSize: 12,
    marginLeft: 15,
  },
  //equpment card
  image:{
    width: 60,
    height: 60,
    flex:0.3
  },

  box: {
    padding:5,
    marginTop:5,
    marginBottom:5,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    flex:1,
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  username:{
    color: "#20B2AA",
    flex:0.7,
    fontSize:18,
    alignSelf:'center',
    marginLeft:10
  }
});