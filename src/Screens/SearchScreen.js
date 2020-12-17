import React from 'react';
import { StyleSheet, View } from 'react-native';
import algoliasearch from 'algoliasearch';
import { InstantSearch } from 'react-instantsearch-native';
import ConnectedSearchBox from '../Components/SearchBox';
import InfiniteHits from '../Components/InfiniteHits';

const algoliaClient = algoliasearch('TCMA4GFMCF', 'f54088afcefaf97f9afc0c8711d89e93');

const searchClient = {
    search(requests) {
        if (requests.every(({ params }) => !params.query)) {
            return Promise.resolve({
                results: requests.map(() => ({
                    hits: [],
                    nbHits: 0,
                    nbPages: 0,
                    page: 0,
                    processingTimeMS: 0,
                })),
            });
        }

        return algoliaClient.search(requests);
    },
};

const SearchScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <InstantSearch searchClient={searchClient} indexName="questions">
                <ConnectedSearchBox  />
                <InfiniteHits  navigationProp={navigation} />
            </InstantSearch>
        </View>
    );
}

SearchScreen.navigationOptions = ({ navigation }) => {
    return {
        headerStyle: {
            backgroundColor: '#CA534C'
        },
        title: 'Search Question',
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
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});


export default SearchScreen;