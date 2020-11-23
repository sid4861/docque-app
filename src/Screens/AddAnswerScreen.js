import React, { useState, useContext } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../Components/Spacer';
import { Context as QuestionContext } from '../Context/QuestionContext';

const AddAnswerScreen = ({ navigation }) => {

    const [answer, setAnswer] = useState('');
    const [saveAnswerClicked, setSaveAnswerClicked] = useState(false);
    const { saveAnswer } = useContext(QuestionContext);
    var addAnswerScreenVariable;

    if (!saveAnswerClicked) {
        addAnswerScreenVariable = <View  >

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
                    }} title="Answer" onPress={() => { saveAnswer(answer, navigation.getParam('questionId')); setSaveAnswerClicked(true) }} />

                </Spacer>
            </Spacer>

        </View>
    } else {
        addAnswerScreenVariable = <View style={{ alignItems: 'center' }}>
            <ActivityIndicator size="large" color="#ffffff" style={{ marginTop: 48, alignSelf: 'center' }} />
            <Text style={{ color: '#fff', paddingTop: 16 }} > Saving answer </Text>
        </View>


    }

    return (
        <View style={styles.container} >
            { addAnswerScreenVariable}
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