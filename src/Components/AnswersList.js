import React, { useState, useContext, useCallback } from 'react';
import { View, FlatList, RefreshControl } from 'react-native';
import { Text } from 'react-native-elements';
import AnswerItem from './AnswerItem';
import { Context as QuestionContext } from '../Context/QuestionContext';

const AnswersList = ({ answers }) => {

    const [refreshing, setRefreshing] = React.useState(false);

    const { getAllAnswers } = useContext(QuestionContext);

    const onRefresh = useCallback(() => {
        setRefreshing(true);
        try {
            getAllAnswers();
            setRefreshing(false);
        } catch (err) {
            console.log(err);
        }

    }, [refreshing]);

    return (
        <View style={{ flex: 1 }} >
            <FlatList
                data={answers}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                    return (

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

                    )
                }}
                refreshControl={
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
                }
            />
        </View>
    );
}

export default AnswersList;