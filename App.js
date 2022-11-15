//API Call using FETCH 
import React from 'react';

import { StyleSheet,StatusBar,Text, View, TouchableHighlight } from 'react-native';

export default function App() {

  let [quote, setQuote] = React.useState('')

  let [source, setSource] = React.useState('')

  const fetchApiCall = () => {
//Used public url
    fetch("http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json", {

     

      "method": "POST",

      "headers": {
   //Used public url
        "x-rapidapi-host": "http://www.7timer.info/bin/api.pl?lon=113.17&lat=23.09&product=astro&output=json",
//Use public url api key
        "x-rapidapi-key": ""

      }

    })

      .then(response => response.json())

      .then(response => {

        setQuote(response.content);

        setSource(response.originator.name)

      })

      .catch(err => {

        console.log(err);

      });

  }

  return (

    <View style={styles.container}>

      <Text style={styles.title}>API Calls</Text>

      <Text>Example with fetch and Axios</Text>

      <TouchableHighlight onPress={fetchApiCall}>

        <View style={styles.button}>

          <Text style={styles.buttonText}>Use Fetch API</Text>

        </View>

      </TouchableHighlight>

      <View>

        <Text>{quote}</Text>

        <Text>{source}</Text>

      </View>

      <StatusBar style="auto" />

    </View>

  );

}

const styles = StyleSheet.create({

  container: {

    flex: 1,

    backgroundColor: '#AAA',

    alignItems: 'center',

    justifyContent: 'center',

    color: '#fff'

  },

  title: {

    fontSize: 35,

    color: '#fff'

  },

  button: {

    padding: 10,

    marginVertical: 15,

    backgroundColor: '#0645AD'

  },

  buttonText: {

    color: '#fff'

  }

});
// api call fetch closed




// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
    
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
