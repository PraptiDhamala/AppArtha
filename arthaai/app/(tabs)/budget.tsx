import React from 'react'; // Only declare this once at the top
import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

export default function BudgetScreen() {
  const insets = useSafeAreaInsets();

  return (
    <ScrollView 
      style={[styles.mainContainer, { paddingTop: insets.top }]} 
      contentContainerStyle={styles.contentContainer}
    >
      {/* Brand Header */}
      <View style={styles.topNav}>
        <ThemedText style={styles.navBrand}>Artha AI</ThemedText>
        <View style={styles.navIcons}>
           <Ionicons name="notifications-outline" size={20} color="#000080" />
           <View style={styles.avatar} />
        </View>
      </View>

      {/* Title Section */}
      <View style={styles.headerSection}>
        <View style={styles.titleRow}>
          <Ionicons name="wallet" size={24} color="black" />
          <ThemedText style={styles.pageTitle}>Budget Management</ThemedText>
        </View>
        <ThemedText style={styles.subHeaderText}>Track your spending and manage your monthly budget</ThemedText>
      </View>

      {/* Available to Spend Card */}
      <View style={styles.card}>
        <View style={styles.cardHeaderRow}>
          <ThemedText style={styles.sectionTitle}>Available to Spend</ThemedText>
          <View style={styles.dateSelector}>
            <Ionicons name="chevron-back" size={16} color="#718096" />
            <ThemedText style={styles.dateText}>April 2026</ThemedText>
            <Ionicons name="chevron-forward" size={16} color="#718096" />
          </View>
        </View>
        <ThemedText style={styles.remainingBudget}>Rs. 4813.0</ThemedText>
        <ThemedText style={styles.budgetStatusText}>Rs. 18087.00 of Rs. 22900.00 spent</ThemedText>
        
        <View style={styles.fullProgressBar}>
          <View style={[styles.progressFill, { width: '79%', backgroundColor: '#22c55e' }]} />
        </View>
        <ThemedText style={styles.percentageText}>79.0%</ThemedText>
      </View>

      {/* Money Flow Tracker Section */}
      <View style={styles.sectionHeader}>
        <ThemedText style={styles.sectionTitle}>Money Flow Tracker</ThemedText>
        <TouchableOpacity style={styles.blueAddButton}>
          <ThemedText style={styles.addButtonText}>+ Add Party</ThemedText>
        </TouchableOpacity>
      </View>

      <View style={styles.flowRow}>
        <View style={styles.flowCard}>
          <ThemedText style={styles.flowLabel}>⚠️ You Owe</ThemedText>
          <ThemedText style={[styles.flowValue, { color: '#ef4444' }]}>Rs. 2000.00</ThemedText>
        </View>
        <View style={styles.flowCard}>
          <ThemedText style={styles.flowLabel}>✅ Owed to You</ThemedText>
          <ThemedText style={[styles.flowValue, { color: '#22c55e' }]}>Rs. 20000.00</ThemedText>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainContainer: { flex: 1, backgroundColor: '#f4f7fe' },
  contentContainer: { padding: 16, paddingBottom: 40 },
  topNav: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 },
  navBrand: { fontSize: 18, fontWeight: 'bold', color: '#000080' },
  navIcons: { flexDirection: 'row', alignItems: 'center', gap: 12 },
  avatar: { width: 28, height: 28, borderRadius: 14, backgroundColor: '#000080' },
  headerSection: { marginBottom: 20 },
  titleRow: { flexDirection: 'row', alignItems: 'center', gap: 10 },
  pageTitle: { fontSize: 22, fontWeight: 'bold', color: 'black' },
  subHeaderText: { fontSize: 12, color: '#718096', marginTop: 4 },
  card: { backgroundColor: 'white', padding: 20, borderRadius: 12, marginBottom: 15, borderWidth: 1, borderColor: '#edf2f7' },
  cardHeaderRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  dateSelector: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  dateText: { fontSize: 12, color: '#718096' },
  remainingBudget: { fontSize: 28, fontWeight: 'bold', color: '#22c55e', marginVertical: 10 },
  budgetStatusText: { fontSize: 12, color: '#718096' },
  fullProgressBar: { height: 8, backgroundColor: '#edf2f7', borderRadius: 4, marginTop: 15, overflow: 'hidden' },
  progressFill: { height: '100%', borderRadius: 4 },
  percentageText: { textAlign: 'right', fontSize: 12, fontWeight: 'bold', marginTop: 5, color: 'black' },
  sectionHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15, marginTop: 10 },
  sectionTitle: { fontSize: 16, fontWeight: 'bold', color: 'black' },
  blueAddButton: { backgroundColor: '#000080', paddingHorizontal: 12, paddingVertical: 8, borderRadius: 6 },
  addButtonText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  flowRow: { flexDirection: 'row', gap: 10 },
  flowCard: { flex: 1, backgroundColor: 'white', padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#edf2f7' },
  flowLabel: { fontSize: 12, fontWeight: 'bold' },
  flowValue: { fontSize: 16, fontWeight: 'bold', marginTop: 8 },
});