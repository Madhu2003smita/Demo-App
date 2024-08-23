import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const languages = [
    { id: '1', label: 'Arabic (العربية)' },
    { id: '2', label: 'Bosnian (босански)' },
    { id: '3', label: 'Chinese (中文 [Simplified])' },
    { id: '4', label: 'Chinese (中文 [Traditional])' },
    { id: '5', label: 'Dutch (Vlaams)' },
    { id: '6', label: 'English - United States (English)' },
    { id: '7', label: 'English - United Kingdom (English)' },
    { id: '8', label: 'French (français)' },
    { id: '9', label: 'German (Deutsch)' },
    { id: '10', label: 'Indonesian (Bahasa Indonesia)' },
    { id: '11', label: 'Italian (Italiano)' },
    { id: '12', label: 'Korean (한국인)' },
    { id: '13', label: 'Maltese (Malti)' },
    { id: '14', label: 'Norwegian (Norsk)' },
    { id: '15', label: 'Portuguese (português)' },
    { id: '16', label: 'Russian (Русский)' },
    { id: '17', label: 'Spanish (Española)' },
    { id: '18', label: 'Turkish (Türkçe)' },
    { id: '19', label: 'Vietnamese (Tiếng việt)' },
];

const LanguageSelector = () => {
    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.languageItem}>
            <Text style={styles.languageText}>{item.label}</Text>
            {item.selected && <Icon name="checkmark" size={20} color="#0000ff" />}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                
                <Text style={styles.headerText}>Change Language</Text>
            </View>
            <Image
                source={{ uri: 'https://img.icons8.com/fluency/96/000000/language.png' }} 
                style={styles.icon}
            />
            <Text style={styles.promptText}>Please Select Preferred Language</Text>
            <FlatList
                data={languages}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                style={styles.languageList}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 20,
        paddingTop: 50,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    headerText: {
        flex: 1,
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    icon: {
        width: 50,
        height: 50,
        alignSelf: 'center',
        marginVertical: 20,
    },
    promptText: {
        fontSize: 16,
        textAlign: 'center',
        marginBottom: 20,
        fontWeight: 'bold',
    },
    languageList: {
        flex: 1,
    },
    languageItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 15,  
    },
    languageText: {
        fontSize: 18,
    },

});

export default LanguageSelector;
/*<TouchableOpacity>
                    <Icon name="arrow-back" size={24} color="#000" />
                </TouchableOpacity>
                */