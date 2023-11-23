
import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';

// Create styles
const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    backgroundColor: '#E4E4E4',
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
    height:'20%',
    backgroundColor:'#5155ED'
  },
  heading:{
    flexDirection:'row',
    gap:30,
    backgroundColor:'#F0C043',
    marginTop:10
  }
});

// Create Document Component
export const ResumeLayout = ({name,email,linkedin,github}) => (
  <Document pageMode='fullScreen' pageLayout='singlePage'>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
          <Text>{name}</Text>
          <View style={styles.heading}>
            <Text>{email}</Text>
            <Text>{linkedin}</Text>
            <Text>{github}</Text>
          </View>
      </View>
      <View>
          <Text>Skills/Technologies</Text>
      </View>
    </Page>
  </Document>
);

