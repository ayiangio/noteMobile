import React, { Fragment, Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image, TextInput,
    Picker
} from 'react-native';
import { connect } from 'react-redux';
import { addNote } from '../../Publics/Redux/action/note'
import { withNavigation } from 'react-navigation';
class Add extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            userData: [],
            pattern: [],
        };

    }
    add = () => {
        const data={
            idCat : this.state.category,
            desc : this.state.desc,
            title : this.state.title,
        }
        // console.log(data);
         this.props.dispatch(addNote(data))
            .then(() => {
                this.props.navigation.push('home');
                console.log('berhasil')
            })
    }
    render() {


        return (
            <View style={style.body} >
                <View style={style.navbar}>
                    <TouchableOpacity style={style.profilnavbar} onPress={() => this.props.navigation.navigate('home')}>
                        <Image
                            style={{ width: 32, height: 32, overflow: "hidden" }}
                            source={require('../../img/left.jpg')}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: '40%', fontSize: 16, fontWeight: "bold" }}>Add Note</Text>
                    <TouchableOpacity style={style.scornavbar}
                        onPress={this.add}
                    >
                        <Image
                            style={{ width: 32, height: 32, borderRadius: 20 }}
                            source={require('../../img/true.jpg')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ position: 'absolute', marginTop: '30%' }}>
                    <TextInput style={{ width: 200 }}
                        placeholder="Title"
                        placeholderTextColor="black"
                        multiline={true}
                        keyboardType="email-address"
                        onChangeText={(title) => this.setState({ title })}
                    />
                    <TextInput style={{ width: 400, height: 100 }}
                        placeholder="Desc"
                        placeholderTextColor="black"
                        multiline={true}
                        numberOfLines={2}
                        keyboardType="email-address"
                        onChangeText={(desc) => this.setState({ desc })}
                    />
                    
                    <Picker
                        selectedValue={this.state.catgeory}
                        style={{ height: 50, width: 100, marginLeft: '10%' }}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({ category: itemValue })
                        }>
                            {/* <Text>Category</Text> */}
                        {this.props.notes.map((item) => {
                            return (
                                <Picker.Item label={item.category} value={item.idCat} />
                            )
                        })}

                    </Picker>
                </View>

            </View>
        )
    }
}
const mapStateToProps = state => {
    return {
        notes: state.note.catList
    }
}
export default connect(mapStateToProps)(withNavigation(Add));


const style = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "white"
    },
    navbar: {
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 4,
        elevation: 3,
        shadowOffset: {
            height: 2,
            width: 0
        },
        shadowColor: "#111",
        shadowOpacity: 0.2,
        shadowRadius: 1.2,
        top: 0,
        left: "0%",
        width: '100%',
        height: 56,
        position: "absolute"
    },
    profilnavbar: {
        top: 5,
        left: 5,
        position: "absolute",
        padding: 11
    },
    scornavbar: {
        top: 5,
        position: "absolute",
        alignItems: "center",
        right: 5,
        padding: 11
    },
    buttonContainer: {
        height: 65,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: 200,
        borderRadius: 30,
        top: 120
    },
    loginButton: {
        backgroundColor: "black",
    },
    loginText: {
        color: 'white',
        fontSize: 40
    },
})