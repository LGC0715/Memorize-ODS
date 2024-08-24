// src/components/Footer.js  
import React from 'react';  
import { View, Text, StyleSheet } from 'react-native';  

const Footer = () => {  
    return (  
        <View style={styles.footer}>  
              <Text style={styles.footerText}>© 2024 ODS Memorize - Todos os direitos reservados</Text>
        </View>  
    );  
};  

const styles = StyleSheet.create({  
    footer: {  
        padding: 10,   
        backgroundColor: '#009688',
        alignItems: 'center',  
        justifyContent: 'center',  
        borderTopWidth: 1,  
        borderTopColor: '#ddd',  
        
    },  
    footerText: {  
        fontFamily: 'Poppins_700Bold',
        color: 'white',
        alignItems: 'center',
       
    },  
});  

export default Footer;