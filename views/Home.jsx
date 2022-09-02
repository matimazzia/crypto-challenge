import {
    BackHandler,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    Image,
    Alert,
    ScrollView
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useDispatch, useSelector } from "react-redux"
import tw from "twrnc";
import { deleteFav, openFav } from "../redux/actions";
import { useEffect } from "react";

export default function Home({navigation}) {
  const coinsfav = useSelector(state=> state.coins)  
  const dispatch = useDispatch();
   const handleDelete= (value)=>{
    dispatch(deleteFav(value));
   }
    return (
      <View style={tw` h-full flex flex-col bg-gray-600 items-center`}>
        <View style={tw`flex flex-row justify-evenly w-full items-end pb-2 bg-cyan-900 h-30 shadow-xl rounded-b-3xl`}>
          <Text style={tw`text-4xl mb-5 text-white font-bold`}>CryptoFav</Text>
        </View>
         <ScrollView style={tw`mt-10`}>
            {coinsfav?.map((coin) => {
              return (
                <View
                  key={coin.ticker}
                  style={tw`flex flex-row justify-center items-center bg-sky-900 mt-5 rounded-xl shadow-xl p-3`}
                >
                  <View style={tw`w-45`}>
                    <Text style={tw`mr-3 text-white text-lg text-center font-bold`}>
                      {`${coin.coin}`}
                    </Text>
                  </View>
                  <View style={tw`w-45`}>
                    <Text style={tw`mr-3 text-white text-base text-center font-bold`}> 
                     {`USD$${coin.prices.USD}`}
                    </Text>
                  </View>
                  <View
                    style={tw`flex justify-center items-center text-center w-20 h-10`}
                  >
                    <Image style={tw`h-10 w-10 rounded-md`}
                      source={{uri:`${coin.logo}`}}/>
                  </View>
                  <TouchableOpacity style={tw`bg-red-600 w-15 h-7 text-center rounded-lg justify-center `}
                  onPress={(e)=>{handleDelete(coin)}}
                  >
                    <Text style={tw`text-white text-center text-bold`}>Delete</Text>
                  </TouchableOpacity>
                </View>
              );
            })}
          </ScrollView>
      <View style={tw`flex flex-row justify-evenly items-center w-full bg-cyan-900 shadow-xl rounded-t-3xl h-25 pb-5`}>
          <TouchableOpacity
            onPress={()=> navigation.navigate('Searching')}
            style={tw`flex flex-col justify-center items-center bg-white rounded-lg w-60 h-10 text-white text-center  shadow-lg `}  
          >
          <Text style={tw`text-center text-black font-bold`}>ADD CRYPTO</Text>
        </TouchableOpacity>
          </View>
      </View>
    );
  }