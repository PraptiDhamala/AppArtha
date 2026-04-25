import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { Ionicons } from '@expo/vector-icons'; // Added for the stats-chart icon

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        // Using Navy Blue for active tab to match your dashboard
        tabBarActiveTintColor: '#000080', 
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: 'white',
          },
          default: {
            backgroundColor: 'white',
          },
        }),
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="home" color={color} />,
        }}
      />
      
      {/* ADDED ANALYTICS TAB */}
      <Tabs.Screen
        name="analytics"
        options={{
          title: 'Analytics',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="stats-chart" color={color} />,
        }}
      />

      {/* ADDED budget TAB */}
      <Tabs.Screen
        name="budget"
        options={{
          title: 'Budget',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="wallet" color={color} />,
        }}
      />
      <Tabs.Screen
        name="utilities"
        options={{
          title: 'Utilities',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="construct" color={color} />,
        }}
      />
        <Tabs.Screen
        name="review"
        options={{
          title: 'Review',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="document-text" color={color} />,
        }}
      />
      <Tabs.Screen
        name="goal"
        options={{
          title: 'Goal',
          tabBarIcon: ({ color }) => <Ionicons size={24} name="compass-outline" color={color} />,
        }}
      />
    </Tabs>
    
  );
}
//Funnel,compass-outline