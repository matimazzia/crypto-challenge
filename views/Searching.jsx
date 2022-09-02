
import tw from "twrnc"
import { View,TouchableOpacity,Text,ToastAndroid,Image} from "react-native";
import { useState } from "react";
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import * as Animatable from "react-native-animatable";
import { useDispatch, useSelector } from "react-redux";
import { addFav, getCoin } from "../redux/actions";
import { PrivateValueStore } from "@react-navigation/native";
import DropDownPicker from "react-native-dropdown-picker";
import { DropDown } from "../components/dropdonw";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Searching({navigation}) {
    const dispatch = useDispatch();

    const coin = useSelector(state=> state.coin)
    const coinsfav = useSelector(state=> state.coins)


    const handleAdd= (value) =>{
      if (!coinsfav.find(a=> a.coin === value.coin)){
        dispatch(addFav(value))
        console.log(coinsfav)
      }
      else{ ToastAndroid.show("¡Ya agregaste esta crypto!", ToastAndroid.SHORT)
      }
    }

    return (
    <View style={tw` h-full flex flex-col bg-gray-600 items-center`}>
        <View style={tw` h-1/4 w-full flex flex-row items-center justify-center z-50 items-center `} >
           <DropDown> </DropDown> 
        </View>
      { coin.coin ?
      <View style={tw`bg- gray-600 flex flex-col items-center justify-center`}>
        <View style={tw`flex flex-row justify-center text-center h-12 w-60 items-center bg-gray-800 rounded-lg `}>
          <Text style={tw`text-center text-white font-extrabold text-2xl z-0`}>{`${coin.coin}`}</Text>
        </View>
        <View style={tw`flex  justify-center`}>
        <Image style={tw`h-40 w-40 mt-10 items-center flex flex-row justify-center`} source={{uri: `${coin.logo}`}}/>
        </View>
        <View style={tw`flex flex-col justify-center text-center h-24 w-70 items-center bg-gray-800 rounded-lg mt-10`}>
          <Text style={tw`text-center text-white font-extrabold text-2xl z-0`}>{`PRICE:`}</Text>
          <Text style={tw`text-center text-white font-extrabold text-2xl z-0`}>{`USD$: ${coin.prices.USD}`}</Text>
        </View>
        <TouchableOpacity
          onPress={()=> handleAdd(coin)}
          style={tw`flex flex-col justify-center items-center bg-white rounded-lg w-60 h-10 text-white text-center mt-10 shadow-lg `}  
        >
        <Text style={tw`text-center text-black font-bold`}>ADD CRYPTO</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={()=> navigation.navigate("Home")}
          style={tw`flex flex-col justify-center items-center bg-green-700 rounded-lg w-60 h-10 text-white text-center mt-5 shadow-lg `}  
        >
        <Text style={tw`text-center text-black font-bold`}>GO TO LIST 🏡</Text>
        </TouchableOpacity>
      </View> 
      
      :(

        <View style={tw`flex mt-50`}>
        <Animatable.View
              animation="slideInDown"
              iterationCount={80}
              direction="alternate-reverse"
              duration={2000}
              delay={500}
              style={{
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text style={tw`text-center text-black font-bold`}>
                Find a Coin 👆
              </Text>
            </Animatable.View>
        </View>
      )
    }

    </View>

      


    );
  }
  