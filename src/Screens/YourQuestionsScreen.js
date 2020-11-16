import React, { useContext, useEffect } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as QuestionContext } from '../Context/QuestionContext';
import QuestionCard from '../Components/QuestionCard';

const YourQuestionsScreen = ({ navigation }) => {
    const { getQuestionsByUser, setCurrentQuestionId, state } = useContext(QuestionContext);

    useEffect(() => {
        console.log('inside questions by user useeffect');
        getQuestionsByUser();
    }, []);

    const navigateToQuestionScreen = (key, question, name, noOfAnswers, noOfInsightfuls, tag, filename, date) => {
        console.log(key);
        console.log('navigating to question screen');
        setCurrentQuestionId(key);
        navigation.navigate('QuestionScreen', { key, question, name, noOfAnswers, noOfInsightfuls, tag, filename, date });
    }

    return (
        <View>

            {state.questionsByUserLoaded ? <FlatList
                data={state.questionsByUser}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {
                            navigateToQuestionScreen(item.key,
                                item.question,
                                item.name,
                                item.noOfAnswers,
                                item.noOfInsightfuls,
                                item.tag,
                                item.filename,
                                item.date)
                        }} >
                            <QuestionCard
                                question={item.question}
                                name={item.name}
                                noOfAnswers={item.noOfAnswers}
                                noOfInsightfuls={item.noOfInsightfuls}
                                tag={item.tag}
                                key={item.key}
                                filename={item.filename}
                                date={item.date}
                            />
                        </TouchableOpacity>

                    )
                }}
            /> : <ActivityIndicator size="large" color="#CA534C" style={{ marginTop: 48, alignSelf: 'center' }} />}


        </View>
    );
}

YourQuestionsScreen.navigationOptions = ({ navigation }) => {
    return {
        // headerRight: () => (
        //     <View style={{ flexDirection: 'row' }} >
        //         <TouchableOpacity style={{ marginRight: 24 }} onPress={() => navigation.navigate('')}>
        //             <MaterialIcons name="sort" size={24} color="white" />
        //         </TouchableOpacity>
        //     </View>
        // ),
        headerLeft: () => (
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ marginLeft: 24 }} onPress={() => navigation.openDrawer()}>
                    <MaterialIcons name="menu" size={24} color="white" />
                </TouchableOpacity>
            </View>
        ),
        title: 'Your Questions',
        headerStyle: {
            backgroundColor: '#CA534C'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'normal',
            alignSelf: 'center',
            fontSize: 20
        }
    };
};


export default YourQuestionsScreen;