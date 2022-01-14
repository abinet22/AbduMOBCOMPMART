import React from 'react';

import { Layout } from 'react-native-rapi-ui';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Image,
	Alert,
	ScrollView,
	FlatList,
	Button,
  } from 'react-native';
   import {Linking} from 'react-native'
export default function ({ navigation }) {
	return (
		<View style={styles.container}>
        <ScrollView>
          <View style={{alignItems:'center', marginHorizontal:30}}>
            <Image style={styles.productImg} source={{uri:"https://thumbs.dreamstime.com/b/silhouette-call-center-agent-vector-illustration-design-silhouette-call-center-agent-168242714.jpg"}}/>
            <Text style={styles.name}>Contact Us</Text>
            <Text style={styles.price}>Do you want to buy or Become Our Agent?</Text>
            <Text style={styles.description}>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
              Aenean commodo ligula eget dolor. Aenean massa. Cum sociis 
              natoque penatibus et magnis dis parturient montes, 
              nascetur ridiculus mus. Donec quam felis, ultricies nec
            </Text>
          </View>
          <View style={styles.starContainer}>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
            <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
              <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
			  <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
			  <Image style={styles.star} source={{uri:"https://img.icons8.com/color/40/000000/star.png"}}/>
          </View>
		  <View style={{alignItems:'center', marginHorizontal:30}}>
        
            <Text style={styles.description}>
              You can Get Us On Social Media.Or Call Us Now!
            </Text>
          </View>
          <View style={styles.starContainer}>
		  <TouchableOpacity onPress={()=> {Linking.openURL(`tel:+251913863171`)}}>
		  <Image style={styles.star} source={{uri:"https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-56-512.png"}}/>
         
			   </TouchableOpacity>
               <TouchableOpacity  onPress={()=> {Linking.openURL(`tel:+251913863171`)}}>
			   <Image style={styles.star} source={{uri:"https://cdn.iconscout.com/icon/free/png-512/facebook-logo-2019-1597680-1350125.png"}}/>
           
		  
		    </TouchableOpacity>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.addToCarContainer}>
            <TouchableOpacity style={styles.shareButton} onPress={()=> {Linking.openURL(`tel:+251913863171`)}}>
              <Text style={styles.shareButtonText}>Call Now</Text>  
            </TouchableOpacity>
          </View> 
        </ScrollView>
      </View>
	);
}
const styles = StyleSheet.create({
	container:{
	  flex:1,
	  marginTop:20,
	},
	productImg:{
	  width:200,
	  height:200,
	},
	name:{
	  fontSize:28,
	  color:"#696969",
	  fontWeight:'bold'
	},
	price:{
	  marginTop:10,
	  fontSize:18,
	  color:"green",
	  fontWeight:'bold'
	},
	description:{
	  textAlign:'center',
	  marginTop:10,
	  color:"#696969",
	},
	star:{
	  width:40,
	  height:40,
	},
	btnColor: {
	  height:30,
	  width:30,
	  borderRadius:30,
	  marginHorizontal:3
	},
	btnSize: {
	  height:40,
	  width:40,
	  borderRadius:40,
	  borderColor:'#778899',
	  borderWidth:1,
	  marginHorizontal:3,
	  backgroundColor:'white',
  
	  flexDirection: 'row',
	  justifyContent: 'center',
	  alignItems: 'center',
	},
	starContainer:{
	  justifyContent:'center', 
	  marginHorizontal:30, 
	  flexDirection:'row', 
	  marginTop:20
	},
	contentColors:{ 
	  justifyContent:'center', 
	  marginHorizontal:30, 
	  flexDirection:'row', 
	  marginTop:20
	},
	contentSize:{ 
	  justifyContent:'center', 
	  marginHorizontal:30, 
	  flexDirection:'row', 
	  marginTop:20
	},
	separator:{
	  height:2,
	  backgroundColor:"#eeeeee",
	  marginTop:20,
	  marginHorizontal:30
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
	}
  });   