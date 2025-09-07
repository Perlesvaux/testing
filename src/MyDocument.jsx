import React from 'react';
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    backgroundColor: '#E4E4E4'
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1
  }
});

// Create Document Component
export default function MyDocument() 
{
  return <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text>Section #1</Text>
        <Text>lorem ipsum dolo</Text>
      </View>
      <View style={styles.section}>
        <Text>Section #2</Text>
        <Text>a b c d e f g</Text>
      </View>
    </Page>
  </Document>
};
