
import {AutocompleteDropdown} from 'react-native-autocomplete-dropdown';
import { useSelector, useDispatch } from 'react-redux';
import tw from "twrnc"
import { View,TouchableOpacity,Text,ToastAndroid,Image} from "react-native";
import { getCoin } from '../redux/actions';
export const DropDown = () => {
    const arrAutocomplete = useSelector(state=> state.tickers)
    const dispatch = useDispatch();
    const coin = useSelector(state=> state.coin)

    const handleSubmit = (value)=>{
        coin.ticker === value ? ToastAndroid.show("¡Ya seleccionaste esta crypto!", ToastAndroid.SHORT) :
        dispatch(getCoin(value));
    }
  return (
    <AutocompleteDropdown
            clearOnFocus={false}
            closeOnBlur={true}
            closeOnSubmit={true}
            textInputProps={{
              placeholder: "Introduzca la crypto",
            }}
            direction={"down"}
            onSelectItem={el => {handleSubmit(el?.id)}}
            suggestionsListMaxHeight={400}
            debounce={100}
            dataSet={arrAutocomplete}
            showChevron={false}
            emptyResultText={"Intenta nuevamente..."}
            containerStyle={tw`w-60 h-10 rounded-lg bg-gray-800 text-lg items-center`}
        />
  )
}
