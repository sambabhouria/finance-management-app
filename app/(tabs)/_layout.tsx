import Colors from '@/constants/Colors'
import { AntDesign, FontAwesome, Ionicons, SimpleLineIcons } from '@expo/vector-icons'
import { Tabs } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { View } from 'react-native'

const Layout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarStyle: {
            backgroundColor: Colors.grey,
            position: 'absolute',
            bottom: 40,
            justifyContent: 'center',
            alignSelf: 'center',
            height: 63,
            marginHorizontal: 90,
            paddingHorizontal: 10,
            paddingVertical: 8,
            paddingBottom: 8,
            paddingTop: 10,
            borderRadius: 40,
            borderWidth: 1,
            borderTopWidth: 1,
            borderColor: '#333',
            borderTopColor: '#333',
          },
          tabBarShowLabel: false,
          tabBarInactiveTintColor: '#999',
          tabBarActiveTintColor: Colors.white,
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  // padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <SimpleLineIcons name="pie-chart" size={22} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="transactions"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  // padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <AntDesign name="swap" size={22} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="search"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  // padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <Ionicons name="search-outline" size={22} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  // padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <FontAwesome name="user-o" size={22} color={color} />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="settings"
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <View
                style={{
                  // padding: 12,
                  borderRadius: 30,
                  backgroundColor: focused ? Colors.tintColor : Colors.grey,
                }}
              >
                <Ionicons name="settings-outline" size={22} color={color} />
              </View>
            ),
          }}
        />
      </Tabs>
      <StatusBar style="light" />
    </>
  )
}

export default Layout
