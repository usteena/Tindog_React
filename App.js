import React, {useState,useEffect,useRef} from 'react';
import { Text, StyleSheet, View, Alert } from 'react-native';
import Constants from 'expo-constants';
import TopBar from './components/TopBar';
import BottomBar from './components/BottomBar';
import Swipes from './components/Swipes'
import axios from 'axios';
import SwipeableImage from './components/SwipeableImage';


export default function App() {
  const [users, setUsers] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const swipesRef= useRef(null)

  async function fetchDogs(){
    try{
      const {data} = await axios.get('https://api.themoviedb.org/3/movie/popular?api_key=3902b24630c8e1f76575b003015fc068&language=en-US&results=50')
      setUsers(data.results);
    }catch (error){
      console.log(data.results);
      Alert.alert('Error getting movies','',[{text:'Retry', onPress:()=>fetchDogs()}])
    }
  }
  

  useEffect(()=>{
    fetchDogs()
  },[])

  function handleLike(){
    nextUser()
  }
  function handlePass(){
    nextUser()
  }
  function nextUser() {
    const nextIndex = users.length -2 === currentIndex ? 0 : currentIndex +1
    setCurrentIndex(nextIndex)
  }
  function handleLikePress(){
    swipesRef.current.openLeft()
  }
  function handlePassPress(){
    swipesRef.current.openRight()

  }
  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.swipes}>
        {users.length > 1 && users.map((u, i)=>currentIndex === i && (
          <Swipes 
          key={i} 
          ref={swipesRef}
          currentIndex={currentIndex} 
          users={users} 
          handleLike={handleLike} 
          handlePass={handlePass}/>

        ))
        }
        
      </View>
      <BottomBar user={users[currentIndex]} handleLikePress={handleLikePress} handlePassPress={handlePassPress} />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:Constants.statusBarHeight,
  },
  swipes:{
    flex:1,
    padding:10,
    paddingTop:8,
    shadowColor:'#000',
    shadowOffset:{
      width:0,
      height:3,
    },
    shadowOpacity:0.29,
    shadowRadius:4.65,
    elevation:7,
  }
});
