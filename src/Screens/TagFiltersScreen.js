import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, CheckBox, Button } from 'react-native-elements';
import { Context as QuestionContext } from '../Context/QuestionContext';

const TagFiltersScreen = ({navigation}) => {
    const [All, setAll] = useState(false);
    const [Cardiology, setCardiology] = useState(false);
    var selectedTags = [All, Cardiology];

    const { getAllQuestions } = useContext(QuestionContext);

    return (
        <View style={styles.container} >

            <CheckBox
                center
                title='All'
                checked={All}
                checkedColor='green'
                onPress={() => {
                    setAll(!All);
                    //selectedTags.map(item => {
                    //     if (Object.keys(item)[0] == 'All') {
                    //         // console.log(item['All']);
                    //         console.log(All);
                    //         item['All'] = !All;
                    //         // console.log(item['All']);
                    //     }

                    // })
                }}
            />

            <CheckBox
                center
                title='Cardiology'
                checked={Cardiology}
                checkedColor='green'
                onPress={() => {
                    setCardiology(!Cardiology);
                    // selectedTags.map(item => {
                    //     if (Object.keys(item)[0] == 'Cardiology') {
                    //         console.log(Cardiology);
                    //         item['Cardiology'] = !Cardiology;
                    //     }
                    // })
                }}
            />
            <View style={{ position: 'absolute', bottom: 0, alignSelf: 'center', width: '90%' }}>
                <Button
                    buttonStyle={{
                        backgroundColor: '#9C3C37',
                    }}
                    title="Apply"
                    color="#ffffff"
                    onPress={() => { navigation.navigate('HomeScreen', {from: 'TagFiltersScreen', tagsFilter: [...selectedTags]}) }}
                />
            </View>
        </View>
    );
}

TagFiltersScreen.navigationOptions = ({ navigation }) => {
    return {
        title: '',
        headerStyle: {
            backgroundColor: '#CA534C'
        },
        headerTintColor: '#ffffff',

    };
};


const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default TagFiltersScreen;