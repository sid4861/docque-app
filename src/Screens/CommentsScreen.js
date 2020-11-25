import React, { useContext, useEffect } from 'react';
import { View, StyleSheet, FlatList, Image, ActivityIndicator } from 'react-native';
import { Text } from 'react-native-elements';
import { Context as QuestionContext } from '../Context/QuestionContext';
import CommentItem from '../Components/CommentItem';
import noAnswers from '../../assets/no-answers.png';
import FloatingActionButton from '../Components/FloatingActionButton';

const CommentsScreen = ({ navigation }) => {
    const answerId = navigation.getParam('answerId');

    const { getCommentsByAnswerId, state } = useContext(QuestionContext);

    useEffect(() => {
        //console.log('inside useEffect');
        // getCommentsByAnswerId(answerId);
        const listener = navigation.addListener('didFocus', () => {
            getCommentsByAnswerId(answerId);
        });
        return () => {
            listener.remove();
        }
        // console.log(state.questions);
    }, []);

    var comments;
    if (state.areCommentsLoaded == true) {
        if (state.comments.length > 0) {
            comments = <FlatList
                data={state.comments}
                keyExtractor={(item) => item.key}
                renderItem={({ item }) => {
                    return (

                        <CommentItem
                            name={item.name}
                            date={item.date}
                            comment={item.comment}
                        />

                    )
                }}
            />
        } else {
            comments = <View style={{ marginTop: 100, flexDirection: 'column', alignItems: 'center' }} ><Image style={{ width: 350, height: 350 }} source={noAnswers} /><Text style={{ textAlign: 'center', lineHeight: 24, fontSize: 14, color: '#6C6C6C' }} > Oops! No comments for this answer, add a comment by tapping on the + button below.   </Text></View>
        }

    } else {
        comments = <ActivityIndicator size="large" color="#CA534C" style={{ marginTop: 48, alignSelf: 'center' }} />;
    }

    return (
        <View style={styles.container} >
            {comments}
            <FloatingActionButton route={'AddCommentScreen'} params={{ answerId: answerId }} />
        </View>
    );
}

CommentsScreen.navigationOptions = ({ navigation }) => {
    return {
        title: 'COMMENTS',
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


export default CommentsScreen;