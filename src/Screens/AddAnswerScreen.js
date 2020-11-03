import React, { useState, useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import {Context as QuestionContext} from '../Context/QuestionContext';

const AddAnswerScreen = ({navigation}) => {

    const [answer, setAnswer] = useState('');
    const {saveAnswer} = useContext(QuestionContext);
    return (
        <View style={styles.container} >

            <Spacer>
                <Text h3 style={{ color: 'white' }} > Your Answer </Text>
            </Spacer>

            <Spacer>
                <Input
                    value={answer}
                    multiline={true}
                    onChangeText={(newAnswer) => { setAnswer(newAnswer) }}
                    autoCorrect={false}
                    autoCapitalize="none"
                    inputContainerStyle={styles.inputContainerStyle}
                />
            </Spacer>

            <Spacer>
                <Spacer>
                    <Button buttonStyle={{
                        backgroundColor: '#9C3C37'
                    }} title="Answer" onPress={() => { saveAnswer(answer, navigation.getParam('questionId')) }} />

                </Spacer>
            </Spacer>

        </View>
    );
}

AddAnswerScreen.navigationOptions = () => {
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

export default AddAnswerScreen;