import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import QuestionCard from '../Components/QuestionCard';
import { Context as QuestionContext } from '../Context/QuestionContext';
import FloatingActionButton from '../Components/FloatingActionButton';
const HomeScreen = ({navigation}) => {

    const { getAllQuestions, setCurrentQuestionId,  state } = useContext(QuestionContext);

    useEffect(() => {
        //console.log('inside useEffect');
        getAllQuestions();
       // console.log(state.questions);
    }, []);

    const navigateToQuestionScreen = (key, question, name, noOfAnswers, noOfInsightfuls, tag, filename, date) => {
        console.log(key);
        console.log('navigating to question screen');
        setCurrentQuestionId(key);
        navigation.navigate('QuestionScreen', {key, question, name, noOfAnswers, noOfInsightfuls, tag, filename, date});
    }

    return (
        <View>
            <FlatList
                data={state.questions}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => {navigateToQuestionScreen(item.key,
                        item.question,
                        item.name,
                        item.noOfAnswers,
                        item.noOfInsightfuls,
                        item.tag,
                        item.filename,
                        item.date)}} >

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
            />
            <FloatingActionButton route={'AddQuestionScreen'}/>
        </View>


    );


};

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        headerRight: () => (
            <View style={{ flexDirection: 'row' }} >
                <TouchableOpacity style={{ marginRight: 24 }} onPress={() => navigation.navigate('')}>
                    <FontAwesome name="filter" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity style={{ marginRight: 24 }} onPress={() => navigation.navigate('')}>
                    <MaterialIcons name="sort" size={24} color="white" />
                </TouchableOpacity>
            </View>
        ),
        title: 'DOCQUE',
        headerStyle: {
            backgroundColor: '#CA534C'
        },
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'normal',
            alignSelf: 'center',
            letterSpacing: 8,
            fontSize: 24
        }
    };
};

const styles = StyleSheet.create({
    container: {

    }
});

export default HomeScreen;