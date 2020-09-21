import React from 'react';
import { withNavigation } from 'react-navigation';
import Spacer from './Spacer';
import { Button } from 'react-native-elements';


const ButtonPrimary = ({ navigation, text, routeName }) => {
    return (

        <Spacer>
            <Button buttonStyle={{
                backgroundColor: '#9C3C37'
            }} title={text} onPress={() => { navigation.navigate(routeName) }} />
        </Spacer>
    );
};

export default withNavigation(ButtonPrimary);