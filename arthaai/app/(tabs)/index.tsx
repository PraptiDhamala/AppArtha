import React from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { PieChart } from "react-native-gifted-charts"; // Added to match Analytics

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  // Data synced from Analytics Screen
  const pieData = [
    { value: 45, color: 'navy', label: 'Food & Dining' },
    { value: 15, color: '#0ea5e9', label: 'Groceries' },
    { value: 15, color: '#3b82f6', label: 'Utilities' },
    { value: 15, color: '#0284c7', label: 'Housing' },
    { value: 10, color: '#7dd3fc', label: 'Transport' },
  ];

  const renderLegend = (text, color) => {
    return (
      <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10, marginBottom: 4 }}>
        <div style={{ height: 10, width: 10, borderRadius: 2, backgroundColor: color, marginRight: 4 }} />
        <ThemedText style={{ fontSize: 10, color: '#4b5563' }}>{text}</ThemedText>
      </View>
    );
  };

  return (
    <ScrollView 
      style={[styles.mainContainer, { paddingTop: insets.top }]} 
      contentContainerStyle={styles.contentContainer}
    >
      {/* 1. Brand Header */}
      <View style={styles.topNav}>
        <ThemedText style={styles.navBrand}>Artha AI</ThemedText>
        <View style={styles.navIcons}>
           <Ionicons name="notifications-outline" size={20} color="#000080" />
           <View style={styles.avatar} />
        </View>
      </View>

      {/* 2. Dashboard Title & Add Button */}
      <View style={styles.headerRow}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
            <Ionicons name="home" size={22} color="black" />
            <ThemedText style={styles.dashboardTitle}>Dashboard</ThemedText>
          </View>
          <ThemedText style={styles.subHeaderText}>Welcome to Your Account!!</ThemedText>
        </View>
        <TouchableOpacity style={styles.addBtnSmall}>
          <ThemedText style={styles.addBtnText}>+ Add Transaction</ThemedText>
        </TouchableOpacity>
      </View>

      {/* 3. Summary Cards Grid - Styled to match Analytics */}
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

      {/* 4. Chart & Quick Stats Section */}
      <View style={styles.statsGrid}>
      {/* Expenses by Category Card */}
<View style={[styles.card, { flex: 1, minHeight: 350 }]}> {/* Added minHeight to prevent clipping */}
  <ThemedText style={styles.sectionTitle}>Expenses by Category</ThemedText>
  <ThemedText style={styles.subHeaderText}>Breakdown of your spending</ThemedText>
  
  <View style={styles.pieWrapper}>
    <PieChart
      data={pieData}
      radius={75}
      textSize={12}
    />
    
    {/* 2. Enhanced Legend Container */}
    <View style={styles.legendWrapper}>
      {pieData.map((item, index) => (
        <View key={index} style={styles.legendRow}>
          <View style={[styles.legendDot, { backgroundColor: item.color }]} />
          <ThemedText style={styles.legendText}>{item.label}</ThemedText>
        </View>
      ))}
    </View>
  </View>
</View>

        {/* Quick Stats Card */}
        <View style={[styles.card, { flex: 1 }]}>
          <ThemedText style={styles.sectionTitle}>Quick Stats</ThemedText>
          <ThemedText style={styles.subHeaderText}>This month's overview</ThemedText>
          <View style={styles.statLine}>
            <ThemedText style={styles.statLabel}>Net Change</ThemedText>
            <ThemedText style={styles.positive}>+1228518.00</ThemedText>
          </View>
          <View style={styles.progressBar}><View style={styles.progressFill} /></View>
          <View style={styles.statLine}>
            <ThemedText style={styles.statLabel}>Total Transactions</ThemedText>
            <ThemedText style={styles.statValue}>49</ThemedText>
          </View>
          <View style={styles.statLine}>
            <ThemedText style={styles.statLabel}>Avg Expense</ThemedText>
            <ThemedText style={styles.negative}>Rs. 6646.31</ThemedText>
          </View>
        </View>
      </View>

      {/* 5. Scan Receipt Section */}
      <View style={styles.scanBanner}>
        <ThemedText style={styles.scanTitle}>Scan Receipt</ThemedText>
        <ThemedText style={styles.scanSub}>Upload a receipt to automatically extract details</ThemedText>
        <TouchableOpacity style={styles.scanButton}>
          <ThemedText style={styles.scanButtonText}>Start Receipt Scanner</ThemedText>
        </TouchableOpacity>
      </View>

      {/* 6. Recent Transactions Table */}
      <View style={styles.tableContainer}>
        <ThemedText style={styles.sectionTitle}>Recent Transactions</ThemedText>
        <View style={styles.tableHeader}>
          <ThemedText style={[styles.tableHeadText, {flex: 2}]}>Date</ThemedText>
          <ThemedText style={[styles.tableHeadText, {flex: 2}]}>Category</ThemedText>
          <ThemedText style={[styles.tableHeadText, {flex: 2}]}>Amount</ThemedText>
          <ThemedText style={[styles.tableHeadText, {flex: 1, textAlign: 'right'}]}>Action</ThemedText>
        </View>
        <View style={styles.tableRow}>
          <ThemedText style={[styles.tableCell, {flex: 2}]}>Apr 16, 2026</ThemedText>
          <ThemedText style={[styles.tableCell, {flex: 2}]}>Salary</ThemedText>
          <ThemedText style={[styles.tableCell, styles.positive, {flex: 2}]}>Rs. 100000.00</ThemedText>
          <TouchableOpacity style={{flex: 1, alignItems: 'flex-end'}}>
             <Ionicons name="trash-outline" size={16} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#f4f7fe' },
  contentContainer: { padding: 16, paddingBottom: 40 },
  topNav: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 },
  navBrand: { fontSize: 18, fontWeight: 'bold', color: '#000080' },
  navIcons: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#000080' },
  headerRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  dashboardTitle: { fontSize: 22, fontWeight: 'bold', color: 'black' },
  subHeaderText: { fontSize: 12, color: '#718096' },
  addBtnSmall: { backgroundColor: '#000080', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6 },
  addBtnText: { color: 'white', fontSize: 12, fontWeight: '600' },
  
  // Adjusted Cards to match Analytics Styling
  cardsRow: { flexDirection: 'row', flexWrap: 'wrap', gap: 10, marginBottom: 15 },
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
  cardValue: { fontSize: 16, fontWeight: 'bold', marginVertical: 4, color: 'black' },
  cardHint: { fontSize: 10, color: '#a0aec0' },
  
  statsGrid: { flexDirection: 'column', gap: 10, marginBottom: 15 },
  sectionTitle: { fontSize: 14, fontWeight: 'bold', color: 'black' },
  statLine: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 },
  statLabel: { fontSize: 12, color: '#4a5568' },
  statValue: { fontSize: 12, fontWeight: 'bold', color: 'black' },
  progressBar: { height: 6, backgroundColor: '#edf2f7', borderRadius: 3, marginTop: 5 },
  progressFill: { width: '70%', height: '100%', backgroundColor: '#48bb78', borderRadius: 3 },
  
  // Real Pie Chart Styling
pieWrapper: { 
    marginTop: 15, 
    alignItems: 'center',
    width: '100%', 
  },
  legendWrapper: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', // CRITICAL: This allows legends to move to the next line instead of hiding
    justifyContent: 'center', 
    marginTop: 20, 
    gap: 12,
    width: '100%',
    paddingBottom: 10 // Ensures space at the bottom of the card
  },
  legendRow: { 
    flexDirection: 'row', 
    alignItems: 'center',
  },
  legendDot: { 
    height: 10, 
    width: 10, 
    borderRadius: 2, 
    marginRight: 6 
  },
  legendText: { 
    fontSize: 10, 
    color: '#4b5563', 
    fontWeight: '500' 
  },
  scanBanner: { backgroundColor: 'white', padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#edf2f7', marginBottom: 15 },
  scanTitle: { fontSize: 14, fontWeight: 'bold', color: 'black' },
  scanSub: { fontSize: 11, color: '#718096', marginBottom: 10 },
  scanButton: { backgroundColor: '#10b981', padding: 12, borderRadius: 8, alignItems: 'center' },
  scanButtonText: { color: 'white', fontWeight: 'bold', fontSize: 13 },

  tableContainer: { backgroundColor: 'white', padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#edf2f7' },
  tableHeader: { flexDirection: 'row', backgroundColor: '#f7fafc', padding: 8, marginTop: 10, borderRadius: 4 },
  tableHeadText: { fontSize: 10, fontWeight: 'bold', color: '#718096' },
  tableRow: { flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f7fafc', alignItems: 'center' },
  tableCell: { fontSize: 11, color: 'black' },
  positive: { color: '#22c55e', fontWeight: '600' },
  negative: { color: '#c53030', fontWeight: '600' },
});