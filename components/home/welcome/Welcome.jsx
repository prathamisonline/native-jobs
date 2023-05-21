import React from 'react'
import { useState } from 'react'
import { View, Text,TextInput,TouchableOpacity,Image,FlatList } from 'react-native'

import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons,SIZES } from '../../../constants'

const jobTypes=["Full-time","Part-time","Contractor"]

const Welcome = () => {
  const router=useRouter()
  const [activeJobType,setActiveJobType]=useState("Full-time")
  return (
    <View >
      <View style={styles.container}>
      <Text style={styles.userName}>Pratham</Text>
      <Text style={styles.welcomeMessage}>Find your perfect job</Text>

      </View>

      <View styles={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput style={styles.searchInput} value="" onChange={()=>{}} placeholder='what are you looking for?' />
        </View>

        {/* <TouchableOpacity style={styles.searchBtn} onPress={()=>{}}>
          <Image source={icons.search} style={styles.searchBtnImage} resizeMode="contain" />
        </TouchableOpacity> */}
      </View>
      <View styles={styles.tabsContainer}>
        <FlatList data={jobTypes} renderItem={({item})=>(
          <TouchableOpacity style={styles.tab(activeJobType,item)} onPress={()=>{
            setActiveJobType(item);
            router.push(`/search/${item}`)
          }}>
            <Text styles={styles.tabText(activeJobType,item)}>{item}</Text>
          </TouchableOpacity>
  )} keyExtractor={item=>item} horizontal contentContainerStyle={{columnGap:SIZES.small}}/>
      </View>
    </View>
  )
}

export default Welcome