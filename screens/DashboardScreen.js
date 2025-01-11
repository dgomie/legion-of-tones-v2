import { Text, View } from 'react-native';

export default function DashboardScreen({ navigation }) {
  function renderLegionItem(itemData) {
    function pressHandler() {
      navigation.navigate('Legion', { categoryId: itemData.item.id });
    }

    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <Text>Dashboard Screen</Text>
    </View>
  );
}
