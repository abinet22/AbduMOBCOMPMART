import React, { useEffect, useState } from "react";
import Axios from 'axios';
import { View , ActivityIndicator,StyleSheet, FlatList,Image, TouchableOpacity} from "react-native";
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
    Axios.get('https://app.chereta.et/product/manageprofile')
      .then(({ data }) => setData( data ))
      .catch(error => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const FlatListItem = (item) => {
    return (
        <TouchableOpacity onPress={() => setItemSelected(item.id)}>
            <View style={ (itemSelected === item.id) ? style.itemWrapperActive : style.itemWrapper }>
            <Text style={{fontSize:25}} key={item.id}>
           
              </Text> 
            </View>
        </TouchableOpacity>
    )
}
  return (
    <Layout>
      <TopNav
        middleContent="Second Screen"
        leftContent={
          <Ionicons
            name="chevron-back"
            size={20}
            color={isDarkmode ? themeColor.white100 : "#191921"}
          />
        }
        leftAction={() => navigation.goBack()}
      />
     
      <View style={{ flex: 1, padding: 14 }}>
     
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={ ({ item }) => { return ( <TouchableOpacity>
            <View style={styles.row}>
              <Image source={{ uri: item.image }} style={styles.pic} />
              <View>
                <View style={styles.nameContainer}>
                  <Text style={styles.nameTxt} numberOfLines={1} ellipsizeMode="tail">{item.protitle}</Text>
                  <Text style={styles.mblTxt}>Price: 1500</Text>
                </View>
                <View style={styles.msgContainer}>
                  <Text style={styles.msgTxt}> {item.fileName}</Text>
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
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DCDCDC',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    padding: 10,
  },
  pic: {
    borderRadius: 30,
    width: 60,
    height: 60,
  },
  nameContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 380,
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
});