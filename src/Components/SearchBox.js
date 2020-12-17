import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, TextInput, StyleSheet } from 'react-native';
import { connectSearchBox } from 'react-instantsearch-native';

class SearchBox extends Component {
    render() {
        return (
            <View style={styles.inputContainerStyle}>
                <TextInput
                    onChangeText={text => this.props.refine(text)}
                    value={this.props.currentRefinement}
                    placeholder={'Search Question'}
                    clearButtonMode={'always'}
                    spellCheck={false}
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    style={{textAlign: 'center', fontSize: 16}}
                />
            </View>
        );
    }
}

SearchBox.propTypes = {
    refine: PropTypes.func.isRequired,
    currentRefinement: PropTypes.string,
};

const styles = StyleSheet.create({
    inputContainerStyle: {
        borderWidth: 2,
        borderColor: '#CA534C',
        borderRadius: 5,
        backgroundColor: '#ffffff',
        marginTop: 48,
        padding: 4,
        width: '80%',
        alignSelf: 'center'
    }
});

export default connectSearchBox(SearchBox);