import React, { Component } from 'react';
import { TouchableOpacity, FlatList, View, Text, StyleSheet, TextInput } from 'react-native'
import { connect } from 'react-redux';
import moment from 'moment';
import { withNavigation } from 'react-navigation';
import { getNote } from '../Publics/Redux/action/note'
import Data from './dummy';
console.logYellowBox = true;
class Card extends Component {
    constructor(props) {
        super(props)
        this.state = {
            data: Data,
            refresh: false,
            page: 0,
            isLoading: false,
            color :['#2FC2DF', '#C0EB6A', '#FAD06C', '#FF92A9'],
            tes:[]
        };
    };
    componentDidMount = async () => {
        console.log(this.props.notes)
        await this.props.dispatch(getNote());
        this.setState({
            tes: this.props.notes,
        });
    }
    _keyExtractor = (item, index) => item.idNote + ''
    FlatListItem = (item, key) => (

        <TouchableOpacity onPress={() => this.props.navigation.navigate('editNotes', item)} style={{
            elevation: 5,
            width: 136,
            height: 138,
            paddingHorizontal: 20,
            margin: 14,
            flex: 1,
            borderRadius: 5,
            backgroundColor: item.item.idCat == 1 ? '#2FC2DF' :
                    item.item.idCat == 2 ? '#C0EB6A' :
                        item.item.idCat == 3 ? '#FAD06C' :
                            item.item.idCat == 4 ? '#FF92A9' : '#2F4356'

        }} onLongPress={() => this.confirmation(item.item.id)}>
            {/* {console.log(item)} */}
            <View>
                <Text style={styles.date}>{moment(item.item.notes_time).format('D MMM')}</Text>
                <Text style={styles.title}>{item.item.title}</Text>
                {
                    item.item.name_category == null ?
                        <Text>category notfound </Text> :
                        <Text style={styles.category}>{item.item.name_category}</Text>
                }
                <Text numberOfLines={4} style={styles.content}>{item.item.notes_note}</Text>
            </View>
        </TouchableOpacity>
    )

    render() {
        // if (this.state.data.length % 2 == 1) {
        //     this.state.data.push('')
        // }
        return (
            <View style={{ height: '109%' }}>
                <View style={{
                    marginVertical: 7,
                }}>
                    <TextInput style={{ borderColor: "black", borderWidth: 1, paddingLeft: 20, marginHorizontal: "10%", borderRadius: 50 }} selectionColor={'#7eeddf'} placeholder={'Search ..'} />
                </View>
                <FlatList
                    data={this.state.data}
                    numColumns={2}
                    // keyExtractor={this._keyExtractor}
                    renderItem={this.FlatListItem}
                // onEndReachedThreshold={0.1}
                // onEndReached={() => this.handlePage()}
                // refreshControl={
                //     <RefreshControl
                //         // refreshing={this.props.notes.isLoading}
                //         onRefresh={this._onRefresh}
                //     />
                // }
                />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        notes: state.note.noteList
    }
}
export default connect(mapStateToProps)(withNavigation(Card))
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    date: {
        paddingTop: 8,
        fontFamily: 'OpenSans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 11,
        textAlign: 'right',
        color: '#FFFFFF'
    },
    title: {
        fontSize: 15,
        fontWeight: 'bold',
        fontStyle: 'normal',
        color: '#FFFFFF'
    },
    category: {
        width: 72,
        height: 13,
        fontSize: 11,
        color: '#FFFFFF'
    },
    content: {
        fontWeight: 'bold',
        fontSize: 11,
        fontStyle: 'normal',
        color: '#FFFFFF'
    },
    container: {
        marginBottom: 20,
        paddingTop: 18,
        justifyContent: 'center',
        width: '100%',
        marginTop: 20,
        paddingHorizontal: 20,
        // alignItems: 'top',
        // paddingBottom: 50,
    },
    input: {
        borderRadius: 15,
        fontSize: 13,
        borderColor: '#E8E8E8',
        paddingLeft: 20,
        paddingRight: 20,
        height: 40,
        elevation: 3
    },
})