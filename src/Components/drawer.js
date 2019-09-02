import React, { Component } from 'react'
// import { DrawerItems, SafeAreaView ,DrawerActions} from 'react-navigation';
import { Alert, TouchableHighlight, View, StyleSheet, ScrollView, Image, Text, TextInput, TouchableOpacity, FlatList, Button } from 'react-native'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Data from './catdum'
import { getCatNote } from '../Publics/Redux/action/note'
import Modal from "react-native-modal";
class Drawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            name: '',
            image: '',
            data: [],
        }
    }
    setModalVisible(visible) {
        this.setState({ modalVisible: visible });
    }
    componentDidMount = async () => {
        console.log(this.props.notes)
        await this.props.dispatch(getCatNote());
        this.setState({
            data: this.props.notes,
        });
    }
    render() {
        console.log(this.props.notes);

        return (
            <>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
                    <Image source={require('../img/beb.jpg')} style={{ width: 150, height: 150, justifyContent: 'center', borderRadius: 100 }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 27, color: '#000000', justifyContent: 'center' }}>Shalom</Text>
                </View>
                <View>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ marginTop: '10%' }} >
                                <Image source={{ uri: item.image }}
                                    style={{ height: 30, width: 30, marginLeft: '10%' }} />
                                <Text style={{ position: 'absolute', marginLeft: '30%', marginTop: '1%', fontSize: 25 }}>{item.category}</Text>
                            </TouchableOpacity>
                        )}
                    />
                    <TouchableOpacity style={{ marginTop: '10%' }} onPress={() => {
                        this.setModalVisible(true);
                    }} >
                        <Image source={require('../img/plus.jpg')}
                            style={{ height: 30, width: 30, marginLeft: '10%' }} />
                        <Text style={{ position: 'absolute', marginLeft: '30%', marginTop: '1%', fontSize: 25 }}>Add Category</Text>
                    </TouchableOpacity>
                    <Modal isVisible={this.state.modalVisible} >
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <TextInput style={styles.inputBox}
                                placeholder="Image"
                                placeholderTextColor="black"
                                keyboardType="email-address"
                                onSubmitEditing={() => this.password.focus()}
                                onChangeText={(email) => this.setState({ email })}
                            />
                            <TextInput style={styles.inputBox}
                                placeholder="Category"
                                secureTextEntry={true}
                                placeholderTextColor="black"
                                onChangeText={(password) => this.setState({ password })}
                            />
                            <TouchableOpacity style={styles.button} >
                                <Text style={styles.buttonText}>Add</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button} onPress={()=>{
                                 this.setModalVisible(false);
                            }}>
                                <Text style={styles.buttonText}>Cancel</Text>
                            </TouchableOpacity>
                        </View>
                    </Modal>
                </View>

            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        notes: state.note.catList
    }
}
export default connect(mapStateToProps)(withNavigation(Drawer))

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    input: {
        borderBottomWidth: 2,
        borderColor: '#667867'
    }, button: {
        width: 300,
        backgroundColor: 'black',
        borderRadius: 25,
        marginVertical: 10,
        paddingVertical: 13
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white',
        textAlign: 'center'
    },
    inputBox: {
        width: 300,
        borderRadius: 25,
        paddingHorizontal: 16,
        fontSize: 16,
        color: 'black',
        marginVertical: 10,
        backgroundColor: "white",
        borderColor: 'black'
    },
});