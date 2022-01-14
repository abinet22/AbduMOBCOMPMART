import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { View,Linking  , ActivityIndicator,StyleSheet, Dimensions, FlatList,Image, TouchableOpacity,  ScrollView, TouchableHighlight} from "react-native";

import {
  Layout,
  Button,
  Text, TopNav,
  Section,
  SectionContent,
  useTheme,
} from "react-native-rapi-ui";
const { height, width } = Dimensions.get("window");
import {Card} from 'react-native-shadow-cards';
import { Ionicons } from "@expo/vector-icons";
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
		 <TopNav
        middleContent="Product Detail"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : "#191921"}
          />
        }
        leftAction={() => navigation.goBack()}
      />
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
         
		 <View style={styles.cardContent}>
		   <View style={styles.header}>
		   <Text style={styles.name}>Price: $300,000</Text>
		  <View style={{ marginHorizontal:30}}>
            
            <Text style={styles.price}>Product Descriptions</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
              natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus. Donec quam felis, ultricies nec
            </Text>
			
			
          </View>
		   </View>
		 </View>
	   </View>
		 
		  <View style={styles.opioncard}>

			    <View style={styles.optioncardcont}><Image style={styles.optionimage} source={{uri: 'https://img.icons8.com/flat_round/64/000000/checkmark.png'}}/>
                <Text style={styles.option}>Product Specifications</Text>
                <Text style={styles.optiondata}>
          hdsgfhsgfh</Text>
			
              </View>
			</View>
			<View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> {Linking.openURL(`tel:+251913863171`)}}>
              <Text style={styles.shareButtonText}>Call Now</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
     
    </Layout>
  );
}
const styles = StyleSheet.create({
  
  container:{
    flex:1,
   
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
  shareButton: {
	marginTop:10,
	height:45,
	flexDirection: 'row',
	justifyContent: 'center',
	alignItems: 'center',
	borderRadius:30,
	backgroundColor: "#00BFFF",
  },
  shareButtonText:{
	color: "#FFFFFF",
	fontSize:20,
  },
  addToCarContainer:{
	marginHorizontal:30
  },
  name:{
	fontSize:28,
	color:"#696969",
	fontWeight:'bold',
	alignItems:'center',
	textAlign:'center',
  },
  price:{
	marginTop:10,
	fontSize:18,
	color:"#00BFFF",
	fontWeight:'bold'
  },
  description:{
	textAlign:'center',
	marginTop:10,
	color:"#696969",
  },
 
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
  mainImage:{
    width:'100%',
    height:200,
  },
  //option
  optioncardcont: {
    marginLeft:20,
    marginTop:10,
  },
  optionimage:{
    width:25,
    height:25,
  },

  opioncard:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginVertical: 10,
    marginHorizontal:20,
    backgroundColor:"white",
    flexBasis: '46%',
    padding: 10,
    flexDirection:'row',
    flexWrap: 'wrap',
    borderLeftWidth:6,
  },

  option:{

    fontSize:18,
    flex:1,
    color:"#008080",
    fontWeight:'bold',
	marginTop:10,
	marginTop:5
  },
  optiondata:{
    fontSize:14,
    flex:1,
    color:"#696969",
    marginTop:5
  },
 
});