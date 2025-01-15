import { Text, View, FlatList } from 'react-native';
import { mockLegions } from '../data/mock-data';
import LegionGridTile from '../components/LegionGridTile';

export default function DashboardScreen({ navigation }) {
  function renderLegionItem(itemData) {
    function pressHandler() {
      navigation.navigate('Legions', { legionId: itemData.item.id });
    }

    return (
      <LegionGridTile
        title={itemData.item.title}
        onPress={pressHandler}
      />
    );
  }

  return (
    <View>
      <FlatList
        data={mockLegions}
        keyExtractor={(item) => item.id}
        renderItem={renderLegionItem}
        numColumns={2}
      />
    </View>
  );
}
