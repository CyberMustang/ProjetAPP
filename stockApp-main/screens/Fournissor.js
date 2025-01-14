import {StyleSheet, Text, TextInput, View, TouchableOpacity, Image} from 'react-native';
import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import RollbackOutlined from '@ant-design/icons';
import TableItem from '../component/TableItem';

export default function Fournissor() {

    const navigation = useNavigation();

    const HandleNavigate = () => {
        navigation.replace('Home');
        console.log('Home');
    };  

    const handleDeleteItem = (index) => {
        const updatedItems = [...items];
        updatedItems.splice(index, 1);
        setItems(updatedItems);
    };

    return (
        <View>
            <TouchableOpacity onPress={() => HandleNavigate('Home')} style={styles.logout}>
            <Text style={styles.cancel}>Cancel</Text>
            </TouchableOpacity>
            <View>
                <RollbackOutlined style={styles.icon} onPress={HandleNavigate}/>
            </View>

            <View style={styles.inputview}>
                <TextInput
                  placeholder="Nom"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Adresse"
                  style={styles.input}
                />
                <TextInput
                  placeholder="Ajout/Modifier/Suppression"
                  style={styles.input}
                />
            </View>     
            <TableItem />    
        </View>
    );
}

const styles = StyleSheet.create({
    logout: {
        color: 'black',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: 10,
        borderRadius: 6,
        color: '#3D3D3D',
        backgroundColor: '#fff',
        borderWidth: 0,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        userSelect: 'none',
        width: 200,
        margin: 20,
      },

    dashbord: {
        fontSize: 30,
        textAlign: 'center',
        justifyContent: 'center',
    },

    icon: {
        fontSize: 40,
        marginRight: 10,
    },

    cancel: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
    },

    inputview: {
        flex: 1, 
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginBottom: 40,
        display: 'inline-flex',
    },

    input: 
    {
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        height: 5,
        borderRadius: 6,
        color: '#000000',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 0.5 },
        shadowOpacity: 0.1,
        shadowRadius: 1,
        width: 170,
        height: 40,
        padding: 10,
        marginRight: 20,
        marginLeft: 20,
        margin: 7   ,
        fontSize: 15,
        textAlign: 'center',
      },
      
});