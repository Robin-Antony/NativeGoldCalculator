import React from 'react'
import { View,ScrollView,Text, Pressable,TextInput,SafeAreaView } from 'react-native'
import { useState } from 'react'
import styles from './MainScreenStyle'

function MainScreen() {
    const [weight, setWeight ] = useState("0")
    const [price, setPrice ] = useState("0")
    const [gst, setGst ] = useState("0")
    const [total, setTotal ] = useState("0")
    const [perGrm,setPerGrm] = useState("0")
    const [eightGrm, setEightGrm] = useState('0')
    const [dotflag, setDotflag] = useState(true)
    const [entry, setEntry] = useState(true)
    const handlePress = (val)=>{

        if(val == 'AC'){
            setWeight("0")
            setPrice("0")
            setGst("0")
            setTotal("0")
            setDotflag(true)
            setEntry(true)
        }
        else if(val == 'update' && entry){
            console.log('update pressed')
            setEightGrm(perGrm*8)
        }
        else if((val == '=') && entry){
            
            try{
                let grm = Number(weight)
                if(grm <= .650){
                    console.log(.650)
                    let rupees = ((grm + 0.050 )* perGrm)+150
                    let rup = rupees.toFixed(3)
                    setPrice(rup)
                    let gstvalue = (3/100)*rupees
                    let gstval = gstvalue.toFixed(3)
                    setGst(gstval)
                    setTotal(rupees+gstvalue)
                }else if(grm <= 1.200){
                    console.log(1.200)
                    let rupees = ((grm + 0.100 )* perGrm)+350
                    let rup = rupees.toFixed(3)
                    setPrice(rup)
                    let gstvalue = (3/100)*rupees
                    let gstval = gstvalue.toFixed(3)
                    setGst(gstval)
                    setTotal(rupees+gstvalue)
                }else if(grm <= 1.650){
                    console.log(1.650)
                    let rupees = ((grm + 0.150 )* perGrm)+350
                    let rup = rupees.toFixed(3)
                    setPrice(rup)
                    let gstvalue = (3/100)*rupees
                    let gstval = gstvalue.toFixed(3)
                    setGst(gstval)
                    setTotal(rupees+gstvalue)
                }else if(grm <= 2.100){
                    console.log(2.100)
                    let rupees = ((grm + 0.200 )* perGrm)+400
                    let rup = rupees.toFixed(3)
                    setPrice(rup)
                    let gstvalue = (3/100)*rupees
                    let gstval = gstvalue.toFixed(3)
                    setGst(gstval)
                    setTotal(rupees+gstvalue)
                }else if(grm <= 2.800){
                    console.log(2.800)
                    let rupees = ((grm + 0.250 )* perGrm)+500
                    let rup = rupees.toFixed(3)
                    setPrice(rup)
                    let gstvalue = (3/100)*rupees
                    let gstval = gstvalue.toFixed(3)
                    setGst(gstval)
                    setTotal(rupees+gstvalue)
                }

                setEntry(false)

            }catch(e){
                setWeight('format error')
            }
        }else if((val=='back') && entry){
            setWeight(weight.slice(0, -1))
        }
        else if((val =='.') && (dotflag)){
            setWeight(weight + val)
            setDotflag(false)
        }
        else if(entry){
            
            if(weight == "0"){
                setWeight(val)
                
            }else if(val=='.'){

            }
            else{
                setWeight(weight + val)
            }
        }else{}
    }

  return (
    <View style={styles.master_screen}>
        <View style={styles.price_container}>
            <SafeAreaView style={styles.price_grm} >
                <TextInput style={styles.price_text} onChangeText={(text) => setPerGrm(text)} placeholder='1 gm price'/>
            </SafeAreaView>

            <Pressable onPress={()=>handlePress('update')} style={styles.submit_btn} >
                <Text style={styles.submit_text}>update</Text>
            </Pressable>
        </View>
        <View style={styles.price_container}>
            <ScrollView style={styles.price_grm} >
                <Text style={styles.price_text}>{perGrm}</Text>
            </ScrollView>

            <ScrollView style={styles.price_grm} >
                <Text style={styles.price_text}>{eightGrm}</Text>
            </ScrollView>
        </View>
        <View style={styles.main_screen}>
            <ScrollView style={styles.main_screen__display} >
                <Text style={styles.main_screen__display_text}>{weight}</Text>
            </ScrollView>
            <ScrollView style={styles.main_screen__display} >
                <Text style={styles.main_screen__display_text}>{price}</Text>
            </ScrollView>
            <ScrollView style={styles.main_screen__display} >
                <Text style={styles.main_screen__display_text}>{gst}</Text>
            </ScrollView>
            <ScrollView style={styles.main_screen__display} >
                <Text style={styles.main_screen__display_text}>{total}</Text>
            </ScrollView>


            <View style={styles.main_screen__keypad}>
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={()=>handlePress('AC')}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg1_button}>AC</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress('=')}>
                        <View style={styles.btn3_outer}>
                            <Text style={styles.bg3_button}>=</Text>
                        </View>
                    </Pressable>
                    
                </View>
                <View style={styles.main_screen__keypad_row}>
                    <Pressable  onPress={()=>handlePress('7')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>7</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress('8')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>8</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress('9')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>9</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={()=>handlePress('4')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>4</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress('5')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>5</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress('6')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>6</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={()=>handlePress('1')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>1</Text>
                        </View>
                    </Pressable>
                    <Pressable  onPress={()=>handlePress('2')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>2</Text>
                        </View>
                    </Pressable>
                    <Pressable  onPress={()=>handlePress('3')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>3</Text>
                        </View>
                    </Pressable>
                </View>
                <View style={styles.main_screen__keypad_row}>
                    <Pressable onPress={()=>handlePress('0')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>0</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress('.')}>
                        <View style={styles.btn_outer}>
                            <Text style={styles.bg_button}>.</Text>
                        </View>
                    </Pressable>
                    <Pressable onPress={()=>handlePress('back')}>
                        <View style={styles.btn1_outer}>
                            <Text style={styles.bg1_button}>&lt;</Text>
                        </View>
                    </Pressable>
                </View>
            </View>
        </View>
    </View>
  )
}

export default MainScreen
