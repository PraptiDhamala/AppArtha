import { StyleSheet, View, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const { width } = Dimensions.get('window');

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

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
          <ThemedText style={styles.dashboardTitle}>Dashboard</ThemedText>
          <ThemedText style={styles.subHeaderText}>Welcome to Your Account!!</ThemedText>
        </View>
        <TouchableOpacity style={styles.addBtnSmall}>
          <ThemedText style={styles.addBtnText}>+ Add Transaction</ThemedText>
        </TouchableOpacity>
      </View>

      {/* 3. Top Balance Cards */}
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
        {/* Expenses by Category (Pie Chart Placeholder) */}
        <View style={[styles.card, { flex: 1.5 }]}>
          <ThemedText style={styles.sectionTitle}>Expenses by Category</ThemedText>
          <ThemedText style={styles.subHeaderText}>Breakdown of your spending</ThemedText>
          
          <View style={styles.pieContainer}>
             {/* Simple Placeholder for Pie Chart Circle */}
             <View style={styles.pieCirclePlaceholder}>
                <View style={[styles.pieSlice, { backgroundColor: '#1e3a8a', transform: [{ rotate: '0deg' }] }]} />
                <View style={[styles.pieSlice, { backgroundColor: '#3b82f6', transform: [{ rotate: '120deg' }] }]} />
                <View style={[styles.pieSlice, { backgroundColor: '#93c5fd', transform: [{ rotate: '240deg' }] }]} />
             </View>
          </View>
        </View>

        {/* Quick Stats */}
        <View style={[styles.card, { flex: 1 }]}>
          <ThemedText style={styles.sectionTitle}>Quick Stats</ThemedText>
          <ThemedText style={styles.subHeaderText}>This month's overview</ThemedText>
          
          <View style={styles.statLine}>
            <ThemedText style={styles.statLabel}>Net Change</ThemedText>
            <ThemedText style={styles.positive}>+1228518.00</ThemedText>
          </View>
          <View style={styles.progressBar}><View style={styles.progressFill} /></View>

          <View style={styles.statLine}>
            <ThemedText style={styles.statLabel}>Transactions</ThemedText>
            <ThemedText style={styles.statValue}>49</ThemedText>
          </View>
          <View style={styles.statLine}>
            <ThemedText style={styles.statLabel}>Avg Expense</ThemedText>
            <ThemedText style={styles.positive}>Rs. 6646.31</ThemedText>
          </View>
        </View>
      </View>

      {/* 5. Scan Receipt Banner */}
      <View style={styles.scanBanner}>
        <View style={styles.scanTextContainer}>
          <ThemedText style={styles.scanTitle}>Scan Receipt</ThemedText>
          <ThemedText style={styles.scanSub}>Upload a receipt to automatically extract details</ThemedText>
        </View>
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
        {/* Row Example */}
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
  dashboardTitle: { fontSize: 22, fontWeight: 'bold',color:'black'},
  subHeaderText: { fontSize: 12, color: '#718096' },
  addBtnSmall: { backgroundColor: '#000080', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 6 },
  addBtnText: { color: 'white', fontSize: 12, fontWeight: '600' },
  
  // Cards
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
    flex: 1,          // Grow to fill space
    minWidth: '45%',  // Ensures 2 cards per row on mobile, 1 per row on very small screens
  },
  cardLabel: { fontSize: 11, color: '#4a5568' },
  cardValue: { fontSize: 16, fontWeight: 'bold', marginVertical: 4,color:'black' },
  cardHint: { fontSize: 10, color: '#a0aec0' },
  
  // Stats Grid
statsGrid: { 
    flexDirection: 'column', // Stack them vertically on mobile
    gap: 10, 
    marginBottom: 15 
  },  sectionTitle: { fontSize: 14, fontWeight: 'bold',color:'black' },
statLine: { 
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    alignItems: 'center', // Keeps text aligned
    marginTop: 10,
    flexWrap: 'wrap'      // Prevents text from pushing each other out
  },  statLabel: { fontSize: 12, color: '#4a5568' },
  statValue: { fontSize: 12, fontWeight: 'bold',color:'black' },
  progressBar: { height: 6, backgroundColor: '#edf2f7', borderRadius: 3, marginTop: 5 },
  progressFill: { width: '70%', height: '100%', backgroundColor: '#48bb78', borderRadius: 3 },
  
  // Pie Placeholder
  pieContainer: { height: 100, alignItems: 'center', justifyContent: 'center', marginTop: 10 },
  pieCirclePlaceholder: { width: 80, height: 80, borderRadius: 40, backgroundColor: '#e2e8f0', overflow: 'hidden' },
  pieSlice: { position: 'absolute', width: 80, height: 80, left: 40 },

  // Scan Banner
  scanBanner: { backgroundColor: 'white', padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#edf2f7', marginBottom: 15 },
  scanTitle: { fontSize: 14, fontWeight: 'bold', color:'black' },
  scanSub: { fontSize: 11, color: '#718096', marginBottom: 10 },
  scanButton: { backgroundColor: '#10b981', padding: 10, borderRadius: 8, alignItems: 'center' },
  scanButtonText: { color: 'white', fontWeight: 'bold', fontSize: 13 },

  // Table
  tableContainer: { backgroundColor: 'white', padding: 15, borderRadius: 12, borderWidth: 1, borderColor: '#edf2f7' },
  tableHeader: { flexDirection: 'row', backgroundColor: '#f7fafc', padding: 8, marginTop: 10, borderRadius: 4 },
tableHeadText: { fontSize: 10, fontWeight: 'bold', color: '#718096' },  tableRow: { flexDirection: 'row', paddingVertical: 12, borderBottomWidth: 1, borderBottomColor: '#f7fafc', alignItems: 'center' },
tableCell: { fontSize: 11, color:'black' }, // Smaller font for mobile  positive: { color: '#2f855a', fontWeight: '600' },
  negative: { color: '#c53030', fontWeight: '600' },
});