import React, { useState, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import { Context as QuestionContext } from '../Context/QuestionContext';

const AddCommentScreen = ({ navigation }) => {

    const [comment, setComment] = useState('');
    const [saveCommentClicked, setSaveCommentClicked] = useState(false);
    const { saveComment } = useContext(QuestionContext);
    var addCommentScreenVariable;

    if (!saveCommentClicked) {
        addCommentScreenVariable = <View  >

            <Spacer>
                <Text h3 style={{ color: 'white' }} > Your Comment </Text>
            </Spacer>

            <Spacer>
                <Input
                    value={comment}
                    multiline={true}
                    onChangeText={(newComment) => { setComment(newComment) }}
                    autoCorrect={false}
                    autoCapitalize="none"
                    inputContainerStyle={styles.inputContainerStyle}
                />
            </Spacer>

            <Spacer>
                <Spacer>
                    <Button buttonStyle={{
                        backgroundColor: '#9C3C37'
                    }} title="Comment" onPress={() => { saveComment(comment, navigation.getParam('answerId')); setSaveCommentClicked(true) }} />

                </Spacer>
            </Spacer>

        </View>
    } else {
        addCommentScreenVariable = <View style={{ alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 48, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', paddingTop: 16 }} > Saving Comment </Text>
        </View>


    }

    return (
        <View style={styles.container} >
            { addCommentScreenVariable}
        </View>

    );
}

AddCommentScreen.navigationOptions = () => {
    return {
        header: () => false
    };
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#CA534C'
    },
    inputContainerStyle: {
        borderWidth: 1,
        borderColor: '#CA534C',
        borderRadius: 5,
        backgroundColor: '#ffffff',
    }
});

export default AddCommentScreen;