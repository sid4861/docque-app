import React, { useEffect, useContext } from 'react';
import { View, TouchableOpacity, StyleSheet, FlatList, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as questionContext } from '../Context/QuestionContext';
import QuestionCard from '../Components/QuestionCard';
import AnswerItem from '../Components/AnswerItem';
import { Text } from 'react-native-elements';

const YourAnswersScreen = ({ navigation }) => {

    const { getAnswersByUser, setCurrentQuestionId, state } = useContext(questionContext);

    useEffect(() => {
        console.log('inside answers by user useEffect');
        getAnswersByUser();
        // console.log(state.questions);
    }, []);


    const navigateToQuestionScreen = (key, question, name, noOfAnswers, noOfInsightfuls, tag, filename, date) => {
        console.log(key);
        console.log('navigating to question screen');
        setCurrentQuestionId(key);
        navigation.navigate('QuestionScreen', { key, question, name, noOfAnswers, noOfInsightfuls, tag, filename, date });
    }

    return (
        <View>

        {state.answersByUserLoaded ? <FlatList
                data={state.answersByUser}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                    return (

                        <View style={{ backgroundColor: '#fff', marginTop: 8 }} >


                            <TouchableOpacity onPress={() => {
                                navigateToQuestionScreen(item.questionId,
                                    item.question,
                                    item.name,
                                    item.noOfAnswers,
                                    item.questionNoOfInsightfuls,
                                    item.tag,
                                    item.filename,
                                    item.questionDate)
                            }} >

                                <QuestionCard
                                    question={item.question}
                                    name={item.name}
                                    noOfAnswers={item.noOfAnswers}
                                    noOfInsightfuls={item.questionNoOfInsightfuls}
                                    tag={item.tag}
                                    key={item.questionId}
                                    filename={item.filename}
                                    date={item.questionDate}
                                />
                            </TouchableOpacity>

                            <Text style={{ marginTop: 16, color: '#CA534C' }}> ANSWER </Text>

                            <AnswerItem
                                answer={item.answer}
                                noi={item.noOfInsightfuls}
                                date={item.date}
                                answerKey={item.key}
                                questionId={item.questionId}
                                userId={item.userId}
                                comments={item.comments}
                                name={item.name}
                            />

                        </View>


                    )
                }}
            /> : <ActivityIndicator size="large" color="#CA534C" style={{ marginTop: 48, alignSelf: 'center' }} />}

            


        </View>
    );
}

YourAnswersScreen.navigationOptions = ({ navigation }) => {
    return {
        // headerRight: () => (
        //     <View style={{ flexDirection: 'row' }} >
        //         <TouchableOpacity style={{ marginRight: 24 }} onPress={() => navigation.navigate('')}>
        //             <FontAwesome name="filter" size={24} color="white" />
        //         </TouchableOpacity>
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
        title: 'Your Answers',
        headerStyle: {
            backgroundColor: '#CA534C'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'normal',
            alignSelf: 'center',
            fontSize: 24
        }
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default YourAnswersScreen;