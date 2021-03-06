import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import QuestionCard from '../Components/QuestionCard';
import { Context as QuestionContext } from '../Context/QuestionContext';
import FloatingActionButton from '../Components/FloatingActionButton';
import CustomSortIconHomeScreen from '../Components/CustomSortIconHomeScreen';
import CustomFilterIconHomeScreen from '../Components/CustomFilterIconHomeScreen';
import HomeScreenFilterAndSort from '../Components/HomeScreenFilterAndSort';
import { Text } from 'react-native-elements';

const HomeScreen = ({ navigation }) => {

    const { getAllQuestions, setCurrentQuestionId, state } = useContext(QuestionContext);

    const from = navigation.getParam('from');
    const tagsFilter = navigation.getParam('tagsFilter');
    useEffect(() => {
        console.log('inside useEffect');
        console.log(navigation.getParam('from'));
        console.log(navigation.getParam('tagsFilter'));
        navigation.getParam('from') == 'TagFiltersScreen' ? getAllQuestions('mostInsightful', navigation.getParam('tagsFilter')) : getAllQuestions();
        // getAllQuestions();
        const listener = navigation.addListener('didFocus', () => {
            // getAllQuestions();
            console.log('inside did focus listener');
            console.log(navigation.getParam('from'));
            console.log(navigation.getParam('tagsFilter'));
            navigation.getParam('from') == 'TagFiltersScreen' ? getAllQuestions('mostInsightful', navigation.getParam('tagsFilter')) : getAllQuestions();
        });
        return () => {
            listener.remove();
        }
        // console.log(state.questions);
    }, []);

    const navigateToQuestionScreen = (key, question, name, noOfAnswers, noOfInsightfuls, tag, filename, date) => {

        console.log(key);
        console.log('navigating to question screen');
        setCurrentQuestionId(key);
        navigation.navigate('QuestionScreen', { key, question, name, noOfAnswers, noOfInsightfuls, tag, filename, date });
    }

    var questionsList;
    if (state.areQuestionsLoaded == true) {

        questionsList = <FlatList
            data={state.questions}
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
                            questionId={item.key}
                            filename={item.filename}
                            date={item.date}
                        />
                    </TouchableOpacity>
                )
            }}
        />

    }
    else {
        questionsList = <ActivityIndicator size="large" color="#CA534C" style={{ marginTop: 48, alignSelf: 'center' }} />;
    }

    return (
        <View style={styles.container}>
            <HomeScreenFilterAndSort />
            {questionsList}
            <FloatingActionButton route={'AddQuestionScreen'} />
        </View>


    );


};

HomeScreen.navigationOptions = ({ navigation }) => {
    return {
        // headerRight: () => (
        //     <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >

        //         <CustomSortIconHomeScreen menuStyle={{ marginRight: 24 }} />
        //     </View>
        // ),
        headerStyle: {
            backgroundColor: '#CA534C'
        },
        headerLeft: () => (
            // <View style={{ flexDirection: 'row', marginTop: 48, justifyContent:'space-evenly' }} >
            <TouchableOpacity style={{ marginLeft: 24 }} onPress={() => navigation.openDrawer()}>
                <MaterialIcons name="menu" size={24} color="white" />
            </TouchableOpacity>
            // {/* <CustomFilterIconHomeScreen menuStyle={{ marginLeft: 24, maxHeight: 400 }} /> */}
            // {/* </View> */}
        ),
        // title: '',
        headerTitle: () => (
            <TouchableOpacity style={{
                borderWidth: 2,
                borderColor: '#fff',
                borderRadius: 5,
                padding: 4,
                width: '80%',
                alignSelf: 'center',
                backgroundColor: '#fff'
            }} 
            onPress={() => navigation.navigate('SearchScreen')}
            >
                <Text>
                    Search Question
                    </Text>
            </TouchableOpacity>
        ),
        headerTintColor: '#ffffff',
        headerTitleStyle: {
            fontWeight: 'normal',
            alignSelf: 'center',
            letterSpacing: 4,
            fontSize: 24
        }
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

export default HomeScreen;