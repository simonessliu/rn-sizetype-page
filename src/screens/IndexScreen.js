import React from 'react';
import {
    StyleSheet,
    Text, Image,
    View, TouchableOpacity,
    ScrollView
} from 'react-native';
import {Ionicons,AntDesign} from '@expo/vector-icons';



class IndexScreen extends React.Component {
    constructor(){
        super()
        this.state = {
            data:['Men', 'Women', 'Child', 'Preschool','Infant'],
            checked:0
        }
    }
    render(){
        return (
            <ScrollView style = {styles.background}>
                <View>
                    {
                        this.state.data.map((data, key) => {
                            return (                         
                                    <View style = {styles.box}>
                                        <View>
                                            {this.state.checked == key?
                                                <TouchableOpacity style={styles.btn}>
                                                    <Text style={styles.text}>{data}</Text>
                                                    <Ionicons name="md-radio-button-on" style={styles.img} size={30}></Ionicons>
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity  style={styles.btn} onPress={()=>{this.setState({checked:key})}}>
                                                    <Text style={styles.text}>{data}</Text>
                                                    <Ionicons name="md-radio-button-off" style={styles.img} size={30}></Ionicons>
                                                </TouchableOpacity>
                                            }
                                        </View>
                                    </View>
                            )
                        })
                    }
                </View>
            </ScrollView>
        )
        
        
    }
}

IndexScreen.navigationOptions = () => {
    return{
        title:'SIZE TYPE',
        headerTintColor:'white',
        headerStyle:{
            backgroundColor:'black'
        },
        headerLeft: (<TouchableOpacity>
            <AntDesign name="left" size={20} style={{color:'white'}}/>
        </TouchableOpacity>),
        headerRight: <TouchableOpacity>
        <Text style={styles.text_header_right}>Apply</Text>
        </TouchableOpacity>
    }
}
    
const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:'#E6E6E6'
    },
    img: {
        height: 30,
        width: 30
    },
    btn: {
        flexDirection:'row',
        justifyContent:"space-between"
    },
    text:{
        fontSize: 18
    },  
    text_header_right:{
        fontSize: 16,
        color: 'white',
        marginRight: 10
    },
    box: {
        marginTop: 5,
        width: '100%',
        flexDirection:'column',
        backgroundColor: '#FFFFFF',
        justifyContent:'space-between',
        paddingVertical: 20,
        paddingHorizontal:10    
    }, 
})
export default IndexScreen