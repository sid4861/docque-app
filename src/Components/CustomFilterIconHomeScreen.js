import React, { useContext, useRef } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Menu, { MenuItem, MenuDivider } from 'react-native-material-menu';
import { Context as QuestionContext } from '../Context/QuestionContext';
import { FontAwesome } from '@expo/vector-icons';

const CustomFilterIconHomeScreen = ({ menuStyle, navigation }) => {

    

    const { getAllQuestions, setQuestionsLoadedFalse, state } = useContext(QuestionContext);
    _menu = null;
    setMenuRef = ref => {
        // this._menu = ref;
        _menu = ref;
    };
    showMenu = () => {
        _menu.show();
    };
    hideMenu = () => {
        _menu.hide();
    };

    optionClick = (filterByParam) => {
        _menu.hide();
        console.log('recent questions clicked');
        // console.log(state.currentQuestionId);
        setQuestionsLoadedFalse();
        console.log(filterByParam);
        getAllQuestions(undefined, filterByParam);
    };
    // const filterIconRef = useRef();
    return (
        <View style={menuStyle} >
            <Menu
                ref={(ref) => { setMenuRef(ref) }}
                button={
                    <TouchableOpacity onPress={() => { showMenu() }} >
                        <FontAwesome name="filter" size={24} color="white" />
                    </TouchableOpacity>
                }
                style={{ borderColor: '#ffffff' }}
            >

                <MenuItem
                    onPress={() => { optionClick('All') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    All
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { optionClick('Cardiology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Cardiology
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { optionClick('Cosmetology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Cosmetology
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { optionClick('Covid 19') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Covid 19
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { optionClick('Dental Sciences') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Dental Sciences
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { optionClick('Dermatology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Dermatology
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { optionClick('Endocrinology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Endocrinology
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { optionClick('ENT') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    ENT
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { optionClick('Gastroenterology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Gastroenterology
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('General Medicine') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    General Medicine
                    </MenuItem>
                <MenuDivider />



                <MenuItem
                    onPress={() => { optionClick('General Surgery') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    General Surgery
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('Gynecology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Gynecology
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('ICU') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    ICU
                    </MenuItem>
                <MenuDivider />

                <MenuItem
                    onPress={() => { optionClick('Nephrology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Nephrology
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('Neurology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Neurology
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('Oncology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Oncology
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('Ophthalmology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Ophthalmology
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('Pathology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Pathology
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('Pediatrics') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Pediatrics
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('Plastic Surgery') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Plastic Surgery
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('Psychiatry') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Psychiatry
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('Radiology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Radiology
                    </MenuItem>
                <MenuDivider />


                <MenuItem
                    onPress={() => { optionClick('Urology') }}
                    style={{ backgroundColor: '#CA534C' }}
                    underlayColor='#9C3C37'
                    textStyle={{ color: '#ffffff', fontSize: 16 }}
                >
                    Urology
                    </MenuItem>
                <MenuDivider />


            </Menu>
        </View>
    );


};


export default CustomFilterIconHomeScreen;