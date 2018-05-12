import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image
} from 'react-native';

class InstaClone extends Component{
    render() {
        return(
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text>Instagram</Text>
                </View>
                <View style={styles.userBar}>

                </View>
                <Image
                    source={{uri: 'https://lh3.googleusercontent.com/b_ZsQ4el1w2xg632FNuFIvAL__luN9sRNNgJ-DldmbqtNBnW3zK13QkIVhLwDrs5oCYn5uDJi0anncm8-Kz5Zfz8'}}
                    style={{ width: 100 + '%', height: 100 }}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: 100 + '%',
        height: 100 + '%'
    },
    header: {
        width: 100 + '%',
        height: 55,
        backgroundColor: '#fafafa',
        borderBottomColor: '#e9e9e9',
        borderBottomWidth: StyleSheet.hairlineWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },
    userBar: {
        width: 100 + '%',
        height: 50,
        backgroundColor: '#ffffff',

    }
})

export default InstaClone;
