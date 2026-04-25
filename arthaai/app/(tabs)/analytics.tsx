import React, { useState } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { BarChart, PieChart } from "react-native-gifted-charts";
import { Ionicons } from '@expo/vector-icons'; // Used for the bottom tab/header icon
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export default function AnalyticsScreen() {
  const insets = useSafeAreaInsets();
  const [activeTab, setActiveTab] = useState('Overview');

  // Updated Bar Data to reflect "Income vs Expense" grouped pairs
  const barData = [
    { value: 0, label: '2026-01-15', spacing: 2, frontColor: '#000080' }, // Income
    { value: 0, frontColor: '#b91c1c' }, // Expense
    
    { value: 200000, label: '2026-02-03', spacing: 2, frontColor: '#000080' },
    { value: 0, frontColor: '#b91c1c' },
    
    { value: 50000, label: '2026-02-10', spacing: 2, frontColor: '#000080' },
    { value: 110000, frontColor: '#b91c1c' },
    
    { value: 0, label: '2026-02-11', spacing: 2, frontColor: '#000080' },
    { value: 0, frontColor: '#b91c1c' },
    
    { value: 1000000, label: '2026-02-17', spacing: 2, frontColor: '#000080' },
    { value: 0, frontColor: '#b91c1c' },
  ];

  // Updated Pie Data (Solid sections, no donut)
  const pieData = [
    { value: 45, color: '#000080', label: 'Food & Dining' },
    { value: 15, color: '#0ea5e9', label: 'Groceries' },
    { value: 15, color: '#854d0e', label: 'Utilities' },
    { value: 15, color: '#064e3b', label: 'Housing' },
    { value: 10, color: '#450a0a', label: 'Transport' },
  ];

  const renderLegend = (text, color) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
        <View style={{ height: 10, width: 10, borderRadius: 2, backgroundColor: color, marginRight: 4 }} />
        <ThemedText style={{ fontSize: 10, color: '#4b5563' }}>{text}</ThemedText>
      </View>
    );
  };

  return (
    <ScrollView style={[styles.container, { paddingTop: insets.top }]} contentContainerStyle={styles.content}>
          <View style={styles.topNav}>
              <ThemedText style={styles.navBrand}>Artha AI</ThemedText>
              <View style={styles.navIcons}>
                 <Ionicons name="notifications-outline" size={20} color="#000080" />
                 <View style={styles.avatar} />
              </View>
            </View>
      {/* Header */}
      <View style={styles.header}>
        {/* Changed Icon from generic to 'bar-chart' or 'stats-chart' to match analytics vibes */}
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
            <Ionicons name="stats-chart" size={24} color="#111827" />
            <ThemedText style={styles.title}>Analytics</ThemedText>
        </View>
        <ThemedText style={styles.subtitle}>Detailed insights into your financial habits</ThemedText>
      </View>

      {/* ... Summary Cards Grid (kept same as your provided code) ... */}
        <View style={styles.cardsRow}>
          <View style={styles.card}>
            <ThemedText style={styles.cardLabel}>Total Balance</ThemedText>
            <ThemedText style={styles.cardValue}>Rs. 1228518.00</ThemedText>
            <ThemedText style={styles.cardHint}>Safe spending</ThemedText>
          </View>
          <View style={styles.card}>
            <ThemedText style={styles.cardLabel}>Monthly Income</ThemedText>
            <ThemedText style={[styles.cardValue, styles.positive]}>Rs. 1467785.00</ThemedText>
            <ThemedText style={styles.cardHint}>Current Total</ThemedText>
          </View>
           <View style={styles.card}>
            <ThemedText style={styles.cardLabel}>Monthly Expenses</ThemedText>
            <ThemedText style={[styles.cardValue, styles.negative]}>Rs. 147785.00</ThemedText>
            <ThemedText style={styles.cardHint}>Current Total</ThemedText>
          </View>
        </View>

      <View style={styles.tabBar}>
        {['Overview', 'Trends', 'Categories'].map((tab) => (
          <TouchableOpacity 
            key={tab} 
            onPress={() => setActiveTab(tab)}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
          >
            <ThemedText style={[styles.tabText, activeTab === tab && styles.activeTabText]}>
              {tab}
            </ThemedText>
          </TouchableOpacity>
        ))}
      </View>

      {/* Updated Income vs Expenses Bar Chart */}
      <View style={styles.chartCard}>
        <ThemedText style={styles.sectionTitle}>Income vs Expenses</ThemedText>
        <ThemedText style={styles.cardSub}>Daily Comparison</ThemedText>
        
        <View style={styles.chartWrapper}>
          <BarChart
            data={barData}
            barWidth={30}
            spacing={15}
            noOfSections={5}
            barBorderRadius={2}
            dashGap={0}
            xAxisThickness={1}
            yAxisThickness={0}
            yAxisTextStyle={{color: 'gray', fontSize: 10}}
            xAxisLabelTextStyle={{fontSize: 8, color: 'gray'}}
            hideRules
            // Match the 1,000,000 scale from screenshot 1
            maxValue={1000000}
            stepValue={200000}
          />
          <View style={styles.legendRow}>
            {renderLegend('Income', '#000080')}
            {renderLegend('Expense', '#b91c1c')}
          </View>
        </View>
      </View>

      {/* Updated Expenses by Category Pie Chart */}
      <View style={styles.chartCard}>
        <ThemedText style={styles.sectionTitle}>Expenses by Category</ThemedText>
        <View style={styles.pieWrapper}>
           <PieChart
            data={pieData}
            radius={100}
            // Removed 'donut' prop to make it a solid pie chart
            textSize={12}
          />
          <View style={[styles.legendRow, { marginTop: 20, flexWrap: 'wrap', justifyContent: 'center' }]}>
            {pieData.map((item, index) => renderLegend(item.label, item.color))}
          </View>
        </View>
      </View>

    </ScrollView>
  );
}

// Styles remain largely the same, added legendRow
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f4f7fe' },
  content: { padding: 20 },
  header: { marginBottom: 20 },
  title: { fontSize: 22, fontWeight: 'bold',color:'black' },
  subtitle: { fontSize: 14, color: '#6b7280' },
  grid: { flexDirection: 'row', gap: 12, marginBottom: 20 },
cardsRow: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', // Allow cards to move to the next line
    gap: 10, 
    marginBottom: 15 
  },
  card: { 
    backgroundColor: 'white', 
    padding: 15, 
    borderRadius: 12, 
    borderWidth: 1, 
    borderColor: '#edf2f7',
    flex: 1,        
    minWidth: '45%',  
  },
  cardLabel: { fontSize: 11, color: '#4a5568' },
  cardValue: { fontSize: 16, fontWeight: 'bold', marginVertical: 4,color:'black' },
  cardHint: { fontSize: 10, color: '#a0aec0' },
  negative: { color: '#c53030', fontWeight: '600' },
  positive: { 
  color: '#22c55e', // Use a standard emerald green
  fontWeight: '600' 
},
  topNav: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
navBrand: { fontSize: 18, fontWeight: 'bold', color: '#000080' },
  navIcons: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#000080' },
  tabBar: { flexDirection: 'row', backgroundColor: '#d1d5db', borderRadius: 12, padding: 4, marginBottom: 20 },
  tab: { flex: 1, paddingVertical: 8, alignItems: 'center', borderRadius: 8 },
  activeTab: { backgroundColor: '#fff' },
  tabText: { fontSize: 13, color: '#4b5563', fontWeight: '600' },
  activeTabText: { color: '#111827' },
  chartCard: { backgroundColor: '#fff', padding: 20, borderRadius: 16, marginBottom: 20, borderWidth: 1, borderColor: '#e5e7eb' },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: '#111827' },
  cardSub: { fontSize: 10, color: '#9ca3af' },
  chartWrapper: { marginTop: 20, alignItems: 'center' },
  pieWrapper: { marginTop: 20, alignItems: 'center' },
  legendRow: { flexDirection: 'row', marginTop: 15, justifyContent: 'center' }
});