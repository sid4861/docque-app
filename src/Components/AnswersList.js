import React from 'react';
import {View, FlatList} from 'react-native';
import {Text} from 'react-native-elements';
import AnswerItem from './AnswerItem';

const AnswersList = ({answers}) => {
    return(
        <View>
                  <FlatList
                data={answers}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                    return (
                        
                        <AnswerItem 
                    answer={item.answer}
                    noi={item.noOfInsightfuls}
                    date={item.date}
                    answerKey = {item.key}
                    questionId = {item.questionId}
                    userId = {item.userId}
                    comments = {item.comments}
                    name = {item.name}
                    />
    
                    )
                }}
            />
        </View>
    );
}

export default AnswersList;