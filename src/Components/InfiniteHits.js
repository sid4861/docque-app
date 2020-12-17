import React, {useContext} from 'react';
import { View, FlatList, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { connectInfiniteHits } from 'react-instantsearch-native';
import { Context as QuestionContext } from '../Context/QuestionContext';

const InfiniteHits = ({ hits, hasMore, refineNext, navigationProp }) => {

    const { setCurrentQuestionId } = useContext(QuestionContext);

    const navigateToQuestionScreen = (key, question, name, noOfAnswers, noOfInsightfuls, tag, filename, date) => {
        console.log(key);
        console.log('navigating to question screen');
        setCurrentQuestionId(key);
        navigationProp.navigate('QuestionScreen', { key, question, name, noOfAnswers, noOfInsightfuls, tag, filename, date });
    }

    return (
        <FlatList
            data={hits}
            keyExtractor={item => item.objectID}
            onEndReached={() => hasMore && refineNext()}
            renderItem={({ item }) => (
                <TouchableOpacity onPress={() => {
                    navigateToQuestionScreen(item.objectID,
                        item.question,
                        item.name,
                        item.noOfAnswers,
                        item.noOfInsightfuls,
                        item.tag,
                        item.filename,
                        item.date)
                }} >
                    <View style={{
                        marginTop: 8, backgroundColor: 'white', padding: 8, borderBottomWidth: 1,
                        borderColor: '#6c6c6c'
                    }} >
                        <Text style={styles.questionStyle} >{item.question}</Text>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginTop: 16 }} >
                            <Text style={{ fontSize: 12, color: '#6C6C6C' }} >Answers {item.noOfAnswers}</Text>
                            <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#CA534C' }} >{item.tag}</Text>
                        </View>
                    </View>
                </TouchableOpacity>
            )}
        />
    );

};

const styles = StyleSheet.create({
    questionStyle: {
        fontWeight: 'bold',
        fontSize: 16,
        width: 400,
        lineHeight: 24
    },
});

export default connectInfiniteHits(InfiniteHits);
