import React, { Component } from 'react'
// import { DrawerItems, SafeAreaView ,DrawerActions} from 'react-navigation';
import { Alert, Modal, TouchableHighlight, View, StyleSheet, ScrollView, Image, Text, TextInput, TouchableOpacity, FlatList } from 'react-native'
import { connect } from 'react-redux';
import { withNavigation } from 'react-navigation';
import Data from './catdum'
import { getCatNote } from '../Publics/Redux/action/note'

class Drawer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            modalVisible: false,
            name: '',
            image: '',
            data: Data,
            tes:[]
        }
    }
    componentDidMount = async () => {
        console.log(this.props.notes)
        await this.props.dispatch(getCatNote());
        this.setState({
            tes: this.props.notes,
        });
    }
    render() {
        console.log(this.state.tes);
        
        return (
            <>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginVertical: 25 }}>
                    <Image source={require('../img/beb.jpg')} style={{ width: 150, height: 150, justifyContent: 'center', borderRadius: 100 }} />
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                    <Text style={{ fontSize: 27, color: '#000000', justifyContent: 'center' }}>Shalom</Text>
                </View>
                <View style={{ height: '65%' }}>
                    <FlatList
                        data={this.state.data}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity style={{ marginTop: '30%' }}>
                                <Image source={{ uri: item.image }}
                                    style={{ height: 30, width: 30, marginLeft: '10%' }} />
                                <Text style={{ position: 'absolute', marginLeft: '30%', marginTop: '1%', fontSize: 25 }}>{item.category}</Text>
                            </TouchableOpacity>
                        )}
                    />

                <Text>TEs</Text>
                </View>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        notes: state.note.noteList
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
    }
});