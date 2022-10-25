import { View, Text, TextInput, StyleSheet } from 'react-native';

function TextField({ index, label }) {
  const styles = StyleSheet.create({
    item: {
      display: 'flex',
      flexDirection: 'row',
      position: 'relative',
      marginTop: '10%'
    },
    label: {
      fontSize: '20%',
      color: '#888',
      fontSize: '20%',
      position: 'absolute',
      bottom: '100%',
    },
    input: {
      fontSize: '20%',
      borderBottomColor: '#888',
      borderBottomWidth: '1px',
      width: '100%',
    }
  });
  return (
    <View style={styles.item} key={`item-${label}`} id={`text-${index}`}>
      <Text style={styles.label} key={`text-${index}`} id={`text-${index}`}>
        {label}
      </Text>
      <TextInput
        style={styles.input}
        key={`input-${index}`}
        id={`text-${index}`}
      />
    </View>
  );
}

export default TextField;
