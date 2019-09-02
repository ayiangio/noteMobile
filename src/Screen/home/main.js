import React, { Fragment, Component } from 'react';
import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    Image
} from 'react-native';

import { Button, Icon, Fab } from 'native-base';
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Card from '../../Components/card'
class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: '',
            userData: [],
            pattern: [],
        };

    }
    render() {
        return (
            <View style={style.body} >
                <View style={style.navbar}>
                    <TouchableOpacity style={style.profilnavbar} onPress={() => {
                        this.props.navigation.openDrawer();
                    }}>
                        <Image
                            style={{ width: 32, height: 32, borderRadius: 100, overflow: "hidden" }}
                            source={require('../../img/beb.jpg')}
                        />
                    </TouchableOpacity>
                    <Text style={{ marginHorizontal: '40%', fontSize: 16, fontWeight: "bold" }}>NOTE APP</Text>
                    <TouchableOpacity style={style.scornavbar}
                        onPress={() => this.props.navigation.navigate('board', {
                            idUser: this.state.id,
                        })}
                    >
                        <Image
                            style={{ width: 32, height: 32 }}
                            source={require('../../img/sort.jpg')}
                        />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: '20%' }}>
                    <Card />

                </View>
                <Fab
                    active={this.state.active}
                    position="bottomRight"
                    style={{ backgroundColor: 'white' }}
                    onPress={()=>{this.props.navigation.navigate('add')}}>
                     <Image
                            style={{ width: 32, height: 32 }}
                            source={require('../../img/add.jpg')}
                        />
                </Fab>
            </View>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        note: state.note.noteList
    };
};
export default connect(mapStateToProps)(withNavigation(Main));
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