import React, { Component } from 'react';
import { View, StyleSheet, ScrollView, Dimensions, Text, TextInput, Image, FlatList } from "react-native"
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { 
    InstantSearch,
    connectInfiniteHits, 
    connectSearchBox,
    connectHighlight,
 } from 'react-instantsearch-native';

export default class SearchContainer extends Component {

    static navigationOptions = ({ navigation }) => {
        return {
            title: 'Contact',
        }
    }

    constructor(props) {
        super(props)

        this.categoryFilter = this.props.navigation.getParam('category')

        this.state = {
            text: this.categoryFilter
        }
    }

    render() {
        return <View style={styles.container}>
            <InstantSearch
                appId="4DXRIBBER1"
                apiKey="9fe1e734cdcce2d43418506d14549701"
                indexName="Specialist"
            >
                <View
                    style={{
                        flexDirection: 'row',
                    }}
                >
                    <SearchBox/>
                </View>
                <Hits/>
            </InstantSearch>
        </View>
    }
}

const Hits = connectInfiniteHits(({ hits, hasMore, refine }) => {

    /* if there are still results, you can
    call the refine function to load more */
    const onEndReached = function() {
        if (hasMore) {
            refine();
        }
    };
    return (
      <FlatList
        data={hits}
        onEndReached={onEndReached}
        keyExtractor={(item, index) => item.objectID}
        renderItem={({ item }) => {
          return (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={{ height: 100, width: 100 }}
                source={{ uri: item.image }}
              />
              <View style={{ flex: 1 }}>
                <Text>
                    <Highlight attribute="name" hit={item} />
                </Text>
                <Text>
                    <Highlight attribute="type" hit={item} />
                </Text>
              </View>
            </View>
          );
        }}
      />
    );
  });

const SearchBox = connectSearchBox(({ refine, currentRefinement }) => {
    return (
        <TextInput
            style={styles.searchBox}
            onChangeText={text => refine(text)}
            value={currentRefinement}
            placeholder={'Search'}
            clearButtonMode={'always'}
            spellCheck={false}
            autoCorrect={false}
            autoCapitalize={'none'}
        />
    );
});

const Highlight = connectHighlight(
    ({ highlight, attribute, hit, highlightProperty }) => {
      const parsedHit = highlight({
        attribute,
        hit,
        highlightProperty: '_highlightResult',
      });
      const highlightedHit = parsedHit.map((part, idx) => {
        if (part.isHighlighted)
          return (
            <Text key={idx} style={{ backgroundColor: '#ffff99' }}>
              {part.value}
            </Text>
          );
        return part.value;
      });
      return <Text>{highlightedHit}</Text>;
    }
  );

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EEEEEE',
    },
    searchBox: {
        height: 60,
        borderWidth: 1,
        padding: 10,
        margin: 10,
        flex: 1,
        backgroundColor: '#EEEEEE',
    }
})

