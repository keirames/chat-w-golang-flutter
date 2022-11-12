import { ScrollView, StyleSheet } from 'react-native';
import RoomList from 'src/modules/rooms/room-list';
import { View } from '../components/Themed';
import FriendList from '../src/modules/friends/friend-list';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<'TabOne'>) {
  return (
    <View style={styles.container}>
      <ScrollView>
        <FriendList />
        <View style={{ flex: 1 }}>{<RoomList />}</View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
