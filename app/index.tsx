import { AppHeader } from '@/components/shared';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { useAppDrawer } from '@/hooks/use-app-drawer';
import { groups } from '@/libs/constants';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Modal, Pressable, ScrollView, TextInput, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import '../global.css';




export default function HomeScreen() {
  const { Drawer, openDrawer } = useAppDrawer();
  const router = useRouter();
  const [menuVisible, setMenuVisible] = useState(false);
  const [joinModalVisible, setJoinModalVisible] = useState(false);
  const [joinCode, setJoinCode] = useState('');

  const handleCreateTrip = () => {
    setMenuVisible(false);
    router.push('/trip/create');
  };

  const handleJoinTrip = () => {
    setMenuVisible(false);
    setJoinModalVisible(true);
  };

  const submitJoinTrip = () => {
    setJoinModalVisible(false);
    const code = joinCode.trim();
    setJoinCode('');
    if (code) {
      router.push(`/trip/join?code=${encodeURIComponent(code)}`);
    }
  };

  return (
    <ThemedView className="flex-1">
      <SafeAreaView className="flex-1">
        <ScrollView 
          className="flex-1" 
          contentContainerClassName="flex-grow pb-8 gap-6"
          showsVerticalScrollIndicator={false}>
          <AppHeader onMenuPress={openDrawer} />

          <View className="px-6">
            <View className="gap-1">
              <ThemedText type="subtitle">Your Trips</ThemedText>
              <ThemedText className="text-red-500">
                {groups.length} active · tap a group to view details
              </ThemedText>
            </View>

            <View className="flex flex-col gap-3">
              {groups.map((group) => (
                <Pressable
                  key={group.id}
                  className="flex-row items-center justify-between rounded-2xl bg-white p-4 shadow shadow-black/10"
                  onPress={() => router.push(`/trip/${group.id}`)}>
                  <View className="flex-1 gap-1">
                    <ThemedText type="subtitle">{group.name}</ThemedText>
                    <ThemedText className="text-gray-500">
                      {group.members.length} members · {group.destination}
                    </ThemedText>
                  </View>
                  <View className="items-end gap-1">
                    <ThemedText className="text-emerald-600 font-semibold">
                      ${group.yourShare.toFixed(2)}
                    </ThemedText>
                    <MaterialIcons name="chevron-right" size={20} color="#9CA3AF" />
                  </View>
                </Pressable>
              ))}
            </View>
          </View>
        </ScrollView>
        <Pressable
          className="absolute bottom-6 right-6 h-14 w-14 items-center justify-center rounded-full bg-sky-500 shadow shadow-black/25"
          onPress={() => setMenuVisible(true)}>
          <MaterialIcons name="add" size={28} color="#FFFFFF" />
        </Pressable>
      </SafeAreaView>
      <Modal transparent visible={menuVisible} animationType="fade" onRequestClose={() => setMenuVisible(false)}>
        <View className="flex-1 justify-end bg-black/30">
          <Pressable className="flex-1" onPress={() => setMenuVisible(false)} />
          <View className="rounded-t-3xl bg-white p-4 gap-2">
            <Pressable className="rounded-2xl bg-white p-4" onPress={handleCreateTrip}>
              <ThemedText className="text-center text-lg">New Trip ✨</ThemedText>
            </Pressable>
            <Pressable className="rounded-2xl bg-white p-4" onPress={handleJoinTrip}>
              <ThemedText className="text-center text-lg">Join with Code 🔑</ThemedText>
            </Pressable>
            <Pressable className="rounded-2xl bg-gray-100 p-4" onPress={() => setMenuVisible(false)}>
              <ThemedText className="text-center text-base">Cancel</ThemedText>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Modal transparent visible={joinModalVisible} animationType="fade" onRequestClose={() => setJoinModalVisible(false)}>
        <View className="flex-1 items-center justify-center bg-black/40 px-6">
          <View className="w-full rounded-3xl bg-white p-6 gap-4">
            <ThemedText type="subtitle">Join a trip</ThemedText>
            <TextInput
              placeholder="Enter trip code"
              value={joinCode}
              onChangeText={setJoinCode}
              className="rounded-2xl border border-gray-200 p-3"
              autoFocus
            />
            <View className="flex-row justify-end gap-3">
              <Pressable className="rounded-2xl border border-gray-200 px-4 py-2" onPress={() => setJoinModalVisible(false)}>
                <ThemedText>Cancel</ThemedText>
              </Pressable>
              <Pressable className="rounded-2xl bg-sky-500 px-4 py-2" onPress={submitJoinTrip}>
                <ThemedText className="text-white font-semibold">Join</ThemedText>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
      {Drawer}
    </ThemedView>
  );
}

