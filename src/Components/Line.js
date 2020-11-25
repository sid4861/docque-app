import React from 'react'
import { View } from 'react-native';
import Spacer from './Spacer';

const Line = () => {
    return (
        <Spacer>
            <Spacer>
                <View
                    style={{
                        borderBottomColor: '#FFFFFF',
                        borderBottomWidth: 1,
                    }}
                />
            </Spacer>

        </Spacer>
    );

}

export default Line;
