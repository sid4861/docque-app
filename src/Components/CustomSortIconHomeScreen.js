import React, { useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import {Text} from 'react-native-elements';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { MaterialIcons } from '@expo/vector-icons';
import { Context as QuestionContext } from '../Context/QuestionContext';

const CustomSortIconHomeScreen = ({ menuStyle, navigation }) => {

    const { getAllQuestions, setQuestionsLoadedFalse, state } = useContext(QuestionContext);
    let _menu = null;
    const setMenuRef = ref => {
        // this._menu = ref;
        _menu = ref;
    };
    const showMenu = () => {
        _menu.show();
    };
    const hideMenu = () => {
        _menu.hide();
    };

    const option1Click = () => {
        _menu.hide();
        console.log('recent questions clicked');
        // console.log(state.currentQuestionId);
        setQuestionsLoadedFalse();
        getAllQuestions( 'recent', undefined);
    };
    const option2Click = () => {
        _menu.hide();
        console.log('older questions clicked');
        setQuestionsLoadedFalse();
        getAllQuestions('older', undefined);
    };
    const option3Click = () => {
        _menu.hide();
        console.log('most liked clicked', undefined);
        setQuestionsLoadedFalse();
        getAllQuestions();
    };
    const option4Click = () => {
        _menu.hide();
        console.log('most answered clicked', undefined);
        setQuestionsLoadedFalse();
        getAllQuestions('answers', undefined);
    };


    return (
        <View style={menuStyle} >
            <Menu
                ref={(ref) => { setMenuRef(ref) }}
                button={
                    <TouchableOpacity onPress={() => { showMenu() }}  style={{flexDirection: 'row'}} >
                        <MaterialIcons name="sort" size={24} color="#CA534C"  style={{marginLeft: 16}} />
                        <Text style={{color: '#CA534C', marginLeft: 16, fontSize: 16}} >Sort</Text>
                    </TouchableOpacity>
                }
                style={{ borderColor: '#ffffff' }}
            >

                <MenuItem
                    onPress={() => { option1Click() }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Recent Questions
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { option2Click() }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Older Questions
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { option3Click() }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Most Liked
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { option4Click() }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Most Answered
                    </MenuItem>
                <MenuDivider />


            </Menu>
        </View>
    );


};


export default CustomSortIconHomeScreen;